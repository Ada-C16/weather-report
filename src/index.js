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
    const increseButtonElement = document.getElementById('increaseButton');
    increseButtonElement.addEventListener("click", clickButtonUp)
    console.log("registerEventHandlers")

    const decreaseButtonElement = document.getElementById('decreaseButton');
    decreaseButtonElement.addEventListener("click", clickButtonDown)
    console.log("registerTheseHands")

    const inputSky = document.querySelector(".skyDropMenu");
    inputSky.addEventListener("change",changeSky)
}

// document.addEventListener("DOMContentLoaded", registerEventHandlers);

registerEventHandlers()




