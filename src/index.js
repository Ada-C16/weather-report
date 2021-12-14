console.log("loaded")

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
const clickButtonDown = () => {
    state.tempchange -= 1; 
    const decreaseButtonElement = document.getElementById('tempvalue');
    decreaseButtonElement.textContent = `${state.tempchange}`; 
    console.log("downbutton click")


}

const changeSky = () => {
    const inputSky = document.querySelector(".skyDropMenu").value

    // let gardenGifs = "cloudy";
    
    // if (inputSky === "cloudy") {
    //     gardenGifs = "cloudy"
    
    // } else if (inputSky === "sunny") {
    //     gardenGifs = "sunny";
    // } else if (inputSky === "rainy") {
    //     gardenGifs = "rainy";
    // } else if (inputSky === "snowy") {
    //     gardenGifs = "snowy";
    // }
    
    
    const gardenContent = document.querySelector(".gardenContainer");
    gardenContent.className = "gardenContainer"
    gardenContent.classList.add(inputSky);
}
const changeCityName = () => {
    
    const cityNameInputEl= document.getElementById("cityNameInput").value; 
    const headerCityEl = document.getElementById("CityName"); 
    headerCityEl.textContent = cityNameInputEl;
    console.log("citygirls")
}
const cityReset = () => {

    const cityNameInput = document.getElementsById("cityNameInput");
    cityNameInput.value = "Miami"; 
    cityNameInput.value.classList.add(cityNameInput);
    console.log("inthecitygirls")
    changeCityName();
    

}; 

const changeTempColor = () => {

    const tempColor = document.getElementById("tempvalue");
        let color = "blue"; 
        if (state.tempchange >=80){
            color = "rgba(24, 17, 24, 0.836)";
        console.log("hotttttttttt")
        }else if (state.tempchange  >=70){
            color = "rgb(117, 87, 117)";
        }else if (state.tempchange  >=60){
            color = "rgb(175, 124, 175)";
        }else if (state.tempchange  >=50){
            color = "black";
        }
        tempColor.classList = color; 


}

const changeGarden = ()=> {

    const landContainer = document.querySelector("#landscape")
    let landscape = "🥶🧊💎🥶🧊💎🥶🧊💎🥶🧊💎🥶🧊💎🥶🧊💎🥶🧊💎🥶"; 
    if (state.tempchange>=80){
        landscape = "🥵🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🥵"; 
    } else if (state.tempchange >=70){
        landscape = "✈️☁️✌🏾✈️☁️✌🏾✈️☁️✌🏾✈️☁️✌🏾✈️☁️✌🏾✈️☁️✌🏾✈️☁️✌🏾✈️☁️✌🏾✈️☁️✌🏾✈️☁️✌🏾✈️☁️✌🏾✈️☁️✌🏾✈️☁️"; 
    }else if (state.tempchange >=60){
        landscape = "🌧☔️🌂🌧☔️🌂🌧☔️🌂🌧☔️🌂🌧☔️🌂🌧☔️🌂🌧☔️🌂🌧☔️🌂🌧☔️🌂🌧☔️🌂🌧☔️🌂"; 
    }

    landContainer.textContent = landscape


}
const changeTemp = tempvalue => {

    const changeTempContainer = document.getElementById('tempvalue');
    changeTempContainer.textContent = tempvalue; 
    tempGardenvlue(tempvalue);
    changeGarden(tempvalue);



}



    //register the button, telling the website to listen for a click 
const registerEventHandlers = () =>{
    const increseButtonElement = document.getElementById('increaseButton');
    increseButtonElement.addEventListener("click", clickButtonUp)
    console.log("registerEventHandlers")

    const decreaseButtonElement = document.getElementById('decreaseButton');
    decreaseButtonElement.addEventListener("click", clickButtonDown)
    console.log("registerTheseHands")

    const inputSky = document.querySelector(".skyDropMenu");
    inputSky.addEventListener("change",changeSky)

    changeCityName();
    const cityNameInputEl= document.getElementById("cityNameInput"); 
    cityNameInputEl.addEventListener("input", changeCityName)

    const resetButton = document.getElementById("cityNameInput")
    resetButton.addEventListener("click", changeCityName)

}

// document.addEventListener("DOMContentLoaded", registerEventHandlers);

registerEventHandlers()




