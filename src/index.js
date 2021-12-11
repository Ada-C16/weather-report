let tempValue = 0;

const updateWeather = () => {
    const skyType = document.getElementById()
}

const incrementTemp = () => {
    tempValue += 1;
    const pancake = document.getElementById("temperatureValue");
    pancake.textContent = tempValue
};

const decrementTemp = () => {
    tempValue -= 1;
    const pancake = document.getElementById("temperatureValue");
    pancake.textContent = tempValue
};

const increase = () => {
    const incrementTempControl = document.getElementById("incrementTempControl");
    incrementTempControl.addEventListener("click", incrementTemp);
}

const decrease = () => {
    const decrementTempControl = document.getElementById("decrementTempControl");
    decrementTempControl.addEventListener("click", decrementTemp);
}

document.addEventListener("DOMContentLoaded", increase);
document.addEventListener("DOMContentLoaded", decrease);

const updateForecast = () => {
    const weather = document.getElementById("weatherImage");
    let image = "https://64.media.tumblr.com/4f35ecd44ba9b0921c2b571909a47ae7/tumblr_onnkh4jZoK1viiyyio1_500.gif";
    if (weather == 'Sunny') {
    } else if (weather == 'Snowy') {
        image = "https://media1.giphy.com/media/3o6fISORwH1fcsQW0U/giphy.gif";
    } else if (weather == 'Rainy') {
        image = "https://c.tenor.com/UkXBmkGcpNEAAAAC/rain-raining.gif";
    } else if (weather == 'Stormy') {
        image = "https://c.tenor.com/PagXtQ_2mw0AAAAC/clouds-stormy.gif";
    }
    weatherImage.src = image

};
// sun
const sunnyWeather = () => {
    const sunny = document.getElementById("weatherImage");
    sunny.src = "https://64.media.tumblr.com/4f35ecd44ba9b0921c2b571909a47ae7/tumblr_onnkh4jZoK1viiyyio1_500.gif";
    const forecastSelect = document.getElementById("forecastDesc")
    forecastSelect.innerText = "sunny"
}

const sunnyControl = () => {
    const weatherControl = document.getElementById("Sunny");
    weatherControl.addEventListener("click", sunnyWeather);
}
// rain
const rainyWeather = () => {
    const rainy = document.getElementById("weatherImage");
    rainy.src = "https://c.tenor.com/UkXBmkGcpNEAAAAC/rain-raining.gif";
    const forecastSelect = document.getElementById("forecastDesc")
    forecastSelect.innerText = "rainy"
}

const rainyControl = () => {
    const weatherControl = document.getElementById("Rainy");
    weatherControl.addEventListener("click", rainyWeather)
}
// snow
const snowyWeather = () => {
    const rainy = document.getElementById("weatherImage");
    rainy.src = "https://media1.giphy.com/media/3o6fISORwH1fcsQW0U/giphy.gif";
    const forecastSelect = document.getElementById("forecastDesc")
    forecastSelect.innerText = "snowy"
}

const snowyControl = () => {
    const weatherControl = document.getElementById("Snowy");
    weatherControl.addEventListener("click", snowyWeather)
}
// storm
const stormyWeather = () => {
    const stormy = document.getElementById("weatherImage");
    stormy.src = "https://c.tenor.com/PagXtQ_2mw0AAAAC/clouds-stormy.gif";
    const forecastSelect = document.getElementById("forecastDesc")
    forecastSelect.innerText = "stormy"
    
}


const stormyControl = () => {
    const weatherControl = document.getElementById("Stormy");
    weatherControl.addEventListener("click", stormyWeather)
}
document.addEventListener("DOMContentLoaded", sunnyControl);
document.addEventListener("DOMContentLoaded", rainyControl);
document.addEventListener("DOMContentLoaded", snowyControl);
document.addEventListener("DOMContentLoaded", stormyControl);


const updateLocationName = () => {
    const location= document.getElementById("locationDesc").value;
    const locationName = document.getElementById("locationName");
    locationName.textContent = location;
};












// const weatherList = {
//     clear: { color1: '#7AE7C7', color2: '#72C1E1'},
//     cloudy: { color1: '#F981BB', color2: '#7F7E84'},
//     rain: { color1: '#504AC4', color2: '#59AED1'},
//     snow: { color1: '#bfc9cf', color2: '#77BDE0'},
// }

// const weather = weatherList[weather.list[0].weather[0].main.toLowerCase()];