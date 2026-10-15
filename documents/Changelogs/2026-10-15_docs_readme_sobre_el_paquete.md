# Sección "Sobre este paquete" en el README

**Fecha:** 2026-10-15
**Área:** docs

## Descripción

El README público solo tenía una línea de descripción. Se agrega una sección que
explica por qué existe el paquete, cómo se creó y qué busca, para quien llega desde
GitHub o el Marketplace.

## Tipo de Cambio

- `Agregado`

## Archivos Afectados

### [MODIFICADO] `README.md`
- Nueva sección "Sobre este paquete" (unas 300 palabras) entre la introducción y
  "Uso", con tres apartados: *Por qué existe* (rasgos de España en el español
  oficial y unas 2,700 cadenas sin traducir), *Cómo se creó* (base vscode-loc
  1.131, glosario aplicado por script, cifras de la adaptación) y *Qué busca*.
- Mantiene el tuteo del resto del README.

## Impacto

- Solo documentación. El `.vsix` del release `v1.131.0` lleva el README anterior:
  la nueva sección se verá en el Marketplace cuando se empaquete otra versión.
