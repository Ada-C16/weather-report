const state = {
    tempCount = 0
}

const decreaseTemp = () => {
    state.tempCount -= 1;
    const tempCountContainer = document.querySelector("#tempCount")
    tempCountContainer.textContent = `${state.tempCount}`
}

const registerEventHandlers = () => {
    const tempButton = document.querySelector("#addToCounter")
    tempButton.addEventListener("click", addTemp)
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);