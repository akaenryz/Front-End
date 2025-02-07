// Função para alternar entre os modos
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Código do carrossel (Passar para o lado automaticamente com efeito suave)
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function changeSlide(direction) {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
}

// Iniciar o carrossel
function startCarousel() {
    setInterval(() => changeSlide(1), 3000); // Troca a cada 3 segundos
}

document.addEventListener("DOMContentLoaded", () => {
    items[currentIndex].classList.add('active');
    startCarousel();
});
