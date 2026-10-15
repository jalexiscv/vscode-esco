#!/usr/bin/env node
// Aplica glosario/glosario.json a los archivos de translations/.
//
//   node scripts/aplicar-glosario.js            aplica los cambios
//   node scripts/aplicar-glosario.js --revisar  solo informa, no escribe
//
// Es idempotente: se puede ejecutar varias veces sobre el mismo árbol.

const fs = require("fs");
const path = require("path");

const raiz = path.resolve(__dirname, "..");
const dirTraducciones = path.join(raiz, "translations");
const glosario = JSON.parse(fs.readFileSync(path.join(raiz, "glosario", "glosario.json"), "utf8"));
const soloRevisar = process.argv.includes("--revisar");

const LETRA = "[\\p{L}\\p{N}_]";

function compilarRegla(regla) {
	let fuente = regla.buscar;
	if (regla.palabra !== false) {
		fuente = `(?<!${LETRA})(?:${fuente})(?!${LETRA})`;
	}
	const flags = "gu" + (regla.distinguirMayusculas ? "" : "i");
	return {
		...regla,
		re: new RegExp(fuente, flags),
		excluir: regla.excluirSi ? new RegExp(regla.excluirSi, "iu") : null,
		usos: 0,
	};
}

// Copia el patrón de mayúsculas de la coincidencia al reemplazo:
// "PULSE" -> "PRESIONE", "Pulse" -> "Presione", "pulse" -> "presione".
function adaptarMayusculas(coincidencia, reemplazo) {
	const letras = coincidencia.replace(/[^\p{L}]/gu, "");
	if (letras.length > 1 && letras === letras.toUpperCase()) {
		return reemplazo.toUpperCase();
	}
	const primera = letras.charAt(0);
	if (primera && primera === primera.toUpperCase()) {
		return reemplazo.charAt(0).toUpperCase() + reemplazo.slice(1);
	}
	return reemplazo.charAt(0).toLowerCase() + reemplazo.slice(1);
}

const reglas = glosario.reglas.map(compilarRegla);

function aplicarReglas(texto) {
	let resultado = texto;
	for (const regla of reglas) {
		if (regla.excluir && regla.excluir.test(resultado)) {
			continue;
		}
		resultado = resultado.replace(regla.re, (...args) => {
			regla.usos++;
			const coincidencia = args[0];
			const grupos = args.slice(1, -2);
			const reemplazo = regla.reemplazar.replace(/\$(\d)/g, (_, n) => grupos[n - 1] ?? "");
			return regla.mantenerMayusculas === false ? reemplazo : adaptarMayusculas(coincidencia, reemplazo);
		});
	}
	return resultado;
}

// Cadenas reescritas a mano y cadenas que la base dejó en inglés,
// indexadas por archivo + módulo + clave.
const rutaTraducciones = path.join(raiz, "glosario", "traducciones.json");
const traducciones = fs.existsSync(rutaTraducciones)
	? JSON.parse(fs.readFileSync(rutaTraducciones, "utf8")).cadenas
	: [];
const cadenas = new Map();
for (const c of [...glosario.cadenas, ...traducciones]) {
	cadenas.set(`${c.archivo}\u0000${c.modulo}\u0000${c.clave}`, { ...c, aplicada: false });
}

const archivos = [
	"main.i18n.json",
	...fs.readdirSync(path.join(dirTraducciones, "extensions")).sort().map(f => `extensions/${f}`),
];

let totalCambios = 0;
const avisos = [];

for (const archivo of archivos) {
	const ruta = path.join(dirTraducciones, archivo);
	const original = fs.readFileSync(ruta, "utf8");
	const json = JSON.parse(original);
	let cambiosArchivo = 0;

	for (const [modulo, entradas] of Object.entries(json.contents)) {
		for (const [clave, valor] of Object.entries(entradas)) {
			if (typeof valor !== "string") {
				continue;
			}
			let nuevo;
			const manual = cadenas.get(`${archivo}\u0000${modulo}\u0000${clave}`);
			if (manual) {
				manual.aplicada = true;
				const final = aplicarReglas(manual.nuevo);
				if (valor === manual.original || valor === manual.nuevo || valor === final) {
					nuevo = final;
				} else {
					avisos.push(`El texto base cambió, revise a mano: ${archivo} › ${modulo} › ${clave}`);
					nuevo = aplicarReglas(valor);
				}
			} else {
				nuevo = aplicarReglas(valor);
			}
			if (nuevo !== valor) {
				entradas[clave] = nuevo;
				cambiosArchivo++;
			}
		}
	}

	if (cambiosArchivo > 0) {
		totalCambios += cambiosArchivo;
		console.log(`${String(cambiosArchivo).padStart(5)}  ${archivo}`);
		if (!soloRevisar) {
			let salida = JSON.stringify(json, null, "\t");
			if (original.includes("\r\n")) {
				salida = salida.replace(/\n/g, "\r\n");
			}
			if (/\r?\n$/.test(original)) {
				salida += original.includes("\r\n") ? "\r\n" : "\n";
			}
			fs.writeFileSync(ruta, salida, "utf8");
		}
	}
}

for (const c of cadenas.values()) {
	if (!c.aplicada) {
		avisos.push(`Cadena no encontrada: ${c.archivo} › ${c.modulo} › ${c.clave}`);
	}
}

console.log(`\n${totalCambios} cadenas ${soloRevisar ? "por cambiar" : "cambiadas"}.\n\nUso de reglas:`);
for (const r of reglas) {
	console.log(`${String(r.usos).padStart(5)}  ${r.buscar} → ${r.reemplazar}`);
}
if (avisos.length) {
	console.log("\nAvisos:");
	for (const a of avisos) {
		console.log("  - " + a);
	}
	process.exitCode = 1;
}
