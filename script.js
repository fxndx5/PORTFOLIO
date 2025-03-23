
function toggleMenu() {  
  var menu = document.getElementById('menu');
  var banner = document.querySelector('.banner');

  menu.classList.toggle("active");
  
  if (menu.classList.contains("active")) {
    banner.classList.add("blur");
  } else {
    banner.classList.remove("blur");
  }


  document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    var burgerMenu = document.querySelector(".burger-menu");
    var banner = document.querySelector(".banner");
    if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
        menu.classList.remove("active");
        banner.classList.remove("blur");
    }
  });
  document.getElementById("menu").addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('dark-mode');

  const menuLinks = document.querySelectorAll('.menu');
  menuLinks.forEach(link => {
      link.classList.toggle('dark-mode');
  }
  );
  const menuLinks2 = document.querySelectorAll('.navbar a');
    menuLinks2.forEach(link => {
        link.classList.toggle('dark-mode');
        
  });
  const menuLinks3 = document.querySelectorAll('.experience');
    menuLinks3.forEach(link => {
        link.classList.toggle('dark-mode');
        
  });
  const menuLinks4 = document.querySelectorAll('.experience1');
    menuLinks4.forEach(link => {
        link.classList.toggle('dark-mode');
        
  });
  const menuLinks5 = document.querySelectorAll('.experience2');
    menuLinks5.forEach(link => {
        link.classList.toggle('dark-mode');
        
  });
  const menuLinks6 = document.querySelectorAll('.experience3');
    menuLinks6.forEach(link => {
        link.classList.toggle('dark-mode');
        
  });
  
  const menuLinks7 = document.querySelectorAll('.title-project');
    menuLinks7.forEach(link => {
        link.classList.toggle('dark-mode');
        
  });
  const menuLinks8 = document.querySelectorAll('.h1-aboutme');
    menuLinks8.forEach(link => {
        link.classList.toggle('dark-mode');
  });
  const menuLinks9 = document.querySelectorAll('.menu-social-aboutme a');
    menuLinks9.forEach(link => {
        link.classList.toggle('dark-mode');
        
  });
  const menuLinks10 = document.querySelectorAll('#about-me p');
  menuLinks10.forEach(link => {
      link.classList.toggle('dark-mode');
});
const menuLinks11 = document.querySelectorAll('.card');
    menuLinks11.forEach(link => {
        link.classList.toggle('dark-mode');
        
  });
  const menuLinks12 = document.querySelectorAll('.card p');
    menuLinks12.forEach(link => {
        link.classList.toggle('dark-mode');
        
  });
 
// Selecciona el botón de  SUNSET MODE a SUNRISE MODE
const darkModeButton = document.querySelector('.boton-darkmode');
darkModeButton.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
      darkModeButton.textContent = 'Sunrise mode';
  } else {
      darkModeButton.textContent = 'Sunset mode';
  }
  const banner = document.querySelector('.banner');
  banner.classList.toggle('dark-mode');
    
}

//burguer-menu
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");

  function toggleMenu() {
      burgerMenu.classList.toggle("active");
  }

  function closeMenu(event) {
      if (!burgerMenu.contains(event.target)) {
          burgerMenu.classList.remove("active");
      }
  }

  burgerMenu.addEventListener("click", toggleMenu);
  document.addEventListener("click", closeMenu);
});


const bannerImg = document.getElementById('banner-img');

const normalImage = 'sources/emoji2.png';
const hoverImage = 'sources/emoji3.png'; 


bannerImg.addEventListener('mouseover', function() {
    bannerImg.src = hoverImage;
});

bannerImg.addEventListener('mouseout', function() {
    bannerImg.src = normalImage;
});
//efecto cambiar color en CV de  YEARS y EXPERIENCE
document.querySelectorAll(".curriculum-container").forEach(container => {
  let experience = container.querySelector(".experience");
  let yearsText = container.querySelector(".years p");

  if (experience && yearsText) {
    experience.addEventListener("mouseenter", function() {
      yearsText.style.color = "#333";
    });

    experience.addEventListener("mouseleave", function() {
      yearsText.style.color = "";
    });
  }
});



