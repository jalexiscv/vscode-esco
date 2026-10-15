# Paquete de idioma español (Colombia) para VS Code

Este paquete adapta la interfaz de Visual Studio Code al español de Colombia (`es-CO`).

## Sobre este paquete

### Por qué existe

Visual Studio Code tiene un paquete oficial en español, pero está pensado como un español general que no suena a ninguna región en particular, y en la práctica tiene muchos rasgos de España. Quien programa en Colombia lee "fichero" donde diría "archivo", "ratón" donde diría "mouse", "pulse Intro" donde diría "presione Enter", y ve los atajos como `Ctrl+Mayús+P` en lugar de `Ctrl+Shift+P`, que es como se le dice a esa tecla en Colombia. Además, la interfaz mezcla el trato de tú con el de usted.

Hay un problema más visible: el paquete oficial traía cerca de 2,700 textos sin traducir, casi todos de las funciones más nuevas, como el chat de Copilot, los agentes y las sesiones. Son justamente las que más se usan hoy, y aparecían en inglés en medio de una interfaz en español.

### Cómo se creó

El punto de partida fueron las traducciones oficiales al español de Microsoft ([vscode-loc](https://github.com/microsoft/vscode-loc), versión 1.131, licencia MIT). Sobre esa base no se editaron a mano las más de 28,000 cadenas. Se construyó un **glosario**: un conjunto de reglas documentadas (cada término con el motivo del cambio) que un script aplica de forma automática y repetible. Así, cada decisión queda registrada y puede revisarse o ajustarse sin perder el rastro.

Con ese método se adaptaron 176 cadenas al uso colombiano, se tradujeron 2,671 que estaban en inglés y se corrigieron algunos vínculos de la interfaz que no funcionaban. Cada cambio se verificó para no romper los marcadores internos que VS Code necesita, como `{0}` o los atajos de menú.

### Qué busca

Que la comunidad de desarrollo en Colombia trabaje con una herramienta que hable como habla ella: con el vocabulario de aquí, los nombres de teclas de aquí y un trato de usted coherente en toda la interfaz. Los criterios y la terminología están en [glosario/README.md](glosario/README.md), y las sugerencias de mejora son bienvenidas.

## Uso

1. Instala la extensión.
2. Abre la paleta de comandos con `Ctrl+Shift+P` y ejecuta **Configure Display Language**.
3. Selecciona **español (Colombia)** y reinicia VS Code.


### Comunidad

- **Discusiones**: Únete a las conversaciones en [GitHub Discussions](https://github.com/jalexiscv/vscode-esco/discussions)
- **Contribuciones**: Revisa los [issues etiquetados como "good first issue"](https://github.com/jalexiscv/vscode-esco/labels/good%20first%20issue)

---

## 📜 Licencia

Distribuido bajo la Licencia **MIT**. Ver [LICENSE.md](LICENSE.md) para más información.

> La licencia MIT te permite usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del software sin restricciones, siempre que se incluya el aviso de copyright.

---

## 👨‍💻 Autor

**Jose Alexis Correa Valencia**
*Full Stack Developer & Software Architect*

Con más de 25 años de experiencia en desarrollo de software empresarial, especializado en arquitecturas escalables y soluciones PHP modernas.

- **GitHub**: [@jalexiscv](https://github.com/jalexiscv)
- **LinkedIn**: [Jose Alexis Correa Valencia](https://www.linkedin.com/in/jalexiscv/)
- **Email**: jalexiscv@gmail.com
- **Ubicación**: Colombia 🇨🇴

---

## ❤️ Donaciones

Si esta extensión te ha ayudado a ti o a tu negocio, considera apoyar su desarrollo y mantenimiento continuo.

| Método | Detalles |
|--------|----------|
| **PayPal** | [jalexiscv@gmail.com](https://www.paypal.com/paypalme/anssible) |
| **Nequi (Colombia)** | `3117977281` |

### Beneficios de tu Soporte

Tu donación ayuda a:
- ⚡ Acelerar el desarrollo de nuevas funcionalidades
- 📚 Crear más documentación y ejemplos
- 🧪 Mejorar la cobertura de tests
- 🐛 Atender más correcciones del backlog de issues
- 🌍 Mantener el proyecto activo y actualizado

*¡Gracias por tu apoyo!* 🙏
