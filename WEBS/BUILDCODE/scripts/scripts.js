/*---------------SERVICIOS-----------------*/
document.addEventListener("DOMContentLoaded", () => {
    const servicios = document.querySelectorAll(".servicio");
    const imagenDinamica = document.getElementById("imagen-dinamica");
    const textoDinamico = document.getElementById("texto-dinamico");
  
    const texto ={
      texto1: "Unifique la visibilidad y el control y automatice las tareas de TI más tediosas con la solución de punto final todo en uno y fácil de usar de BuildCode. Supervise, brinde soporte y controle sus puntos finales independientemente del sistema operativo, desde teléfonos inteligentes hasta servidores. Minimice el tiempo de inactividad e impulse la productividad de los empleados.",
      texto2: "Impulse la eficiencia a través de la automatización lista para usar y brinde la mejor experiencia de usuario final con BuildCode, una solución nativa de la nube. La solución de RMM número uno permite la gestión basada en políticas, la visibilidad y las alertas proactivas, y mucho más. Brinde un servicio rápido y eficaz a sus clientes.",
      texto3: "Administre dispositivos móviles Android y Apple en todos sus sistemas operativos, todo desde una única consola intuitiva. El seguimiento de inventario, el aprovisionamiento sencillo, la gestión de configuración y la resolución de problemas remota de BuildCode MDM garantizan que sus usuarios permanezcan seguros y productivos mientras están en movimiento.",
      texto4: "Proteja los puntos finales remotos e híbridos con la gestión automatizada de parches entre sistemas operativos. Mejore la gestión de parches de día cero y de problemas con un control granular respaldado por alertas y puntuaciones CVE/CVSS. Entregue parches a cualquier punto final conectado, independientemente de la ubicación, mediante la entrega de parches de agente basada en la nube.",
      texto5: "BuildCode Backup es una solución de copia de seguridad nativa de la nube diseñada para la recuperación de ransomware. Las copias de seguridad se cifran en la nube, de forma local y en tránsito, y requieren una nueva autenticación, autenticación multifactor y confirmación de cualquier eliminación. Úsela como lo necesite en cualquier sistema operativo Windows o Mac, archivo, carpeta o imagen.",
    }
    const imagenes = {
      img1: "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:800/h:451/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2024/09/endpoint-management-screenshot.png",
      img2: "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:auto/h:auto/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2024/10/rmm-screenshot.png ",
      img3: "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:auto/h:auto/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2024/10/mdm-screenshot.png",
      img4: "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:auto/h:auto/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2024/10/patching-screenshot.png",
      img5: "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:auto/h:auto/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2024/10/backup-screenshot.png",
    };
  
    servicios.forEach((servicio) => {
      servicio.addEventListener("mouseenter", () => {
        const imgKey = servicio.getAttribute("data-img");
        const textoKey = servicio.getAttribute("data-text");

        imagenDinamica.style.opacity = "0";
        textoDinamico.style.opacity = "0";
        

        imagenDinamica.src = imagenes[imgKey];
        textoDinamico.textContent = texto[textoKey];

        imagenDinamica.style.opacity = "1"; 
        textoDinamico.style.opacity = "1";
      });
    });
  
    // Restaurar imagen por defecto al salir del área de la lista
    document.querySelector(".servicios-it").addEventListener("mouseleave", () => {
      imagenDinamica.src = "./resources/service1.png";
      textoDinamico.textContent = "Creamos sitios web increíbles y funcionales";
    });
    const mediaQuery = window.matchMedia("(max-width: 700px) and (min-width: 330px)");

    function handleHover(event) {
        if (mediaQuery.matches) {
            const imgKey = event.target.getAttribute("data-img");
            const textoKey = event.target.getAttribute("data-text");

            imagenDinamica.src = imagenes[imgKey];
            textoDinamico.textContent = texto[textoKey];

            imagenDinamica.style.opacity = "1";
            textoDinamico.style.opacity = "1";
        }
    }

    function resetContent() {
        if (mediaQuery.matches) {
            imagenDinamica.src = "./resources/service1.png";
            textoDinamico.textContent = "Creamos sitios web increíbles y funcionales";
        }
    }

    servicios.forEach((servicio) => {
        servicio.addEventListener("mouseenter", handleHover);
        servicio.addEventListener("mouseleave", resetContent);
    });
  });
// -----------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("current-year");
  yearSpan.textContent = new Date().getFullYear();

  // Mostrar el botón "Volver arriba" cuando se hace scroll
  const scrollUpButton = document.getElementById("scroll-up");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollUpButton.style.display = "block";
    } else {
      scrollUpButton.style.display = "none";
    }
  });

  // Acción del botón "Volver arriba"
  scrollUpButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

//formulario
function validarFormulario(){
  var correo = document.getElementById("correo").value.trim();
  var asunto=document.getElementById("asunto").value.trim();
  var telefono=document.getElementById("telefono").value.trim();
  var contenido=document.getElementById("contenido").value.trim();
  let valido=true;

  document.getElementById("errorCorreo").textContent="";
  document.getElementById("errorAsunto").textContent="";
  document.getElementById("errorTelefono").textContent="";
  document.getElementById("errorContenido").textContent="";
  //VALIDAR CORREO
  if(correo ===""){
    document.getElementById("errorCorreo").textContent="Error este campo no puede estar vacío";
    valido=false;

  }else if(!correo.includes("@gmail.com")){
    document.getElementById("errorCorreo").textContent="@gmail.com requerido";
    valido=false;
  }else if(correo.length>50){
    document.getElementById("errorCorreo").textContent="Error no puede tener más de 50 carácteres";
    valido=false;
  }else if(correo.length<6){
    document.getElementById("errorCorreo").textContent="Error no puede tener menos de 6 carácteres";
    valido=false;
  }
  //VALIDAR ASUNTO
  if(asunto===""){
    document.getElementById("errorAsunto").textContent="Error, este campo no puede estar vacío";
    valido=false;
  }else if(asunto.length>300){
    document.getElementById("errorAsunto").textContent="error  no más de 988 carácteres";
    valido=false;
  }else if(asunto.length<2){
    document.getElementById("errorAsunto").textContent="Se necesitan más de 1 cáracter";
    valido=false;
  }
  //VALIDAR TELÉFONO
  let regexTelefono = /^[0-9]{9}$/;
  if(!regexTelefono.test(telefono)){
    document.getElementById("errorTelefono").textContent="Error debe tener 9 números"
    valido=false;
  }
  if(telefono===""){
    document.getElementById("errorTelefono").textContent="Error este campo no puede estar vacío";
  }
  //VALIDAR CONTENIDO
  if(contenido===""){
    document.getElementById("errorContenido").textContent="Error, este campo no puede estar vacío";
    valido=false;
  }else if(contenido.length>800){
    document.getElementById("errorContenido").textContent="No se puede más de 800 carácteres";
    valido=false;
  }


  //VALIDAR AL ENVIAR SI TODO ESTÁ BIEN
  if(valido){
    document.getElementById("resultado").textContent="Enviado correctamente";

    document.getElementById("correo").value="";
    document.getElementById("asunto").value="";
    document.getElementById("telefono").value="";
    document.getElementById("contenido").value="";
  }


}

function resetP(){

  document.getElementById("errorCorreo").textContent="";
  document.getElementById("errorAsunto").textContent="";
  document.getElementById("errorTelefono").textContent="";
  document.getElementById("errorContenido").textContent="";
}
