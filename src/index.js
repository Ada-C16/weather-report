// src= "/styles/index.css";

/*
1. Functions: 
x temperature display
x temp up element (clickable)
x temp down element (clickable)
x landscape display
x sky type. dropdown element <select>
x sky display 
x city name display
x rename city element with <input type = "text">
x reset city name element(clickable)
- change color temperature */

//DOM: How we manipulate websites
//Nodes: Tags or elements inside the DOM

//Defining the base temperature by creating the state object
const state = {
    temperature: 40,
};
console.log(state)

//Changing the closet emoji
const temperature = () => {
    const closet = document.querySelector('#emojicloset')
    const colorClasses = ['fifties', 'sixties', 'seventies', 'eighties'];
    const basetemp = document.querySelector('#base-temp')
    for  (let colorclass of colorClasses) {
        basetemp.classList.remove(colorclass);
    }
    if (state.temperature <= 59) {
        basetemp.classList.add('fifties');
        closet.textContent = '🧣🧤'; 
    } else if (60 <= state.temperature && state.temperature <= 69) {
        basetemp.classList.add('sixties');
        closet.textContent = '🧥'; 
    } else if (70 <= state.temperature && state.temperature <= 79) {
        basetemp.classList.add('seventies');
        closet.textContent = '👗' 
    } else {
        basetemp.classList.add('eighties');
        closet.textContent = '🕶👙' 
    }
};

//Changing Temperature
const upTemperature = () => {
    const tempUp = document.getElementById('base-temp');
    //Makes temp count go up
    state.temperature += 1;
    //Making the text content o tempUp = the current temperature
    tempUp.textContent = `${state.temperature}`;
    //querySelector: Returns the first element
    const tempUptemp = document.querySelector('#temperature')
    const clothes = document.getElementById('clothes')
    temperature()
};
const downTemperature = () => {
    const tempDown = document.getElementById('base-temp');
    state.temperature -= 1;
    //Returns every element in the Node
    tempDown.textContent = `${state.temperature}`;
    //This line is selecting the temperature id
    temperature()
};
//Changing sky emoji
const sky = () => {
    const emojiSky = document.querySelector('#emojiSky')
    const skyValue = document.querySelector('#sky').value;
    if (skyValue === 'snowy') {
        emojiSky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨'; 
    } else if (skyValue === 'sunny') {
        emojiSky.textContent = '🌞☀️☀️☀️☀️☀️☀️☀️☀️🌞'; 
    } else if (skyValue === 'cloudy') {
        emojiSky.textContent = '☁️☁️☁️☁️☁️🌤☁️☁️☁️☁️☁️' 
    } else if (skyValue === 'rainy') {
        emojiSky.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧'; 
    }};

const resetCity = () => {
    const city = document.getElementById('city-span');
    const input = document.querySelector('#city-name').value;
    city.textContent = input;
    // input.value = 'ciudad';
};

//Register Events
const registerEventhandlers = () => {
    const TemperatureHot = document.getElementById('itsHot');
    TemperatureHot.addEventListener('click', upTemperature)

    const TemperatureCold = document.getElementById('itsCold');
    TemperatureCold.addEventListener('click', downTemperature)

    const skyPresentation = document.getElementById('sky');
    skyPresentation.addEventListener('change', sky)

    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetCity)
};
document.addEventListener("DOMContentLoaded", registerEventhandlers);

