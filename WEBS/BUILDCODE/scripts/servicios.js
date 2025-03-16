document.addEventListener('DOMContentLoaded', function() { 
    // Nos aseguramos de que se ejecute después de que esté el DOM cargado
    var contenedor = document.getElementById("gridComentario");

    contenedor.addEventListener('click', function(event) {
        // Añadimos un EventListener que esté pendiente de cualquier evento de tipo click dentro del contenedor gridComentario
        if (event.target.classList.contains('likeBttn')) {
            // Solo ejecutaremos cuando sean los objetos botones de like
            if (event.target.src.includes('resources/like2.png')) {
                // Switch de src
                event.target.src = 'resources/like.png'; 
            } else {
                event.target.src = 'resources/like2.png';
            }
        }
    });
});

function mostrarFormComent(){
    var form = document.getElementById("formComDdiv");
    var boton = document.getElementById("bttVerForm");
    if (!form.style.display) {
        form.style.display = "none";
    }

    if (form.style.display == "none") {
        form.style.display = "block";
        boton.style.display = "none";
    } else {
        form.style.display = "none";
        boton.style.display = "block";
    }
}

// Valoración comentario
var calificacion = 0;

document.querySelectorAll('.estrella').forEach(estrella => {
    estrella.addEventListener('click', function() {
        calificacion = this.getAttribute('data-value');
        document.querySelectorAll('.estrella').forEach(e => e.style.color = 'black');
        for (let i = 0; i<calificacion; i++) {
            document.querySelectorAll('.estrella')[i].style.color = 'gold';
        }
    });
});

// Nuevo comentario
function aniadirFormulario(){
    var user = document.getElementById("user").value;
    var comentario = document.getElementById("contenido").value;
    
    if(user == ''){
        user = "Anónimo";
    }

    if(comentario == ''){
        window.alert("Comentario Vacío");
    } else {
        const estrellasFinal = document.createElement('div');
        estrellasFinal.classList.add('rating');

        const valoracionF = document.createElement('p');
        valoracionF.classList.add('nota');

        const sinValoracion = document.createElement('p');
        
        for (let i = 0; i<5; i++) {
            if (i<calificacion) {
                valoracionF.innerHTML += '&#9733';
            } else {
                sinValoracion.innerHTML += '&#9733';
            }
        }
        estrellasFinal.appendChild(valoracionF);
        estrellasFinal.appendChild(sinValoracion);

        var contenedor = document.getElementById("gridComentario");
        var nuevoCom = '<div class="comentario"><img class="userPic" src="resources/usuario.png" alt="userProfile"><div class="comentarioUser"><h4>'
        + user + '</h4>' + estrellasFinal.outerHTML + '<p>' + comentario +
        '</p><img class="likeBttn" onclick="darMegusta()" src="resources/like.png" alt="Like"></div></div>';

        contenedor.innerHTML += nuevoCom;

        // Limpiar el formulario
        document.getElementById("user").value = '';
        document.getElementById("contenido").value = '';
        document.querySelectorAll('.estrella').forEach(e => e.style.color = 'black');
        calificacion = 0;
        
        mostrarFormComent();
    }
}
