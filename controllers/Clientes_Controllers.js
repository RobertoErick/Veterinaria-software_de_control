import { clientServices } from "../service/client-service.js";

function volverClientes() {
    window.location.href = "../screens/clientes.html";
}

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => { volverClientes() });

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const dueño = document.querySelector("[data-dueño]").value;
    const telefono = document.querySelector("[data-telefono]").value;
    const correo = document.querySelector("[data-correo]").value;
    const mascota = document.querySelector("[data-mascota]").value;
    const raza = document.querySelector("[data-raza]").value;
    const edad = document.querySelector("[data-edad]").value;
    const rasgo = document.querySelector("[data-rasgo]").value;
    const alergia = document.querySelector("[data-alergia]").value;

    clientServices
        .crearCliente(dueño, telefono, correo, mascota, raza, edad, rasgo, alergia)
        .then(() => {
            window.location.href = "../Screens/clientes.html";
        })
        .catch((err) => console.log(err));
});