//HOBBIES
// Detecta el scroll y muestra los círculos
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".circulos");
  const circles = document.querySelectorAll(".circulo");

  // Posiciona los círculos fuera de la pantalla inicialmente
  circles.forEach((circle, index) => {
      let direction = index % 2 === 0 ? -200 : 200;
      circle.style.transform = `translateX(${direction}%)`;
      circle.style.opacity = "0";
  });

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              circles.forEach((circle) => {
                  circle.style.transition = "transform 1.5s ease-out, opacity 1.5s";
                  circle.style.transform = "translateX(0)";
                  circle.style.opacity = "1";
              });
          } else {
              circles.forEach((circle, index) => {
                  let direction = index % 2 === 0 ? -200 : 200;
                  circle.style.transform = `translateX(${direction}%)`;
                  circle.style.opacity = "0";
              });
          }
      });
  }, { threshold: 0.3 });

  observer.observe(section);
});

//PORTFOLIO CARD
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  document.addEventListener("click", function (event) {
      let clickedInsideCard = false;

      cards.forEach(card => {
          const arrow = card.querySelector(".arrow");
          const paragraph = card.querySelector("p");

          if (!arrow || !paragraph) return;

          // Si el clic fue dentro de esta tarjeta, manejar el toggle
          if (card.contains(event.target)) {
              clickedInsideCard = true;
              if (arrow === event.target) {
                  const isVisible = paragraph.classList.contains("show");

                  // Cierra todos los párrafos antes de abrir otro
                  closeAllParagraphs();

                  if (!isVisible) {
                      paragraph.style.display = "block";
                      setTimeout(() => paragraph.classList.add("show"), 10);
                      arrow.classList.add("active");
                  }
              }
          }
      });

      // Si el clic fue fuera cualquier .card, cerrar todos los párrafos
      if (!clickedInsideCard) {
          closeAllParagraphs();
      }
  });

  // Función para cerrar todos los párrafos
  function closeAllParagraphs() {
      cards.forEach(card => {
          const paragraph = card.querySelector("p");
          const arrow = card.querySelector(".arrow");

          if (paragraph.classList.contains("show")) {
              paragraph.classList.remove("show");
              arrow.classList.remove("active");
              setTimeout(() => (paragraph.style.display = "none"), 300);
          }
      });
  }
});

//TRADUCTOR LATERAL
function translateToEnglish() {
  var googleTranslateFrame = document.querySelector(".goog-te-combo");
  if (googleTranslateFrame) {
      googleTranslateFrame.value = "en"; // Seleccionar inglés
      googleTranslateFrame.dispatchEvent(new Event("change")); // Simular cambio de selección
  }
}



// VOLVER ARRIBA
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("current-year");
    yearSpan.textContent = new Date().getFullYear();
  
    const scrollUpButton = document.getElementById("scroll-up");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollUpButton.style.display = "block";
      } else {
        scrollUpButton.style.display = "none";
      }
    });
  
    
    scrollUpButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

// Detectar cuando las tarjetas estén visibles en la pantalla
window.addEventListener('scroll', function () {
  const cards = document.querySelectorAll('.card-test');
  const windowHeight = window.innerHeight;

  cards.forEach(function (card) {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight - 100) {
          card.classList.add('active');
      } else {
          card.classList.remove('active');
      }
  });
});

// Testimonios
document.addEventListener("DOMContentLoaded", function () {
  const testContainer = document.querySelector(".testimonials");
  const testContainer2 = document.querySelector(".testimonials-title");

  // Movimiento con el ratón
  let isDown = false;
  let startX;
  let scrollLeft;

  testContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - testContainer.offsetLeft;
      scrollLeft = testContainer.scrollLeft;
  });

  testContainer.addEventListener("mouseleave", () => {
      isDown = false;
  });

  testContainer.addEventListener("mouseup", () => {
      isDown = false;
  });

  testContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - testContainer.offsetLeft;
      const walk = (x - startX) * 2;
      testContainer.scrollLeft = scrollLeft - walk;
  });
  testContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - testContainer.offsetLeft;
      scrollLeft = testContainer.scrollLeft;
  });

  testContainer.addEventListener("mouseleave", () => {
      isDown = false;
  });

  testContainer.addEventListener("mouseup", () => {
      isDown = false;
  });

  testContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - testContainer.offsetLeft;
      const walk = (x - startX) * 2;
      testContainer.scrollLeft = scrollLeft - walk;
  });

  testContainer2.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - testContainer2.offsetLeft;
    scrollLeft = testContainer2.scrollLeft;
});

  testContainer2.addEventListener("mouseleave", () => {
      isDown = false;
  });

  testContainer2.addEventListener("mouseup", () => {
      isDown = false;
  });

  testContainer2.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - testContainer2.offsetLeft;
      const walk = (x - startX) * 2;
      testContainer2.scrollLeft = scrollLeft - walk;
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

