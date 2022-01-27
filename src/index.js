//use this for anything that's dynamic, ie something that changes due to an action

const state = {
    tempIncreaseCount: 70,
    clicked: false
};

const updateTempIncrease = () => {
    const increaseTempContainer= document.getElementById("tempFarenheit");
    state.tempIncreaseCount +=1;
    increaseTempContainer.textContent = state.tempIncreaseCount;
    updateTemp(state.tempIncreaseCount);
}

const updateTempDecrease = () => {
    const decreaseTempContainer= document.getElementById("tempFarenheit");
    state.tempIncreaseCount -=1;
    decreaseTempContainer.textContent = state.tempIncreaseCount;
    updateTemp(state.tempIncreaseCount);
}

const updateCityName = () => {
    const inputName = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = inputName;
};

const resetCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.value = "Denver";
    updateCityName();
};

const updateSky = () => {
    const inputSky = document.getElementById("skySelect").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
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
    // const gardenContent = document.getElementById("gardenContent");
    // gardenContent.classList = `garden__content ${skyColor}`;
};

const updateScenery = (currentTemp) => {
    const sceneryContainer = document.getElementById("scenery");
    let scenery = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    if ( currentTemp >= 80) {
        scenery = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (currentTemp >= 70) {
        scenery = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (currentTemp >= 60) {
        scenery = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }
    sceneryContainer.textContent = scenery;
}

const updateTempStyles = (currentTemp) => {
    const tempValueContainer = document.getElementById("temperature_background");
    let color = "teal";
    if (currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    }
    tempValueContainer.classList = color;
}

const updateSkyBackground = (currentTemp) => {
    const tempValueContainer = document.getElementById("sky_background");
    let color = "teal";
    if (currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    }
    tempValueContainer.classList = color;
}

const updateTemp = (tempFarenheit) => {
    const tempFarenheitContainer = document.getElementById("tempFarenheit");
    tempFarenheitContainer.textContent = tempFarenheit;
    updateTempStyles(tempFarenheit);
    updateSkyBackground(tempFarenheit);
    updateScenery(tempFarenheit);
}
// const increaseTemp = () => {
//     tempValue += 1;
//     updateTemp(tempValue);
// };

// const decreaseTemp = () => {
//     tempValue -= 1;
//     updateTemp(tempValue);
// };

// document.addEventListener("DOMcontentLoaded", updateTempIncrease);
// document.addEventListener("DOMcontentLoaded", updateTempDecrease);
const registerEventHandlers = () => {
    // updateTemp(tempValue);

    const increaseTempControl = document.getElementById("increaseTemp");
    increaseTempControl.addEventListener("click", updateTempIncrease);
    
    const decreaseTempControl = document.getElementById("decreaseTemp");
    decreaseTempControl.addEventListener("click", updateTempDecrease);

    updateCityName();
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);

    const cityNameResetBtn = document.getElementById("cityNameReset");
    cityNameResetBtn.addEventListener("click", resetCityName);

    updateSky();
    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", updateSky);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);