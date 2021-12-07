// CHANGING CITY NAME
let city = document.getElementById("cityName");
let changeCity = document.getElementById("changeCity");
changeCity.addEventListener("keyup", () => {
    city.textContent = changeCity.value;
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
    city.textContent = "Seattle";
});

// CHANGING THE TEMPERATURE AND LANDSCAPE
// -- TEMP VARIABLES -- //
const increaseTemp = document.getElementById("increaseTemp");
const decreaseTemp = document.getElementById("decreaseTemp");
let temp = document.getElementById("num");
// -- LANDSCAPE VARIABLES -- //
let sky = document.getElementById("sky");
let garden = document.getElementById("garden");
let selectSky = document.getElementById("selectSky");

const checkTemp = (changedTemp) => {
    tempInt = parseInt(changedTemp);
    if (tempInt >= 80) {
        temp.style.color = "rgb(191, 63, 9)";
        garden.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (tempInt >= 70) {
        temp.style.color = "rgb(227, 120, 5)";
        garden.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (tempInt >= 60) {
        temp.style.color = "rgb(223, 205, 9)"
        garden.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (tempInt >= 50) {
        temp.style.color = "rgb(4, 191, 32)";
        garden.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (tempInt <= 49) {
        temp.style.color = "rgb(0, 199, 196)";
        garden.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

increaseTemp.addEventListener("click", () => {
    temp.textContent = (parseInt(temp.textContent) + 1).toString() + "°" + "F";
    checkTemp(temp.textContent);
});

decreaseTemp.addEventListener("click", () => {
    temp.textContent = (parseInt(temp.textContent) - 1).toString() + "°" + "F";
    checkTemp(temp.textContent);
});

const changeSky = () => {
    if (selectSky.value === "sunny") {
        sky.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    } else if (selectSky.value === "cloudy") {
        sky.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (selectSky.value === "rainy") {
        sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (selectSky.value === "snowy") {
        sky.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
}

selectSky.addEventListener("change", changeSky);