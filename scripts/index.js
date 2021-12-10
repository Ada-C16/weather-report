const state = {
  temp: 71,
};
// ADD TEMP FUNCTIONALITY

// ADD
const upTempFunc = () => {
  state.temp = state.temp + 1;
  document.getElementById('temp-text').innerHTML = state.temp;
  changeFlowers();
};

// SUBTRACT
const downTempFunc = () => {
  state.temp = state.temp - 1;
  document.getElementById('temp-text').innerHTML = state.temp;
  changeFlowers();
};

// WEATHER GARDEN
const changeFlowerGarden = document.getElementById('garden-flowers');
const tempText = document.getElementById('temp-text');

const changeFlowers = () => {
  if (state.temp < 49) {
    tempText.style.color = 'teal';
  } else if (state.temp <= 59) {
    changeFlowerGarden.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    tempText.style.color = 'green';
  } else if (state.temp <= 69) {
    changeFlowerGarden.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    tempText.style.color = 'gold';
  } else if (state.temp <= 79) {
    changeFlowerGarden.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    tempText.style.color = 'orange';
  } else {
    changeFlowerGarden.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    tempText.style.color = 'red';
  }
};

// SKY DISPLAY

const skySelect = document.getElementById('skySelection');

const changeClouds = () => {
  const gardenClouds = document.getElementById('garden-clouds');
  const skySelectValue = skySelect.value;
  if (skySelectValue === 'Sunny') {
    gardenClouds.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (skySelectValue === 'Cloudy') {
    gardenClouds.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (skySelectValue === 'Rainy') {
    gardenClouds.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else {
    gardenClouds.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
};

// CITY DISPLAY
const input = document.getElementById('city-input');
const cityHeader = document.getElementById('city-header');

const changeCity = () => {
  cityHeader.textContent = input.value;
};

const resetCity = () => {
  cityHeader.textContent = 'Welcome to Okaytown!';
};

// REGISTER EVENTLISTENER

const registerEventHandlers = (event) => {
  const addTempButton = document.getElementById('temp-up');
  addTempButton.addEventListener('click', () => upTempFunc());

  const downTempButton = document.getElementById('temp-down');
  downTempButton.addEventListener('click', () => downTempFunc());

  skySelect.addEventListener('change', () => changeClouds());
  input.addEventListener('change', () => changeCity());

  const resetButton = document.getElementById('city-reset');
  resetButton.addEventListener('click', () => resetCity());
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
