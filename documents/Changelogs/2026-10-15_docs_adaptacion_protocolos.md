# Adaptación de los protocolos al proyecto

**Fecha:** 2026-10-15
**Área:** protocolos

## Descripción

Los protocolos de `documents/Protocols/` se copiaron de otro proyecto (VSCode-Sftp,
extensión TypeScript con `src/`, Jest y un upstream), por lo que no aplicaban a un
paquete de idioma y Claude no los seguía. Se reescribieron para VSCode-EsCo y se
agregó `CLAUDE.md`, que Claude Code carga en cada sesión, para que los aplique.

## Tipo de Cambio

- `Cambiado`
- `Agregado` (`CLAUDE.md`)

## Archivos Afectados

### [MODIFICADO] `documents/Protocols/Conventions.md`
- Pasa de convenciones de TypeScript a: lineamientos de traducción es-CO,
  integridad de cadenas, flujo "glosario → script → translations", estilo de los
  scripts y criterios de verificación.

### [MODIFICADO] `documents/Protocols/Changelogs.md`
- Áreas propias (`traducciones`, `glosario`, `scripts`, `paquete`, `docs`,
  `protocolos`) y relación entre el historial interno y el `CHANGELOG.md` público.

### [MODIFICADO] `documents/Protocols/Documentations.md`
- Estructura del proyecto; `glosario/README.md` como fuente de la terminología.

### [MODIFICADO] `documents/Protocols/Git.md`
- Repositorio propio sin upstream; glosario y su aplicación en el mismo commit.

### [MODIFICADO] `documents/README.md`, `.claude/commands/protocols.md`
- Índice y comando adaptados al proyecto.

### [NUEVO] `CLAUDE.md`
- Obliga a leer y aplicar `documents/Protocols/` y resume las reglas clave.

### [MODIFICADO] `.vscodeignore`, `.gitignore`
- `documents/`, `CLAUDE.md` y `.claude/` fuera del `.vsix`;
  `.claude/settings.local.json` fuera de git.

### [ELIMINADO] Material de VSCode-Sftp en `documents/`
- 3 documentos (`01-`…`03-` sobre FTP/SFTP), `Test.md` vacío y 80 entradas de
  changelog de ese proyecto. Eran copia exacta de
  `C:\xampp\htdocs\VSCode-Sftp\documents` (verificado con `diff -rq`), donde se
  conservan.

### [MODIFICADO] `.claude/settings.json`, `.claude/settings.local.json`
- Se retiraron los permisos de proyectos PHP/MySQL. `settings.json` conserva
  `language: spanish` y `git push`; `settings.local.json` queda vacío. Este último
  contenía una contraseña de MySQL en texto plano, que ya no está en el archivo.

## Impacto

- Sin efecto en lo publicado; cambia cómo se trabaja en el proyecto.
