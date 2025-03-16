//MENU RESPONSIVE
const toggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelector(".menu-links");

toggle.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
});

//IDIOMAS
document.getElementById('idiomas-btn').addEventListener('click', function() {
    document.querySelector('.icono').classList.toggle('rotar');
    // setInterval(document.querySelector('.icono').classList.remove('rotar'),800);

    // document.querySelector('.rotar').classList.remove('rotar')
});

document.addEventListener("DOMContentLoaded", () => {
    const idiomasBtn = document.querySelector("#idiomas-btn");
    const idiomasMenu = document.querySelector(".idiomas-menu");

    idiomasBtn.addEventListener("click", () => {
        idiomasMenu.style.display = idiomasMenu.style.display === "block" ? "none" : "block";
    });

    // document.addEventListener("click", (event) => {
    //     if (!idiomasMenu.contains(event.target) && !idiomasBtn.contains(event.target)) {
    //     idiomasMenu.style.display = "none";
    //     }
    // });
});
