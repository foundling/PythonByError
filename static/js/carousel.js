const carousel = document.getElementById('carousel');
const images = carousel.children;
const INTERVAL_MS = 5000;
let start = null;
let currentImage = 0;
carousel.addEventListener('click', advanceManually);
window.requestAnimationFrame(step);

function advanceManually(el) {
    nextImage();
}

function nextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
    start = null;
}

function step(timestamp) {
    if (!start) start = timestamp 
    const timeElapsed = timestamp - start;
    if (timeElapsed >= INTERVAL_MS) {
        nextImage();
    }
    window.requestAnimationFrame(step);

};
