
// JavaScript 


// Funciones para bucle de imagenes.
// Array 
const images = [
    "img/img_ska_001.webp",  
    "img/img_ska_002.webp",  
    "img/img_ska_003.webp",  
    "img/img_ska_004.webp"  
];

// div container usando ID
const gallery = document.getElementById('gallery');   

// elemento inicial
let currentIndex = 0;

// funcion para actualizar las imagenes
function switchImage() {
    // background image
    gallery.style.backgroundImage = `url(${images[currentIndex]})`;

    // index para la imagen siguiente
    currentIndex = (currentIndex + 1) % images.length; 
}

// tiempo
setInterval(switchImage, 3000);

// llamada a la funcion para cargar 
switchImage();




// Para hacer los logos visibles.

const contenedores_logos = document.querySelectorAll(".logos-skills");

contenedores_logos.forEach(
    contenedor =>{
        contenedor.addEventListener("mouseenter", () => {
            contenedor.classList.add("logos-skills-hover");
        });
        
        contenedor.addEventListener("mouseleave", () => {
            contenedor.classList.remove("logos-skills-hover");
        });
    }
);





// Funcion para intercambiar el menu con el boton de hamburguesa.

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.burger-menu');
    menu.classList.toggle('show');            // Toggle la clase 'show' para el bloque menu
    burger.classList.toggle('toggle');        // Toggle la clase 'toggle' para el boton icono de hambuerguesa.
  }
  

