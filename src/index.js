let currentTemp = 65;

const updateTemperature = currentTemp => {
    const tempContainer = document.getElementById("tempNum");
    tempContainer.textContent = currentTemp;
    changeTempColor(currentTemp);
    changeLandscape(currentTemp);
};

const increaseTemperature = () => {
    currentTemp += 1;
    updateTemperature(currentTemp);
};

const decreaseTemperature = () => {
    currentTemp -= 1;
    updateTemperature(currentTemp);
};

const changeTempColor = currentTemp => {
    const tempContainer = document.getElementById("temp-content");
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

const changeLandscape = currentTemp => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "";
    if (currentTemp >= 80) {
        landscape = "🌵🐍🦂🌵🌵🌵🐍🌵🏜🦂"
    } else if (currentTemp >= 70) {
        landscape = "🌸🌿🌼🌷🌻🌿☘️🌱🌻🌷"
    } else if (currentTemp >= 60) {
        landscape = "🌾🌾🍃🍃🪨🪨🪨🪨🍃"
    } else if (currentTemp >= 50){ 
        landscape = "🌲🌲⛄️🌲🍂🌲🌲🌲🍂🌲"
    } else if (currentTemp < 50){
        landscape = "⛄️❄️❄️⛄️❄️❄️⛄️⛄️❄️❄️"
    }
    landscapeContainer.textContent = landscape;
};

const updateSky = () => {
    const skyDropdown = document.getElementById("sky-dropdown").value;
    const skyForecast = document.getElementById("sky");
    let sky = "";
    if (skyDropdown === "Sunny") {
        sky = "☀️☀️☀️☀️☀️☀️☀️☀️☀️"
    } else if (skyDropdown === "Cloudy") {
        sky = "🌤🌤🌤🌤🌤🌤🌤🌤🌤"
    } else if (skyDropdown === "Rainy") {
        sky = "🌧🌧🌧🌧🌧🌧🌧🌧🌧"
    } else if (skyDropdown === "Snowy") {
        sky = "❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️"
    }
    skyForecast.textContent = sky;
};

// const updateSky2 = () => {
//     const skyDropdown = document.getElementById("sky-dropdown").value;
//     const skyForecast = document.getElementsByTagName("header");
//     // let header = " ";
//     if (skyDropdown === "Sunny") {
//         // sky = "☀️☀️☀️☀️☀️☀️☀️☀️☀️"
//         header = document.getElementsByTagName("header").style.backgroundImage = "url('https://i.gifer.com/embedded/download/g0bK.gif')";
//         // header = header.setAttribute('style', 'background:url(https://i.gifer.com/embedded/download/g0bK.gif) no-repeat !important');
//         // style.backgroundImage = "url('https://i.gifer.com/embedded/download/g0bK.gif')"
//     } else if (skyDropdown === "Cloudy") {
//         sky = "🌤🌤🌤🌤🌤🌤🌤🌤🌤"
//     } else if (skyDropdown === "Rainy") {
//         sky = "🌧🌧🌧🌧🌧🌧🌧🌧🌧"
//     } else if (skyDropdown === "Snowy") {
//         sky = "❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️"
//     }
//     skyForecast.textContent = sky;
// };

const updateCityName = () => {
    const inputCityName = document.getElementById("name").value;
    const cityNameHeader = document.getElementById("name");
    cityNameHeader.textContent = inputCityName;
};


const resetCityName = () => {
    const cityNameInput = document.getElementById("name");
    cityNameInput.value = "Michelle";
    updateCityName();
};



const registerEventHandlers = () => {
    increaseTemperature();
    const tempIncreaseBtn = document.getElementById("increase-temp");
    tempIncreaseBtn.addEventListener("click", increaseTemperature);

    decreaseTemperature();
    const tempDecreaseBtn = document.getElementById("decrease-temp");
    tempDecreaseBtn.addEventListener("click", decreaseTemperature);

    updateSky();
    const skyDropdown = document.getElementById("sky-dropdown");
    skyDropdown.addEventListener("change", updateSky);


    updateCityName();
    const inputCityName = document.getElementById("city");
    inputCityName.addEventListener("input", updateCityName);

    resetCityName();
    const cityNameResetBtn = document.getElementById("reset-button");
    cityNameResetBtn.addEventListener("click", resetCityName);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);