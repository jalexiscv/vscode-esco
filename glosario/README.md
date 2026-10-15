# Glosario es-CO

Este glosario adapta el español de VS Code al uso de Colombia. La fuente de verdad es [glosario.json](glosario.json) y se aplica con:

```bash
node scripts/aplicar-glosario.js            # aplica los cambios
node scripts/aplicar-glosario.js --revisar  # solo muestra qué cambiaría
```

El script es idempotente: se puede ejecutar varias veces sin efectos adicionales. Si una cadena reescrita a mano cambió en la base, la reporta en lugar de pisarla.

## Criterios

- **Tratamiento:** de *usted*, como es habitual en el software en Colombia. Las pocas cadenas en *tú* se pasan a *usted*.
- **Teclas:** se usan los nombres que se dicen en Colombia (Shift, Enter, Tab), que coinciden con los atajos que el usuario ve en pantalla.
- **Alcance:** solo se cambia lo regional. No se corrigen aquí otros errores de traducción, salvo los que rompen funcionalidad.

## Reglas generales

| Base (España / neutro) | es-CO | Nota |
|---|---|---|
| fichero(s) | archivo(s) | |
| ratón | mouse | El pack ya decía «mouse» en 60 cadenas |
| vídeo(s) | video(s) | Sin tilde, como se escribe en América |
| ficha(s) | pestaña(s) | Solo las pestañas del editor, no las de fragmentos de código |
| pulse, pulsar, pulsado… | presione, presionar, presionado… | |
| Pulse un chip | Toque un chip | Interfaz táctil |
| Mayús | Shift | También en los atajos de los menús: Ctrl+Shift+P |
| Tabulador, Mayús+tabulación | Tab, Shift+Tab | |
| Intro, Entrar (tecla) | Enter | No se cambian el verbo «entrar» ni el comando de depuración «Entrar» (Step Into) |
| `(comando:…)` | `(command:…)` | Corrección: con el esquema traducido, el vínculo no funciona |

## Cadenas reescritas a mano

Hay 24 cadenas en `cadenas` de [glosario.json](glosario.json), cada una con su texto original y el nuevo. Casi todas pasan de *tú* a *usted*, por ejemplo:

| Antes | Ahora |
|---|---|
| Te damos la bienvenida a {0} | Le damos la bienvenida a {0} |
| Describe tu misión | Describa su misión |
| ¿Quieres activar la extensión…? | ¿Quiere activar la extensión…? |
| Te fiarás de todos los repositorios… | Confiará en todos los repositorios… |

## Cadenas que la base dejó en inglés

El paquete base de Microsoft traía unas 2,700 cadenas sin traducir, casi todas de las funciones más recientes: chat, agentes, sesiones y automatizaciones. Sus traducciones están en [traducciones.json](traducciones.json), con el mismo formato de `cadenas` (`original` en inglés y `nuevo` en español). El mismo script las aplica, y las reglas generales también pasan sobre ellas.

Terminología usada en esas traducciones, además de la de la tabla anterior:

| Inglés | es-CO |
|---|---|
| agent / subagent / agent host | agente / subagente / host del agente |
| prompt | indicación |
| skill | aptitud |
| hook | enlace |
| plugin | complemento |
| harness | harness (sin traducir, como ya lo usaba el paquete) |
| sandbox | espacio aislado |
| worktree | árbol de trabajo |
| commit (sust. / verbo) | confirmación / confirmar |
| pull request | solicitud de incorporación de cambios (PR) |
| issue | incidencia |
| merge / Agent Merge | combinar / Combinación del agente |
| patch | parche |
| check (CI) | comprobación |
| reasoning effort | esfuerzo de razonamiento |
| pin / archive | anclar / archivar |
| Dev Container, Copilot, MCP, Codex, Claude | sin traducir |

## Términos que se mantienen

| Término | Motivo |
|---|---|
| móvil / dispositivo móvil | Es el término técnico usual en Colombia; «celular» se reserva para el teléfono |
| equipo | Se usa en Colombia para «computador» |
| pulsaciones de teclas | Expresión técnica habitual |
| incidencia (issue) | Se entiende bien; cambiarla por «problema» chocaría con la vista Problemas |
| Administrar, vínculo, carpeta, configuración | Ya son de uso latinoamericano |

## Cómo agregar un término

1. Agregue una regla a `reglas` con `buscar` (expresión regular), `reemplazar` y `nota`. Opciones:
   - `palabra: false`: no envolver en límites de palabra.
   - `distinguirMayusculas: true`: buscar respetando mayúsculas.
   - `mantenerMayusculas: false`: no copiar el patrón de mayúsculas al reemplazo.
   - `excluirSi`: no aplicar la regla en cadenas que contengan esa expresión.
2. Ejecute `--revisar`, verifique el conteo de la regla y luego aplique.
3. Revise el resultado con `git diff --word-diff`.
