// ========= CHANGE TEMP =========

const state = {
  temp: 42,
};

//function increase temp
const increaseTemp = (event) => {
  state.temp += 1;
  const tempDisplayed = document.querySelector('#temp-value');
  tempDisplayed.textContent = state.temp;
  if (state.temp >= 80) {
    tempDisplayed.style.color = 'red';
  } else if (state.temp >= 70) {
    tempDisplayed.style.color = 'pink';
  } else if (state.temp >= 60) {
    tempDisplayed.style.color = 'orange';
  } else if (state.temp >= 50) {
    tempDisplayed.style.color = 'green';
  } else if (state.temp <= 49) {
    tempDisplayed.style.color = 'blue';
  }
};

//function decrease temp
const decreaseTemp = (event) => {
  state.temp -= 1;
  const tempDisplayed = document.querySelector('#temp-value');
  tempDisplayed.textContent = state.temp;
  if (state.temp >= 80) {
    tempDisplayed.style.color = 'red';
  } else if (state.temp >= 70) {
    tempDisplayed.style.color = 'pink';
  } else if (state.temp >= 60) {
    tempDisplayed.style.color = 'orange';
  } else if (state.temp >= 50) {
    tempDisplayed.style.color = 'green';
  } else if (state.temp <= 49) {
    tempDisplayed.style.color = 'blue';
  }
};

// ========= CHANGE CITY =========

//function change city name
const changeCityName = (event) => {
  const inputNewCity = document.querySelector('#cityNameInputField').value;
  const cityDisplayed = document.querySelector('#header-City-Name');
  cityDisplayed.textContent = inputNewCity;
};

// this function resets city field to Denver
const resetCity = (event) => {
  const cityNameInputField = document.querySelector(
    '#cityNameInputField'
  ).value;
  cityNameInputField.textContent.value = 'Denver';
  changeCityName();
};

// ========= CHANGE SKY =========

const changeSky = (event) => {
  const selectNewSky = document.getElementById('dropdown-sky').value;
  const skyDisplayArea = document.getElementById('sky-display');
  skyDisplayArea.textContent = selectNewSky;
  if (selectNewSky === 'Snowy') {
    skyDisplayArea.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  } else if (selectNewSky === 'Cloudy') {
    skyDisplayArea.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (selectNewSky === 'Rainy') {
    skyDisplayArea.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (selectNewSky === 'Sunny') {
    skyDisplayArea.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  }
};

// ========= CHANGE LANDSCAPE =========

const changeLandscape = (event) => {
  const selectNewLandscape = document.querySelector('#garden-display');
  const landscapeDisplayArea = document.querySelector('#garden-display');
  if (state.temp >= 80) {
    landscapeDisplayArea.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (state.temp >= 70) {
    landscapeDisplayArea.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (state.temp >= 60) {
    landscapeDisplayArea.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.temp <= 59) {
    landscapeDisplayArea.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};

// ========= REGISTER EH =========

const registerEventHandlers = (event) => {
  const warmerButton = document.querySelector('#warmer-button');
  warmerButton.addEventListener('click', increaseTemp);

  const coolerButton = document.querySelector('#cooler-button');
  coolerButton.addEventListener('click', decreaseTemp);

  changeCityName();
  const inputDiffCity = document.querySelector('#cityNameInputField');
  inputDiffCity.addEventListener('input', changeCityName);

  const resetCityButton = document.querySelector('#reset-button');
  resetCityButton.addEventListener('click', resetCityButton);

  changeSky();
  const selectNewSky = document.querySelector('#sky-display');
  selectNewSky.addEventListener('change', changeSky);

  changeLandscape();
  const selectNewLandscape = document.querySelector('#garden-display');
  selectNewLandscape.addEventListener('change', changeLandscape);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
