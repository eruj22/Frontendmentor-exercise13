const slider = document.getElementById('slider');
const slides = slider.getElementsByClassName('slide');
const currentSlide = slider.getElementsByClassName('current');

// slider

window.onload = function() {
    const nextBtn = document.querySelector('.btn-right');
    const prevBtn = document.querySelector('.btn-left');

    nextBtn.addEventListener('click', function() {
        nextSlide();
    });
    prevBtn.addEventListener('click', function() {
        prevSlide();
    });
    
}

let slideNumber = 0;
function nextSlide() {
    currentSlide[0].classList.remove('current');
    if (slideNumber == (slides.length - 1)) {
        slideNumber = 0;
    } else {
        slideNumber += 1;
    }
    slides[slideNumber].classList.add('current');
}

function prevSlide() {
    currentSlide[0].classList.remove('current');
    if (slideNumber == 0) {
        slideNumber = slides.length - 1;
    } else {
        slideNumber -= 1;
    }
    slides[slideNumber].classList.add('current');
}

// mobile navigation
const nav = document.querySelector('.nav');
const btnToggle = document.querySelector('.burger-toggle');

btnToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});
