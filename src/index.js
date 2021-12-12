//state
const state = {
    temp: 0,
};

//buttons
const increase = () => {
    state.temp += 1;
    color();
    landscape();
    document.getElementById("degrees").textContent = `${state.temp} F`;
};
const decrease = () => {
    state.temp -= 1;
    color();
    landscape();
    document.getElementById("degrees").textContent = `${state.temp} F`;
};

//dropdown
const sky = (event) => {
    scene = document.querySelector("#skyscape");

    if (event.target.value === 'sunny') {
		scene.className = "sunny";
        scene.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
	}
    else if(event.target.value === 'cloudy'){
        scene.className = "cloudy";
        scene.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    }
    else if(event.target.value === 'rainy'){
        scene.className = "rainy";
        scene.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    }
    else{
        scene.className = "snowy";
        scene.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }

};


//input box
const city = (event) => {
//if a city is entered do:
const log = document.getElementById('city-name');
log.textContent = event.target.value;
};

//reset
const wipe = (event) =>{
    const city = document.getElementById("city-input");
    city.value = 'My City';
    const log = document.getElementById('city-name');
    log.textContent = 'My City';
}

//Event handler 
const registerEventHandlers = (event) => {
    const upButton = document.getElementById("up-button");
    const downButton = document.getElementById("down-button");
    const dropDown = document.getElementById("dropdown");
    const input = document.getElementById("city-input");
    const reset = document.getElementById("reset");

    upButton.addEventListener('click', increase);
    downButton.addEventListener('click', decrease);
    dropDown.addEventListener('change', sky);
    input.addEventListener('change', city);
    reset.addEventListener('click', wipe);
}

//helper functions
//-------- button related functions ---------//
function color(){
    degreeNum = document.querySelector("#degrees");
    if(state.temp <= 32){
        degreeNum.className = "freezing";
    }
    else if(state.temp <= 49){
        degreeNum.className = "really-cold";
    }
    else if(state.temp <= 59){
        degreeNum.className = "cold";
    }
    else if(state.temp <= 69){
        degreeNum.className = "warm";
    }
    else if(state.temp <= 79){
        degreeNum.className = "hot";
    }
    else{
        degreeNum.className = "scorching";
    }
}
function landscape(){
    scene = document.querySelector("#landscape");
    if(state.temp <= 0){
        scene.textContent = "☠️❄️☠️❄️☠️❄️☠️❄️☠️❄️☠️❄️☠️❄️☠️❄️☠️❄️☠️❄️☠️";
        scene.className = "ice";
    }
    else if(state.temp <= 32){
        scene.textContent = "⛄️❄️🌲❄️⛄️❄️🌲❄️⛄️❄️🌲❄️⛄️❄️🌲";
        scene.className = "ice";
    }
    else if(state.temp <= 45){
        scene.textContent = "🍁☕🍂🍁☕🍂🍁☕🍂🍁☕🍁🍂☕🍁🍂☕";
        scene.className = "leaves";
    }
    else if(state.temp <= 55){
        scene.textContent = "🌸🌿🌼_🌧️🌷🌻🌿_☘️🌱_🌻🌷🌧️";
        scene.className = "soil";
    }
    else if(state.temp <= 70){
        scene.textContent = "🍉☀️🍎☀️🍐☀️🍉☀️🍎☀️🍐☀️🍉☀️🍎☀️🍐";
        scene.className = "soil";
    }
    else if(state.temp <= 85){
        scene.textContent = "🏖️🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊";
        scene.className = "ocean";
    }
    else{
        scene.textContent = "🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳🍳";
    }
}

//-------- dropdown related functions ---------//

//function skyscape(){}

//-------- input related functions ---------//

// function cityValue(event) {
//     const log = document.getElementById('#city-name');
//     log.textContent = event.target.value;
// }

document.addEventListener("DOMContentLoaded", registerEventHandlers);