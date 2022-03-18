import Swiper, { Pagination } from 'swiper'
Swiper.use([Pagination])

let swiper1 
let swiper2
let swiper3

const getClass = ['.slider--partner','.slider--repair','.slider--price']

function statusSwiper() {
    let swiperStatus = document.querySelector(getClass[0])

    if (window.innerWidth < 768 && swiperStatus.dataset.mobile == "false") {

        swiperStatus.dataset.mobile = "true"

        swiper1 = new Swiper(getClass[0], {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 'auto',
            loop: false,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        })
    }

    if (window.innerWidth >= 768) {
        swiperStatus.dataset.mobile = 'false'
        if (swiperStatus.classList.contains('swiper-container-initialized')) {
            swiper1.destroy()
        }
    }

    swiperStatus = document.querySelector(getClass[1])
    if (window.innerWidth < 768 && swiperStatus.dataset.mobile == "false") {

        swiperStatus.dataset.mobile = "true"

        swiper2 = new Swiper(getClass[1], {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 'auto',
            loop: false,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        })
    }

    if (window.innerWidth >= 768) {
        swiperStatus.dataset.mobile = 'false'
        if (swiperStatus.classList.contains('swiper-container-initialized')) {
            swiper2.destroy()
        }
    }

    swiperStatus = document.querySelector(getClass[2])
    if (window.innerWidth < 768 && swiperStatus.dataset.mobile == "false") {

        swiperStatus.dataset.mobile = "true"

        swiper3 = new Swiper(getClass[2], {
            // Optional parameters
            direction: 'horizontal',
            spaceBetween: 16,
            slidesPerView: 'auto',
            loop: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })
    }

    if (window.innerWidth >= 768) {
        swiperStatus.dataset.mobile = 'false'
        if (swiperStatus.classList.contains('swiper-container-initialized')) {
            swiper3.destroy()
        }
    }
}


window.addEventListener('load', function () {
    statusSwiper()    
});


window.addEventListener('resize', () => {
    statusSwiper()
})
