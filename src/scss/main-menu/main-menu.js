
const bodyPage = document.querySelector('.body')

// Кнопки закрыть
const buttonMenuClose = document.querySelector('.main-menu__close')
const buttonApplicationClose = document.querySelector('.application__close')
const buttonCallClose = document.querySelector('.call__close')

// Кнопки открыть
const buttonBurger = document.querySelector('.button--burger')
const buttonMessage = document.querySelectorAll('.button--message')
const buttonCall = document.querySelectorAll('.button--tel')

// Обертки меню
const allWrap = '.main-menu'
const allBlock = document.querySelectorAll(allWrap)


function openBlock (div){
    let mainBlock = div.closest(allWrap)
    let childBlock = mainBlock.children[0]
    mainBlock.style.zIndex = "50"
    mainBlock.style.opacity = "1"
    childBlock.style.transform = "translate(0%)"
    bodyPage.style.overflow = "hidden"
    closeBlock (mainBlock)
}

function closeBlock (div) {
    for(let i =0; i < allBlock.length; i++){
        if(allBlock[i] !== div ){
            allBlock[i].style =''
            allBlock[i].children[0].style =''
        }
    }
}

/*--------------- Открытие блоков-----------------*/
// клик по бургеру/меню
buttonBurger.addEventListener('click', () => {
    openBlock (buttonMenuClose)   
})


window.addEventListener('click', (e)=>{
    // при нажатии на кнопки сообщения
    for (let i = 0; i < buttonMessage.length; i++) {
        if (e.target === buttonMessage[i]) {
            openBlock (buttonApplicationClose)
        }        
    }

    // при нажатии на кнопки звонка
    for (let i = 0; i < buttonCall.length; i++) {
        if (e.target === buttonCall[i]) {
            openBlock (buttonCallClose)
        }        
    }

    // при нажатии на обертку
    for (let i = 0; i < allBlock.length; i++) {
        if (e.target === allBlock[i]) {
            allBlock[i].style =''
            allBlock[i].children[0].style = ''
            bodyPage.style = ''
        }        
    }
})

/*--------------- Закрытие блоков-----------------*/

buttonMenuClose.addEventListener('click', () => {
    let mainBlock = buttonMenuClose.closest(allWrap)
    let childBlock = mainBlock.children[0]
    mainBlock.style = ''
    childBlock.style = ''
    bodyPage.style = ''
})
buttonApplicationClose.addEventListener('click', () => {
    let mainBlock = buttonApplicationClose.closest(allWrap)
    let childBlock = mainBlock.children[0]
    mainBlock.style = ''
    childBlock.style = ''
    bodyPage.style = ''
})

buttonCallClose.addEventListener('click', () => {
    let mainBlock = buttonCallClose.closest(allWrap)
    let childBlock = mainBlock.children[0]
    mainBlock.style = ''
    childBlock.style = ''
    bodyPage.style = ''
})