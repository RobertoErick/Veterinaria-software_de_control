import { clientServices } from "../service/client-service.js";

function volverEmpleados() {
    window.location.href = "../screens/empleados.html";
}

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => { volverEmpleados() });

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const edad = document.querySelector("[data-edad]").value;
    const direccion = document.querySelector("[data-direccion]").value;
    const telefono = document.querySelector("[data-telefono]").value;
    const correo = document.querySelector("[data-correo]").value;

    clientServices
        .crearEmpleado(nombre, edad, direccion, telefono, correo)
        .then(() => {
            window.location.href = "../Screens/empleados.html";
        })
        .catch((err) => console.log(err));
});