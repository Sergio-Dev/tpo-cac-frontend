document.addEventListener('DOMContentLoaded', (e) => {
    // Se identifica el botón
    const boton = document.getElementById('enviar');

    boton.addEventListener('click', (e) => {
        // Se identifican los inputs
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const select = document.getElementById('especialidades').value;
        const radius = {
            Paciente: document.getElementById('Paciente'),
            Familiar: document.getElementById('Familiar'),
            Otro: document.getElementById('Otro')
        };
        const mensaje = document.getElementById('mensaje').value;
        
        // Se hacen las validaciones de los campos de nombre y teléfono
        if (nombre.length < 3) {
            return alert('Ingrese un nombre valido');
        } else if (!parseInt(telefono)) {
            return alert('El numero de telefono debe ser un numero');
        } else if (telefono.length < 8) {
            return alert('El numero de telefono debe ser un numero valido');
        }
        // Se recorren los radios y se verifica que este alguno elegido
        let radiusSelected = false;
        for (let check in radius) {
            if (radius[check].checked) {
                radiusSelected = true;
                break;
            }
        }

        if (!radiusSelected) {
            return alert('Debes seleccionar al menos una opcion de motivo de contacto');
        }

        // Se hace la validacion del select, si bien esta validado desde el html, se hace desde el JS por si acaso
        if (select == 'Seleccione especialidad' || select === "") {
            return alert('Por favor selecciona una especialidad');
        }

        // Se valida el textArea
        if (mensaje.length < 10) {
            return alert('Por favor, indicanos brevemente el motivo de tu contacto.');
        }

        alert(`Formulario enviado, te contactaremos al email: ${email} o a tu telefono, muchas gracias!`);

        // Se limpia el formulario
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('Paciente').checked = false;
        document.getElementById('Familiar').checked = false;
        document.getElementById('Otro').checked = false;
        document.getElementById('especialidades').value = '';
        document.getElementById('mensaje').value = '';
    });
});