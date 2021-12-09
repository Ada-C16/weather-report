temp = 70

const updateTemp = temp => {
    const tempFarenheitContainer= document.getElementById("tempFarenheit");
    tempFarenheitContainer.textContent = temp;
}
const increaseTemp = () => {
    temp += 1;
    updateTemp(temp);
};
const decreaseTemp = () => {
    temp -=1;
    updateTemp(temp);
};

const registerEventHandlers = () => {
    updateTemp(temp);
    const increaseTempButton= document.getElementById("increaseTemp");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton= document.getElementById("decreaseTemp");
    decreaseTempButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);