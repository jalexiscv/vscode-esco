# Glosario de adaptación es-CO

**Fecha:** 2026-10-15
**Área:** glosario

## Descripción

Adaptación del español base al uso de Colombia mediante un glosario declarativo
aplicado por script, en lugar de editar las traducciones a mano. Tratamiento de
usted, vocabulario colombiano y nombres de teclas usados en Colombia.

## Tipo de Cambio

- `Agregado`
- `Corregido` (vínculos `comando:`)

## Archivos Afectados

### [NUEVO] `glosario/glosario.json`
- 26 reglas generales (vocabulario, teclas, corrección de vínculos) y 24 cadenas
  reescritas a mano (tú → usted).

### [NUEVO] `scripts/aplicar-glosario.js`
- Aplica las reglas y las cadenas; idempotente; conserva el formato de los JSON.
  Opción `--revisar` para ver los cambios sin escribir.

### [NUEVO] `glosario/README.md`
- Criterios, tabla de términos, términos que se mantienen y cómo agregar reglas.

### [MODIFICADO] `translations/` (6 archivos)
- 176 cadenas cambiadas.

### [MODIFICADO] `package.json`
- Scripts `glosario` y `glosario:revisar`.

## Impacto

| Antes | Después |
|-------|---------|
| fichero, ratón, vídeo, ficha | archivo, mouse, video, pestaña |
| Pulse Intro / Entrar | Presione Enter |
| Ctrl+Mayús+P | Ctrl+Shift+P |
| Te damos la bienvenida | Le damos la bienvenida |
| `(comando:…)` (vínculo roto) | `(command:…)` |

- No se modificaron el verbo "entrar" ni el comando de depuración "Entrar" (Step Into).
