const tempDisplay = document.getElementById("temperatureDisplay");
const skyDisplay = document.getElementById("topDisplay");
const groundDisplay = document.getElementById("bottomDisplay");
const cityInput = document.getElementById("mutableSubHeader");
const bgDisplay = document.getElementById("gardenBackground");

//document.getElementById("myDiv").style.backgroundColor = "lightblue";

tempDisplay.textContent = 70;
skyDisplay.textContent = "☀️ ☀️ ☀️ ☀️ ☀️ ☀️ ☀️ ☀️ ☀️";
groundDisplay.textContent ="🌱 🌱 🌱 🌱 🌱 🌱 🌱 🌱";
cityInput.textContent = "My Hometown";
bgDisplay.style.backgroundColor = "orange";

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
    groundDisplay.textContent = "🌱 🌱 🌱 🌱 🌱 🌱 🌱 🌱";
    bgDisplay.style.backgroundColor = "orange";
    if (temperature > 80) {
        groundDisplay.textContent = "🌵 🌵 🌵 🌵 🌵 🌵 🌵";
        bgDisplay.style.backgroundColor = "red";
    }
    if (temperature < 70) {
        groundDisplay.textContent = "💧 💧 💧 💧 💧 💧 💧 💧 💧";
        bgDisplay.style.backgroundColor = "yellow";
    }
    if (temperature < 60 ) {
        bgDisplay.style.backgroundColor = "green";
    }
    if (temperature < 50) {
        groundDisplay.textContent = "🏔️ 🏔️ 🏔️ 🏔️ 🏔️ 🏔️ 🏔️ 🏔️";
        bgDisplay.style.backgroundColor = "teal"
    }
}

const skyStateSelect = () => {
    let select = document.getElementById('dropdownButton');
    let skyState = select.options[select.selectedIndex].value;
    let weatherDisplay = "Weather Display"
    if (skyState == "sunny") {
        weatherDisplay = "☀️ ☀️ ☀️ ☀️ ☀️ ☀️ ☀️ ☀️ ☀️"
    };
    if (skyState == "cloudy") {
        weatherDisplay ="☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️"
    };
    if (skyState == "snowy") {
        weatherDisplay = "❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️"
    };
    if (skyState =="rainy") {
        weatherDisplay = "🌧 🌧 🌧 🌧 🌧 🌧 🌧"
    }
    skyDisplay.textContent = weatherDisplay;
}

const changeCityName = (submission) => {
    cityInput.textContent = document.getElementById("cityInput").value;
    submission.preventDefault();
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

//consider making sky/grass a dictionary to pull the key from