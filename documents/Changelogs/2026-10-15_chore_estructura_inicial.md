# Estructura inicial del paquete es-CO

**Fecha:** 2026-10-15
**Área:** paquete

## Descripción

Creación del proyecto a partir del paquete español 1.131.0 de
[microsoft/vscode-loc](https://github.com/microsoft/vscode-loc). Se convirtió en un
repositorio propio, sin vínculo con el de Microsoft, con la extensión en la raíz.

## Tipo de Cambio

- `Agregado`

## Archivos Afectados

### [NUEVO] `package.json`
- Identidad propia: `vscode-language-pack-es-co`, `languageId: es-co`,
  `localizedLanguageName: español (Colombia)`. `publisher` queda como `PENDIENTE`.
- Se quitó el script `update`, que dependía del repositorio de Microsoft.

### [NUEVO] `translations/`
- Copia sin modificar de las traducciones del paquete español (`main.i18n.json` y
  94 extensiones). El primer commit (`f0479ea`) conserva esta base para comparar.

### [NUEVO] `README.md`, `CHANGELOG.md`, `.gitignore`, `.vscodeignore`
- Archivos propios del proyecto. `LICENSE.md` (MIT, Microsoft) se conserva porque
  la licencia exige mantener el aviso al redistribuir.

### [ELIMINADO] Resto del repositorio de Microsoft
- Los otros 13 idiomas, el pipeline de Azure (`build/`), `.github/`, `media/`,
  `SECURITY.md` y un `.zip` antiguo del paquete 1.38.3.

## Impacto

- VS Code ofrece "español (Colombia)" en **Configure Display Language** una vez
  instalada la extensión.
