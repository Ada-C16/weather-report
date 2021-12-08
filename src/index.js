const state = {
    temp: 70,
};

const displayTemp = () => {
    const tempDisplay = document.querySelector("#tempDisplay");
    const display = document.createElement("span");
    display.textContent = state.temp;
};

const increaseTemp = () => {
    state.temp += 1;
    const tempDisplay = document.querySelector("#tempDisplay");
    tempDisplay.textContent = `${state.temp}F`;
    if (state.temp >= 80){
        tempDisplay.setAttribute("style", "background-color: red");
    } else if (state.temp >= 70){
        tempDisplay.setAttribute("style", "background-color: orange")
    } else if (state.temp >= 60){
        tempDisplay.setAttribute("style", "background-color: yellow")
    } else if (state.temp >= 50){
        tempDisplay.setAttribute("style", "background-color: green")
    } else {
        tempDisplay.setAttribute("style", "background-color: teal")
    }
}

const decreaseTemp = () => {
    state.temp -= 1;
    const tempDisplay = document.querySelector("#tempDisplay");
    tempDisplay.textContent = `${state.temp}F`;
    if (state.temp >= 80){
        tempDisplay.setAttribute("style", "background-color: red");
    } else if (state.temp >= 70){
        tempDisplay.setAttribute("style", "background-color: orange")
    } else if (state.temp >= 60){
        tempDisplay.setAttribute("style", "background-color: yellow")
    } else if (state.temp >= 50){
        tempDisplay.setAttribute("style", "background-color: green")
    } else {
        tempDisplay.setAttribute("style", "background-color: cyan")
    }
}


const registerEventHandlers = () => {
    const tempIncreaseButton = document.querySelector("#tempIncrease");
    const tempDecreaseButton = document.querySelector("#tempDecrease");
    tempIncreaseButton.addEventListener("click", increaseTemp);
    tempDecreaseButton.addEventListener("click", decreaseTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);