const listaUsuarios = () => fetch("https://fake-api-veterinaria.vercel.app/usuarios").then((respuesta) => respuesta.json());

const listaCitas = () => fetch("https://fake-api-veterinaria.vercel.app/citas").then((respuesta) => respuesta.json());

const listaClientes = () => fetch("https://fake-api-veterinaria.vercel.app/clientes").then((respuesta) => respuesta.json());

const listaEmpleados = () => fetch("https://fake-api-veterinaria.vercel.app/empleados").then((respuesta) => respuesta.json());

const listaMascotasPorCliente = (clienteId) => {
    return fetch(`https://fake-api-veterinaria.vercel.app/clientes?dueño=${clienteId}`).then((respuesta) => respuesta.json());
};

const crearCita = (id, mascota, dueño, empleado, entrada, salida, servicio, total) => {
    return fetch("https://fake-api-veterinaria.vercel.app/citas", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, mascota, dueño, empleado, entrada, salida, servicio, total}),
    });
};

const crearCliente = (dueño, telefono, correo, mascota, raza, edad, rasgo, alergia) => {
    return fetch("https://fake-api-veterinaria.vercel.app/clientes", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({dueño, telefono, correo, mascota, raza, edad, rasgo, alergia}),
    });
};

const crearEmpleado = (nombre, edad, direccion, telefono, correo) => {
    return fetch("https://fake-api-veterinaria.vercel.app/empleados", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, edad, direccion, telefono, correo}),
    });
};

const detalleCita = (id) => {
    return fetch (`https://fake-api-veterinaria.vercel.app/citas/${id}`).then((respuesta) => 
        respuesta.json()
    );
};

const detalleCliente = (id) => {
    return fetch (`https://fake-api-veterinaria.vercel.app/clientes/${id}`).then((respuesta) => 
        respuesta.json()
    );
};

const detalleEmpleado = (id) => {
    return fetch (`https://fake-api-veterinaria.vercel.app/empleados/${id}`).then((respuesta) => 
        respuesta.json()
    );
};

const actualizarCita = (id, mascota, dueño, empleado, entrada, salida, servicio, total) => {
    return fetch(`https://fake-api-veterinaria.vercel.app/citas/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, mascota, dueño, empleado, entrada, salida, servicio, total}),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};

const actualizarCliente = (id, dueño, telefono, correo, mascota, raza, edad, rasgo, alergia) => {
    return fetch(`https://fake-api-veterinaria.vercel.app/clientes/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, dueño, telefono, correo, mascota, raza, edad, rasgo, alergia}),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};

const actualizarEmpleado = (id, nombre, edad, direccion, telefono, correo) => {
    return fetch(`https://fake-api-veterinaria.vercel.app/empleados/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, nombre, edad, direccion, telefono, correo}),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};

const eliminarCita = (id) => {
    return fetch(`https://fake-api-veterinaria.vercel.app/citas/${id}`, {
        method: "DELETE"
    })
};

const eliminarCliente = (id) => {
    return fetch(`https://fake-api-veterinaria.vercel.app/clientes/${id}`, {
        method: "DELETE"
    })
};

const eliminarEmpleado = (id) => {
    return fetch(`https://fake-api-veterinaria.vercel.app/empleados/${id}`, {
        method: "DELETE"
    })
};

export const clientServices = {
    listaUsuarios,
    listaCitas,
    listaClientes,
    listaEmpleados,
    listaMascotasPorCliente,
    crearCita,
    crearCliente,
    crearEmpleado,
    detalleCita,
    detalleCliente,
    detalleEmpleado,
    actualizarCita,
    actualizarCliente,
    actualizarEmpleado,
    eliminarCita,
    eliminarCliente,
    eliminarEmpleado
};