const state = {
    tempCount : 0
};

const decreaseTemp = () => {
    state.tempCount -= 1;
    const tempCountContainer = document.querySelector("#tempCounter");
    tempCountContainer.textContent = `${state.tempCount}`;
}


const increaseTemp = () => {
    state.tempCount += 1;
    const tempCountContainer = document.querySelector("#tempCounter");
    tempCountContainer.textContent = `${state.tempCount}`;
}

const registerEventHandlers = () => {
    const decButton = document.querySelector("#decreaseButton");
    decButton.addEventListener("click", decreaseTemp);
    
    const incButton = document.querySelector("#increaseButton");
    incButton.addEventListener("click", increaseTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
