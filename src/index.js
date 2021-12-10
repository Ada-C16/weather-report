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
const updateTempColor = (updatedTemp)=>{
    const tempFarenheitContainer= document.getElementById("tempFarenheit");
    let tempColor = "black";
    if (updatedTemp >= 80){
        tempColor = "red"
    }   else if (updatedTemp >=70){
            tempColor = "orange"
    }   else if (updatedTemp >=60){
            tempColor = "yellow"
    }   else if (updatedTemp >=50){
            tempColor = "green"
    }   else {
            tempColor = "blue"
    }
    tempFarenheitContainer.textContent = tempFarenheit
};

const updateGround =(updatedTemp) =>{
    const outsideContainer= document.getElementById("ground");
    let groundEmojis = "🌵🏜🐍🦂🏜🌵🦂🌵🐍🐍🏜🦂";
    if (updatedTemp <= 50){
        groundEmojis = "🌲🌲⛄️🌲⛄️🍂🌲🌲🌲⛄️🍂🌲";
    }   else if (updatedTemp <=70){
            groundEmojis = "🌾🌾🛤🍃🪨🛤🍁🌾🌾🍁🍃🍁";
    }    else if (updatedTemp <=80){
            groundEmojis = "🌸🌿🌼🌸🌷🌻🌿🌱🌱🌼🌻🌷";
    }
    outsideContainer.textContent = groundEmojis
};

const updateSky =() =>{
    const selectedSky = document.getElementById("skyOptions");
    const skyContainer= document.getElementById("sky");
    let skyEmojis = ""
    if (selectedSky ==="Sunny"){
        skyEmojis = "☁️ ☁️☀️☁️ ☀️ ☁️ ☀️"
    }   else if (selectedSky ==="Rainy"){
            skyEmojis = "🌧🌈⛈🌈🌧💧🌧🌦💧🌈🌧"
    }   else if (selectedSky ==="Cloudy"){
            skyEmojis = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    }   else if (selectedSky ==="Snowy"){
            skyEmojis = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
    skyContainer.textContent = skyEmojis
};

const updateCity = () =>{
    const inputCity = document.getElementById("cityInput").value;
    const headerCity = document.getElementById("headerCity");
    headerCity.textContent = inputCity;
}
const resetCity = () => {
    const inputCity = document.getElementById("cityInput");
    inputCity.value = "Philadelphia";
    updateCity();
};



const registerEventHandlers = () => {
    updateTemp(temp);
    const increaseTempButton= document.getElementById("increaseTemp");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton= document.getElementById("decreaseTemp");
    decreaseTempButton.addEventListener("click", decreaseTemp);

    updateSky();
    const skyOption= document.getElementById("skyOptions");
    skyOption.addEventListener("change", updateSky);

    updateCity();
    const cityInput = document.getElementById("cityInput");
    cityInput.addEventListener("input", updateCity);

    const cityResetButton = document.getElementById("cityReset");
    cityResetButton.addEventListener("click", resetCity )
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);