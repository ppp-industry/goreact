const swiperBenefits = new Swiper ('.benefits-slider', {
    speed: 800,
    slidesPerView: 2,
    loop: true,
    autoplay: true,
    spaceBetween: 32,
    navigation: {
        nextEl: '.benefits-next',
        prevEl: '.benefits-prev',
    },
    breakpoints: {
        686: {

        },
    }
})

const accordions = document.querySelectorAll('.faq__item');

accordions.forEach( item => {

    item.addEventListener('click', function () {

        this.classList.toggle('active');

    })
});