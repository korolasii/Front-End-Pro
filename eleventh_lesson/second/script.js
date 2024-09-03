const textBlock = document.getElementById('textBlock');
const colorButton = document.getElementById('colorButton')
colorButton.addEventListener('click', function() {
    textBlock.classList.toggle('red-color');
});