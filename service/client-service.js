const listaUsuarios = () => fetch("http://localhost:3000/usuarios").then((respuesta) => respuesta.json());

const listaCitas = () => fetch("http://localhost:3000/citas").then((respuesta) => respuesta.json());

const listaClientes = () => fetch("http://localhost:3000/clientes").then((respuesta) => respuesta.json());

const listaEmpleados = () => fetch("http://localhost:3000/empleados").then((respuesta) => respuesta.json());

const crearCita = (id, mascota, dueño, entrada, salida, servicio, total) => {
    return fetch("http://localhost:3000/citas", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, mascota, dueño, entrada, salida, servicio, total}),
    });
};

const crearCliente = (dueño, telefono, correo, mascota, raza, edad, rasgo, alergia) => {
    return fetch("http://localhost:3000/clientes", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({dueño, telefono, correo, mascota, raza, edad, rasgo, alergia}),
    });
};

const crearEmpleado = (nombre, edad, direccion, telefono, correo) => {
    return fetch("http://localhost:3000/empleados", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, edad, direccion, telefono, correo}),
    });
};

const detalleCita = (id) => {
    return fetch (`http://localhost:3000/citas/${id}`).then((respuesta) => 
        respuesta.json()
    );
};

const detalleCliente = (id) => {
    return fetch (`http://localhost:3000/clientes/${id}`).then((respuesta) => 
        respuesta.json()
    );
};

const detalleEmpleado = (id) => {
    return fetch (`http://localhost:3000/empleados/${id}`).then((respuesta) => 
        respuesta.json()
    );
};

const actualizarCita = (id, mascota, dueño, entrada, salida, servicio, total) => {
    return fetch(`http://localhost:3000/citas/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, mascota, dueño, entrada, salida, servicio, total}),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};

const actualizarCliente = (id, dueño, telefono, correo, mascota, raza, edad, rasgo, alergia) => {
    return fetch(`http://localhost:3000/clientes/${id}`, {
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
    return fetch(`http://localhost:3000/empleados/${id}`, {
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
    return fetch(`http://localhost:3000/citas/${id}`, {
        method: "DELETE"
    })
};

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/clientes/${id}`, {
        method: "DELETE"
    })
};

const eliminarEmpleado = (id) => {
    return fetch(`http://localhost:3000/empleados/${id}`, {
        method: "DELETE"
    })
};

export const clientServices = {
    listaUsuarios,
    listaCitas,
    listaClientes,
    listaEmpleados,
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