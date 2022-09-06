const burger = document.querySelector('.menu-btn');
const header = document.querySelector('.header');

burger.addEventListener('click', (e) => {
    e.preventDefault();

    burger.classList.toggle('active');

    header.classList.toggle('open');

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (header.classList.contains('open')) {
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        document.querySelector('body').style.overflowY = 'auto';
    }
})

const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', () => {
    header.classList.remove('open');
    burger.classList.remove('active');
});

const swiperBenefits = new Swiper ('.benefits-slider', {
    speed: 800,
    slidesPerView: 2,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.benefits-next',
        prevEl: '.benefits-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 17,
            slidesPerView: 1.1,
        },
        481: {
            spaceBetween: 32,
            slidesPerView: 1.5,
        },
        769: {
            spaceBetween: 32,
            slidesPerView: 2,
        },
    }
})

const accordions = document.querySelectorAll('.faq__item');

accordions.forEach( item => {

    item.addEventListener('click', function () {

        this.classList.toggle('active');

    })
});