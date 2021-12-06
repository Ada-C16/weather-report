let city = document.getElementById("cityName");
const resetButton = document.getElementById("resetButton");
const increaseTemp = document.getElementById("increaseTemp");
const decreaseTemp = document.getElementById("decreaseTemp");
// let temp = document.getElementById("temp").firstChild;
let temp = document.getElementById("num");
let sky = document.getElementById("sky");
let garden = document.getElementById("garden");

// on click, change the textContent of temp by one degree
// convert temp to an int

// create a larger change temp function
// check which item has been clicked
// if inc, then increase
// else if dec, then decrease

const checkTemp = (changedTemp) => {
    tempInt = parseInt(changedTemp);
    if (tempInt >= 80) {
        temp.style.color = "red"
    } else if (tempInt >= 70) {
        temp.style.color = "orange"
    } else if (tempInt >= 60) {
        temp.style.color = "yellow"
    } else if (tempInt >= 50) {
        temp.style.color = "green"
    } else if (tempInt <= 49) {
        temp.style.color = "teal"
    }
}

const addTemp = () => {
    temp.textContent = parseInt(temp.textContent) + 1;
    checkTemp(temp.textContent);
}

const subtractTemp = () => {
    temp.textContent = parseInt(temp.textContent) - 1;
    checkTemp(temp.textContent);
}

increaseTemp.addEventListener("click", addTemp);
decreaseTemp.addEventListener("click", subtractTemp);

