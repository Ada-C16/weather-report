"use strict";

const state = {
    temp: 70,
};

const changeCity = () => {
    const cityName= document.querySelector("#city");
    const textInput = document.querySelector("#typeCityName");
    cityName.textContent = textInput.value;
} 
const resetCity = () => {;
    const cityName = document.getElementById("city");
    const textInput = document.querySelector("#typeCityName");
    textInput.value = "San Antonio";
    cityName.textContent = "San Antonio";
}

const changeTemp = (temp) => {
    const tempDisplay = document.querySelector("#tempDisplay");
    const landscape = document.querySelector("#landscape");
    if (temp >= 80){
        tempDisplay.setAttribute("style", "background-color: red");
        landscape.src = "/assets/texasWeather.jpg";
    } else if (temp >= 70){
        tempDisplay.setAttribute("style", "background-color: orange");
        landscape.src = "/assets/hotWeather.jpg";
    } else if (temp >= 60){
        tempDisplay.setAttribute("style", "background-color: yellow");
        landscape.src = "/assets/springWeather.jpg";
    } else if (temp >= 50){
        tempDisplay.setAttribute("style", "background-color: green; color: white");
        landscape.src = "/assets/fallWeather.jpg";
    } else {
        tempDisplay.setAttribute("style", "background-color: teal; color: white");
        landscape.src = "/assets/winterWeather.jpg";
    }
}

const increaseTemp = () => {
    state.temp += 1;
    tempDisplay.textContent = `${state.temp}F`;
    changeTemp(state.temp);
}

const decreaseTemp = () => {
    state.temp -= 1;
    tempDisplay.textContent = `${state.temp}F`;
    changeTemp(state.temp);
}

const displayWeather = () => {
    const weatherDisplay = document.querySelector("#weatherSky");
    const plainOption = document.querySelector("#plainSky");
    const sunnyOption = document.querySelector("#clearSky");
    const cloudyOption = document.querySelector("#cloudySky");
    const rainyOption = document.querySelector("#rainySky");
    const coldOption = document.querySelector("#coldSky");
    if (sunnyOption.selected) {
        weatherDisplay.setAttribute("style", "background-image: url('/assets/Sun_GIF.gif')"); 
    } else if (cloudyOption.selected) {
        weatherDisplay.setAttribute("style", "background-image: url('/assets/Cloudy_GIF.webp')");
    } else if (rainyOption.selected) {
        weatherDisplay.setAttribute("style", "background-image: url('/assets/Rainy_GIF.gif')");
    } else if (coldOption.selected) {
        weatherDisplay.setAttribute("style", "background-image: url('/assets/Cold_GIF.gif')");
    } else {
        weatherDisplay.setAttribute("style", "background-image: url('/assets/Plain_GIF.gif')");
    }
}

const registerEventHandlers = () => {
    const tempIncreaseButton = document.querySelector("#tempIncrease");
    const tempDecreaseButton = document.querySelector("#tempDecrease");
    const weatherButton = document.querySelector("#changeSky");
    const changesCity =  document.querySelector("#typeCityName");
    const reset = document.getElementById("reset");
    tempIncreaseButton.addEventListener("click", increaseTemp);
    tempDecreaseButton.addEventListener("click", decreaseTemp);
    weatherButton.addEventListener("click", displayWeather);
    changesCity.addEventListener("input", changeCity);
    reset.addEventListener("click", resetCity);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);