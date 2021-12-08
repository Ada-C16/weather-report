// State 
const state = {
    tempDegrees: 64,
};

// #################
// TEMPERATURE LOGIC
// #################

// Adjust temperature
const alterTemp = (event) => {
    tempElement = document.querySelector('#temp');

    // Determine if user alters temp up or down
    if (event.target.id === 'up-arrow') {
        state.tempDegrees += 1;
    } else if (event.target.id === 'down-arrow') {
        state.tempDegrees -= 1;
    }
    
    // Associate color and ground landscape with temperature
    temp = state.tempDegrees;
    tempBlock = document.querySelector('#temperature-block');
    let tempColor;

    groundLandscape = document.querySelector('#ground-landscape');
    let groundLandscaping;
    
    switch (true) {
        case temp >= 80:
            tempColor = 'red';
            groundLandscaping = '🥖🥖🐍🥖🌵🥖🐍🥖🥖';
            break;
        case temp >= 70:
            tempColor = 'orange';
            groundLandscaping = '🔵🐟🔹〰️🏊‍♀️〰️🔹🐟🔵';
            break;
        case temp >= 60:
            tempColor = 'yellow';
            groundLandscaping = '🌻🌷🌳🌱🌲🌱🌳🌷🌻';
            break;
        case temp >= 50:
            tempColor = 'green';
            groundLandscaping = '🌱🌳🌳🌱🌲🌱🌳🌳🌱';
            break;
        default:
            tempColor = 'teal';
            groundLandscaping = '❄️❄️🌲🌲❄️⛄️❄️🌲🌲❄️❄️';
    }
    // Ground Landscaping
    groundLandscape.textContent = groundLandscaping;
    // Temp
    tempBlock.style.setProperty('background-color', tempColor);
    tempElement.textContent = `${state.tempDegrees}`;
};

const registerEventHandlers = (event) => {
    //Temperature Increase
    const tempUpArrow = document.querySelector('#up-arrow');
    tempUpArrow.addEventListener('click', alterTemp);

    //Temperature Increase
    const tempDownArrow = document.querySelector('#down-arrow');
    tempDownArrow.addEventListener('click', alterTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

// #########
// SKY LOGIC
// #########

// Retrieve sky selection and alter sky
const skySelectElement = document.querySelector('#sky');

skySelectElement.addEventListener('change', (event) => {
    const sky = document.querySelector('#sky-landscape');

    let newSky;
    switch (event.target.value) {
        case 'sunny':
            newSky = `☀️`;
            break;
        case 'cloudy':
            console.log('cloudy')
            newSky = '☁️☁️☁️☁️⛅️☁️☁️☁️☁️';
            break;
        case 'snow':
            newSky = '❄️🌨❄️❄️🌨❄️❄️🌨❄️';
            break;
        default:
            newSky = '🌧⛈🌧🌧⛈🌧🌧🌧🌧'
    }
    sky.textContent = newSky;
  });