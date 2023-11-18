import { clientServices } from "../service/client-service.js";

function volverMenu(){
    window.location.href = "../screens/citas.html";
}

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
            <td><a id=${id} data-eliminar >Eliminar</a><td>
    `
    citasTr.innerHTML = contenido;

    const eliminar = citasTr.querySelector("[data-eliminar]");
    eliminar.addEventListener("click", () => {
        const id = eliminar.id;
        clientServices.eliminarCita(id).then((respuesta) => {
            console.log(respuesta)
        })
        // .catch((err) => alert("Ocurrio un error"));
    });

    return citasTr;
};

const tabla = document.querySelector(".tabla-citas");

clientServices.listaCitas().then((data) => {
    data.forEach(({id, mascota, dueño, entrada, salida, servicio, total}) => {
        const nuevaFila = citas(id, mascota, dueño, entrada, salida, servicio, total);
        tabla.appendChild(nuevaFila);
    });
}).catch((error) => alert("Ocurrio un error"));