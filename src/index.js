"use strict";

const tempBox = document.getElementById("TempBox");
let tempValue=  Number(tempBox.textContent);

const increaseTemp = () => {
    tempValue += 1;
    changeTemp(tempValue)
    tempBox.textContent = tempValue;
    changePlants();
}

const decreaseTemp = () => {
    tempValue -= 1;
    changeTemp(tempValue)
    tempBox.textContent = tempValue;
    changePlants();
}

const changeTemp = (tempValue) => {
    
    let color = "white";
    if ( tempValue >= 80) {
        color = "red";
    } else if (tempValue >= 70) {
        color = "orange";
    } else if (tempValue >= 60) {
        color = "yellow";
    } else if (tempValue >= 50) {
        color = "green";
    } else {
        color = "teal"
    }
    tempBox.classList = color;
}

const changeSky = () => {
    // gets the value chosen in dropdown
    const inputSky = document.getElementById("sky-select").value;
    // gets the box where the sky is going to go
    const skyContainer = document.getElementById("sky");
    let sky = "🌤";
    let skypic = "";
    if (inputSky === "Cloudy") {
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        skypic = "cloudy";
    } else if (inputSky === "Sunny") {
        sky = "☁️     ☁️   ☁️ ☀️ ☁️  ☁️";
        skypic = "sunny";
    } else if (inputSky === "Rainy") {
        sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        skypic = "rainy";
    } else if (inputSky === "Snowy") {
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        skypic = "snowy";
    }
    skyContainer.textContent = sky;
    const gardenContent = document.getElementById("weather-garden");
    // what is this doing???
    gardenContent.classList = skypic;
};

const changePlants = () => {
    // get value from temp
    // can be found in tempValue variable
    // get the box where the plants are going to go
    const plantContainer = document.getElementById("plants");
    let plants = ""
    if ( tempValue >= 80) {
        plants = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (tempValue >= 70) {
        plants = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (tempValue >= 60) {
        plants = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        plants = "🌲🌲⛄️🌲⛄️🍂🌲🍁❄️🌨🌲⛄️🍂🌲";
    }

    plantContainer.textContent = plants;
    const gardenContent = document.getElementById("plants");
    gardenContent.classList = plants;

}

const updateCityName = () => {
    const cityInput = document.getElementById("city-name").value;
    const headerCity = document.getElementById("headerCityName");

    headerCity.textContent = cityInput;
}

const resetCityName = () => {
    const cityInput = document.getElementById("city-name");
    
    cityInput.value = "Seattle";
    updateCityName()
}

const registerEventHandlers = () => {
//    update temp on click // 
    const increaseTempBtn = document.getElementById('increaseTemp')
    const decreaseTempBtn = document.getElementById('decreaseTemp')

    increaseTempBtn.addEventListener("click", increaseTemp)
    decreaseTempBtn.addEventListener("click", decreaseTemp)

    changeTemp(tempValue);

    changeSky();
    const skySelect = document.getElementById("sky-select");
    skySelect.addEventListener("change", changeSky);

    changePlants();
    const cityInput = document.getElementById("city-name")
    cityInput.addEventListener("input", updateCityName)

    const resetBtn = document.getElementById('reset')
    resetBtn.addEventListener("click", resetCityName)
    
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);




