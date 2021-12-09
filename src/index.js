// 1. A click on the hotter button increases the counter by 1
const state = {
    degrees: 72,
    clicked: false
};

const increaseTemp = (event) => {
    const degreesContainer = document.getElementById("degrees");
    state.degrees += 1;
    degreesContainer.textContent = state.degrees;
};

// Register all events
const registerEventHandlers = () => {
    const hotButton = document.getElementById("hotterButton");
    hotButton.addEventListener("click", increaseTemp);
};

// DOM listener
document.addEventListener("DOMContentLoaded",registerEventHandlers);