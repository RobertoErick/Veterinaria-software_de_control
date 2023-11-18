import { clientServices } from "../service/client-service.js";

function altaClientes(){
    window.location.href = "../screens/alta_clientes.html";
}

function editarClientes(){
    window.location.href = "../screens/editar_clientes.html";
}

function eliminarClientes(){
    window.location.href = "../screens/eliminar_clientes.html";
}

function volverMenu(){
    window.location.href = "../screens/menu_inicial.html";
}

const btnAlta = document.querySelector("#alta");
btnAlta.addEventListener("click", () => {altaClientes()});

const btnEditar = document.querySelector("#editar");
btnEditar.addEventListener("click", () => {editarClientes()});

const btnEliminar = document.querySelector("#eliminar");
btnEliminar.addEventListener("click", () => {eliminarClientes()});

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => {volverMenu()});

const clientes = (id, dueño, telefono, correo, mascota, raza, edad, rasgo, alergia) => {
    const citasTr = document.createElement("tr");

    const contenido = `
            <td>${id}</td>
            <td>${dueño}</td>
            <td>${telefono}</td>
            <td>${correo}</td>
            <td>${mascota}</td>
            <td>${raza}</td>
            <td>${edad}</td>
            <td>${rasgo}</td>
            <td>${alergia}</td>
    `
    citasTr.innerHTML = contenido;

    return citasTr;
};

const tabla = document.querySelector(".tabla-clientes");

clientServices.listaClientes().then((data) => {
    data.forEach(({id, dueño, telefono, correo, mascota, raza, edad, rasgo, alergia}) => {
        const nuevaFila = clientes(id, dueño, telefono, correo, mascota, raza, edad, rasgo, alergia);
        tabla.appendChild(nuevaFila);
    });
}).catch((error) => alert("Ocurrio un error"));