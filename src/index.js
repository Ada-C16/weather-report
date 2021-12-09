const state = {
    tempVar : 76,
    skyDisplay : {
        'Sunny' : '☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️',
        'Cloudy' : '☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️',
        'Rainy' : '🌧🌧🌧🌧🌧🌧🌧🌧🌧🌧',
        'Stormy' : '⛈⛈⛈⛈⛈⛈⛈⛈⛈⛈',
        'Snowy' : '🌨🌨🌨🌨🌨🌨🌨🌨🌨🌨',
        'Gay' : '🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈',
        'Meatball' : '🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝'
    },
    landscapeDisplay : {
        'Hot' : '🌵🌵🌵🌵🌵🌵🌵🌵🌵🌵',
        'Warm' : '🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴',
        'Meh' : '🍂🍂🍂🍂🍂🍂🍂🍂🍂🍂',
        'Cold' : '❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️',
        'Freezing' : '☃️☃️☃️☃️☃️☃️☃️☃️☃️☃️'
    },
    cityName : ''
};

const upTemp = (event) => {
    state.tempVar += 1;
    const tempDisplay = document.getElementById("temp-display-big");
    tempDisplay.textContent = `${state.tempVar} F`;
    tempChecker(state.tempVar, tempDisplay);
};

const downTemp = (event) => {
    state.tempVar -= 1;
    const tempDisplay = document.getElementById("temp-display-big");
    tempDisplay.textContent = `${state.tempVar} F`;
    tempChecker(state.tempVar, tempDisplay);
};

const skyDisplayer = (event) => {
    const skyDisplayElement = document.getElementById('sky-display');
    const skyType = document.getElementById('sky-type');
    const selection = skyType.value
    skyDisplayElement.textContent = `${state.skyDisplay[selection]}`;
    if (skyType.value === 'Gay') {
        document.body.style.background = 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)';
    } else {
        document.body.style.background = 'gray';
    }
};

const tempChecker = (temp, tempDisplay) => {
    const landscapeDisplay = document.getElementById('landscape-display');
    if (temp > 90) {
        tempDisplay.style.color = 'red';
        landscapeDisplay.textContent = state.landscapeDisplay['Hot'];
    } else if ((temp <= 90) && (temp > 65)) {
        tempDisplay.style.color = 'orange';
        landscapeDisplay.textContent = state.landscapeDisplay['Warm'];
    } else if ((temp >= 45) && (temp <= 65)) {
        tempDisplay.style.color = 'black';
        landscapeDisplay.textContent = state.landscapeDisplay['Meh'];
    } else if ((temp > 32) && (temp < 45)) {
        tempDisplay.style.color = 'purple';
        landscapeDisplay.textContent = state.landscapeDisplay['Cold'];
    } else if (temp <= 32) {
        tempDisplay.style.color = 'teal';
        landscapeDisplay.textContent = state.landscapeDisplay['Freezing'];
    }
};

const cityDisplayerType = (event) => {
    const cityDisplay = document.getElementById('city-display');
    const cityType = document.getElementById('type-city-box');
    cityDisplay.textContent = cityType.value;
    state.cityName = cityType.value;
};

const cityReset = (event) => {
    const cityDisplay = document.getElementById('city-display');
    state.cityName = 'Your City Here';
    cityDisplay.textContent = state.cityName;
};

const registerEventHandlers = (event) => {
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const skyType = document.getElementById('sky-type');
    const cityType = document.getElementById('type-city-box');
    const resetButton = document.getElementById('reset-city');


    upButton.addEventListener("click", upTemp);
    downButton.addEventListener("click", downTemp);
    skyType.addEventListener('change', skyDisplayer);
    cityType.addEventListener('input', cityDisplayerType);
    resetButton.addEventListener('click', cityReset);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);