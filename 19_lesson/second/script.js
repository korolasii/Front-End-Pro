let API_KEY = 'c65401059b0d39a48f2e7dfc2b2e21af'; 
let lat = 50.4501;
let lon = 30.5234;

let currentDateElem = document.getElementById('current-date');
let currentTimeElem = document.getElementById('current-time');
let temperatureElem = document.getElementById('temperature');
let feelsLikeElem = document.getElementById('feels-like');
let weatherDescriptionElem = document.getElementById('weather-description');
let humidityElem = document.getElementById('humidity');
let pressureElem = document.getElementById('pressure');
let windSpeedElem = document.getElementById('wind-speed');
let lastUpdateElem = document.getElementById('last-update');
let refreshBtn = document.getElementById('refresh-btn');

async function getWeather() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    let data = await response.json();
    let weather = data.weather[0].description;
    let temp = Math.round(data.main.temp);
    let feelsLike = Math.round(data.main.feels_like);
    let humidity = data.main.humidity;
    let pressure = data.main.pressure;
    let windSpeed = data.wind.speed;
    temperatureElem.textContent = `${temp}°C`;
    feelsLikeElem.textContent = `${feelsLike}°C`;
    weatherDescriptionElem.textContent = weather;
    humidityElem.textContent = `${humidity}%`;
    pressureElem.textContent = `${pressure} hPa`;
    windSpeedElem.textContent = `${windSpeed} km/h`;
    let now = new Date();
    currentDateElem.textContent = now.toDateString();
    currentTimeElem.textContent = now.toLocaleTimeString();
    lastUpdateElem.textContent = `Last updated: ${now.toLocaleTimeString()}`;
}

getWeather();

refreshBtn.addEventListener('click', getWeather);
setInterval(getWeather, 600000);