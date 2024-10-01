const digitSegments = [
    [true, true, true, false, true, true, true], 
    [false, false, true, false, false, true, false], 
    [true, false, true, true, true, false, true], 
    [true, false, true, true, false, true, true], 
    [false, true, true, true, false, true, false], 
    [true, true, false, true, false, true, true], 
    [true, true, false, true, true, true, true], 
    [true, false, true, false, false, true, false], 
    [true, true, true, true, true, true, true], 
    [true, true, true, true, false, true, true] 
];

function createDigit() {
    const digit = document.createElement('div');
    digit.className = 'digit';
    for (let i = 0; i < 7; i++) {
        const segment = document.createElement('div');
        segment.classList.add('segment');
        if (i === 0) segment.classList.add('top', 'horizontal');
        else if (i === 1) segment.classList.add('top-left', 'vertical');
        else if (i === 2) segment.classList.add('top-right', 'vertical');
        else if (i === 3) segment.classList.add('middle', 'horizontal');
        else if (i === 4) segment.classList.add('bottom-left', 'vertical');
        else if (i === 5) segment.classList.add('bottom-right', 'vertical');
        else if (i === 6) segment.classList.add('bottom', 'horizontal');
        digit.appendChild(segment);
    }
    return digit;
}

function createColon() {
    const colon = document.createElement('div');
    colon.className = 'colon';
    colon.textContent = ':';
    return colon;
}

function generateTimer() {
    const timer = document.getElementById('timer');
    const digit1 = createDigit();
    const digit2 = createDigit();
    const colon = createColon();
    const digit3 = createDigit();
    const digit4 = createDigit();

    timer.appendChild(digit1);
    timer.appendChild(digit2);
    timer.appendChild(colon);
    timer.appendChild(digit3);
    timer.appendChild(digit4);
}

function setDigit(digitElement, number) {
    const segments = digitElement.querySelectorAll('.segment');
    const segmentConfig = digitSegments[number];
    segments.forEach((segment, index) => {
        segment.classList.toggle('on', segmentConfig[index]);
    });
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let sec = seconds % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    sec = sec < 10 ? '0' + sec : sec;

    return minutes + sec;
}

function startTimer(duration) {
    let timer = duration;
    let interval = setInterval(() => {
        const timeStr = formatTime(timer);
        const digits = document.querySelectorAll('.digit');

        for (let i = 0; i < digits.length; i++) {
            setDigit(digits[i], parseInt(timeStr[i]));
        }

        if (--timer < 0) {
            clearInterval(interval);
            askForTime();
        }
    }, 1000);
}

function askForTime() {
    let userInput = prompt("Введите время для таймера в секундах:", "60");
    if (userInput !== null && !isNaN(userInput)) {
        let startTime = parseInt(userInput, 10);
        startTimer(startTime);
    } else {
        alert("Пожалуйста, введите корректное число.");
        askForTime();
    }
}

window.onload = function () {
    generateTimer();
    askForTime();   
};