

const state = {
    temperature:0

}
const temperatureReadingElement = document.querySelector("#temperatureReading");
const changeColor = () => {
    if (state.temperature >= 80){
        temperatureReadingElement.className="burning";
    }else if(state.temperature >=70){
        temperatureReadingElement.className="worning"
    }else if(state.temperature >= 60){
        temperatureReadingElement.className="sunny"
    }else if (state.temperature >=50){
        temperatureReadingElement.className="cold"
    }else{
        temperatureReadingElement.className="freezing"
    }

    }


const increaseTemperatureReading = () =>{
    state.temperature += 1;
    changeColor();
    temperatureReadingElement.textContent = `Temprature: ${state.temperature}`;
};

const reduceTemperatureReading = () =>{
    state.temperature -= 1;
    temperatureReadingElement.textContent = `Temprature: ${state.temperature}`;
};
const registerEventHandlers = (event) => {
    const addTemperatureButton =document.getElementById("addTemperatureButton");
    const reduceTemperatureButton =document.getElementById("reduceTemperatureButton");
    console.log(addTemperatureButton);
    addTemperatureButton.addEventListener("click",increaseTemperatureReading);
    reduceTemperatureButton.addEventListener("click",reduceTemperatureReading);
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);