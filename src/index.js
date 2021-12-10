// ***** Temperature Variables *****

const incTemp = document.querySelector("#increase-temp");
const decTemp = document.querySelector("#decrease-temp");
const tempDisplay = document.querySelector("#temp-display");
const landscape = document.querySelector("#landscape");

let temp = 70;


// ***** Temperature Functions *****

const tempColors = () => {
    if (temp >= 80){
        tempDisplay.className = "red"
    } else if (temp < 80 && temp >= 70){
        tempDisplay.className = "orange"
    }else if (temp < 70 && temp >= 60){
        tempDisplay.className = "yellow"
    }else if (temp <60 && temp >= 50){
        tempDisplay.className = "green"
    }else if (temp <= 49){
        tempDisplay.className = "teal"
    }
};

const tempLand = () => {
    if (temp >= 80){
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (temp < 80 && temp >= 70){
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    }else if (temp < 70 && temp >= 60){
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    }else if (temp <60 && temp >= 50){
        landscape.textContent = "🌲🌲🍁🌲🍁🍂🌲🍁🌲🌲🍂🌲"
    }else if (temp <= 49){
        landscape.textContent = "⛄️☃️__⛄️__⛄️☃️⛄️_⛄️☃️_⛄️"
    }
};

const increaseTemp = () => {
    temp += 1
    tempDisplay.textContent= temp
    tempColors();
    tempLand();
};

const decreaseTemp = () => {
    temp -= 1
    tempDisplay.textContent=temp
    tempColors();
    tempLand();
};


// ***** Sky Variables *****

const changeSky = () => {
    const skyDropdown = document.querySelector("#sky-dropdown").value;
    const skyGarden = document.querySelector("#sky-garden")
    if (skyDropdown === "Sunny"){
        skyGarden.textContent = "☀️ ☀️ ☀️ ☀️ ☀️ ☀️ ☀️"
    } else if (skyDropdown === "Cloudy"){
        skyGarden.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    }else if (skyDropdown === "Rainy"){
        skyGarden.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧"
    }else if (skyDropdown === "Snowy"){
        skyGarden.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
};


// ***** City Name Input and Reset Functions *****

const cityHeader = document.querySelector("#city-header");

const cityChange = () =>{
    const cityInputValue = document.querySelector("#city-input").value;
    cityHeader.textContent = cityInputValue;
    
};

const reset= () =>{
    cityHeader.textContent = "Catalina Island";
    document.querySelector("#city-input").value = "Catalina Island"

};


// ***** Event Handlers *****
const registerEventHandlers = () => {
    incTemp.addEventListener("click", increaseTemp);
    decTemp.addEventListener("click", decreaseTemp);

    const skyDrop = document.querySelector("#sky-dropdown");
    skyDrop.addEventListener("change", changeSky);

    const cityInput = document.querySelector("#city-input");
    cityInput.addEventListener("input", cityChange);

    const resetButton = document.querySelector("#city-reset")
    resetButton.addEventListener("click", reset);
    
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);