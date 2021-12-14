// State Definer

const state = {
    temperature: 50
};

// Helper functions

const temperatureLogic = (tempUpBackground, gardenBox) => {
    if (state.temperature <= 49) {
        tempUpBackground.className = 'forties';
        gardenBox.textContent = '☃️☃️☃️☃️☃️☃️☃️☃️☃️☃️☃️☃️☃️';
    } else if (50 <= state.temperature && state.temperature <= 59) {
        tempUpBackground.className = 'fifties';
        gardenBox.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else if (60 <= state.temperature && state.temperature <= 69) {
        tempUpBackground.className = 'sixties';
        gardenBox.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (70 <= state.temperature && state.temperature <= 79) {
        tempUpBackground.className = 'seventies';
        gardenBox.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else {
        tempUpBackground.className = 'eighties';
        gardenBox.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    };
};

const weatherLogic = (weather, sky) => {
    if (weather.value === 'sunny') {
        sky.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    } else if (weather.value === 'cloudy') {
        sky.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    } else if (weather.value === 'rainy') {
        sky.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    } else if (weather.value === 'snowy') {
        sky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    }
};

//Event Functions 

const increaseTemperature = () => {
    const tempUp = document.getElementById('temperature')
    state.temperature += 1;
    tempUp.textContent = `${state.temperature}℉`;

    const tempUpBackground = document.querySelector('#temperature')
    const gardenBox = document.getElementById('garden-box')

    temperatureLogic(tempUpBackground, gardenBox)
};

const decreaseTemperature = () => {
    const tempDown = document.getElementById('temperature')
    state.temperature -= 1;
    tempDown.textContent = `${state.temperature}℉`;

    const tempUpBackground = document.querySelector('#temperature')
    const gardenBox = document.getElementById('garden-box')

    temperatureLogic(tempUpBackground, gardenBox)
};

const changeSky = () => {
    const weather = document.querySelector("select")
    const sky = document.getElementById('weather-box')
    weatherLogic(weather, sky)
};

const updateCity = () => {
    const city = document.getElementById('city-name-display')
    const input = document.querySelector('input');
    city.textContent = input.value;
};

const clickReset = () => {
    const city = document.getElementById('city-name-display')
    const input = document.querySelector('input');
    city.textContent = 'Seattle';
    input.value = "Enter City Name";
};

// Event Registrations

const registerEventHandlers = () => {
    const changeTempUp = document.getElementById('temp-up-button');
    changeTempUp.addEventListener('click', increaseTemperature)

    const changeTempDown = document.getElementById('temp-down-button')
    changeTempDown.addEventListener('click', decreaseTemperature)

    const sky = document.querySelector('select')
    sky.addEventListener('change', changeSky)

    const newCity = document.querySelector('input')
    newCity.addEventListener('input', updateCity)

    const resetButton = document.getElementById('reset-button')
    resetButton.addEventListener('click', clickReset)
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);