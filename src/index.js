let count = 80;

// const state = {
//     count = 80,
//     landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
// }

const increaseTemp = document.getElementById("increaseTemp");
const decreaseTemp = document.getElementById("decreaseTemp");
const counter = document.getElementById("count");
counter.innerHTML = count;

// const temp = document.getElementById('temp');
// function increaseTemp() {
//     temp.value = currentTemp
//     currentTemp++;
// }

// function decreaseTemp() {
//     temp.value = currentTemp
//     currentTemp--;
// }

// function changeColor(newColor) {
//     const elem = document.getElementById("count");
//     elem.style.color = newColor
//     // elem.style.backgroundColor = newColor
// }

// }
// function updateColorAndLandscapeByTemp(updatedTemp) {
//     switch(updatedTemp){
//         case (updatedTemp >= 80):
//             // count.color = 'red';
//             changeColor('red');
//             landscape.emoji = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
//             break;
//         case (updatedTemp >= 79):
//             // count.style.color = 'orange';
//             changeColor('orange');
//             landscape.emoji = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
//             break;
//         case (updatedTemp >= 69):
//             // count.style.color = 'yellow';
//             changeColor('yellow');
//             landscape.emoji = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
//             break;
//         case (updatedTemp >= 59):
//             // count.style.color = 'green';
//             changeColor('green');
//             landscape.emoji = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
//             break;
//         case (updatedTemp >= 49):
//             // count.color = 'teal';
//             changeColor('teal');
//             break;
//     }
// }

// const sky = document.getElementById("sky");
// let sky_text = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
// const sky = document.querySelector('#sky');
// const updateSkyEmoji = (updatedSky) => {
//     switch(updatedSky) {
//         case (updatedSky == "Sunny") {
//             sky.emoji = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
                // skyBackground.style.backgroundColor = 'sunny';
//             break;
//         } case (updatedSky == "Cloudy") {
//             sky.emoji = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
//             break;
//         } case (updatedSky == "Rainy") {
//             sky.emoji = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
//             break;
//         } case (updatedSky == "Snowy") {
//             sky.emoji = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
//             break;
//         }
//     }
// }

increaseTemp.addEventListener("click", function() {
    counter.innerHTML = ++count;
});

decreaseTemp.addEventListener("click", function() {
    counter.innerHTML = --count;
});

const updateCity = () => {
    const cityInput = document.getElementById("cityInput").value;
    const headerCity = document.getElementById("headerCityName");
    headerCity.textContent = cityInput;
};

const resetCity = () => {
    const cityInput = document.getElementById("cityInput");
    cityInput.value = "Seattle";
    updateCity();
};

updateCity();
const cityNameInput = document.getElementById("cityInput");
cityNameInput.addEventListener("input", updateCity);

resetCity();
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetCity);  

updateSky();
const skySelect = document.getElementById("skyOptions");
skySelect.addEventListener("change", updateSky);