import { clientServices } from "../service/client-service.js";

function altaCitas(){
    window.location.href = "../screens/alta_cita.html";
}

function volverMenu(){
    window.location.href = "../screens/menu_inicial.html";
}

function editarCitas(){
    window.location.href = "../screens/editar_citas.html";
}

function eliminarCitas(){
    window.location.href = "../screens/eliminar_citas.html";
}

const btnAlta = document.querySelector("#alta");
btnAlta.addEventListener("click", () => {altaCitas()});

const btnEditar = document.querySelector("#editar");
btnEditar.addEventListener("click", () => {editarCitas()});

const btnEliminar = document.querySelector("#eliminar");
btnEliminar.addEventListener("click", () => {eliminarCitas()});

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => {volverMenu()});


const citas = (id, mascota, dueño, entrada, salida, servicio, total) => {
    const citasTr = document.createElement("tr");

    const contenido = `
            <td>${id}</td>
            <td>${mascota}</td>
            <td>${dueño}</td>
            <td>${entrada}</td>
            <td>${salida}</td>
            <td>${servicio}</td>
            <td>${total}</td>
    `
    citasTr.innerHTML = contenido;

    return citasTr;
};

const tabla = document.querySelector(".tabla-citas");

clientServices.listaCitas().then((data) => {
    data.forEach(({id, mascota, dueño, entrada, salida, servicio, total}) => {
        const nuevaFila = citas(id, mascota, dueño, entrada, salida, servicio, total);
        tabla.appendChild(nuevaFila);
    });
}).catch((error) => alert("Ocurrio un error"));