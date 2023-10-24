// Obtenemos todas las secciones de la página
const sections = document.querySelectorAll('section');

// Variable para realizar un seguimiento de la sección actual
let currentSection = 0;

// Función para cambiar a la siguiente sección
function goToNextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para cambiar a la sección anterior
function goToPreviousSection() {
    if (currentSection > 0) {
        currentSection--;
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
}

// Listener para detectar el desplazamiento hacia abajo
window.addEventListener('wheel', event => {
    if (event.deltaY > 0) {
        // Si el usuario desplaza hacia abajo, vamos a la siguiente sección
        goToNextSection();
    } else if (event.deltaY < 0) {
        // Si el usuario desplaza hacia arriba, vamos a la sección anterior
        goToPreviousSection();
    }
});
