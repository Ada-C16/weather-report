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

// create a larger change temp function
// check which item has been clicked
// if inc, then increase
// else if dec, then decrease

const checkTemp = (changedTemp) => {
    tempInt = parseInt(changedTemp);
    if (tempInt >= 80) {
        temp.style.color = "red";
        garden.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (tempInt >= 70) {
        temp.style.color = "orange";
        garden.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (tempInt >= 60) {
        temp.style.color = "rgb(233, 214, 3)"
        garden.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (tempInt >= 50) {
        temp.style.color = "green";
    } else if (tempInt <= 49) {
        temp.style.color = "teal";
    }

    if (tempInt <= 59) {
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