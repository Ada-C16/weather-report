//Create a temp variable








// Event Listeners
const registerEvents = () => {
    console.log("loaded");

    const increaseButton = document.getElementById("clickButtonIn");
    increaseButton.addEventListener("click", () => {
        console.log("clicked");
    });

    const decreaseButton = document.getElementById("clickButtonDe");
    decreaseButton.addEventListener("click", () => {
        console.log("clicked2");
    });

    const skySelect = document.getElementById("sky-select");
    skySelect.addEventListener("change", (event) => {
        console.log("select changed");
        console.log(event);
        console.log(skySelect.value);
    });

    skySelect.addEventListener("click", () => {
        console.log("clicked select");
    });
    
};

document.addEventListener("DOMContentLoaded", registerEvents);