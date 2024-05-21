// Array para almacenar participantes
let participantes = [];

// Función para agregar participante desde el formulario
function agregarParticipante() {
    
    // Uso let para declarar variables
    let nombre = document.getElementById('nombre').value;
    let factura = document.getElementById('factura').value;
    let destino = document.getElementById('destino').value;

    // Acá validar si nombre, factura y destino fueron seleccionados.
    // Si nombre está vacio ó factura no es un numero ó destino está vacio, mando mensaje y no cargo.        
     
    // Aquí agrego la condicion factura === "", porque el isNaN(factura) sigue de largo con un string vacio.
    if (nombre === "" || isNaN(factura) || factura === "" || destino === "") {
        // Para mostrar el mensaje de datos incorrectos
        // Aquí coloco los tres parametros: 
        // mensaje, tipo (error, success), y el elemento donde se va a desplegar el mensaje.       
        mostrarMensaje("¡Ingrese los datos!", "error", "mensaje-participantes");
    } else {
        // Crear objeto participante
        let participante = {nombre, factura, destino};

        // Agrego participante al array con el metodo .push()
        participantes.push(participante);

        // Mostrar participante en tarjeta
        mostrarParticipante(participante);

        // Limpiar formulario
        document.getElementById('nombre').value = '';
        document.getElementById('factura').value = '';
        document.getElementById('destino').value = '';
    }
}

// Función para mostrar participantes en tarjetas
function mostrarParticipante(participante) {
    let participantesLista = document.getElementById('participantesLista');

    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <p><strong>Nombre:</strong> ${participante.nombre}</p>
        <p><strong>Factura:</strong> ${participante.factura}</p>
        <p><strong>Destino:</strong> ${participante.destino}</p>
    `;

    participantesLista.appendChild(card);
}


// Función para realizar el sorteo
function realizarSorteo() {
    if (participantes.length === 0) {
        // Para mostrar mensaje de error: Lo mismo que en el otro, los parametros son (mensaje,tipo,elemento)
        mostrarMensaje('No hay participantes para realizar el sorteo.', "error", "mensaje-sorteo");
        return;
    }
    
    const ganador = participantes[Math.floor(Math.random() * participantes.length)];
    const resultadoSorteo = document.getElementById('resultadoSorteo');
    resultadoSorteo.textContent = `¡Felicitaciones ${ganador.nombre}! Ganaste un ROAD TRIP a ${ganador.destino}.`;
}


// function muestroLoader() = document.getElementById("loaderBtn");
// cargoLoader.addEventListener("click", function() {

//     // Muestro el loader
//     cargoLoader.style.visibility = "visible";
//     cargoLoader.style.opacity = "1";

//     // Desaparece el loader después de 3 segundos
//     setTimeout(function() {
//         cargoLoader.style.visibility = "hidden";
//         cargoLoader.style.opacity = "0";
//     }, 3000); // 3000 milliseconds = 3 seconds
// });