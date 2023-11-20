import { clientServices } from "../service/client-service.js";

function volverMenu(){
    window.location.href = "../screens/citas.html";
}

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => {volverMenu()});


const citas = (id, mascota, empleado, dueño, entrada, salida, servicio, total) => {
    const citasTr = document.createElement("tr");

    const contenido = `
            <td>${id}</td>
            <td>${mascota}</td>
            <td>${empleado}</td>
            <td>${dueño}</td>
            <td>${entrada}</td>
            <td>${salida}</td>
            <td>${servicio}</td>
            <td>${total}</td>
            <td><a href="../Screens/editar_cita_individual.html?id=${id}">Editar</a><td>
    `
    citasTr.innerHTML = contenido;

    return citasTr;
};

const tabla = document.querySelector(".tabla-citas");

clientServices.listaCitas().then((data) => {
    data.forEach(({id, mascota, empleado, dueño, entrada, salida, servicio, total}) => {
        const nuevaFila = citas(id, mascota, empleado, dueño, entrada, salida, servicio, total);
        tabla.appendChild(nuevaFila);
    });
}).catch((error) => alert("Ocurrio un error"));