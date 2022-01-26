

const state = {
    tempIncreaseCount: 70,
    clicked: false
};

const updateTempIncrease = () => {
    const increaseTempContainer= document.getElementById("tempFarenheit");
    state.tempIncreaseCount +=1;
    increaseTempContainer.textContent = state.tempIncreaseCount
}

const updateTempDecrease = () => {
    const decreaseTempContainer= document.getElementById("tempFarenheit");
    state.tempIncreaseCount -=1;
    decreaseTempContainer.textContent = state.tempIncreaseCount
}


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

    // updateCityName();
    // const cityNameInput = document.getElementById("cityNameInput");
    // cityNameInput.addEventListener("input", updateCityName);

    // const cityNameResetBtn = document.getElementById("cityNameReset");
    // cityNameResetBtn.addEventListener("click", resetCityName);

    updateSky();
    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", updateSky);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);