const images = document.querySelectorAll('.dropdown, .titulo, .dentro, .dentro1, .reserva, .logo');

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('button, h2, div, section, img');

        image.classList.toggle('unset', entry.isIntersecting);

    });
}

const options ={
    root: null,
    rootMargin: '0px',
    threshold: 0
}

const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image =>{
    observer.observe(image);
})


//----------PRIMER CARRUSELL----------//
const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");



btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 4000);

let operation = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1){
        counter = 0;
        operation = 0;
        slider.style.transform = `translateX(-${operation}%)`;
        slider.style.transition = "none"
        return;
    } 
    counter++;
    operation = operation + widthImg;
    slider.style.transform = `translateX(-${operation}%)`;
    slider.style.transition = "all ease .6s";
}

function moveToLeft() {
    counter--;
    if (counter < 0){
        counter = sliderSection.length-1;
        operation = widthImg * (sliderSection.length-1)
        slider.style.transform = `translateX(-${operation}%)`;
        slider.style.transition = "none"
        return;
    } 
    operation = operation - widthImg;
    slider.style.transform = `translateX(-${operation}%)`;
    slider.style.transition = "all ease .6s"; 
}

//----------SEGUNDO CARRUSELL----------//

const btnLeft1 = document.querySelector(".btn-left1"),
      btnRight1 = document.querySelector(".btn-right1"),
      slider1 = document.querySelector("#slider1"),
      sliderSection1 = document.querySelectorAll(".slider-section1");



btnLeft1.addEventListener("click", e => moveToLeft1())
btnRight1.addEventListener("click", e => moveToRight1())

setInterval(() => {
    moveToRight1()
}, 4000);

let operation1 = 0,
    counter1 = 0,
    widthImg1 = 100 / sliderSection1.length;

function moveToRight1() {
    if (counter1 >= sliderSection1.length-1){
        counter1 = 0;
        operation1 = 0;
        slider1.style.transform = `translateX(-${operation1}%)`;
        slider1.style.transition = "none"
        return;
    } 
    counter1++;
    operation1 = operation1 + widthImg1;
    slider1.style.transform = `translateX(-${operation1}%)`;
    slider1.style.transition = "all ease .6s";
}

function moveToLeft1() {
    counter1--;
    if (counter1 < 0){
        counter1 = sliderSection1.length-1;
        operation1 = widthImg1 * (sliderSection1.length-1)
        slider1.style.transform = `translateX(-${operation1}%)`;
        slider1.style.transition = "none"
        return;
    } 
    operation1 = operation1 - widthImg1;
    slider1.style.transform = `translateX(-${operation1}%)`;
    slider1.style.transition = "all ease .6s"; 
}