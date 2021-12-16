const state = { 
    temp: 75,
    location: "Seattle",
    condition: "Rainy"
};

const tempIncrementHandler = (event) => {
    event.preventDefault();
    const tempInput = document.getElementById("tempInput");
    const tempInt = parseInt(tempInput.textContent) + 1;
    console.log(tempInt);
    tempInput.textContent = String(tempInt);
    state.temp = tempInt;
    landscapeHandler()
};

const tempDecrementHandler = (event) => {
    event.preventDefault();
    const tempInput = document.getElementById("tempInput");
    const tempInt = parseInt(tempInput.textContent) - 1;
    console.log(tempInt);
    tempInput.textContent = String(tempInt);
    state.temp = tempInt;
    landscapeHandler()
};

const landscapeHandler = () => {
    const landscape = document.getElementById("landscapeOutput");
    if (state.temp >= 80) {
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.temp >= 70 && state.temp < 80) {
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.temp >= 60 && state.temp < 70) {
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

const locationChangeHandler = () => {
    const newLocation = document.getElementById('locationInput').textContent;
    state.location = newLocation;
    const locationOutput = document.getElementById('locationOutput');
    locationOutput.textContent = state.location;
};

const locationResetHandler = () => {
    state.location = 'Seattle';
    const locationOutput = document.getElementById('locationOutput');
    locationOutput.textContent = state.location;
};

const skyChangeHandler = () => {
    const skyOutput = document.getElementById('skyOutput');
    const skyInput = document.getElementById('skyInput');
    const skyInputValue = skyInput.options[[skyInput.options["selectedIndex"]]].value;
    state.condition = skyInputValue;
    if (state.condition === "sunny") {
        skyOutput.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    } else if (state.condition === "cloudy") {
        skyOutput.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (state.condition === "rainy") {
        skyOutput.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (state.condition === "snowy") {
        skyOutput.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
};

const registerEventHandlers = () => {
    const tempIncrementButton = document.getElementById('incrementButton');
    tempIncrementButton.addEventListener('click', tempIncrementHandler(event));

    const tempDecrementButton = document.getElementById('decrementButton');
    tempDecrementButton.addEventListener('click', tempDecrementHandler(event));

    const skyInput = document.getElementById('skyInput');
    skyInput.addEventListener('change', skyChangeHandler);

    const locationInput = document.getElementById('locationInput');
    locationInput.addEventListener('change', locationChangeHandler);

    const resetLocationButton = document.getElementById('resetLocationButton');
    resetLocationButton.addEventListener('click', locationResetHandler);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

