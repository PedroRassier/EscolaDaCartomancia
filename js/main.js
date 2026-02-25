const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach((acc) => {
  acc.addEventListener('click', function () {
    const item = this.parentElement;
    const content = this.nextElementSibling;
    const icon = this.querySelector('.icon-plus');

    // Toggle active class
    item.classList.toggle('active');

    // Toggle content height
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = 0;
    }
  });
});
// --- CARROSSEL ---
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.getElementById('carousel-dots');

// Criar bolinhas (dots) dinamicamente baseado no número de slides
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  // Esconder todos os slides
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  // Mostrar slide atual
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}
