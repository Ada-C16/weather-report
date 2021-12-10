let currentTemp = 63;

const updateTempColor = currentTemp => {
    const tempContainer = document.getElementById("currentTemp");
    let color = "green";
    if (currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    } else if (currentTemp < 50) {
        color = "teal";
    }
    tempContainer.classList = color;
};

const updateTemp = currentTemp => {
    const tempContainer = document.getElementById("currentTemp");
    tempContainer.textContent = currentTemp;
    updateTempColor(currentTemp);
    updateLandscape(currentTemp);
};

const increaseTemp = () => {
    currentTemp += 1;
    updateTemp(currentTemp);
};

const decreaseTemp = () => {
    currentTemp -= 1;
    updateTemp(currentTemp);
};

const updateCity = () => {
    const inputCity = document.getElementById("inputCity").value;
    const headerCity = document.getElementById("headerCity");
    headerCity.textContent = inputCity;
};

const resetCity = () => {
    const cityNameInput = document.getElementById("inputCity");
    cityNameInput.value = "yr lover's hometown";
    updateCity();
};

const updateSky = () => {
    const skyOption = document.getElementById("sky-options").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
    if (skyOption === "sunny") {
        sky = "☁️ ☁️ ☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    } else if (skyOption === "cloudy") {
        sky = "☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️";
    } else if (skyOption === "rainy") {
        sky = "🌧🌧🌦🌧🌧🌧🌧🌧🌧🌧🌧";
    } else if (skyOption === "snowy") {
        sky = "🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️🌨";
    }
    skyContainer.textContent = sky;
};

const updateLandscape = (currentTemp) => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "";
    if (currentTemp >= 80) {
        landscape = "🌵🐍🦂🌵🐍🦂🌵🏜🦂🌵🐍";
    } else if (currentTemp >= 70) {
        landscape = "🌸🌿🌼🐛🌷🌻☘️🐞🌱🌻🌷";
    } else if (currentTemp >= 60) {
        landscape = "🌾🌾🪨🍃🛤🌾🌾💨🌾⛅️🍃";
    } else if (currentTemp >= 50){
        landscape = "🍂🍁🍁🍂🍁🍂🎃🍁🍂🧣🍂"
    } else if (currentTemp < 50){
        landscape = "🌲❄️🌲☃️⛄️🌲🌲⛄️🌲🐻‍❄️🌲"
    }
    landscapeContainer.textContent = landscape;
};

const registerEventHandlers = () => {
    const increaseTempButton = document.getElementById("increase-temp");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.getElementById("decrease-temp");
    decreaseTempButton.addEventListener("click", decreaseTemp);

    const inputCity = document.getElementById("inputCity");
    inputCity.addEventListener("input", updateCity);

    const resetCityButton = document.getElementById("reset");
    resetCityButton.addEventListener("click", resetCity);

    const skyOption = document.getElementById("sky-options");
    skyOption.addEventListener("change", updateSky);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);