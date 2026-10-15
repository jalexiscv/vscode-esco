# Estrategia de Documentación del Proyecto

Este documento define las políticas y directrices para la documentación continua
del proyecto **VSCode-EsCo** (paquete de idioma español de Colombia para Visual
Studio Code). Su propósito es guiar a desarrolladores y agentes de Inteligencia
Artificial (IA) para mantener la consistencia, integridad y utilidad de la
documentación.

## 1. Principios Fundamentales

*   **Modularidad**: la documentación no debe ser un monolito. Se divide en
    archivos por tema.
*   **Veracidad**: la documentación refleja fielmente el estado del proyecto. Si
    cambian el glosario, los scripts o la estructura, la documentación se
    actualiza en el mismo cambio.
*   **Centralización**: la documentación interna reside en `documents/` (incluidos
    estos protocolos, en `documents/Protocols/`).
*   **Fuente única**: los criterios y la terminología de traducción viven en
    `glosario/README.md`, junto a los datos que describen. No se duplican en
    `documents/`; se enlazan.
*   **Trazabilidad**: la documentación describe *cómo es* el proyecto; el historial
    de *qué cambió* vive en `documents/Changelogs/` (ver [Changelogs.md](Changelogs.md)).
    No mezclar ambos.

## 2. Estructura de Directorios

```
VSCode-EsCo/
├── README.md                       <-- Público: página de la extensión en el Marketplace
├── CHANGELOG.md                    <-- Público: registro de versiones de la extensión
├── CLAUDE.md                       <-- Instrucciones de arranque para Claude
├── glosario/
│   └── README.md                   <-- Criterios y terminología de la adaptación es-CO
├── documents/                      <-- Directorio PRINCIPAL de documentación interna
│   ├── README.md                   <-- Punto de entrada (visión general + índice)
│   ├── 01-<tema>.md                <-- Documentos numerados por tema
│   ├── ...
│   ├── Protocols/
│   │   ├── Documentations.md       <-- Este archivo (política general)
│   │   ├── Changelogs.md           <-- Protocolo del historial de cambios
│   │   ├── Conventions.md          <-- Convenciones de traducción y de código
│   │   └── Git.md                  <-- Protocolo de control de versiones
│   └── Changelogs/                 <-- Historial de cambios (índice + detalle por cambio)
└── translations/                   <-- Cadenas del paquete (no es documentación)
```

> El índice maestro de la documentación interna es la tabla **"Documentación"** de
> `documents/README.md`. Un archivo en `documents/` no enlazado desde ese índice es
> un error de documentación (archivo huérfano).

## 3. Flujo de Trabajo para Documentar (Instrucciones para IA)

### Paso 1: Identificar el Documento
Determina si el tema pertenece a un documento existente o requiere uno nuevo.
*   *Criterios o términos de traducción*: van en `glosario/README.md`.
*   *Procesos y decisiones del proyecto* (actualizar la base desde una nueva
    versión de VS Code, publicar en el Marketplace, etc.): van en `documents/`.
    *   *Si existe*: edita el archivo correspondiente.
    *   *Si es nuevo*: crea `documents/NN-descripcion.md`, con el siguiente número
        correlativo y un nombre en minúsculas con guiones (p. ej.
        `01-actualizar-base.md`).

### Paso 2: Estructura del Archivo
Cada documento de `documents/` sigue esta plantilla mínima:
1.  **Título**: nombre del tema.
2.  **Descripción**: para qué sirve y cuándo aplica.
3.  **Detalle técnico**: archivos, scripts, comandos (`npm run …`, `vsce`) y
    configuración involucrados.
4.  **Flujo**: pasos del proceso, cuando aplique.

### Paso 3: Actualizar el Índice
**CRÍTICO**: si creas un archivo nuevo en `documents/`, DEBES agregarlo a la tabla
**"Documentación"** de `documents/README.md`. No dejar archivos huérfanos.

### Paso 4: Referencias Cruzadas
Si el cambio afecta la visión general del proyecto, actualiza también
`documents/README.md`. Enlaza a la fuente de verdad en vez de duplicar información.

## 4. Convenciones de Estilo

*   **Idioma**: español en toda la documentación, incluidos `README.md` y
    `CHANGELOG.md` raíz, que leen los usuarios colombianos del paquete.
    Documentación interna (`documents/`, `glosario/README.md`) en tono técnico y
    formal, de usted.
*   **Archivos públicos**: `README.md` y `CHANGELOG.md` raíz son lo que muestra el
    Marketplace. Se modifican pensando en el usuario final, no como notas de trabajo.
*   **Formato**: Markdown estándar (GitHub Flavored).
*   **Código**: bloques con resaltado de sintaxis (```json, ```bash, ```js).
*   **Enlaces**: rutas relativas (p. ej. `[Ver tema](01-tema.md)` dentro de
    `documents/`, o `[glosario/README.md](../glosario/README.md)` desde `documents/`).

## 5. Mantenimiento
Antes de modificar la documentación, lee `documents/README.md` para entender el
contexto actual y el índice vigente. No dupliques información; enlaza a la fuente
de verdad. Mantén el historial de cambios en `documents/Changelogs/` según
[Changelogs.md](Changelogs.md).
