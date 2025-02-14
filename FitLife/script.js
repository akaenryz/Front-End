// Carrossel de Depoimentos
let testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial() {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[index].classList.add('active');
    index = (index + 1) % testimonials.length;
}
setInterval(showTestimonial, 3000);

// Timer de Oferta Especial
let timeLeft = 300;
let timerElement = document.getElementById('timer');

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = 'Expirado';
    }
}
let timerInterval = setInterval(updateTimer, 1000);

// Carrossel de Produtos (Scroll horizontal)
document.addEventListener('DOMContentLoaded', () => {
    let productSlider = document.querySelector('.product-slider');
    productSlider.addEventListener('wheel', (event) => {
        event.preventDefault();
        productSlider.scrollLeft += event.deltaY;
    });

    // Alternância de modo escuro/claro
    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        themeToggle.textContent = document.body.classList.contains('light-mode') ? 'Modo Escuro' : 'Modo Claro';
    });
});
