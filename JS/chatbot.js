document.addEventListener("DOMContentLoaded", function () {
    const menuLateral = document.querySelector(".menu-lateral");
    const barraLateral = document.querySelector(".barra-lateral");
    const botonAbrirCerrar = menuLateral.querySelector("#abrir-cerrar");
    const botonAvirtual = document.getElementById("avirtual");
    const contenedorLateral = document.getElementById("contenedor-lateral");
    barraLateral.style.display = "none";
    botonAbrirCerrar.style.display= "none";
    let barraLateralAbierta = false;
    let estiloContenedorLateral = contenedorLateral.style.maxHeight = "280px";

    function guardarBarraLateral() {
        barraLateralAbierta = !barraLateralAbierta;
        
        if (barraLateralAbierta) {
           
            barraLateral.style.display = "flex";
            botonAbrirCerrar.style.display = "flex";
            estiloContenedorLateral = contenedorLateral.style.maxHeight = "100vh";
            botonAvirtual.style.background = "url('../img/perrito_profesor_abierto.png') 50% / cover no-repeat";
            
        } else {
            
            barraLateral.style.display = "none";
            botonAbrirCerrar.style.display = "none";
            estiloContenedorLateral = contenedorLateral.style.maxHeight = "280px";
            botonAvirtual.style.background = "url('../img/perrito_profesor.png') 50% / cover no-repeat";
                      
        }
    }
    

    botonAbrirCerrar.addEventListener("click", guardarBarraLateral);
    botonAvirtual.addEventListener("click", guardarBarraLateral);
});


document.addEventListener("DOMContentLoaded", function () {
    const inputPregunta = document.getElementById("pregunta");
    const areaTexto = document.querySelector(".info-chatbot");
    const botonEnviar = document.getElementById("boton-enviar");
  
    function enviarPregunta() {
      const pregunta = inputPregunta.value;
      areaTexto.innerText = pregunta;
      inputPregunta.value = "";
    }
  
    // Agrega el evento clic al botón
    botonEnviar.addEventListener("click", enviarPregunta);
  
    // Agrega el evento keydown al campo de entrada
    inputPregunta.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        enviarPregunta();
      }
    });
  });
  


