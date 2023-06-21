const swiper = new Swiper('.parties__slider-container', {
    // Optional parameters
    //loop: true,
    //centeredSlides: true,
    fade: true,
    grabCursor: true,
    speed: 400,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: true,
    },

    breakpoints: {
        // when window width is >= 320px
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20
        },

        767.98: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20
        }
    },
});