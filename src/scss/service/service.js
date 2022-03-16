
const wraps = document.querySelector('.service__menu-wrap').children
const anchors = document.querySelector('.service__menu-wrap').querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", (ev) => {
        ev.preventDefault()
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

for (let wrap of wraps) {
    wrap.addEventListener("click", ()=> {
        for(let remov of wraps) {
            remov.children[0].classList.remove('service__link--active')
        }
        wrap.children[0].classList.add('service__link--active')
    })
}
