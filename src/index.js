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

const registerEventHandlers = () => {
    const increaseTempButton = document.getElementById("increase-temp");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.getElementById("decrease-temp");
    decreaseTempButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);