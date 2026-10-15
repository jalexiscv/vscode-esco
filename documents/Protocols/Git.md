# Protocolo de Control de Versiones (Git)

Este documento establece cómo gestionar ramas, commits y revisiones en el proyecto
**VSCode-EsCo**. Su objetivo es un historial limpio, atómico y trazable.

## 0. Contexto del Repositorio

*   Repositorio **propio e independiente**, publicado en
    [jalexiscv/vscode-esco](https://github.com/jalexiscv/vscode-esco). **No tiene
    vínculo con [microsoft/vscode-loc](https://github.com/microsoft/vscode-loc)**:
    las traducciones partieron de su paquete español 1.131.0, pero no se configura
    ese repositorio como remoto ni se traen cambios con `git pull`.
*   La **rama principal es `main`** y es la única rama de larga vida.
*   El primer commit contiene la base sin modificar del paquete español; sirve de
    referencia para comparar la adaptación (`git diff <commit-base> -- translations/`).

## 1. Ramas

*   **No trabajar directamente sobre `main`.** Una rama por cambio, que se integra
    a `main` con merge `--no-ff` y se **elimina** después de integrarse (local y
    remoto): solo `main` permanece.
*   Nomenclatura: `tipo/descripcion-breve`.
    *   `feat/glosario-teclas`
    *   `fix/marcadores-markdown`
    *   `docs/protocolos-proyecto`
    *   `chore/base-1-132`, `release/1-131-1` según corresponda.

## 2. Commits

*   **Atómicos**: un commit = un cambio lógico coherente. En particular, un cambio
    de glosario y su aplicación a `translations/` van **en el mismo commit**, para
    que el commit sea reproducible con `npm run glosario`.
*   **Formato del mensaje** (basado en Conventional Commits):

    ```
    tipo(área): resumen en imperativo y minúscula

    Cuerpo opcional explicando el porqué del cambio, no el qué.
    ```

    El **área** (scope) es la misma de [Changelogs.md](Changelogs.md):
    `traducciones`, `glosario`, `scripts`, `paquete`, `docs`, `protocolos`. Si el
    cambio es transversal, puede omitirse.

    Ejemplo:
    ```
    feat(glosario): adaptar nombres de teclas al uso de Colombia
    ```
*   **Tipos**: `feat`, `fix`, `docs`, `refactor`, `chore`, `release`, `security`.
*   Mensaje en **imperativo** ("agrega", "corrige"), no en pasado, y en español.

## 3. Qué NO se commitea

*   Paquetes generados `*.vsix` ni `node_modules/` (cubiertos por `.gitignore`).
*   `.claude/settings.local.json`: es configuración personal de cada equipo.
*   Secretos o credenciales de cualquier tipo (por ejemplo, el token de publicación
    del Marketplace).
*   Archivos temporales de trabajo (inventarios, lotes de traducción intermedios).

## 4. Revisión (Pull Requests)

*   Todo cambio no trivial entra por **PR** contra `main`, no por push directo.
*   La descripción del PR resume el qué y el porqué, y enlaza la entrada de
    changelog correspondiente en `documents/Changelogs/`.
*   No hacer merge si `npm run glosario:revisar` reporta cambios pendientes o
    avisos, o si algún archivo de `translations/` no es JSON válido (ver
    [Conventions.md](Conventions.md), sección 6).

## 5. Relación con otros protocolos

*   Cada cambio debe llevar su entrada según [Changelogs.md](Changelogs.md), en el
    mismo PR o commit.
*   Las traducciones y el código siguen [Conventions.md](Conventions.md), y la
    documentación sigue [Documentations.md](Documentations.md).
