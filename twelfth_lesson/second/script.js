const buttonContainer = document.getElementById('buttonContainer');

buttonContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonNumber = event.target.getAttribute('data-button');
        alert(`Button ${buttonNumber} was clicked!`);
    }
});
