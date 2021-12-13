let tempValue = 70;
let sky = ""

const selectSky = function() {
    const skyOption = document.getElementById("skySelect")
    const getInput = skyOption.options[skyOption.selectedIndex].value;
    const skyContainer = document.getElementById("sky");
    
    if (getInput === "Surfing") {
        sky = '☁️☁️☁️ ☁️ ☁️ ☀️ ☁️ ☁️☁️☁️'
    } else if (getInput === "MEOW!") {
        sky = '😸😺😽🙀😾😿😼😻😹'
    } else if (getInput === "Sunny") {
        sky = '☁️☁️☁️ ☁️ ☁️ ☀️ ☁️ ☁️☁️☁️'
    } else if (getInput === "Cloudy") {
        sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️'
    } else if (getInput === "Rainy") {
        sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧'
    } else if (getInput === "Snowy") {
        sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨'
    }
    skyContainer.textContent = sky;
}

const updateCity = () =>  {
    const getCityName = document.getElementById("cityNameInput").value
    const headerCityContainer = document.getElementById("headerCityName")
    headerCityContainer.textContent = getCityName
}

// reset to default city name 
const resetCity = () => {
    const cityContainer = document.getElementById("cityNameInput")
    cityContainer.value = '🖤Seattle🖤'
    // reflect that reset on the header
    updateCity();
}

const updateTemp = function(tempValue) {
    const tempValueContainer = document.getElementById("tempValue")
    const landscapeContainer = document.getElementById("landscape")
    // console.log(tempValueContainer)
    tempValueContainer.textContent = tempValue
    if (tempValue >= 90) {
        tempValueContainer.style.color = 'red'
        landscapeContainer.textContent = '🌊🌊🐬🌊🐳🌊🐋🌊🌊_🏄🏻‍♀️🌊'
    } else if (tempValue >= 80) {
        tempValueContainer.style.color = 'red'
        landscapeContainer.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂'
    } else if (tempValue >= 70) {
        tempValueContainer.style.color = 'orange'
        landscapeContainer.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷'
    } else if (tempValue >= 60) {
        tempValueContainer.style.color = 'gold'
        landscapeContainer.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃'
    } else if (tempValue >= 50) {
        tempValueContainer.style.color = 'green'
        landscapeContainer.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲'
    } else {
        tempValueContainer.style.color = 'teal'
        landscapeContainer.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲'
    }

}

const registerEventHandlers = function() {
    updateTemp(tempValue);

    const incButton = document.querySelector("#increaseTempControl")
    incButton.addEventListener("click", function() {
        tempValue += 1
        updateTemp(tempValue)
    })

    const decButton = document.querySelector("#decreaseTempControl")
    decButton.addEventListener("click", function() {
        tempValue -= 1
        updateTemp(tempValue)
    })

    selectSky();
    const skyMenu = document.querySelector("#skySelect");
    skyMenu.addEventListener("change", selectSky)

    updateCity();
    const inputCity = document.querySelector("#cityNameInput");
    inputCity.addEventListener("input", updateCity)

    resetCity();
    const resetCityButton = document.querySelector(".resetButton")
    resetCityButton.addEventListener("click", resetCity)
};


// registerEventHandlers()

document.addEventListener("DOMContentLoaded", registerEventHandlers);
