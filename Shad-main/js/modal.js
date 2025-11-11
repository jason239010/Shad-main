// Función para obtener la fecha actual en formato DD-MM-AAAA
function obtenerFechaFormateada() {
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, '0'); // Día con dos dígitos (01, 02, etc.)
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos (01, 02, etc.)
    const anio = fechaActual.getFullYear();
    return `${dia}-${mes}-${anio}`;
  }
  
  // Función para asignar la fecha formateada a elementos HTML que comienzan con el ID "fecha"
  function asignarFechas() {
    const elementosFecha = document.querySelectorAll("[id^='fecha']"); // Seleccionar elementos cuyo ID empieza con "fecha"
    elementosFecha.forEach(elemento => {
      elemento.innerHTML = obtenerFechaFormateada(); // Actualizar el contenido HTML de cada elemento con la fecha
    });
  }
  
  
  // Esperar a que el contenido del DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', function() {
    asignarFechas(); // Asignar la fecha a los elementos correspondientes
  
    // Establecer la fecha en un elemento específico (si existe)
    const elementoFecha = document.getElementById('fecha');
    if (elementoFecha) {
      elementoFecha.innerHTML = obtenerFechaFormateada();
    }
  
    // Lógica para manejar selectores de estilo "selectize" usando jQuery
    $(document).ready(function() {
      $('.selectize-input').click(function() { // Mostrar/ocultar el menú desplegable al hacer clic en el input
        $('.selectize-dropdown').toggle();
      });
  
      $('.selectize-dropdown-content .option').click(function() { // Al hacer clic en una opción:
        const selectedText = $(this).text(); 
        $('.selectize-input input').val(selectedText); // Asignar el texto seleccionado al input
        $('.selectize-dropdown').hide(); // Ocultar el menú desplegable
      });
    });
  });