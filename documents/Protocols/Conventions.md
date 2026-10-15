# Convenciones del Proyecto

Este documento establece las convenciones de contenido y de código del proyecto
**VSCode-EsCo**, un paquete de idioma (*language pack*) de Visual Studio Code para
el español de Colombia (`es-CO`). Su objetivo es que las traducciones y las
herramientas sean uniformes y predecibles, independientemente de quién (o qué
agente de IA) las modifique.

> **Principio rector:** el paquete no tiene código compilado. Su contenido son las
> cadenas de `translations/`, y la fuente de verdad de la adaptación es
> `glosario/`. Los archivos de `translations/` **no se editan a mano**: se
> modifican agregando reglas o cadenas al glosario y ejecutando el script.

## 1. Estructura del Proyecto

| Ruta                          | Contenido                                                        |
|-------------------------------|------------------------------------------------------------------|
| `package.json`                | Manifiesto de la extensión (`contributes.localizations`, `languageId: es-co`) |
| `translations/main.i18n.json` | Cadenas del núcleo de VS Code                                    |
| `translations/extensions/`    | Cadenas de las extensiones integradas (un archivo por extensión) |
| `glosario/glosario.json`      | Reglas generales de adaptación y cadenas reescritas a mano       |
| `glosario/traducciones.json`  | Traducciones de cadenas que la base dejó en inglés               |
| `glosario/README.md`          | Criterios y terminología del glosario (para personas)            |
| `scripts/aplicar-glosario.js` | Aplica el glosario a `translations/` (idempotente)               |
| `documents/`                  | Documentación interna, protocolos e historial de cambios         |

## 2. Lineamientos de Traducción (es-CO)

*   **Tratamiento de usted**, nunca de tú: "Seleccione", "¿Desea…?", "su cuenta".
*   **Vocabulario de Colombia**: archivo (no fichero), mouse (no ratón), video (sin
    tilde), presionar (no pulsar), celular. Teclas: **Shift**, **Enter**, **Tab**,
    Ctrl, Alt, Esc.
*   **Terminología**: la tabla vigente está en [glosario/README.md](../../glosario/README.md)
    (indicación, aptitud, enlace, árbol de trabajo, confirmación, espacio aislado,
    harness, etc.). Antes de introducir un término nuevo, buscar cómo lo traduce ya
    el paquete y seguir el uso mayoritario.
*   **Estilo de VS Code en español**: comandos y botones en infinitivo ("Abrir
    archivo"); mayúscula solo en la primera palabra, salvo nombres propios.
*   **Nombres de producto sin traducir**: VS Code, GitHub, Copilot, Claude, Codex,
    MCP, Dev Container, Markdown, TypeScript.

## 3. Integridad de las Cadenas

Toda cadena modificada debe conservar, idénticos y en la misma cantidad:

*   Marcadores de posición: `{0}`, `{name}`, `${variable}`.
*   El mnemónico de menú `&&`, una sola vez y delante de una letra de la palabra traducida.
*   Código entre comillas invertidas (`` `código` ``), identificadores de
    configuración `#editor.algo#` y valores literales entre comillas (`"auto"`).
*   Destinos de vínculos Markdown `](...)`, incluidos los esquemas `command:`
    (**nunca** se traducen: `comando:` rompe el vínculo). El texto del vínculo y su
    título sí se traducen.
*   Marcadores `[[...]]`: se conservan los corchetes y se traduce su contenido.
*   Saltos de línea y espacios iniciales o finales.

Las claves JSON y los nombres de módulo nunca se modifican.

## 4. Cómo Cambiar una Traducción

1.  **Término general** (aparece en muchas cadenas): agregar una regla a `reglas`
    de `glosario/glosario.json`, con `buscar`, `reemplazar` y `nota`.
2.  **Cadena puntual**: agregar una entrada a `cadenas` (en `glosario.json`, o en
    `traducciones.json` si viene del inglés), con `archivo`, `modulo`, `clave`,
    `original` y `nuevo`.
3.  Ejecutar `npm run glosario:revisar` y verificar los conteos.
4.  Ejecutar `npm run glosario` y revisar el resultado con `git diff --word-diff`.
5.  Documentar el término o criterio en `glosario/README.md` si es nuevo.

## 5. Código de los Scripts

*   **Node.js** (CommonJS, sin dependencias externas), ejecutable con `node`.
*   Indentación con **tabs**; **comillas dobles**; punto y coma obligatorio.
*   **Identificadores y comentarios en español**, como en `scripts/aplicar-glosario.js`.
*   Los scripts que escriben en `translations/` deben ser **idempotentes** y
    conservar el formato de los archivos: indentación con tabs, fin de línea
    original y orden de claves.
*   Escribe código que **lea como el código que lo rodea**: respeta la densidad de
    comentarios, los nombres y los modismos existentes. Comenta el *por qué*, no el *qué*.

## 6. Verificación

Un cambio no está terminado hasta que:

*   `npm run glosario:revisar` reporta **0 cadenas por cambiar** (el glosario ya
    está aplicado) y no muestra avisos.
*   Todos los archivos de `translations/` son JSON válido.
*   Las cadenas modificadas conservan sus marcadores (sección 3).
*   Si cambió `package.json`, cada ruta de `contributes.localizations[0].translations`
    existe.
*   Para publicar: `npx @vscode/vsce package` genera el `.vsix` sin errores y el
    paquete se probó instalado ("Configure Display Language" → español (Colombia)).

## 7. Relación con otros protocolos

*   Todo cambio debe registrarse según [Changelogs.md](Changelogs.md).
*   La documentación asociada sigue [Documentations.md](Documentations.md).
*   El flujo de ramas y commits sigue [Git.md](Git.md).
