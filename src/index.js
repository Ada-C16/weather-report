"use strict"

const tempBox = document.getElementById("TempBox");
let tempValue=  Number(tempBox.textContent);

const increaseTemp = () => {
    tempValue += 1;
    changeTempColor(tempValue)
    tempBox.textContent = tempValue
}

const decreaseTemp = () => {
    tempValue -= 1;
    changeTempColor(tempValue)
    tempBox.textContent = tempValue
}

const changeTempColor = (tempValue) => {
    
    let color = "white";
    if ( tempValue >= 80) {
        color = "red";
    } else if (tempValue >= 70) {
        color = "orange";
    } else if (tempValue >= 60) {
        color = "yellow";
    } else if (tempValue >= 50) {
        color = "green";
    }
    tempBox.classList = color;
}

const changeSky = () => {
    // gets the value chosen in dropdown
    const inputSky = document.getElementById("sky-select").value;
    // gets the box where the sky is going to go
    const skyContainer = document.getElementById("sky");
    let sky = "🌤";
    let skyColor = "";
    if (inputSky === "Cloudy") {
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        skyColor = "cloudy";
    } else if (inputSky === "Sunny") {
        sky = "☁️     ☁️   ☁️ ☀️ ☁️  ☁️";
        skyColor = "sunny";
    } else if (inputSky === "Rainy") {
        sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        skyColor = "rainy";
    } else if (inputSky === "Snowy") {
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        skyColor = "snowy";
    }
    skyContainer.textContent = sky;
    console.log(sky);
    const gardenContent = document.getElementById("weather-garden");
    gardenContent.classList = skyColor;
};

const updateCityName = () => {
    const cityInput = document.getElementById("city-name").value
    const headerCity = document.getElementById("headerCityName")

    headerCity.textContent = cityInput
}

const registerEventHandlers = () => {
//    update temp on click // 
    const increaseTempBtn = document.getElementById('increaseTemp')
    const decreaseTempBtn = document.getElementById('decreaseTemp')

    increaseTempBtn.addEventListener("click", increaseTemp)
    decreaseTempBtn.addEventListener("click", decreaseTemp)

    changeTempColor(tempValue)

    changeSky();
    const skySelect = document.getElementById("sky-select");
    skySelect.addEventListener("change", changeSky);

    const cityInput = document.getElementById("city-name")
    cityInput.addEventListener("input", updateCityName)
    
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);




