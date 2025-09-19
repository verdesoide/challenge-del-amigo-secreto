// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde vamos a guardar los nombres
let amigos = [];

// esta función se llama cuando el usuario hace clic en "Añadir"
function agregarAmigo() {
    // obtenemos el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // quitamos espacios al inicio y al final

    // limpiamos el resultado anterior si hay
    document.getElementById("resultado").innerHTML = "";

    // validación: campo vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // validación: mínimo 3 letras
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 letras.");
        return;
    }

    // validación: no solo números
    if (/^\d+$/.test(nombre)) {
        alert("El nombre no puede tener solo números.");
        return;
    }

    // validación: no repetidos
    if (amigos.indexOf(nombre) !== -1) {
        alert("Ese nombre ya existe");
        return;
    }

    // si todo está bien, agregamos a la lista
    amigos.push(nombre);

    // actualizamos la lista en pantalla
    mostrarLista();

    // limpiamos el campo de texto
    input.value = "";
    input.focus();
}

// función que recorre el array y muestra los nombres en la lista HTML
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista antes de volver a llenarla

    // recorrer array con for
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

// esta función se llama cuando el usuario hace clic en "Sortear amigo"
function sortearAmigo() {
    // verificamos si hay nombres en la lista
    if (amigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }

    // elegimos un número al azar entre 0 y el largo de la lista - 1
    let posicion = Math.floor(Math.random() * amigos.length);
    let nombreGanador = amigos[posicion];

    // mostramos el nombre ganador en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>🏆 El ganador es: <strong>" + nombreGanador + "</strong></li>";
}
