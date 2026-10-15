# Traducción de cadenas que la base dejó en inglés

**Fecha:** 2026-10-15
**Área:** glosario, traducciones

## Descripción

El paquete base traía unas 2,700 cadenas sin traducir, casi todas de funciones
recientes (chat de Copilot, ventana Agentes, sesiones, automatizaciones, host del
agente). Se inventariaron con un detector heurístico y se tradujeron al español de
Colombia siguiendo la terminología ya usada por el paquete.

## Tipo de Cambio

- `Agregado`

## Archivos Afectados

### [NUEVO] `glosario/traducciones.json`
- 2,671 cadenas con su texto en inglés (`original`) y la traducción (`nuevo`).

### [MODIFICADO] `scripts/aplicar-glosario.js`
- Carga también `traducciones.json` y pasa las reglas generales sobre las cadenas
  reescritas y traducidas.

### [MODIFICADO] `glosario/README.md`
- Tabla de terminología de las funciones de IA (indicación, aptitud, enlace,
  harness, árbol de trabajo, confirmación, parche, etc.).

### [MODIFICADO] `translations/` (6 archivos)
- 2,671 cadenas traducidas, la mayoría en `main.i18n.json`.

## Impacto

- La interfaz de chat y agentes deja de mezclar inglés y español.
- Verificado: marcadores (`{0}`, `&&`, `` `código` ``, `#config#`, destinos de
  vínculos), saltos de línea y espacios intactos; sin formas de tú ni términos de
  España; el detector de inglés solo deja 17 falsos positivos.
- Las traducciones no han tenido revisión humana una por una; el detector es
  heurístico y puede haber omitido algunas cadenas.
