const state = {
  defaultTemp: 73,
};

const renderTemp = (event) => {
  const tempInt = document.querySelector('#number');
  const landscape = document.querySelector('#landscape-garden');
  const sky = document.querySelector('#sky-garden');
  tempInt.textContent = state.defaultTemp;
  landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  sky.textContent = '🌈 ✨🌈🌈 🌈✨🌈🌈 🌈 ✨🌈🌈';
};

const increaseTemp = (event) => {
  state.defaultTemp += 1;
  renderTemp();
  changeTempColorAndLandscape();
};

const decreaseTemp = (event) => {
  state.defaultTemp -= 1;
  renderTemp();
  changeTempColorAndLandscape();
};

const changeTempColorAndLandscape = (event) => {
  const temp = document.querySelector('#temp-number');
  const landscape = document.querySelector('#landscape-garden');
  if (state.defaultTemp >= 80) {
    temp.className = 'red';
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (state.defaultTemp >= 70 && state.defaultTemp <= 79) {
    temp.className = 'orange';
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (state.defaultTemp >= 60 && state.defaultTemp <= 69) {
    temp.className = 'yellow';
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.defaultTemp >= 50 && state.defaultTemp <= 59) {
    temp.className = 'aqua';
    landscape.textContent = '🌲🌲_🌲🍂__🌲🍁🌲_🌲🍂🌲';
  } else {
    temp.className = 'blue';
    landscape.textContent = '❄️🌨🥶__❄️❄️_🥶🌨❄️';
  }
};

const changeSky = (event) => {
  const skyGardenElement = document.querySelector('#sky-garden');
  const selectedSkyValue = document.querySelector('#sky-drop-down').value;
  console.log(selectedSkyValue);
  if (selectedSkyValue === 'sunny') {
    skyGardenElement.textContent = '☀️ ☀️ ☁️ ☀️ ☁️ ☀️';
  } else if (selectedSkyValue === 'cloudy') {
    skyGardenElement.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (selectedSkyValue === 'rainy') {
    skyGardenElement.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (selectedSkyValue === 'snowy') {
    skyGardenElement.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  } else {
    skyGardenElement.textContent = '🌈 ✨🌈🌈 🌈✨🌈🌈 🌈 ✨🌈🌈';
  }
};

const changeCity = (event) => {
  const cityInput = document.querySelector('#city-text-box').value;
  const cityHeader = document.querySelector('#city');
  cityHeader.textContent = cityInput;
};

const registerEventHandlers = (event) => {
  renderTemp();
  const upTempButton = document.querySelector('#up-button');
  const downTempButton = document.querySelector('#down-button');
  const sky = document.querySelector('#sky-drop-down');
  const resetCityButton = document.querySelector('#city-reset-button');
  upTempButton.addEventListener('click', increaseTemp);
  downTempButton.addEventListener('click', decreaseTemp);
  sky.addEventListener('change', changeSky);
  resetCityButton.addEventListener('click', changeCity);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
