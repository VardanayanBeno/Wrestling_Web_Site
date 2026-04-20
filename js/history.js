function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('open');
}


let currentIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalImages = images.length;
let interval;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
        slides.style.transition = 'none'; 
        slides.style.transform = `translateX(0)`; 
        setTimeout(() => {
            slides.style.transition = 'transform 3s ease-in-out'; 
            nextSlide(); 
        }, 50); 
    } else {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`; 
    }
}

function startSlider() {
    interval = setInterval(nextSlide, 4000);
}

window.onload = startSlider;
