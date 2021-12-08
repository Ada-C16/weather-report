// ***** Temperature Variables *****

const incTemp = document.querySelector("#increase-temp");
const decTemp = document.querySelector("#decrease-temp");
const tempDisplay = document.querySelector("#temp-display");
const landscape = document.querySelector("#landscape");

let temp = 70;

// PUT INTITIAL TEMP COLOR and sky and landscape settings into html

// ***** Temperature Functions *****

const tempColors = () => {
    if (temp >= 80){
        tempDisplay.className = "red"
    } else if (temp<80 && temp>=70){
        tempDisplay.className = "orange"
    }else if (temp<70 && temp>=60){
        tempDisplay.className = "yellow"
    }else if (temp<60 && temp>=50){
        tempDisplay.className = "green"
    }else if (temp<=49){
        tempDisplay.className = "teal"
    }
};

const tempLand = () => {
    if (temp >= 80){
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (temp<80 && temp>=70){
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    }else if (temp<70 && temp>=60){
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    }else if (temp<60){
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
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

const displayCountry = (event) => {
    event.className = "visible"
};

// ***** Sky Variables *****



const changeSky = () => {
    const skyDropdown = document.querySelector("#sky-dropdown").value;
    const skyGarden = document.querySelector("#sky-garden")
    if (skyDropdown==="Sunny"){
        skyGarden.textContent="☀️ ☀️ ☀️ ☀️ ☀️ ☀️ ☀️"
    } else if (skyDropdown==="Cloudy"){
        skyGarden.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    }else if (skyDropdown==="Rainy"){
        skyGarden.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    }else if (skyDropdown==="Snowy"){
        skyGarden.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
};

// ***** Event Handlers *****
const registerEventHandlers = () => {
    // const incTemp = document.querySelector("#increase-temp");
    // const decTemp = document.querySelector("#increase-temp");
    incTemp.addEventListener("click", increaseTemp);
    decTemp.addEventListener("click", decreaseTemp);
    const skyDrop = document.querySelector("#sky-dropdown");
    skyDrop.addEventListener("change", changeSky);
    
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);