function mostrarMensaje(message, type, element) {
    
    // Incluyo (element) para que tome el parametro que recibe la funcion 
    // (element) es el elemento donde se va a desplegar el mensaje
    const sign = document.getElementById(element); 

    sign.innerText = message;

    switch (type) {
        case "error":
            sign.classList.add("alert-danger");
            sign.classList.remove("alert-success");
            break;
        case "success":
            sign.classList.add("alert-success");
            sign.classList.remove("alert-danger");
            break;
    }

     
    /* Utilizando setTimeout -- Borra el mensaje luego de 3 segundos */
    setTimeout(function () {
        sign.classList.remove("alert-success");
        sign.classList.remove("alert-danger");
        sign.innerText = "";
    }, 3000); // 3000 milliseconds = 3 seconds

}