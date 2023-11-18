import { clientServices } from "../service/client-service.js";

function volverEmpleados(){
    window.location.href = "../screens/editar_empleados.html";
}

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => {volverEmpleados()});

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href = "../Screens/errors.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const edad = document.querySelector("[data-edad]");
    const direccion = document.querySelector("[data-direccion]");
    const telefono = document.querySelector("[data-telefono]");
    const correo = document.querySelector("[data-correo]");

    try{
        const empleados = await clientServices.detalleEmpleado(id);
        if(empleados.id && empleados.nombre && empleados.edad && empleados.direccion && empleados.telefono && empleados.correo) {
            nombre.value = empleados.nombre;
            edad.value = empleados.edad;
            direccion.value = empleados.direccion;
            telefono.value = empleados.telefono;
            correo.value = empleados.correo;
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

    const nombre = document.querySelector("[data-nombre]").value;
    const edad = document.querySelector("[data-edad]").value;
    const direccion = document.querySelector("[data-direccion]").value;
    const telefono = document.querySelector("[data-telefono]").value;
    const correo = document.querySelector("[data-correo]").value;

    clientServices
        .actualizarEmpleado(id, nombre, edad, direccion, telefono, correo)
        .then(() => {
            window.location.href = "../Screens/editar_empleados.html";
        });
});