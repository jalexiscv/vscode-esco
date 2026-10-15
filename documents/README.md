# VSCode-EsCo — Documentación Interna

Paquete de idioma de Visual Studio Code para el español de Colombia (`es-CO`). Parte
de las traducciones al español de [microsoft/vscode-loc](https://github.com/microsoft/vscode-loc)
(versión 1.131.0) y las adapta al uso colombiano mediante un glosario aplicado por
script. Este directorio contiene la documentación interna de trabajo, en español.
La página pública de la extensión es el [README.md](../README.md) de la raíz.

## Visión general

| Pieza | Ubicación | Rol |
|-------|-----------|-----|
| Cadenas del paquete | [translations/](../translations/) | Lo que VS Code muestra; se modifican solo vía glosario |
| Glosario | [glosario/](../glosario/) | Fuente de verdad de la adaptación: reglas, cadenas reescritas y traducciones |
| Script | [scripts/aplicar-glosario.js](../scripts/aplicar-glosario.js) | Aplica el glosario (`npm run glosario`) |
| Manifiesto | [package.json](../package.json) | Identidad de la extensión (`languageId: es-co`) |

## Documentación

| Documento | Descripción |
|-----------|-------------|
| [glosario/README.md](../glosario/README.md) | Criterios de adaptación es-CO, reglas, terminología y cómo agregar términos |

## Protocolos

| Protocolo | Descripción |
|-----------|-------------|
| [Documentations.md](Protocols/Documentations.md) | Política general de documentación del proyecto |
| [Changelogs.md](Protocols/Changelogs.md) | Protocolo del historial de cambios |
| [Conventions.md](Protocols/Conventions.md) | Lineamientos de traducción es-CO, integridad de cadenas y código de scripts |
| [Git.md](Protocols/Git.md) | Protocolo de control de versiones (ramas, commits, PR) |

## Historial de Cambios

El índice de cambios del proyecto está en [Changelogs/CHANGELOG.md](Changelogs/CHANGELOG.md).
