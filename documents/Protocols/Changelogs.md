# Protocolo de Registro de Cambios (Changelog)

Este documento establece el protocolo para registrar todos los cambios realizados
en el proyecto **VSCode-EsCo**, el paquete de idioma español de Colombia (`es-CO`)
para Visual Studio Code.

Este protocolo debe ser seguido por todos los desarrolladores y agentes de IA que
trabajen en el proyecto.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/)
y este proyecto adhiere al [Versionado Semántico](https://semver.org/lang/es/).

> **Importante:** hay dos registros de cambios con propósitos distintos:
>
> - `documents/Changelogs/` es el **historial de trabajo** del proyecto: un archivo
>   detallado por cambio más un índice. Aquí se documenta todo cambio, al momento
>   de hacerlo.
> - `CHANGELOG.md` de la **raíz** es el registro **público** de la extensión: lo
>   empaqueta `vsce` y lo muestra el Marketplace. Lo leen los usuarios. Se actualiza
>   con un resumen breve, orientado al usuario, cuando un cambio afecta lo que se
>   publica (traducciones, glosario, `package.json`), y se consolida al preparar
>   una versión.

---

## Estructura de Archivos

```
VSCode-EsCo/
├── documents/
│   ├── Protocols/
│   │   └── Changelogs.md                 ← Este archivo (protocolo)
│   └── Changelogs/
│       ├── CHANGELOG.md                  ← Índice numerado de todos los cambios
│       ├── YYYY-MM-DD_tipo_descripcion.md ← Archivo detallado por cambio
│       └── ...
└── CHANGELOG.md                          ← Registro público de la extensión (Marketplace)
```

> Las rutas `Changelogs/...` de este documento son relativas a `documents/`.

---

## 1. Índice de Cambios (`documents/Changelogs/CHANGELOG.md`)

Este archivo es un **índice numerado y resumido** de todos los cambios. **No debe
contener detalles**, solo una línea breve por cambio con enlace al archivo detallado.

### Formato del índice

```markdown
# Changelog - VSCode-EsCo

| #  | Fecha      | Descripción breve                               | Detalle                                         |
|----|------------|-------------------------------------------------|-------------------------------------------------|
| 3  | 2026-10-20 | Actualización de la base a VS Code 1.132        | [Ver detalle](2026-10-20_chore_base_1_132.md)   |
| 2  | 2026-10-15 | Glosario es-CO aplicado al paquete              | [Ver detalle](2026-10-15_feat_glosario_esco.md) |
| 1  | 2026-10-15 | Estructura inicial del paquete                  | [Ver detalle](2026-10-15_chore_estructura.md)   |
```

> **Nota:** las entradas se numeran de forma ascendente. La más reciente va primero
> (orden cronológico inverso).

---

## 2. Archivos Detallados por Cambio

Cada cambio significativo debe tener su **propio archivo** en `documents/Changelogs/`
con la descripción completa.

### Nomenclatura del archivo

```
YYYY-MM-DD_tipo_descripcion_breve.md
```

`tipo` es el mismo de los commits (ver [Git.md](Git.md)): `feat`, `fix`, `docs`,
`chore`, `release`. Ejemplo: `2026-10-15_feat_glosario_esco.md`.

### Contenido del archivo detallado

```markdown
# Título descriptivo del cambio

**Fecha:** YYYY-MM-DD
**Área:** [traducciones | glosario | scripts | paquete | docs | protocolos]

## Descripción

Explicación del cambio y su motivación.

## Tipo de Cambio

- `Agregado` | `Cambiado` | `Corregido` | `Removido` | `Obsoleto` | `Seguridad`

## Archivos Afectados

### [NUEVO|MODIFICADO|ELIMINADO] `ruta/al/archivo`
- Detalle de lo que se hizo en este archivo

## Impacto

- Qué ve distinto el usuario del paquete de idioma.
- Para cambios en `translations/`: cuántas cadenas cambiaron (lo reporta
  `npm run glosario`) y ejemplos representativos antes → después.
- Compatibilidad: versión de VS Code (`engines.vscode`) si cambia.
```

---

## 3. Áreas

| Área           | Alcance                                                                 |
|:---------------|:------------------------------------------------------------------------|
| `traducciones` | Archivos de `translations/` (normalmente cambian vía glosario)          |
| `glosario`     | `glosario/glosario.json`, `glosario/traducciones.json`, `glosario/README.md` |
| `scripts`      | `scripts/` (herramientas de aplicación y verificación)                  |
| `paquete`      | `package.json`, `.vscodeignore`, ícono, versión, publicación            |
| `docs`         | `README.md`, `CHANGELOG.md` raíz y `documents/`                         |
| `protocolos`   | `documents/Protocols/`, `CLAUDE.md`, `.claude/`                         |

---

## 4. Tipos de Cambios

| Tipo         | Uso                                                     |
|:-------------|:--------------------------------------------------------|
| `Agregado`   | Nuevas traducciones, reglas de glosario o archivos      |
| `Cambiado`   | Ajustes a traducciones, reglas o terminología existentes |
| `Corregido`  | Errores de traducción, marcadores rotos, vínculos       |
| `Removido`   | Reglas, cadenas o archivos eliminados                   |
| `Obsoleto`   | Reglas o términos marcados para futura remoción         |
| `Seguridad`  | Correcciones de seguridad                               |

---

## 5. Reglas Generales

1. **Todo cambio debe documentarse** al momento de realizarse, no después.
2. **Un archivo detallado por conjunto de cambios relacionados**: si en una sesión
   se hacen varios cambios al mismo componente, van en un solo archivo.
3. **Actualizar siempre el índice** (`documents/Changelogs/CHANGELOG.md`) al crear
   un archivo detallado.
4. Si el cambio altera lo que se publica, **agregar también una línea al
   `CHANGELOG.md` raíz**, en lenguaje de usuario, bajo `## [Sin publicar]`.
5. Los documentos deben ser **legibles y claros**. Usar bloques de código o tablas
   antes → después para cambios de terminología, manteniendo la brevedad.

---

*Este documento es la referencia para la IA y los desarrolladores sobre cómo
gestionar el historial de cambios del proyecto.*
