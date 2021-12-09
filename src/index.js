const state = {
    temperature: 72
};

//add helper functions to change temperature color

//increase temp event handler
const increaseTemp = () => {
    //increment temperature
    ++state.temperature;
    //display new temperature;
    document.querySelector('#temperature-display').textContent = `${state.temperature}°`;
    console.log("temperature is now:", state.temperature);
}

//decrease temp event handler
const decreaseTemp = () => {
    //increment temperature
    --state.temperature;
    //display new temperature;
    document.querySelector('#temperature-display').textContent = `${state.temperature}°`;
    console.log("temperature is now:", state.temperature);
}

const registerEventHandlers = (event) => {
    const increaseTempButton = document.querySelector('#increase-temp');
    increaseTempButton.addEventListener("click", increaseTemp);
    const decreaseTempButton = document.querySelector('#decrease-temp');
    decreaseTempButton.addEventListener("click", decreaseTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);