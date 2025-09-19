// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde vamos a guardar los nombres
let amigos = [];

// esta función se llama cuando el usuario hace clic en "Añadir"
function agregarAmigo() {
    // una vez que coloque el nombre en cuestion, el usuario dará click en añadir y lo hara
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // quitamos espacios al principio y al final para que se vea mejor organizado y mejor visualmente

    // limpiamos el resultado anterior si hay
    document.getElementById("resultado").innerHTML = "";

       // validación: campo vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // verificamos si el nombre tiene menos de 3 letras como para que sea mas realista
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 letras.");
        return;
    }

    // Verificamos si el nombre son solo números (por ejemplo: "1234")
    if (/^\d+$/.test(nombre)) {
        alert("El nombre no puede tener solo números.");
        return;
    }

    // verificamos si el nombre ya está en la lista para asi realizar la siguiente acción
    if (amigos.indexOf(nombre) !== -1) {
        alert("Ese nombre ya existe");
        return;
    }
    
    // si todo está bien, lo agregamos a la lista como corresponde
    amigos.push(nombre);


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

    // Elegimos un número al azar entre 0 y el largo de la lista - 1
    let posicion = Math.floor(Math.random() * amigos.length);
    let nombreGanador = amigos[posicion];

    // Mostramos el nombre ganador en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>🏆 El ganador es: <strong>" + nombreGanador + "</strong></li>";
}
