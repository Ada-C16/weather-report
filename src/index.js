

const state = {
    temperature:0
}

const getSelectedCity = () =>{
        const showCityTyped = document.querySelector("#city").value;
        const cityName =document.querySelector("#lovelyCity");
        cityName.textContent = event.target.value
}

const addReset = () =>{
    let input = document.querySelector("#city");
    input.value = ""

}

const temperatureReadingElement = document.querySelector("#temperatureReading");
const changeColor = () => {
    if (state.temperature >= 80){
        temperatureReadingElement.className="burning";
    }else if(state.temperature >=70){
        temperatureReadingElement.className="worning";
    }else if(state.temperature >= 60){
        temperatureReadingElement.className="sunny";
    }else if (state.temperature >=50){
        temperatureReadingElement.className="cold";
    }else{
        temperatureReadingElement.className="freezing";
    }

    }

const changeImage = () =>{
    const displayImageElement = document.querySelector("#displayFeature");
    const newImage=document.createElement("span")
    if (state.temperature >= 80){
        newImage.innerHTML="🌵__🐍_🦂_🌵🌵__🐍_🏜_";
    }else if(state.temperature >= 70){
        newImage.innerHTML="🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    }else if(state.temperature >= 60){
        newImage.innerHTML="🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }else if(state.temperature <= 59){
        newImage.innerHTML="🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
    if (displayImageElement.childElementCount >= 1){
        displayImageElement.replaceChildren(newImage);
    }else{
        displayImageElement.appendChild(newImage);
        
    }

    }

    const getSelectedWeather = () =>{
        const showSelectedWeather = document.querySelector("#sky").value;
        console.log(showSelectedWeather)
        const displayWeather = document.querySelector("#displayWeather");
        const newWeather = document.createElement("span");
        if(showSelectedWeather==="sunny"){
            newWeather.innerHTML ="☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
        }else if(showSelectedWeather === "cloudy"){
            newWeather.innerHTML="☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"  
        }else if(showSelectedWeather === "rainy" ){
            newWeather.innerHTML="🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    
        }else if(showSelectedWeather==="snowy"){
            newWeather.innerHTML="🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        }
        if (displayWeather.children.length >=1){
            displayWeather.replaceChildren(newWeather);
            console.log("first")
        }else{
            displayWeather.appendChild(newWeather);
            console.log("second")
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
    const citySelected=document.querySelector("#city");
    const addResetButton = document.getElementById("addResetButton")
    const addWeatherSelection = document.getElementById("sky")
    addTemperatureButton.addEventListener("click",increaseTemperatureReading);
    reduceTemperatureButton.addEventListener("click",reduceTemperatureReading);
    citySelected.addEventListener("input",getSelectedCity)
    addResetButton.addEventListener("click",addReset)
    addWeatherSelection.addEventListener("change",getSelectedWeather)
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);