
// const mainSection = document.querySelector("#weather-title");


// const title = document.createElement("h1");

// title.textContent = " Min's Weather Report";

// mainSection.appendChild(title);
// console.log(weatherTitle);
// console.log(title);

const state = {
    tempchange: 50 

}
//selecting the variable increase the value of temperature(tempvalue) so we can use 
const clickButtonUp = () => {
    state.tempchange += 1;
    const increseButtonElement = document.getElementById('tempvalue');
    increseButtonElement.textContent = `${state.tempchange}`;
    console.log("clickly click click");

}


// const updateSky = () => {
//     const inputSky = document.getElementById("skySelect").value;
//     const skyContainer = document.getElementById("sky");
//     let sky = "";
//     let skyColor = "";
//     if (inputSky === "Cloudy") {
//         sky = url(/upintheclouds.webp);
//         skyColor = "cloudy";
//     } else if (inputSky === "Sunny") {
//         sky = "☁️     ☁️   ☁️ ☀️ ☁️  ☁️";
//         skyColor = "sunny";
//     } else if (inputSky === "Rainy") {
//         sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
//         skyColor = "rainy";
//     } else if (inputSky === "Snowy") {
//         sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
//         skyColor = "snowy";
//     }
//     skyContainer.textContent = sky;
//     const gardenContent = document.getElementById("gardenContent");
//     gardenContent.classList = `garden__content ${skyColor}`;
// };
const updateTemp = tempValue => {
    const tempValueContainer = document.getElementById("tempvalue");
    tempValueContainer.textContent = tempValue;
    updateTempStyles(tempValue);
    updateGarden(tempValue);
}

const updateTempStyles = (currentTemp) => {
    const tempValueContainer = document.getElementById("tempvalue");
    let color = "teal";
    if ( currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    }
    tempValueContainer.classList = color;
}



    //register the button, telling the website to listen for a click 
const registerEventHandlers = () =>{
    const increseButtonElement = document.getElementById('increseButton');
    increseButtonElement.addEventListener("click", clickButtonUp)
document.addEventListener("DOMContentLoaded", registerEventHandlers);
}




