// let temperature = 71;
const temp = document.querySelector('#temp');
let temp = 58;

// function updateColorByTemp(newColor) {
//     let temp = document.getElementById('temp');
//     temp.style.color = newColor
// }

// constr temp = document.getElementById('temp');



function increaseTemp() {
    temp = temp + 1
}

function decreaseTemp() {
    temp = temp - 1
}

const updateColorAndLandscapeByTemp = (updatedTemp) => {
    switch(updatedTemp){
        case (updatedTemp >= 80) {
            temp.style.color = 'red';
            landscape.emoji = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
            break;
        }
        case (updatedTemp >= 79) {
            temp.style.color = 'orange';
            landscape.emoji = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
            break;
        }
        case (updatedTemp >= 69) {
            temp.style.color = 'yellow';
            landscape.emoji = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
            break;
        
        case (updatedTemp >= 59) {
            temp.style.color = 'green';
            landscape.emoji = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
            break;
        }
        case (updatedTemp >= 49) {
            temp.style.color = 'teal';
            break;
        }
    }
}

const sky = document.querySelector('#sky');
const updateSkyEmoji = (updatedSky) => {
    switch(updatedSky) {
        case (updatedSky == "Sunny") {
            sky.emoji = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
            break;
        } case (updatedSky == "Cloudy") {
            sky.emoji = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
            break;
        } case (updatedSky == "Rainy") {
            sky.emoji = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
            break;
        } case (updatedSky == "Snowy") {
            sky.emoji = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
            break;
        }
    }
}

const updateCity = (updatedCity) => {
    const cityName = document.querySelector('#city');
    cityName.textContent = updatedCity.target.value;
}