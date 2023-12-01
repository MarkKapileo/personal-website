let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex + 2) % totalSlides; // Show 2 images at a time
    showSlide(currentIndex);
}
if (currentIndex === 0) {
    setTimeout(() => showSlide(currentIndex), 500);
}
function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex - 2 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
