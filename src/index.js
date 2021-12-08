const mainSection = document.getElementById('main-section');

// h1
const weatherHeading = document.createElement('h1');
weatherHeading.textContent = "Weather Report";
mainSection.appendChild(weatherHeading)

// LOCATION
const cityContainer = document.createElement('div');
cityContainer.setAttribute("class", "frosted");
cityContainer.setAttribute("id", "city-container");
const city = document.createElement('input');
city.setAttribute("class", "frosted");
city.setAttribute("id", "city-name");
city.setAttribute("type","text");
city.setAttribute("placeholder","Mountain House");
cityContainer.appendChild(city);
// reset city name element

mainSection.appendChild(cityContainer);


// SKY MODE
const skyMode = ["Morning", "Midday", "Sunset", "Midnight"];
const skyContainer = document.createElement('div');
skyContainer.setAttribute("id", "sky-container");

const skySelectorLabel = document.createElement("label");
skySelectorLabel.setAttribute("for", "select-sky");
skySelectorLabel.textContent = "Sky Mode:";

const skySelector = document.createElement("select");
skySelector.setAttribute("name", "skies");
skySelector.setAttribute("id","select-sky");
skySelector.setAttribute("onchange", "changeSkySelect(this)");

skyMode.forEach(mode => {
    let skyTheme = document.createElement('div');
    skyTheme.setAttribute("class", `sky-color ${mode}`);
    skyTheme.setAttribute("id", `${mode}`)
    skyTheme.setAttribute("onclick", "changeSkyPrev(this.id)");
    skyContainer.appendChild(skyTheme);

    let skyOption = document.createElement('option');
    skyOption.setAttribute("value",`${mode}`)
    skyOption.textContent = `${mode}`;
    skySelector.appendChild(skyOption);
});


mainSection.append(skyContainer);
mainSection.append(skySelector);

const changeSkyPrev = (id) => {
    document.body.setAttribute("class", `${id} `);
}

const changeSkySelect = (selection) => {
    let val = selection.val;
    document.body.setAttribute("class", `${val}`);   
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


// Register Events

const registerEventHandlers = () => {
    const incTemp = document.querySelector("#incTemp");
    incTemp.addEventListener("click", raiseTemp);

    const decTemp = document.querySelector("#decTemp");
    decTemp.addEventListener("click", lowerTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

// add emoji weather
// make a box for landscape
// sky changes should effect the box