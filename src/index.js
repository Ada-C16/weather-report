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
};

const downTemp = (event) => {
    state.tempVar -= 1;
    const tempDisplay = document.getElementById("temp-display-big");
    tempDisplay.textContent = `${state.tempVar} F`;
};

const skyDisplayer = (event) => {
    const skyDisplayElement = document.getElementById('sky-display');
    const skyType = document.getElementById('sky-type');
    const selection = skyType.value
    skyDisplayElement.textContent = `${state.skyDisplay[selection]}`;
};

const tempChecker = (temp) => {
    if (temp > 90) {
        //change temp-display color
        //change landscape
    } elif (65 <= temp <= 90) {
        //change temp-display color
        //change landscape
    } elif (45 <= temp <= 65) {
        //change temp-display color
        //change landscape
    } elif (32 < temp <= 45) {
        //change temp-display color
        //change landscape
    } elif (temp <= 32) {
        //change temp-display color
        //change landscape
    }

};

const registerEventHandlers = (event) => {
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const skyType = document.getElementById('sky-type');

    upButton.addEventListener("click", upTemp);
    downButton.addEventListener("click", downTemp);
    skyType.addEventListener('change', skyDisplayer);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);