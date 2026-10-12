
/* ==========================================
   EDREDONES LA GUAPA
   Archivo: script.js
========================================== */

// 1. ACTUALIZAR AUTOMÁTICAMENTE EL AÑO DEL FOOTER
const anioActual = document.getElementById("anio");

if (anioActual) {
    anioActual.textContent = new Date().getFullYear();
}


// 2. SELECCIONAR PRODUCTOS PARA CONSULTAR
const botonesConsultar = document.querySelectorAll(".btn-consultar");
const selectorProducto = document.getElementById("producto");

botonesConsultar.forEach((boton) => {
    boton.addEventListener("click", () => {
        const producto = boton.dataset.producto;

        if (selectorProducto && producto) {
            selectorProducto.value = producto;
        }

        const contacto = document.getElementById("contacto");

        if (contacto) {
            contacto.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 3. VALIDAR EL FORMULARIO DE CONTACTO
const formulario = document.getElementById("formularioContacto");

if (formulario) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nombre = document.getElementById("nombre");
        const correo = document.getElementById("correo");
        const telefono = document.getElementById("telefono");
        const producto = document.getElementById("producto");
        const mensaje = document.getElementById("mensaje");

        // Verificar que los campos obligatorios existan
        if (!nombre || !correo || !mensaje) {
            alert("No se encontraron todos los campos del formulario.");
            return;
        }

        // Validar nombre
        if (nombre.value.trim().length < 3) {
            alert("Por favor, ingresa tu nombre completo.");
            nombre.focus();
            return;
        }

        // Validar correo electrónico
        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoCorreo.test(correo.value.trim())) {
            alert("Por favor, ingresa un correo electrónico válido.");
            correo.focus();
            return;
        }

        // Validar mensaje
        if (mensaje.value.trim().length < 5) {
            alert("Por favor, escribe un mensaje un poco más detallado.");
            mensaje.focus();
            return;
        }

        // Mostrar confirmación
        let resumen = "¡Gracias por contactarte con EDREDONES LA GUAPA!\n\n";
        resumen += "Nombre: " + nombre.value.trim() + "\n";
        resumen += "Correo: " + correo.value.trim() + "\n";

        if (telefono && telefono.value.trim() !== "") {
            resumen += "Teléfono: " + telefono.value.trim() + "\n";
        }

        if (producto && producto.value !== "") {
            resumen += "Producto de interés: " + producto.value + "\n";
        }

        resumen += "\nTu formulario fue validado correctamente.";

        alert(resumen);

        formulario.reset();
    });
}


// 4. MENSAJE DE BIENVENIDA EN LA CONSOLA
console.log("¡Bienvenido a EDREDONES LA GUAPA!");
console.log("Calidad, comodidad y estilo para tu dormitorio.");

