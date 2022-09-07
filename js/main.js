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

const
    accordions = document.querySelectorAll('.faq__item'),
    accordionsHeight = [];

accordions.forEach( (item, index) => {
    let content = item.querySelector('.faq__content');
    accordionsHeight.push(content.clientHeight);
    content.style.height = '0';

    item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            content.style.height = '0';
        } else {
            this.classList.add('active');
            content.style.height = accordionsHeight[index] + 'px';
        }

    });
});

const links = document.querySelectorAll('a[href*="#"]');

links.forEach(link => link.addEventListener('click', smoothScroll));

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    document.querySelector('body').style.overflow = 'initial';
    burger.classList.remove('active');
    header.classList.remove('open');

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}