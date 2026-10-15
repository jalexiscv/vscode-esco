# VSCode-EsCo

Paquete de idioma de Visual Studio Code para el **español de Colombia** (`es-CO`).
Repositorio propio, sin vínculo con `microsoft/vscode-loc` (del que partió la base
1.131.0). Publicado en https://github.com/jalexiscv/vscode-esco.

## Protocolos obligatorios

Antes de hacer cualquier cambio en este proyecto, **lea y aplique todos los
protocolos de `documents/Protocols/`** (tome la lista de la carpeta, no asuma una
fija). Hoy son:

- [Conventions.md](documents/Protocols/Conventions.md): lineamientos de traducción
  es-CO, integridad de cadenas, código de los scripts y verificación.
- [Changelogs.md](documents/Protocols/Changelogs.md): todo cambio se documenta en
  `documents/Changelogs/` (archivo detallado + índice) al momento de hacerlo.
- [Documentations.md](documents/Protocols/Documentations.md): dónde y cómo se
  documenta; índice en `documents/README.md`.
- [Git.md](documents/Protocols/Git.md): ramas, commits y PR.

Antes de reportar una tarea como terminada, verifique que cumplió cada protocolo
y diga explícitamente cuál aplicó y cuál no aplicaba.

## Reglas que más se olvidan

- **No editar `translations/` a mano.** Los cambios se hacen en `glosario/`
  (`glosario.json` o `traducciones.json`) y se aplican con `npm run glosario`.
- **Tratamiento de usted** y vocabulario de Colombia (archivo, mouse, video,
  presionar; teclas Shift, Enter, Tab). Terminología en `glosario/README.md`.
- **Conservar marcadores**: `{0}`, `&&`, `` `código` ``, `#config#`, destinos
  `](...)` y `command:`.
- **Registrar el cambio** en `documents/Changelogs/` y, si afecta lo publicado, en
  el `CHANGELOG.md` raíz.
- **Commits** solo cuando el usuario lo pida, en una rama `tipo/descripcion`, con
  mensaje `tipo(área): resumen en imperativo`.

## Comandos

```bash
npm run glosario:revisar   # qué cambiaría el glosario (debe dar 0 si ya está aplicado)
npm run glosario           # aplica glosario/ a translations/
npx @vscode/vsce package   # genera el .vsix
```
