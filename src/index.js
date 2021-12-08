const mainSection = document.getElementById('main-section');

// h1
const weatherHeading = document.createElement('h1');
weatherHeading.textContent = "Weather Report";
mainSection.appendChild(weatherHeading)

// LOCATION
const cityForm = document.createElement('form');
cityForm.setAttribute("id", "city-container");
cityForm.setAttribute("class", "frosted round");


const cityNameContainer = document.createElement('div');
cityNameContainer.setAttribute("id", "city-name-container");

const city = document.createElement('input');
city.setAttribute("id", "city-name");
city.setAttribute("type","text");
city.setAttribute("placeholder","Mountain House");
cityNameContainer.appendChild(city);

cityForm.appendChild(cityNameContainer);

// reset city name element
const cityReset = document.createElement('div');
const resetName = document.createElement('input');
resetName.setAttribute("id", "reset-city-button");
resetName.setAttribute("type", "reset");
resetName.setAttribute("value","↻");
cityReset.appendChild(resetName);

cityForm.appendChild(cityReset);

mainSection.appendChild(cityForm);


// SKY MODE

const playground = document.createElement('section');
playground.setAttribute('id','playground');


    const skyMode = ["Morning", "Midday", "Sunset", "Midnight"];
    const skyContainer = document.createElement('div');
    skyContainer.setAttribute("id", "sky-container");
    skyContainer.setAttribute("class", "round frosted");

        const skySelectorLabel = document.createElement("label");
        skySelectorLabel.setAttribute("for", "select-sky");
        skySelectorLabel.textContent = "Sky Mode:";

        const skySelector = document.createElement("select");
        skySelector.setAttribute("name", "skies");
        skySelector.setAttribute("id","select-sky");
        skySelector.setAttribute("class", "round");
        skySelector.setAttribute("onchange", "changeSkySelect(this)");

        skyMode.forEach(mode => {
            let skyTheme = document.createElement('div');
            skyTheme.setAttribute("class", `sky-color ${mode} round`);
            skyTheme.setAttribute("id", `${mode}`);
            skyTheme.setAttribute("onclick", "changeSkyPrev(this.id)");
            skyContainer.appendChild(skyTheme);

            let skyOption = document.createElement('option');
            skyOption.setAttribute("value",`${mode}`);
            skyOption.textContent = `${mode}`;
            skySelector.appendChild(skyOption);
        });
        
        skyContainer.append(skySelector);

        playground.appendChild(skyContainer);
// add emoji weather

        const landscape = document.createElement('div');
        landscape.setAttribute("class", "round");
        landscape.setAttribute("id", "landscape");

        playground.appendChild(landscape)


        const changeSkyPrev = (id) => {
            document.body.setAttribute("class", `${id}`);
            let landscapeSky = document.querySelector("#landscape");
            landscapeSky.setAttribute("class", `${id} round`);
        }

        const changeSkySelect = (selection) => {
            let val = selection.value;
            document.body.setAttribute("class", `${val}`);   
            let landscapeSky = document.querySelector("#landscape");
            landscapeSky.setAttribute("class", `${val} round`);
        }

    
    
mainSection.append(playground)

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


// diff temp changes landscape


// Register Events

const registerEventHandlers = () => {
    const incTemp = document.querySelector("#incTemp");
    incTemp.addEventListener("click", raiseTemp);

    const decTemp = document.querySelector("#decTemp");
    decTemp.addEventListener("click", lowerTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

