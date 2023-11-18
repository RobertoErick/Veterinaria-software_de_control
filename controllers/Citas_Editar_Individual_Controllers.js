import { clientServices } from "../service/client-service.js";

function volverCitas(){
    window.location.href = "../screens/editar_citas.html";
}

const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click", () => {volverCitas()});

// Obtén referencia al elemento de selección y al elemento del total
var servicioSelect = document.getElementById('servicio');
var totalElement = document.getElementById('total');
var totalCosto = 0;

// Agrega un evento de cambio al elemento de selección
servicioSelect.addEventListener('change', function() {
    // Obtiene el valor seleccionado
    var selectedService = servicioSelect.value;

    // Actualiza el total según el servicio seleccionado
    totalCosto = calcularTotal(selectedService);

    // Muestra el total actualizado en el elemento total
    totalElement.textContent = totalCosto;
});

// Función para calcular el total según el servicio seleccionado
function calcularTotal(servicio) {
    // Agrega tu lógica para calcular el total según el servicio
    // Aquí se muestra un ejemplo simple
    switch (servicio) {
        case 'Baño':
            return 20; // Cambia esto según tus tarifas
        case 'Corte de pelo':
            return 15;
        case 'Corte de garras':
            return 10;
        default:
            return 0; // Valor predeterminado si no se selecciona ningún servicio
    }
}

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href = "../Screens/errors.html";
    }

    const idCita = document.querySelector("[data-id]");
    const mascota = document.querySelector("[data-mascota]");
    const dueño = document.querySelector("[data-dueño]");
    const entrada = document.querySelector("[data-entrada]");
    const salida = document.querySelector("[data-salida]");
    const servicio = document.querySelector("[data-servicio]");
    const total = document.querySelector("[data-total]");

    try{
        const cita = await clientServices.detalleCita(id);
        if(cita.id && cita.mascota && cita.dueño && cita.entrada && cita.salida && cita.servicio && cita.total) {
            idCita.value = cita.id
            mascota.value = cita.mascota;
            dueño.value = cita.dueño;
            entrada.value = cita.entrada;
            salida.value = cita.salida;
            servicio.value = cita.servicio;
            // Calcular el total según el servicio almacenado en cita.servicio
            totalCosto = calcularTotal(cita.servicio);
            // Mostrar el total actualizado en el elemento total
            total.value = totalCosto;
            totalElement.textContent = totalCosto;
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

    const mascota = document.querySelector("[data-mascota]").value;
    const dueño = document.querySelector("[data-dueño]").value;
    const entrada = document.querySelector("[data-entrada]").value;
    const salida = document.querySelector("[data-salida]").value;
    const servicio = document.querySelector("[data-servicio]").value;
    const total = totalCosto;

    clientServices
        .actualizarCita(id, mascota, dueño, entrada, salida, servicio, total)
        .then(() => {
            window.location.href = "../Screens/citas.html";
        });
});