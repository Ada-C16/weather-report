

const state = {
    temperature:0

}
const temperatureReadingElement = document.querySelector("#temperatureReading");
const changeColor = () => {
    if (state.temperature >= 8){
        temperatureReadingElement.className="burning";
    }else if(state.temperature >=7){
        temperatureReadingElement.className="worning"
    }else if(state.temperature >= 6){
        temperatureReadingElement.className="sunny"
    }else if (state.temperature >=5){
        temperatureReadingElement.className="cold"
    }else{
        temperatureReadingElement.className="freezing"
    }

    }

    const changeImage = () =>{
        const displayImageElement = document.querySelector("#displayFeature");
        const newImage=document.createElement("span")
        if (state.temperature >= 8){
            newImage.innerHTML="🌵__🐍_🦂_🌵🌵__🐍_🏜_";
        }else if(state.temperature >= 7){
            newImage.innerHTML="🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
        }else if(state.temperature >= 6){
            newImage.innerHTML="🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
        }else if(state.temperature <= 5){
            newImage.innerHTML="🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        }
        if (displayImageElement.childElementCount >= 1){
            displayImageElement.replaceChildren(newImage);
        }else{
            displayImageElement.appendChild(newImage);
            
        }
    
        }


const increaseTemperatureReading = () =>{
    state.temperature += 1;
    changeColor();
    changeImage()
    temperatureReadingElement.textContent = `Temprature: ${state.temperature}`;
};

const reduceTemperatureReading = () =>{
    state.temperature -= 1;
    changeColor();
    changeImage();
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