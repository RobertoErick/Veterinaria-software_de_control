import { clientServices } from "../service/client-service.js";

function volverClientes(){
    window.location.href = "../screens/editar_clientes.html";
}

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => {volverClientes()});

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href = "../Screens/errors.html";
    }

    const dueño = document.querySelector("[data-dueño]");
    const telefono = document.querySelector("[data-telefono]");
    const correo = document.querySelector("[data-correo]");
    const mascota = document.querySelector("[data-mascota]");
    const raza = document.querySelector("[data-raza]");
    const edad = document.querySelector("[data-edad]");
    const rasgo = document.querySelector("[data-rasgo]");
    const alergia = document.querySelector("[data-alergia]");

    try{
        const cliente = await clientServices.detalleCliente(id);
        if(cliente.id && cliente.dueño && cliente.telefono && cliente.correo && cliente.mascota && cliente.raza && cliente.edad  && cliente.rasgo && cliente.alergia) {
            dueño.value = cliente.dueño;
            telefono.value = cliente.telefono;
            correo.value = cliente.correo;
            mascota.value = cliente.mascota;
            raza.value = cliente.raza;
            edad.value = cliente.edad;
            rasgo.value = cliente.rasgo;
            alergia.value = cliente.alergia;
        } else {
            throw new Error();
        }
    }catch(err){
        window.location.href = "../Screens/error.html";
    }
};

obtenerInformacion();

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const dueño = document.querySelector("[data-dueño]").value;
    const telefono = document.querySelector("[data-telefono]").value;
    const correo = document.querySelector("[data-correo]").value;
    const mascota = document.querySelector("[data-mascota]").value;
    const raza = document.querySelector("[data-raza]").value;
    const edad = document.querySelector("[data-edad]").value;
    const rasgo = document.querySelector("[data-rasgo]").value;
    const alergia = document.querySelector("[data-alergia]").value;

    clientServices
        .actualizarCliente(id, dueño, telefono, correo, mascota, raza, edad, rasgo, alergia)
        .then(() => {
            window.location.href = "../Screens/clientes.html";
        });
});