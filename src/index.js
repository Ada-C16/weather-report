const mainSection = document.getElementById('main-section');

// h1
const weatherHeading = document.createElement('h1');
weatherHeading.textContent = "Weather Report";
mainSection.appendChild(weatherHeading)

// LOCATION
const city = document.createElement('h2') ;
city.setAttribute("contenteditable","true");
city.textContent = "Mountain House";
mainSection.appendChild(city);

// SKY MODE
const skyMode = ["Morning", "Midday", "Sunset", "Midnight"];
const skyContainer = document.createElement('div');
skyContainer.setAttribute("id", "sky-container");

skyMode.forEach(mode => {
    let skyTheme = document.createElement('div');
    skyTheme.setAttribute("class", `sky-color ${mode}`);
    skyTheme.setAttribute("onclick", "changeSky");
    skyContainer.appendChild(skyTheme);
});

mainSection.append(skyContainer);

function changeSky () {
    let element = document.querySelector("sky-color");
    // use id to choose toggle and apply to body
    document.body.classList.toggle(`${element.class[0]}`)
}


// WEATHER STATION

const state = {
    temp: 92
};

const updateTemp = () => {
    const temperature = document.querySelector("#temperature");
    temperature.textContent = `${state.temp}`;
}

const raiseTemp = () => {
    state.temp += 1;
    updateTemp();
}

const lowerTemp = () => {
    state.temp -= 1;
    updateTemp();
}

const registerEventHandlers = () => {
    const incTemp = document.querySelector("#incTemp");
    incTemp.addEventListener("click", raiseTemp);

    const decTemp = document.querySelector("#decTemp");
    decTemp.addEventListener("click", lowerTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

// add emoji weather