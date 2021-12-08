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
    skyTheme.setAttribute("id", `${mode}`)
    skyTheme.setAttribute("onclick", "changeSky(this.id)");
    skyContainer.appendChild(skyTheme);
});

mainSection.append(skyContainer);

const changeSky = (id) => {
    document.body.setAttribute("class", `${id} `)
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

    /*
    const skySelection = document.querySelector("#sky-color");
    skySelection.addEventListener("click",changeSky);
    */
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

// add emoji weather