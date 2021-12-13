
const state = {
    degrees: 72,
    clicked: false
};

const locationsList = [
    "Santa Monica",
    "Disneyland"
]

// click the hotter button increases the display temp by 1
const increaseTemp = (event) => {
    const degreesContainer = document.getElementById("degrees");
    state.degrees += 1;
    degreesContainer.textContent = state.degrees;
};

// click the colder button decreases the display temp by 1
const decreaseTemp = (event) => {
    const degreesContainer = document.getElementById("degrees");
    state.degrees -= 1;
    degreesContainer.textContent = state.degrees;
};

// click the nice day button sets the display temp to 72
const niceDayTemp = (event) => {
    const degreesContainer = document.getElementById("degrees");
    state.degrees = 72;
    degreesContainer.textContent = state.degrees;
};

// change color of buttons when hovering over them. hot = pink, cold = blue, nice = yellow
const hotMouseoverEffect = (event) => {
    const hotMouseoverEffect = document.getElementById("hotterButton");
    hotMouseoverEffect.style.backgroundColor = "pink";
    console.log("mouseover?");
};

const coldMouseoverEffect = (event) => {
    const coldMouseoverEffect = document.getElementById("colderButton");
    coldMouseoverEffect.style.backgroundColor = "lightblue";
    console.log("mouseover?");
};

// const niceDayMouseoverEffect = (event) => {
//     const niceDayMouseoverEffect = document.getElementById("niceDayButton");
//     niceDayMouseoverEffect.style.backgroundColor = "lightgoldenrodyellow";
//     console.log("mouseover?");
// };

const hotMouseleaveEffect = (event) => {
    const hotMouseoverEffect = document.getElementById("hotterButton");
    hotMouseoverEffect.style.backgroundColor = "transparent";
    console.log("mouseleave?");
};

const coldMouseleaveEffect = (event) => {

    const coldMouseoverEffect = document.getElementById("colderButton");
    coldMouseoverEffect.style.backgroundColor = "transparent";
    console.log("mouseover?");
};

const niceDayMouseleaveEffect = (event) => {

    const niceDayMouseoverEffect = document.getElementById("niceDayButton");
    niceDayMouseoverEffect.style.backgroundColor = "transparent";
    console.log("mouseover?");
};

//change location in title
const changeLocationTitle = (event) => {
    const result = document.getElementById("locationTitle");
    result.textContent = `${event.target.value}`;
    const inputField = document.getElementById("nameThisPlaceText")
    inputField.value = "";
};

// Name this place input is filled out by user
const addCustomPlaceName = (event) => {
    const result = document.getElementById("locationTitle");
    const inputZone = document.getElementById("nameThisPlaceText");
    result.textContent = inputZone.value;;
}

// Change clouds in skyZone section
const changeCloudAnimation = (event) => {
    const clouds = document.getElementById("cloud");
    const weatherpicked = `${event.target.value}`;
    if (weatherpicked == 'sunny'){
        clouds.innerHTML = `<img src="assets/sunny_cloud.gif" alt="white cloud with smiling face softly bobs a bit" id="sunny_cloud"></img>`;
    } else if (weatherpicked == 'stormy'){
        clouds.innerHTML = `<img src="assets/stormy_cloud.gif" alt="dark grey and blue cloud with devious facial expression rains down water and lightning" id="stormy_cloud">`;
    } else if (weatherpicked == 'windy'){
        clouds.innerHTML = `<img src="assets/windy_cloud.gif" alt="white cloud with smiling face softly bobs a bit" id="windy_cloud">`;
    } else if (weatherpicked == 'clear sky'){
        clouds.textContent = "";
    }
}

// Change location landmark landmark animations
const changeLandmarkAnimation = (event) => {
    const landmarks = document.getElementById("landmark");
    const locationPicked = `${event.target.value}`;
    console.log(`something ${event.target.value}`);
    if (locationPicked == 'Muscle Beach🏋️'){
        landmarks.innerHTML = `<img src="./assets/muscle_beach.gif" id="muscle_beach">`;
    } else if (locationPicked == 'Disneyland🎢'){
        landmarks.innerHTML = `<img src="./assets/mickey.gif" id="mickey">`;
    } else if (locationPicked == 'LAX🛫'){
        landmarks.innerHTML = `<img src="./assets/lax_plane.png" id="lax_plane">`;
    // } else if (locationPicked == ''){
    //     landmarks.textContent = "";
    }
}

// add live video
const replaceWithLiveSantaMonica = (event) => {
    const landscapeContainer = document.getElementById("landscapeDisplay");
    landscapeContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/OWbI6WtlI-k?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    
    // hmm remember to change the text of the viewLivebutton
};

// reset everything
const reset = (event) => {
    const landmarks = document.getElementById("landmark");
    landmarks.innerHTML = `<img src="assets/left_palm.gif" id="left_palm">
    <img src="assets/AngelyneNFT.gif" id="angelyne">
    <img src="assets/right_palms.gif" id="left_palm">`;
    const locationTitle = document.getElementById("locationTitle");
    locationTitle.textContent = `SoCal`;
    const clouds = document.getElementById("cloud");
    clouds.textContent = "";
    const degreesContainer = document.getElementById("degrees");
    state.degrees = 72
    degreesContainer.textContent = state.degrees;
    const inputField = document.getElementById("nameThisPlaceText");
    inputField.value = "";
    const locationSelector = document.getElementById('locations');
    locationSelector.options = "SoCal";
}

// Register all events
const registerEventHandlers = () => {

    const hotButton = document.getElementById("hotterButton");
    hotButton.addEventListener("click", increaseTemp);

    const coldButton = document.getElementById("colderButton");
    coldButton.addEventListener("click", decreaseTemp);

    // const niceDayButton = document.getElementById("niceDayButton");
    // niceDayButton.addEventListener("click", niceDayTemp);

    const hotMouseoverBox = document.getElementById("hotterButton");
    hotMouseoverBox.addEventListener("mouseenter", hotMouseoverEffect);
    hotMouseoverBox.addEventListener("mouseleave", hotMouseleaveEffect);

    const coldMouseoverBox = document.getElementById("colderButton");
    coldMouseoverBox.addEventListener("mouseenter", coldMouseoverEffect);
    coldMouseoverBox.addEventListener("mouseleave", coldMouseleaveEffect);

    // const niceDayMouseoverBox = document.getElementById("niceDayButton");
    // niceDayMouseoverBox.addEventListener("mouseenter", niceDayMouseoverEffect);
    // niceDayMouseoverBox.addEventListener("mouseleave", niceDayMouseleaveEffect);

    // Change the location title at the top of the page after user selects a location
    const selectLocation = document.querySelector('.locations');
    selectLocation.addEventListener('change', changeLocationTitle);
    selectLocation.addEventListener('change', changeLandmarkAnimation)

    // Change the location title at the top of the page after user enters custom location name.
    const enterLocationName = document.getElementById("nameThisPlaceText");
    enterLocationName.addEventListener('input', addCustomPlaceName);

    // Change the cloud animation when selects type of weather
    const selectWeather = document.querySelector('.skys');
    selectWeather.addEventListener('change', changeCloudAnimation);

    // add live video
    const viewLiveSantaMonicaButton = document.getElementById("viewLiveButton");
    viewLiveSantaMonicaButton.addEventListener("click", replaceWithLiveSantaMonica);

    // reset everything
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener('click', reset)
};

// DOM listener
document.addEventListener("DOMContentLoaded",registerEventHandlers);