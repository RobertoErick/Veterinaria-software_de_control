import { clientServices } from "../service/client-service.js";

function volverCitas(){
    window.location.href = "../screens/citas.html";
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

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = document.querySelector("[data-id]").value;
    const mascota = document.querySelector("[data-mascota]").value;
    const dueño = document.querySelector("[data-dueño]").value;
    const entrada = document.querySelector("[data-entrada]").value;
    const salida = document.querySelector("[data-salida]").value;
    const servicio = document.querySelector("[data-servicio]").value;
    const total = totalCosto;

    clientServices
        .crearCita(id, mascota, dueño, entrada, salida, servicio, total)
        .then(() => {
            window.location.href = "../Screens/citas.html";
        })
        .catch((err) => console.log(err));
});