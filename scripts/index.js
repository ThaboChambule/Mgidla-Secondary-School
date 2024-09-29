let slideIndex = 0;
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        dots[index].classList.remove('active');
    });
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
    setTimeout(showSlides, 2500);
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

showSlides();
function forgotPassword() {
    alert('Please contact support for login details.');
}

