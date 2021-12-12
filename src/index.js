const state = {
    tempCount : 0
};

const changeTempColor = () => {
    if (state.tempCount <= 49) {
        document.getElementById("tempCounter").style.color = "teal";
    } else if (state.tempCount <= 59) {
        document.getElementById("tempCounter").style.color = "green";
    } else if (state.tempCount <= 69) {
        document.getElementById("tempCounter").style.color = "yellow";
    } else if (state.tempCount <= 79) {
        document.getElementById("tempCounter").style.color = "orange";
    } else if (state.tempCount >= 80) {
        document.getElementById("tempCounter").style.color = "red";
    } 
}

const changeLandscape = () => {
    if (state.tempCount <= 59) {
        document.getElementById("landscape").textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (state.tempCount <= 69) {
        document.getElementById("landscape").textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.tempCount <= 79) {
        document.getElementById("landscape").textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.tempCount >= 80) {
        document.getElementById("landscape").textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }
}

const changeSky = () => {
    var value = selectObject.value;  
    console.log(value);
}

const decreaseTemp = () => {
    state.tempCount -= 1;
    const tempCountContainer = document.querySelector("#tempCounter");
    tempCountContainer.textContent = `${state.tempCount}`;
    changeTempColor();
    changeLandscape();
}

const increaseTemp = () => {
    state.tempCount += 1;
    const tempCountContainer = document.querySelector("#tempCounter");
    tempCountContainer.textContent = `${state.tempCount}`;
    changeTempColor();
    changeLandscape();
}

const registerEventHandlers = () => {
    const decButton = document.querySelector("#decreaseButton");
    decButton.addEventListener("click", decreaseTemp);
    
    const incButton = document.querySelector("#increaseButton");
    incButton.addEventListener("click", increaseTemp);

    const skyMenu = document.querySelector("#sky");
    skyMenu.addEventListener("onChange", changeSky)
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
