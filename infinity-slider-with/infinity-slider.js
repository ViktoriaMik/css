const slides = document.querySelectorAll('.img-container')

const slider = []
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove()
}
console.log(slider)
let step = 0;
let offset = 0;

function slide() {
    let img = document.createElement('img')
    img.src = slider[step];
    img.classList.add('img-container');
    img.style.left = offset * 400 + 'px'
    document.querySelector('#container').appendChild(img)
    if (step + 1 === slider.length) {
        step = 0
    } else {
        step++
    }
    offset = 1
}


function left() {
    document.onclick = null
    const slidesSecond = document.querySelectorAll('.img-container')
    let offsetForsecond = 0;
    for (let i = 0; i < slidesSecond.length; i++) {
        slidesSecond[i].style.left = offsetForsecond * 300 - 300 + 'px'
        offsetForsecond++
    }
    setTimeout(() => {
        slidesSecond[0].remove()
        slide()
        document.onclick = left
    }, 1000)

}

slide()
slide()
document.onclick = left
