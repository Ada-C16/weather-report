// ******************************************
// TEMPERATURE CONTROL
// ******************************************
const state = {
  currentTemperature: 82,
};

const increaseTemperature = () => {
  state.currentTemperature += 1;
  temperature.textContent = `${state.currentTemperature}`;
  temperatureColorControl();
  landscapePictureControl();
  sName = `red`;
};

const decreaseTemperature = () => {
  state.currentTemperature -= 1;
  temperatureColorControl();
  landscapePictureControl();
  temperature.textContent = `${state.currentTemperature}`;
};

const temperatureColorControl = () => {
  const temperature = document.querySelector('#temperature');
  if (state.currentTemperature <= 49) {
    temperature.className = `teal`;
  } else if (state.currentTemperature <= 59) {
    temperature.className = `green`;
  } else if (state.currentTemperature <= 69) {
    temperature.className = `yellow`;
  } else if (state.currentTemperature <= 79) {
    temperature.className = `orange`;
  } else {
    temperature.className = `red`;
  }
};

const landscapePictureControl = () => {
  const currentLandscape = document.querySelector('#currentLandscape');
  if (state.currentTemperature <= 59) {
    currentLandscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (state.currentTemperature <= 69) {
    currentLandscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.currentTemperature <= 79) {
    currentLandscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else {
    currentLandscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  }
};

// ******************************************
// SKY CONTROL
// ******************************************
const selectSky = (event) => {
  const currentSky = document.querySelector('#currentSky');

  if (event.target.value == 'sunny') {
    currentSky.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (event.target.value == 'cloudy') {
    currentSky.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (event.target.value == 'rainy') {
    currentSky.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (event.target.value == 'snowy') {
    currentSky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
};

// ******************************************
// CITY NAME CONTROL
// ******************************************
const selectCity = (event) => {
  const cityName = document.querySelector('#currentCity');
  cityName.textContent = event.target.value;
};

const resetCity = (event) => {
  const currentCityName = document.querySelector('#currentCity');
  const cityName = document.querySelector('#cityName');
  currentCityName.textContent = 'My Hometown';
  cityName.value = '';
};

// ******************************************
// ADDING EVENT LISTENERS
// ******************************************
const registerEventHandlers = (event) => {
  const increaseTempButton = document.querySelector('#increaseTempButton');
  increaseTempButton.addEventListener('click', increaseTemperature);

  const decreaseTempButton = document.querySelector('#decreaseTempButton');
  decreaseTempButton.addEventListener('click', decreaseTemperature);

  const skySelection = document.querySelector('#sky');
  skySelection.addEventListener('change', selectSky);

  const enterCityName = document.querySelector('#cityName');
  enterCityName.addEventListener('input', selectCity);

  const resetCityName = document.querySelector('#resetButton');
  resetCityName.addEventListener('click', resetCity);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
