
// JavaScript for switching images
// Array of images
const images = [
    "img/img_ska_001.webp",  
    "img/img_ska_002.webp",  
    "img/img_ska_003.webp",  
    "img/img_ska_004.webp" 
    //,  "img/img_ska_005.webp"
];

// Get the div container by ID
const gallery = document.getElementById('gallery');   

// Initial index for images
let currentIndex = 0;

// Function to switch images
function switchImage() {
    // Change the background image
    gallery.style.backgroundImage = `url(${images[currentIndex]})`;

    // Update index for next image
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

// Set interval to change the image every 3 seconds (3000 milliseconds)
setInterval(switchImage, 3000);

// Initial call to display the first image
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
    menu.classList.toggle('show'); // Toggle the 'show' class for the menu
    burger.classList.toggle('toggle'); // Toggle the 'toggle' class for the burger icon
  }
  

