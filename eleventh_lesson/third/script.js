function getRandomImage() {
    const totalImages = 9;
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    const imagePath = `img/${randomIndex}.png`;

    return imagePath;
}

function updateImage() {
    const randomImage = document.getElementById('randomImage');
    randomImage.src = getRandomImage();
}


window.onload = updateImage;

const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', updateImage);