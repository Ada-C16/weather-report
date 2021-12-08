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
    
    tempBlock = document.querySelector('#temperature-block');
    temp = state.tempDegrees;
    // Associate color with temperature
    switch (true) {
        case temp >= 80:
            tempBlock.style.setProperty('background-color', 'red');
            break;
        case temp >= 70:
            tempBlock.style.setProperty('background-color', 'orange');
            break;
        case temp >= 60:
            tempBlock.style.setProperty('background-color', 'yellow');
            break;
        case temp >= 50:
            tempBlock.style.setProperty('background-color', 'green');
            break;
        default:
            tempBlock.style.setProperty('background-color', 'teal');
    }

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