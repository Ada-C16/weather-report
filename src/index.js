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
let tempSpan = document.getElementById('temperature');
function increaseTemp() {
    const upButton = document.getElementById('up');
    upButton.addEventListener('click', (event) => {
        state.tempDegrees += 1;
        tempSpan.textContent = `${state.tempDegrees}`;
    });
}
function decreaseTemp() {
    const downButton = document.getElementById('down');
    downButton.addEventListener('click', (event) => {
        state.tempDegrees -= 1;
        tempSpan.textContent = `${state.tempDegrees}`;
    });
}

function changeLandscape() {
    const divLandscape = document.querySelector('.landscape');
    const imgLandscape = document.querySelector('img.landscape');
    tempSpan.addEventListener('DOMSubtreeModified', (event) => {
        if (tempSpan.textContent >= 65 && tempSpan.textContent <= 75) {
            imgLandscape.src = '/pngaaa.com-2360662.png';
            divLandscape.style.display = 'block';
        } else if (tempSpan.textContent >= 74) {
            imgLandscape.src = '/pngwing.com.png';
            divLandscape.style.display = 'block';
        } else if (tempSpan.textContent <= 60) {
            imgLandscape.src = '/clipart588097.png';
            divLandscape.style.display = 'block';
        } else {
            divLandscape.style.display = 'none';
        }
    })

}

// OUTSIDE CONDITION
// When user selects an outdoor condition from the dropdown menu
    // --> Will "change" the sky
function changeSky() {
    const selectSky = document.getElementById('sky-menu');
    const sunnyOption = document.getElementById('sunny').text;
    const cloudyOption = document.getElementById('cloudy').text;
    const rainyOption = document.getElementById('rainy').text;
    const divOverlay = document.querySelector('.overlay');
    selectSky.addEventListener('change', (event) => {
        if (selectSky.options[selectSky.selectedIndex].text === sunnyOption) {
            divOverlay.style.display = 'block';
            divOverlay.style.background = '#FFC300'
        } else if (selectSky.options[selectSky.selectedIndex].text ===cloudyOption) {
            divOverlay.style.display = 'block';
            divOverlay.style.background = '#7393B3';
        } else if (selectSky.options[selectSky.selectedIndex].text === rainyOption) {
            divOverlay.style.display = 'block';
            divOverlay.style.background ='#000'
        } else {
            divOverlay.style.display = 'none';
        }
    })


}

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
        h1.textContent = 'Yay Area';
    });
}

document.addEventListener("DOMContentLoaded", modifyCity);
document.addEventListener("DOMContentLoaded", increaseTemp);
document.addEventListener("DOMContentLoaded", decreaseTemp);
document.addEventListener("DOMContentLoaded", changeSky);
document.addEventListener("DOMContentLoaded", changeLandscape);