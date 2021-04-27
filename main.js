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
const menuBtn = document.querySelector('.burger-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuOpen = false;
    }
});

// remove the navigation when we click a link
// navLinks.forEach(link, () => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('open');
//     })
// })