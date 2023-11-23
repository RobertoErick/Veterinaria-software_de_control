import { clientServices } from "../service/client-service.js";

function volverMenu(){
    window.location.href = "../screens/empleados.html";
}

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => {volverMenu()});


const empleados = (id, nombre, edad, direccion, telefono, correo) => {
    const empleadosTr = document.createElement("tr");

    const contenido = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${direccion}</td>
            <td>${telefono}</td>
            <td>${correo}</td>
            <td><a id=${id} data-eliminar >Eliminar</a><td>
    `
    empleadosTr.innerHTML = contenido;

    const eliminar = empleadosTr.querySelector("[data-eliminar]");
    eliminar.addEventListener("click", () => {
        const id = eliminar.id;
        clientServices.eliminarEmpleado(id).then((respuesta) => {
            console.log(respuesta)
            alert("Empleado eliminado con exito");
        })
        .catch((err) => alert("Ocurrio un error"));
    });

    return empleadosTr;
};

const tabla = document.querySelector(".empleados");

clientServices.listaEmpleados().then((data) => {
    data.forEach(({id, nombre, edad, direccion, telefono, correo}) => {
        const nuevaFila = empleados(id, nombre, edad, direccion, telefono, correo);
        tabla.appendChild(nuevaFila);
    });
}).catch((error) => alert("Ocurrio un error"));