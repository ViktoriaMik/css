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
    img.style.left = offset * 300 + 'px'
    console.log(img.style.left)
    document.querySelector('#container').appendChild(img)
    if (step + 1 === slider.length) {
        step = 0
    } else {
        step++
    }

}
setInterval(() => {
    slide();

}, 1000)

