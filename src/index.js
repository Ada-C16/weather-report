// src= "/styles/index.css";

/*
1. Functions: 
x temperature display
x temp up element (clickable)
x temp down element (clickable)
x landscape display
x sky type. dropdown element <select>
- sky display 
- city name display
- rename city element with <input type = "text">
- reset city name element(clickable)*/

//DOM: How we manipulate websites
//Nodes: Tags or elements inside the DOM

//Defining the base temperature by creating the state object
const state = {
    temperature: 40
};
console.log(state)

//Changing the closet
const temperature = () => {
    const closet = document.querySelector('#emojicloset')
    if (state.temperature <= 30) {
        closet.textContent = '🧣🧤'; //winter clothes;
    } else if (31 <= state.temperature && state.temperature <= 55) {
        closet.textContent = '🧥'; //fall clothes
    } else if (56 <= state.temperature && state.temperature <= 70) {
        closet.textContent = '👗' //spring clothes
    } else {
        closet.textContent = '🕶👙' //summer clothes
    }}

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
}
const downTemperature = () => {
    const tempDown = document.getElementById('base-temp');
    state.temperature -= 1;
    //Returns every element in the Node
    tempDown.textContent = `${state.temperature}`;
    //This line is selecting the temperature id
    const tempDowntemp = document.querySelector('#temperature')
    const clothes = document.getElementById('clothes')
    temperature()
}
////Defining the base sky by creating the state object
const skyState = {
    sky: 1
};
console.log(skyState)

const sky = () => {
    const skyMenu = document.querySelector('#emojisky')
    if (skyState.sky === 'snowy') {
        skyMenu.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"'; //winter clothes;
    } else if (skyState.sky == 'Sunny') {
        skyMenu.textContent = 'sun'; //fall clothes
    } else if (skyState.sky  = 'cloudy') {
        skyMenu.textContent = 'cloud' //spring clothes
    } else {
        skyMenu.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧'; 
    }}

//Register Events
const registerEventhandlers = () => {
    const TemperatureHot = document.getElementById('itsHot');
    TemperatureHot.addEventListener('click', upTemperature)

    const TemperatureCold = document.getElementById('itsCold');
    TemperatureCold.addEventListener('click', downTemperature)

    const skyPresentation = document.getElementById('sky');
    skyPresentation.addEventListener('onclick', sky)
};
document.addEventListener("DOMContentLoaded", registerEventhandlers);

