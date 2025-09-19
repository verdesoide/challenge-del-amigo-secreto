Descripción del proyecto

El proyecto consiste en una aplicación web sencilla llamada “Amigo Secreto”, en la que los usuarios pueden escribir los nombres de sus amigos y luego realizar un sorteo para elegir aleatoriamente a uno de ellos como ganador.

El objetivo es simular el clásico juego del amigo secreto, pero de forma digital, utilizando tecnologías web básicas.



Funcionalidades principales

Ingreso de nombres

Los usuarios pueden escribir un nombre en el campo de texto y añadirlo a la lista.

Se valida que el nombre tenga al menos 3 caracteres, que no sean únicamente números y que no se repita.


Listado dinámico

Cada vez que se agrega un nombre, aparece en una lista en pantalla para que el usuario vea los amigos que ya están participando.

Sorteo del amigo secreto

Una vez que hay al menos dos nombres en la lista, se puede presionar el botón “Sortear amigo”.

El sistema selecciona de forma aleatoria un ganador y lo muestra en pantalla.

Validaciones de seguridad y usabilidad

Se evita el ingreso de nombres inválidos (demasiado cortos, solo números o repetidos).

Si no hay nombres suficientes, el sistema avisa al usuario con un mensaje.



Tecnologías utilizadas

HTML5 → para la estructura de la página.

CSS3 → para darle estilo y diseño a la interfaz.

JavaScript (Vanilla JS) → para la lógica de validaciones, manejo de listas y el sorteo aleatorio.

Google Fonts → para personalizar la tipografía.



Estructura del proyecto

El proyecto está organizado de forma simple en tres archivos principales:

amigo-secreto/
│
├── index.html     → Estructura de la aplicación (contenedor principal).
├── style.css      → Estilos visuales (colores, fuentes, márgenes, botones).
└── app.js         → Lógica del juego en JavaScript (validaciones y sorteo).


index.html: contiene la interfaz con un campo de entrada de texto, botones y las listas donde se muestran los amigos y el resultado.

style.css: define la apariencia, distribución y estilo visual de la aplicación.

app.js: incluye toda la programación que hace posible agregar nombres, validarlos, mostrarlos y elegir un ganador.

Conclusión

Este proyecto es un ejemplo sencillo de cómo integrar HTML, CSS y JavaScript para crear una aplicación interactiva en la web. Aunque su lógica es básica, incluye validaciones, manejo de arrays y manipulación del DOM, lo cual lo convierte en un buen ejercicio práctico de programación web.
