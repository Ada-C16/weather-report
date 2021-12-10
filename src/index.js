src= "/styles/index.css";

/*
1. Functions: 
- background changes
- temperature display
- temp up element (clickable)
- temp down element (clickable)
- landscape display
- sky type. dropdown element <select>
- sky display 
- city name display
- rename city element with <input type = "text">
- reset city name element(clickable)*/



const temperature = (itsCold, itsHot, clothes) => {
    if (state.temperature <= 30) {
        itsCold.className = 'winter';
        clothes.textContent = 'emoji'; //winter clothes;
        const eventBackground = document.getElementById('event-background')
        eventBackground.changeClass
    } else if (31 <= state.temperature && state.temperature <= 55) {
        itsCold.className = 'fall';
        clothes.textContent = 'fall emoji'; //fall clothes
    } else if (56 <= state.temperature && state.temperature <= 70) {
        itsHot.className = 'spring';
        clothes.textContent = 'spring emoji' //spring clothes
    } else {
        itsHot.className = 'summer';
        clothes.textContent = 'summer emoji' //summer clothes
    }
    } 

const registerEventhandler = () => {
    const changeTemperatureHot = document.getElementById('itsHot-button');
    changeTemperatureHot.addEventListener('click', increaseTemperature)

    const changeTemperatureCold = document.getElementById('itsCold-button');
    changeTemperatureCold.addEventListener('change', decreaseTemperature)
}

document.addEventListener('DOMContentLoaded', registerEventhandler)




