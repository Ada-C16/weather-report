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
    }
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
};

const tempChecker = (temp, tempDisplay) => {
    const landscapeDisplay = document.getElementById('landscape-display');
    if (temp > 90) {
        tempDisplay.style.color = 'red';
        landscapeDisplay.textContent = state.landscapeDisplay['Hot'];
    } else if (65 <= temp <= 90) {
        tempDisplay.style.color = 'orange';
        landscapeDisplay.textContent = state.landscapeDisplay['Warm'];
    } else if (45 <= temp < 65) {
        tempDisplay.style.color = 'black';
        landscapeDisplay.textContent = state.landscapeDisplay['Meh'];
        console.log("meh");
    } else if (32 < temp < 45) {
        tempDisplay.style.color = 'purple';
        landscapeDisplay.textContent = state.landscapeDisplay['Cold'];
    } else if (temp <= 32) {
        tempDisplay.style.color = 'dark-blue';
        landscapeDisplay.textContent = state.landscapeDisplay['Freezing'];
    }
};

const cityDisplayer = (event) => {
    const cityDisplay = document.getElementById('city-display');
    const cityType = document.getElementById('type-city-box');
    cityDisplay.textContent = cityType.value;
    console.log('shit');
};

const registerEventHandlers = (event) => {
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const skyType = document.getElementById('sky-type');
    const cityType = document.getElementById('type-city-box');

    upButton.addEventListener("click", upTemp);
    downButton.addEventListener("click", downTemp);
    skyType.addEventListener('change', skyDisplayer);
    cityType.addEventListener('input', cityDisplayer);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);