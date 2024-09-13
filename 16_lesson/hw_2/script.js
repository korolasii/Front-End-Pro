let slider = document.getElementById('slider');
let slides = document.querySelectorAll('.slide');
let prevButton = document.getElementById('arrow_left');
let nextButton = document.getElementById('arrow_right');
let dotsContainer = document.getElementById('dots');
let dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let totalSlides = slides.length;

slider.style.width = `${totalSlides * 500}px`;


for (let i = 0; i < totalSlides; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dot.classList.add(`dot${i}`);
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
}

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 500}px)`;
    updateButtons();
    updateDots();
}

function updateButtons() {
    prevButton.classList.toggle('hidden', currentIndex === 0);
    nextButton.classList.toggle('hidden', currentIndex === totalSlides - 1);
}

function updateDots() {
    document.querySelectorAll('.dot').forEach(dot => {
        dot.classList.remove('active');
    });
    document.querySelector(`.dot${currentIndex}`).classList.add('active');
}

nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

dotsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('dot')) {
        currentIndex = parseInt(event.target.classList[1].slice(-1));
        updateSliderPosition();
    }
});

updateSliderPosition();