const state = {
  temp: 68,
};

const tempElement = document.getElementById('temp');

const tempEmojiHolder = document.querySelector('#temp-emoji-holder');

const tempUp = document.createElement('button');
tempUp.id = 'temp-up';
tempUp.textContent = '⬆️';
tempEmojiHolder.appendChild(tempUp);

const tempDown = document.createElement('button');
tempDown.id = 'temp-down';
tempDown.textContent = '⬇️';
tempEmojiHolder.appendChild(tempDown);
tempElement.appendChild(tempEmojiHolder);

const tempNum = document.createElement('p');
tempNum.textContent = state.temp;
tempNum.id = 'temp-text';
tempElement.appendChild(tempNum);

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

const changeFlowers = () => {
  if (state.temp < 59) {
    changeFlowerGarden.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (state.temp <= 69) {
    changeFlowerGarden.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.temp <= 79) {
    changeFlowerGarden.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else {
    changeFlowerGarden.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
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
const cityElement = document.getElementById('city-input');
console.log(cityElement);

// REGISTER EVENTLISTENER

const registerEventHandlers = (event) => {
  const addTempButton = document.getElementById('temp-up');
  addTempButton.addEventListener('click', () => upTempFunc());

  const downTempButton = document.getElementById('temp-down');
  downTempButton.addEventListener('click', () => downTempFunc());

  skySelect.addEventListener('change', () => changeClouds());
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
