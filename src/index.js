let tempValue = 0;

const incrementTemp = () => {
    tempValue += 1;
    const pancake = document.getElementById("temperatureValue");
    pancake.textContent = tempValue
    updateTempColor(pancake.textContent);
};

const decrementTemp = () => {
    tempValue -= 1;
    const pancake = document.getElementById("temperatureValue");
    pancake.textContent = tempValue
    updateTempColor(pancake.textContent);
};

const increase = () => {
    const incrementTempControl = document.getElementById("incrementTempControl");
    incrementTempControl.addEventListener("click", incrementTemp,);
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


// const updateLocationName = () => {
//     const location= document.getElementById("locationDesc").value;
//     const locationName = document.getElementById("locationName");
//     locationName.textContent = location;
// };

const updateTempColor = (currentTemp) => { 
    const tempValueHolder = document.getElementById("temperatureValue");
    let color = "red";
    if (currentTemp >= 80){
        color = "orange-red";
    }else if (currentTemp >=70){
        color = "orange";
    }else if (currentTemp >= 30){
        color = "yellow";
    }else if (currentTemp >= 0){
        color = "blue";
    }else if (currentTemp >= -30){
        color = "light-blue"
    }
    
    let curr_class = tempValueHolder.classList.item(0);
    tempValueHolder.classList.replace(curr_class,color);
    
}











