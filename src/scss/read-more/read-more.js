const aboutCompanyButton = document.querySelector('.read-more--about-company')
const aboutCompanyText = document.querySelector('.about-company__text')

const partnerButton = document.querySelector('.partner__read-more')
const partnerText = document.querySelector('.slider__wrap--partner')

const repairButton = document.querySelector('.repair__read-more')
const repairText = document.querySelector('.slider__wrap--repair')

aboutCompanyButton.addEventListener('click', ()=>{
    aboutCompanyButton.classList.toggle('read-more--open')
    aboutCompanyText.classList.toggle('about-company--open')

    if (aboutCompanyButton.classList.contains('read-more--open')) {
        aboutCompanyButton.textContent = 'Скрыть'
    } else {
        aboutCompanyButton.textContent = 'Читать далее'
    }
})

partnerButton.addEventListener('click', ()=>{
    partnerButton.classList.toggle('read-more--open')
    partnerText.classList.toggle('partner--open')

    if (partnerButton.classList.contains('read-more--open')) {
        partnerButton.textContent = 'Скрыть'
    } else {
        partnerButton.textContent = 'Показать все'
    }
})

repairButton.addEventListener('click', ()=>{
    repairButton.classList.toggle('read-more--open')
    repairText.classList.toggle('repair--open')

    if (repairButton.classList.contains('read-more--open')) {
        repairButton.textContent = 'Скрыть'        
    } else {
        repairButton.textContent = 'Показать все'
    }
    
})