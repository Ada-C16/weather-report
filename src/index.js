// TEMPERATURE
// When user clicks on "up" 
    // --> Temperature increases by 1 degree. 
    // --> Will also "change" the landscape 
// When user clicks on "down" 
    // --> Temperature decreases by 1 degree.
    // --> Will also "change" the landscape
const state = {
    tempDegrees: parseInt(document.getElementById('temperature').textContent)
}

function increaseTemp() {
    let tempSpan = document.getElementById('temperature');
    const upButton = document.getElementById('up');
    upButton.addEventListener('click', (event) => {
        state.tempDegrees += 1;
        tempSpan.textContent = `${state.tempDegrees}`;
    });
}
function decreaseTemp() {
    let tempSpan = document.getElementById('temperature');
    const downButton = document.getElementById('down');
    downButton.addEventListener('click', (event) => {
        state.tempDegrees -= 1;
        tempSpan.textContent = `${state.tempDegrees}`;
    });
}


// OUTSIDE CONDITION
// When user selects an outdoor condition from the dropdown menu
    // --> Will "change" the sky

// LOCATION
// When a user types a city in the input
    // The name of the city will change
    // Pressing the reset button will change the name of the city to the default value

function modifyCity() {
    const h1 = document.getElementById('h1')
    const cityText = document.getElementById('city-text');
    cityText.addEventListener('keyup', (event) => {
        h1.textContent = `${event.target.value}`;
    });

    const cityButton = document.getElementById('city-button');
    cityButton.addEventListener('click', (event) => {
        h1.textContent = 'Bay Area';
    });
}

document.addEventListener("DOMContentLoaded", modifyCity);
document.addEventListener("DOMContentLoaded", increaseTemp);
document.addEventListener("DOMContentLoaded", decreaseTemp);