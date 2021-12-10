let currentTemp = 0;

const updateTemperature = currentTemp => {
    const tempContainer = document.getElementById("tempNum");
    tempContainer.textContent = currentTemp;
    changeTempColor(currentTemp);
    changeLandscape(currentTemp);
};

const increaseTemperature = () => {
    currentTemp += 1;
    updateTemperature(currentTemp);
};

const decreaseTemperature = () => {
    currentTemp -= 1;
    updateTemperature(currentTemp);
};
//garden object
const changeTempColor = currentTemp => {
    const tempContainer = document.getElementById("garden-section");
    let color = "green";
    if (currentTemp >= 10) {
        color = "red";
    } else if (currentTemp >= 7) {
        color = "orange";
    } else if (currentTemp >= 5) {
        color = "yellow";
    } else if (currentTemp >= 1) {
        color = "green";
    } else if (currentTemp < 0) {
        color = "teal";
    }
    tempContainer.classList = color;
};

const changeLandscape = currentTemp => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "";
    if (currentTemp >= 10) {
        landscape = "😤😡😭🤬👹💩"
    } else if (currentTemp >= 6) {
        landscape = "😔🥲🤡😑😢😱🤯" 
    } else if (currentTemp >= 3) {
        landscape = "👁👄👁"
    } else if (currentTemp >= 1){ 
        landscape = "🤨🤔🤓🧐😳😬"
    } else if (currentTemp <= 0){
        landscape = "🤗💅💃🥳🥰😏🤩"
    }
    landscapeContainer.textContent = landscape;
};
const updateHeader = () => {
    document.getElementById("mydiv").style.backgroundImage = "url('https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg')";
};

const updateSky = () => {
    const skyDropdown = document.getElementById("sky-dropdown").value;
    const skyForecast = document.getElementById("sky");
    let sky = "";
    if (skyDropdown === "Sunny") {
        // sky = "☀️☀️☀️☀️☀️☀️☀️☀️☀️"
        document.getElementById("myHeader").style.backgroundImage = "url('https://acegif.com/wp-content/gifs/sun-29.gif'"
    } else if (skyDropdown === "Cloudy") {
        // sky = "🌤🌤🌤🌤🌤🌤🌤🌤🌤"
        document.getElementById("myHeader").style.backgroundImage = "url('https://i.gifer.com/origin/20/2044500a9a0cef20ef935c31946538a1.gif'"
    } else if (skyDropdown === "Rainy") {
        // sky = "🌧🌧🌧🌧🌧🌧🌧🌧🌧"
        document.getElementById("myHeader").style.backgroundImage = "url('https://i.pinimg.com/originals/f4/93/b5/f493b5921d95a96ab7f3154eed39dd2f.gif'"
    } else if (skyDropdown === "Snowy") {
        // sky = "❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️"
        document.getElementById("myHeader").style.backgroundImage = "url('https://media3.giphy.com/media/cVnMMJvROF5D2/giphy.gif'"
    }
    skyForecast.textContent = sky;
};

const updateStudentName = () => {
    const inputStudentName = document.getElementById("name").value;
    const studentNameHeader = document.getElementById("student-name");
    studentNameHeader.textContent = inputStudentName;
};

const resetStudentName = () => {
    const studentNameInput = document.getElementById("name").reset();
    studentNameInput.value = "Michelle";
    updateStudentName();
};

const registerEventHandlers = () => {
    increaseTemperature();
    const tempIncreaseBtn = document.getElementById("increase-temp");
    tempIncreaseBtn.addEventListener("click", increaseTemperature);
    tempIncreaseBtn.addEventListener("click", updateHeader);

    decreaseTemperature();
    const tempDecreaseBtn = document.getElementById("decrease-temp");
    tempDecreaseBtn.addEventListener("click", decreaseTemperature);

    updateSky();
    const skyDropdown = document.getElementById("sky-dropdown");
    skyDropdown.addEventListener("change", updateSky);

    updateHeader();
    skyDropdown.addEventListener("change", updateHeader);

    // updateGarden()
    // landscape.addEventListener("change", updateGarden);

    updateStudentName();
    const inputStudentName = document.getElementById("name");
    inputStudentName.addEventListener("input", updateStudentName);

    resetStudentName();
    const studentNameResetBtn = document.getElementById("reset-button");
    studentNameResetBtn.addEventListener("click", resetStudentName);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);