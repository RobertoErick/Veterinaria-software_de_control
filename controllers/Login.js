import { clientServices } from "../service/client-service.js";

document.addEventListener('DOMContentLoaded', function(){
    const correoInput = document.getElementById('correo');
    const contraseñaInput = document.getElementById('contraseña');

    correoInput.value = '';
    contraseñaInput.value = '';

    document.querySelector('[data-form]').addEventListener('submit', async function(event){
        event.preventDefault();

        const correoValue = correoInput.value;
        const contraseñaValue = contraseñaInput.value;

        try {

            const usuarios = await clientServices.listaUsuarios();

            const usuarioEncontrado = usuarios.find(usuario => usuario.correo === correoValue && usuario.password === contraseñaValue);

            if(usuarioEncontrado) {
                window.location.href = "../Screens/menu_inicial.html"
            } else {
                alert('Credenciales incorrectas, intente nuevamente.');
            }
        } catch(error) {
            console.error('Error al cargar lña base de datos', error);
        }

    })
})