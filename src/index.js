const state = {
    temp: 70,
};

const displayTemp = () => {
    const tempDisplay = document.querySelector("#tempDisplay");
    const display = document.createElement("span");
    display.textContent = state.temp;
};

const increaseTemp = () => {
    state.temp += 1;
    const tempDisplay = document.querySelector("#tempDisplay");
    tempDisplay.textContent = `${state.temp}F`;
    if (state.temp >= 80){
        tempDisplay.setAttribute("style", "background-color: red");
    } else if (state.temp >= 70){
        tempDisplay.setAttribute("style", "background-color: orange")
    } else if (state.temp >= 60){
        tempDisplay.setAttribute("style", "background-color: yellow")
    } else if (state.temp >= 50){
        tempDisplay.setAttribute("style", "background-color: green")
    } else {
        tempDisplay.setAttribute("style", "background-color: teal")
    }
}

const decreaseTemp = () => {
    state.temp -= 1;
    const tempDisplay = document.querySelector("#tempDisplay");
    tempDisplay.textContent = `${state.temp}F`;
    if (state.temp >= 80){
        tempDisplay.setAttribute("style", "background-color: red");
    } else if (state.temp >= 70){
        tempDisplay.setAttribute("style", "background-color: orange")
    } else if (state.temp >= 60){
        tempDisplay.setAttribute("style", "background-color: yellow")
    } else if (state.temp >= 50){
        tempDisplay.setAttribute("style", "background-color: green")
    } else {
        tempDisplay.setAttribute("style", "background-color: cyan")
    }
}

const displayWeather = () => {
    const weatherDisplay = document.querySelector("#weatherSky");
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
    }
}

const registerEventHandlers = () => {
    const tempIncreaseButton = document.querySelector("#tempIncrease");
    const tempDecreaseButton = document.querySelector("#tempDecrease");
    const weatherButton = document.querySelector("#changeSky");
    tempIncreaseButton.addEventListener("click", increaseTemp);
    tempDecreaseButton.addEventListener("click", decreaseTemp);
    weatherButton.addEventListener("click", displayWeather)
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);