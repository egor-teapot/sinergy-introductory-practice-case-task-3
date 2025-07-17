const slider = document.body.querySelector('.slider');
const slide = document.body.querySelector('.slider__slide');
const sliderBtnLeft = document.body.querySelector('.slider-button__left');
const sliderBtnRight = document.body.querySelector('.slider-button__right');
const currentSlideElem = document.body.querySelector('.slider__current-slide-number')
const listOfDebounceButtons = document.body.querySelectorAll('.button-debounce')

let currentSlide = 1;
const amountOfSlides = slider.childElementCount;
const shiftStep = slide.offsetWidth;
let position = shiftStep*-1;

slider.style.transition = "none";
slider.style.transform = `translate(-${shiftStep}px, 0)`;

sliderBtnLeft.addEventListener('click', () => {
    position += shiftStep;
    currentSlide += -1;

        if(currentSlide === 0) {
            currentSlide = amountOfSlides-2;
            setTimeout(() => {
                position = (shiftStep*(amountOfSlides-2))*-1;
                slider.style.transition = "none";
                slider.style.transform = `translate(${position}px, 0)`;
                currentSlideElem.innerHTML = currentSlide;
            }, 200);
        } 

    slider.style.transition = "0.2s ease";
    slider.style.transform = `translate(${position}px, 0)`;
    currentSlideElem.innerHTML = currentSlide;
});

sliderBtnRight.addEventListener('click', () => {
    position += -shiftStep;
    currentSlide += 1;

        if(currentSlide === amountOfSlides-1) {
                currentSlide = 1;
            setTimeout(() => {
                position = shiftStep*-1;
                slider.style.transition = "none";
                slider.style.transform = `translate(${position}px, 0)`;
                currentSlideElem.innerHTML = currentSlide;
            }, 200);
        } 

    slider.style.transition = "0.2s ease";
    slider.style.transform = `translate(${position}px, 0)`;
    currentSlideElem.innerHTML = currentSlide;
})

listOfDebounceButtons.forEach(DOMelem => {
    DOMelem.addEventListener('click', () => {
        DOMelem.classList.add('no-click-events');
        setTimeout(() => {
            DOMelem.classList.remove('no-click-events');
        }, 200);
    })
})