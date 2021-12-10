// TEMPERATURE
// When user clicks on "up" 
    // --> Temperature increases by 1 degree. 
    // --> Will also "change" the landscape 
// When user clicks on "down" 
    // --> Temperature decreases by 1 degree.
    // --> Will also "change" the landscape


// OUTSIDE CONDITION
// When user selects an outdoor condition from the dropdown menu
    // --> Will "change" the sky

// LOCATION
// When a user types a city in the input
    // The name of the city will change
    // Pressing the reset button will change the name of the city to the default value

function modifyCity() {
    const city = document.getElementById('city');
    city.addEventListener('keyup', (event) => {
        document.getElementById('h1').textContent = `${event.target.value}`;
    });
}

document.addEventListener("DOMContentLoaded", modifyCity);