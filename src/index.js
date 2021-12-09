const state = {
    temp: 70,
};

const changeCity = () => {
    const textField = document.querySelector("#city");
    const textInput = document.querySelector("#typeCityName");
    textField.innerHTML = textInput.value;
    // textField.oninput = "changeCity()";
} 

const increaseTemp = () => {
    state.temp += 1;
    const tempDisplay = document.querySelector("#tempDisplay");
    const landscape = document.querySelector("#landscape");
    tempDisplay.textContent = `${state.temp}F`;
    if (state.temp >= 80){
        tempDisplay.setAttribute("style", "background-color: red");
        landscape.src = "/assets/texasWeather.jpg";
    } else if (state.temp >= 70){
        tempDisplay.setAttribute("style", "background-color: orange");
        landscape.src = "/assets/hotWeather.jpg";
    } else if (state.temp >= 60){
        tempDisplay.setAttribute("style", "background-color: yellow");
        landscape.src = "/assets/springWeather.jpg";
    } else if (state.temp >= 50){
        tempDisplay.setAttribute("style", "background-color: green; color: white");
        landscape.src = "/assets/fallWeather.jpg";
    } else {
        tempDisplay.setAttribute("style", "background-color: teal; color: white");
        landscape.src = "/assets/winterWeather.jpg";
    }
}

const decreaseTemp = () => {
    state.temp -= 1;
    const tempDisplay = document.querySelector("#tempDisplay");
    const landscape = document.querySelector("#landscape");
    tempDisplay.textContent = `${state.temp}F`;
    if (state.temp >= 80){
        tempDisplay.setAttribute("style", "background-color: red");
        landscape.src = "/assets/texasWeather.jpg";
    } else if (state.temp >= 70){
        tempDisplay.setAttribute("style", "background-color: orange");
        landscape.src = "/assets/hotWeather.jpg";
    } else if (state.temp >= 60){
        tempDisplay.setAttribute("style", "background-color: yellow");
        landscape.src = "/assets/springWeather.jpg";
    } else if (state.temp >= 50){
        tempDisplay.setAttribute("style", "background-color: green; color: white");
        landscape.src = "/assets/fallWeather.jpg";
    } else {
        tempDisplay.setAttribute("style", "background-color: cyan; color: white");
        landscape.src = "/assets/winterWeather.jpg";
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
    const changesCity =  document.querySelector("#typeCityName").value;
    tempIncreaseButton.addEventListener("click", increaseTemp);
    tempDecreaseButton.addEventListener("click", decreaseTemp);
    weatherButton.addEventListener("click", displayWeather);
    changesCity.addEventListener("alert", changeCity)
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);