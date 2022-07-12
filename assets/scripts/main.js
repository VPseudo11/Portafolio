import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const btnMenu = document.getElementById('nav-toggle')
const heroMenu = document.getElementById('hero__menu')
const sections = document.querySelectorAll('section[id]')

btnMenu.addEventListener('click', function () {
    heroMenu.classList.toggle('hero__menu__visible')
})

heroMenu.addEventListener('click', function (e) {
    if (e.target.matches('.hero_nav_link')) {
        heroMenu.classList.remove('hero__menu__visible')
    }
})

/* swiper */

const swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});