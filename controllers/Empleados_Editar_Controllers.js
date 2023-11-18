import { clientServices } from "../service/client-service.js";

function volverMenu(){
    window.location.href = "../screens/empleados.html";
}

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => {volverMenu()});

const Empleados = (id, nombre, edad, direccion, telefono, correo) => {
    const EmpleadosTr = document.createElement("tr");

    const contenido = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${direccion}</td>
            <td>${telefono}</td>
            <td>${correo}</td>
            <td><a href="../Screens/editar_empleados_individual.html?id=${id}">Editar</a><td>
    `
    EmpleadosTr.innerHTML = contenido;

    return EmpleadosTr;
};

const tabla = document.querySelector(".empleados");

clientServices.listaEmpleados().then((data) => {
    data.forEach(({id, nombre, edad, direccion, telefono, correo}) => {
        const nuevaFila = Empleados(id, nombre, edad, direccion, telefono, correo);
        tabla.appendChild(nuevaFila);
    });
}).catch((error) => alert("Ocurrio un error"));