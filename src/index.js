const state = {
    temperature: 72,
    sky: 'sunny'
};

// increase temp event handler
const increaseTemp = () => {
    //increment temperature
    ++state.temperature;
    //display new temperature;
    document.querySelector('#temperature-display').textContent = `${state.temperature}°`;
    console.log("temperature is now:", state.temperature);
}

// decrease temp event handler
const decreaseTemp = () => {
    //increment temperature
    --state.temperature;
    //display new temperature;
    document.querySelector('#temperature-display').textContent = `${state.temperature}°`;
    console.log("temperature is now:", state.temperature);
}

// change temperature color
const colorTempDisplay = () => {
    if (state.temperature > 79) {
        document.querySelector('#temperature-display').style.color = "#f07178";
    } else if (state.temperature > 69 && state.temperature < 80) {        
        document.querySelector('#temperature-display').style.color = "#f78c6c";
    } else if (state.temperature > 59 && state.temperature < 70) {
        document.querySelector('#temperature-display').style.color = "#ffcb6b";
    } else if (state.temperature > 49 && state.temperature < 60) {
        document.querySelector('#temperature-display').style.color = "#c3e88d";
    } else if (state.temperature <= 49) {
        document.querySelector('#temperature-display').style.color = "#89ddff";
    }
}

//change landscape
const changeLandscape = () => {
    if (state.temperature > 59 && state.temperature < 70) {
        document.querySelector('#landscape-block').style.backgroundImage = "url(/imgs/landscape-mild.jpg)";
    } else if (state.temperature > 69 && state.temperature < 80) {
        document.querySelector('#landscape-block').style.backgroundImage = "url(/imgs/landscape-default.jpg)";
    } else if (state.temperature > 49 && state.temperature < 60) {
        document.querySelector('#landscape-block').style.backgroundImage = "url(/imgs/landscape-cool.jpg)";
    } else if (state.temperature <= 49) {
        document.querySelector('#landscape-block').style.backgroundImage = "url(/imgs/landscape-snow.jpg)";
    } else if (state.temperature >= 80) {
        document.querySelector('#landscape-block').style.backgroundImage = "url(/imgs/landscape-hot.jpg)";
    }
}

//change sky
const changeSky = () => {
    let currentSky = document.querySelector('#sky-selector');
    state.sky = currentSky.value;
    if (state.sky == 'Sunny') {
        document.querySelector('#sky-display').style.backgroundImage = "url(/imgs/sky-sunny.jpg)";
    } else if (state.sky == 'Cloudy') {
        document.querySelector('#sky-display').style.backgroundImage = "url(/imgs/sky-cloudy.jpg)";
    } else if (state.sky == 'Rainy') {
        document.querySelector('#sky-display').style.backgroundImage = "url(/imgs/sky-rainy.jpg)";
    } else if (state.sky == 'Snowy') {
        document.querySelector('#sky-display').style.backgroundImage = "url(/imgs/sky-snowy.jpg)";
    }
    console.log ("Sky is set to:", state.sky);
};

const registerEventHandlers = (event) => {
    //increase temp
    const increaseTempButton = document.querySelector('#increase-temp');
    increaseTempButton.addEventListener("click", increaseTemp);
    //decrease temp
    const decreaseTempButton = document.querySelector('#decrease-temp');
    decreaseTempButton.addEventListener("click", decreaseTemp);
    //temperature color change
    increaseTempButton.addEventListener("click", colorTempDisplay);
    decreaseTempButton.addEventListener("click", colorTempDisplay);
    //change landscape
    increaseTempButton.addEventListener("click", changeLandscape);
    decreaseTempButton.addEventListener("click", changeLandscape);
    //change sky
    const skySelector = document.querySelector('#sky-selector');
    skySelector.addEventListener("change", changeSky);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);