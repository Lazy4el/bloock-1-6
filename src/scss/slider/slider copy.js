import Swiper, { Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

Swiper.use([Pagination])

let swiper
const getClass = ['.slider--partner','.slider--repair','.slider--price']

function statusSwiper(nameMod) {
    let swiperStatus = document.querySelector(nameMod)
    if (window.innerWidth < 768 && swiperStatus.dataset.mobile == "false") {

        swiperStatus.dataset.mobile = "true"


        swiper = new Swiper(nameMod, {
            // Optional parameters
            direction: 'horizontal',

            clickable: true,
            slidesPerView: 1.4,
            spaceBetween: 16,
            setWrapperSize: 240,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                loop: false,
                clickable: true,
            },

            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.4,
                    spaceBetween: 16,
                },
                500: {
                    slidesPerView: 2,
                },
                700: {
                    slidesPerView: 3,
                }
            }
        })
    }

    if (window.innerWidth >= 768) {
        swiperStatus.dataset.mobile = 'false'
        if (swiperStatus.classList.contains('swiper-container-initialized')) {
            swiper.destroy()
        }
    }
}


window.addEventListener('load', function () {


    statusSwiper(getClass[0])
    statusSwiper(getClass[1])

    
});


window.addEventListener('resize', () => {

    statusSwiper(getClass[0] )
    statusSwiper(getClass[1])

})
