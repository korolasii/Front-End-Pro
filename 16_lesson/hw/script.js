let slider = document.getElementById('slider');
let countSlide = parseInt(prompt("Enter 3 or more count of slide (Only number!):"));

checkSlide();
addSlide();

let slides = document.querySelectorAll('.slide');
let prevButton = document.getElementById('arrow_left');
let nextButton = document.getElementById('arrow_right');
let dotsContainer = document.getElementById('dots');
let dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let totalSlides = slides.length;

updateDots();
updateSliderPosition();

function checkSlide() {
    while (isNaN(countSlide) || countSlide < 3) {
        countSlide = parseInt(prompt("Enter 3 or more count of slide (Only number!):"));
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addSlide() {
    let prevColor = null;
    for (let i = 0; i < countSlide; i++) {
        let slide = document.createElement('div');
        slide.classList.add('slide');
        slide.classList.add(`slide${i}`);

        let newColor;
        do {
            newColor = getRandomColor();
        } while (newColor === prevColor);

        slide.style.backgroundColor = newColor;
        prevColor = newColor;

        slider.appendChild(slide);
    }
    slider.style.width = `${countSlide * 500}px`;
}

function updateDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        dot.classList.add(`dot${i}`);
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }
}

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 500}px)`;
    updateButtons();
    updateDotsActiveState();
}

function updateButtons() {
    prevButton.classList.toggle('hidden', currentIndex === 0);
    nextButton.classList.toggle('hidden', currentIndex === totalSlides - 1);
}

function updateDotsActiveState() {
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
