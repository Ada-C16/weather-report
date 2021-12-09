const tempDisplay = document.getElementById("temperatureDisplay");
const skyDisplay = document.getElementById("topDisplay");
const groundDisplay = document.getElementById("bottomDisplay");
const cityInput = document.getElementById("mutableSubHeader");

tempDisplay.textContent = 70;
skyDisplay.textContent = "☀️☀️☀️☀️☀️☀️☀️☀️☀️";
groundDisplay.textContent ="🌱🌱🌱🌱🌱🌱🌱🌱";
cityInput.textContent = "My Hometown"

let temperature = 70;

const registerEventHandlers = () => {
    const upArrow = document.querySelector('#upArrow');
    const downArrow = document.querySelector('#downArrow');
    const selectWeather = document.querySelector('#dropdownButton');
    const citySubmission = document.querySelector('#hometownForm');

    upArrow.addEventListener("click", increaseTemp);
    downArrow.addEventListener("click", decreaseTemp);
    selectWeather.addEventListener("change", skyStateSelect);
    citySubmission.addEventListener("submit", changeCityName);
}

const increaseTemp = () => {
    temperature +=1;
    tempDisplay.textContent = temperature;
    mutableGround(temperature);
}

const decreaseTemp = () => {
    temperature -=1;
    tempDisplay.textContent = temperature;
    mutableGround(temperature);
}

const mutableGround = (temperature) => {
    groundDisplay.textContent = "🌱🌱🌱🌱🌱🌱🌱🌱";
    if (temperature > 80) {
        groundDisplay.textContent = "🌵🌵🌵🌵🌵🌵🌵"
    }
    if (temperature < 60) {
        groundDisplay.textContent = "💧💧💧💧💧💧💧"
    }
    if (temperature < 32) {
        groundDisplay.textContent = "🏔️🏔️🏔️🏔️🏔️🏔️🏔️🏔️"
    }
}

const skyStateSelect = () => {
    let select = document.getElementById('dropdownButton');
    let skyState = select.options[select.selectedIndex].value;
    let weatherDisplay = "Weather Display"
    if (skyState == "sunny") {
        weatherDisplay = "☀️☀️☀️☀️☀️☀️☀️☀️☀️"
    };
    if (skyState == "cloudy") {
        weatherDisplay ="☁️☁️☁️☁️☁️☁️☁️☁️☁️"
    };
    if (skyState == "snowy") {
        weatherDisplay = "❄️❄️❄️❄️❄️❄️❄️❄️❄️"
    };
    if (skyState =="rainy") {
        weatherDisplay = "🌧🌧🌧🌧🌧🌧🌧"
    }
    skyDisplay.textContent = weatherDisplay;
}

const changeCityName = (submission) => {
    cityInput.textContent = document.getElementById("cityInput").value;
    submission.preventDefault();
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);