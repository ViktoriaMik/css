const upButton = document.getElementById('up-button')
const downButton = document.getElementById('down-button')
const sidebar = document.querySelector('.sidebar')
const mainSLide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSLide.querySelectorAll('div').length
const height = container.clientHeight

sidebar.style.top = `-${(slidesCount-1) * 100}vh`
let activeSlider = 0;

upButton.addEventListener('click', () => {
    changeSlide('up')
})
downButton.addEventListener('click', () => {
    changeSlide('down')
})


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlider++
        if (activeSlider === slidesCount) {
            activeSlider = 0
        }
    } else if (direction === 'down') {
        activeSlider--
        if (activeSlider < 0) {
            activeSlider = slidesCount - 1
        }
    }
    mainSLide.style.transform = `translateY(-${activeSlider * height}px)`
    sidebar.style.transform = `translateY(${activeSlider * height}px)`
}
