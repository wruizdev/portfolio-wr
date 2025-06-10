document.addEventListener("DOMContentLoaded", function(){
  let activated = false;
  

  window.addEventListener("scroll", () => {
    const bloque3 = document.getElementById("habilidadesContainer");

    if (!bloque3){
      console.warn("No se encontró el contenedor con id 'habilidades-contenedor'");
      return;
    } 

    const rect = bloque3.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (!activated && rect.top < windowHeight && rect.bottom > 0) {
      const progressBars = bloque3.querySelectorAll(".progress-bar");

      progressBars.forEach(bar => {
        const percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";
        
      });

      activated = true;
    }
  });
})