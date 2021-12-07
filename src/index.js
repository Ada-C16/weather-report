// Event Listeners
const registerEvents = () => {
    console.log("loaded");

    const clickButton = document.getElementById("clickButton");
    clickButton.addEventListener("click", () => {
        console.log("clicked");
    });

    const selectedSel = document.getElementById("selectedSel");
    selectedSel.addEventListener("change", (event) => {
        console.log("select changed");
        console.log(event);
        console.log(selectedSel.value);
    });

    selectedSel.addEventListener("click", () => {
        console.log("clicked select");
    });
    
};

document.addEventListener("DOMContentLoaded", registerEvents);