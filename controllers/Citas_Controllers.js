import { clientServices } from "../service/client-service.js";

// Obtén referencia al elemento del select de clientes
var dueñoSelect = document.getElementById('dueñoSelect');

// Obtén referencia al elemento del select de mascotas
var mascotaSelect = document.getElementById('mascotaSelect');

// Llena el select con los clientes al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    llenarClientes();
    // Agrega un evento de cambio al select de clientes
     dueñoSelect.addEventListener('change', function () {
        // Al cambiar el cliente, actualiza el select de mascotas
        llenarMascotasPorCliente(dueñoSelect.value);
    });
});

async function llenarClientes() {
    try {
        // Obtén la lista de clientes desde tu servicio
        const clientes = await clientServices.listaClientes();

        // Limpia cualquier opción previa en el select
        dueñoSelect.innerHTML = '<option value="">Seleccionar cliente</option>';

        // Agrega cada cliente como una opción en el select
        clientes.forEach((cliente) => {
            var option = document.createElement('option');
            option.value = cliente.dueño; // Puedes ajustar esto según la estructura de tu cliente
            option.text = cliente.dueño;
            dueñoSelect.add(option);
        });
    } catch (error) {
        console.error('Error al obtener la lista de clientes', error);
    }
}

// Función para llenar el select de mascotas según el cliente seleccionado
async function llenarMascotasPorCliente(clienteId) {
    try {
        // Obtén la lista de mascotas asociadas al cliente desde tu servicio
        const mascotas = await clientServices.listaMascotasPorCliente(clienteId);

        // Limpia cualquier opción previa en el select de mascotas
        mascotaSelect.innerHTML = '<option value="">Seleccionar mascota</option>';

        // Agrega cada mascota como una opción en el select de mascotas
        mascotas.forEach((cliente) => {
            var option = document.createElement('option');
            option.value = cliente.mascota; // Puedes ajustar esto según la estructura de tu mascota
            option.text = cliente.mascota;
            mascotaSelect.add(option);
        });
    } catch (error) {
        console.error('Error al obtener la lista de mascotas por cliente', error);
    }
}

// Obtén referencia al elemento del select de emplados
var empleadoSelect = document.getElementById('empleadoSelect');

// Llena el select con los emplados al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    llenarEmpleados();
});

async function llenarEmpleados() {
    try {
        // Obtén la lista de emplados desde tu servicio
        const empleados = await clientServices.listaEmpleados();

        // Limpia cualquier opción previa en el select
        empleadoSelect.innerHTML = '<option value="">Seleccionar empleado</option>';

        // Agrega cada emplado como una opción en el select
        empleados.forEach((empleado) => {
            var option = document.createElement('option');
            option.value = empleado.nombre; // Puedes ajustar esto según la estructura de tu empleado
            option.text = empleado.nombre;
            empleadoSelect.add(option);
        });
    } catch (error) {
        console.error('Error al obtener la lista de emplados', error);
    }
}

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
    const empleado = document.querySelector("[data-empleado]").value;
    const entrada = document.querySelector("[data-entrada]").value;
    const salida = document.querySelector("[data-salida]").value;
    const servicio = document.querySelector("[data-servicio]").value;
    const total = totalCosto;

    clientServices
        .crearCita(id, mascota, dueño, empleado, entrada, salida, servicio, total)
        .then(() => {
            window.location.href = "../Screens/citas.html";
        })
        .catch((err) => console.log(err));
});