import { clientServices } from "../service/client-service.js";

function volverMenu(){
    window.location.href = "../screens/clientes.html";
}

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => {volverMenu()});

const clientes = (id, dueño, telefono, correo, mascota, raza, edad, rasgo, alergia) => {
    const clientesTr = document.createElement("tr");

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
            <td><a href="../Screens/editar_cliente_individual.html?id=${id}">Editar</a><td>
    `
    clientesTr.innerHTML = contenido;

    return clientesTr;
};

const tabla = document.querySelector(".tabla-clientes");

clientServices.listaClientes().then((data) => {
    data.forEach(({id, dueño, telefono, correo, mascota, raza, edad, rasgo, alergia}) => {
        const nuevaFila = clientes(id, dueño, telefono, correo, mascota, raza, edad, rasgo, alergia);
        tabla.appendChild(nuevaFila);
    });
}).catch((error) => alert("Ocurrio un error"));