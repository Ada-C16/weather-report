
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

const niceDayMouseoverEffect = (event) => {
    const niceDayMouseoverEffect = document.getElementById("niceDayButton");
    niceDayMouseoverEffect.style.backgroundColor = "lightgoldenrodyellow";
    console.log("mouseover?");
};

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



// add live video
const replaceWithLiveSantaMonica = (event) => {
    const landscapeContainer = document.getElementById("landscapeDisplay");
    landscapeContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/OWbI6WtlI-k?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    
    // hmm remember to change the text of the viewLivebutton
};

// Register all events
const registerEventHandlers = () => {
    const hotButton = document.getElementById("hotterButton");
    hotButton.addEventListener("click", increaseTemp);

    const coldButton = document.getElementById("colderButton");
    coldButton.addEventListener("click", decreaseTemp);

    const niceDayButton = document.getElementById("niceDayButton");
    niceDayButton.addEventListener("click", niceDayTemp);

    const hotMouseoverBox = document.getElementById("hotterButton");
    hotMouseoverBox.addEventListener("mouseenter", hotMouseoverEffect);
    hotMouseoverBox.addEventListener("mouseleave", hotMouseleaveEffect);

    const coldMouseoverBox = document.getElementById("colderButton");
    coldMouseoverBox.addEventListener("mouseenter", coldMouseoverEffect);
    coldMouseoverBox.addEventListener("mouseleave", coldMouseleaveEffect);

    const niceDayMouseoverBox = document.getElementById("niceDayButton");
    niceDayMouseoverBox.addEventListener("mouseenter", niceDayMouseoverEffect);
    niceDayMouseoverBox.addEventListener("mouseleave", niceDayMouseleaveEffect);

    // add live video
    const viewLiveSantaMonicaButton = document.getElementById("viewLiveButton");
    viewLiveSantaMonicaButton.addEventListener("click", replaceWithLiveSantaMonica);
};

// DOM listener
document.addEventListener("DOMContentLoaded",registerEventHandlers);