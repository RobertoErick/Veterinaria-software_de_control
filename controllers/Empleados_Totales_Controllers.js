import { clientServices } from "../service/client-service.js";

function altaEmpleados(){
    window.location.href = "../screens/alta_empleados.html";
}

function editarEmpleados(){
    window.location.href = "../screens/editar_empleados.html";
}

function eliminarEmpleados(){
    window.location.href = "../screens/eliminar_empleados.html";
}

function volverMenu(){
    window.location.href = "../screens/menu_inicial.html";
}

const btnAlta = document.querySelector("#alta");
btnAlta.addEventListener("click", () => {altaEmpleados()});

const btnEditar = document.querySelector("#editar");
btnEditar.addEventListener("click", () => {editarEmpleados()});

const btnEliminar = document.querySelector("#eliminar");
btnEliminar.addEventListener("click", () => {eliminarEmpleados()});

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => {volverMenu()});

const empleados = (id, nombre, edad, direccion, telefono, correo) => {
    const citasTr = document.createElement("tr");

    const contenido = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${direccion}</td>
            <td>${telefono}</td>
            <td>${correo}</td>
    `
    citasTr.innerHTML = contenido;

    return citasTr;
};

const tabla = document.querySelector(".empleados");

clientServices.listaEmpleados().then((data) => {
    data.forEach(({id, nombre, edad, direccion, telefono, correo}) => {
        const nuevaFila = empleados(id, nombre, edad, direccion, telefono, correo);
        tabla.appendChild(nuevaFila);
    });
}).catch((error) => alert("Ocurrio un error"));