
const mainSection = document.querySelector("#weather-title");


const title = document.createElement("h1");

title.textContent = " Min's Weather Report";

mainSection.appendChild(title);
console.log(weatherTitle);
console.log(title);

const state = {
    tempcount : 0 
}

//Create event handler for clicking on temperature button 
// const addButton = (event)=>{
//     const increaseButton = document.createElement("span");
//     const decreaseButton = document.createElement("span");
//     const tempButtonscontainer = document.querySelector("#tempButtons");
//     increaseButton.textContent = "🥵";
//     decreaseButton.textContent = "🥶";
//     tempButtonscontainer.appendChild(increaseButton,decreaseButton.textContent)

//     state.tempcount+=1
//     state.tempcount-=1

// }
const updateTemp = tempValue => {
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = tempValue;
    updateTempStyles(tempValue);
    updateGarden(tempValue);

const increaseTemp = () => {
    tempValue += 1;
    updateTemp(tempValue);
};

const decreaseTemp = () => {
    tempValue -= 1;
    updateTemp(tempValue);
};
const registerEventHandlers = () => {
    updateTemp(tempvalue);

    const increaseTempControl = document.getElementById("increaseTempControl");
    increaseTempControl.addEventListener("click", increaseTemp);
    
    const decreaseTempControl = document.getElementById("decreaseTempControl");
    decreaseTempControl.addEventListener("click", decreaseTemp);


// const registerEvents = () => {
//     updateTemp("included");

//     const clickMeBtn = document.addEventListener("DOMContentloaded", registerEvents)
// }; 

// const registerEventHandlers = () => {
//     updateTemp(tempValue);

//     const increaseTempControl = document.getElementById("increaseTempControl");
//     increaseTempControl.addEventListener("click", increaseTemp);
    
//     const decreaseTempControl = document.getElementById("decreaseTempControl");
//     decreaseTempControl.addEventListener("click", decreaseTemp);
