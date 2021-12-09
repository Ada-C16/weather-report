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
  changeLandscape();
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
  changeLandscape();
};

// ========= CHANGE CITY =========

//function change city name
const changeCityName = (event) => {
  const inputNewCity = document.getElementById('cityNameInputField').value;
  const cityDisplayed = document.querySelector('#header-City-Name');
  cityDisplayed.textContent = inputNewCity;
};

// this function resets city field to Denver
const resetCity = (event) => {
  const inputDiffCity = document.getElementById('cityNameInputField');
  cityNameInputField.value = 'Denver';
  changeCityName();
};

// ========= CHANGE SKY =========

const changeSky = (event) => {
  const selectNewSky = document.getElementById('dropdown-sky').value;
  const skyDisplayArea = document.getElementById('sky-image');
  // skyDisplayArea.textContent = selectNewSky;
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
  const landscapeDisplay = document.getElementById('garden-image');
  let landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  // if (state.temp >= 80) {
  //   landscapeDisplay.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  // } else if (state.temp < 80 && state.temperature >= 70) {
  //   landscapeDisplay.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  // } else if (state.temperature < 70 && state.temperature >= 60) {
  //   landscapeDisplay.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  // } else if (state.temp < 60) {
  //   landscapeDisplay.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  landscapeDisplay.textContent = landscape;
};
// ========= REGISTER EH =========

const registerEventHandlers = (event) => {
  const warmerButton = document.querySelector('#warmer-button');
  warmerButton.addEventListener('click', increaseTemp);

  const coolerButton = document.querySelector('#cooler-button');
  coolerButton.addEventListener('click', decreaseTemp);

  changeCityName();
  const inputDiffCity = document.getElementById('cityNameInputField');
  inputDiffCity.addEventListener('input', changeCityName);

  const resetCityButton = document.getElementById('reset-button');
  resetCityButton.addEventListener('click', resetCity);

  changeSky();
  const selectNewSky = document.querySelector('#dropdown-sky');
  selectNewSky.addEventListener('change', changeSky);

  // find where the event is happening
  changeLandscape();
  const landscapeDisplay = document.getElementById('garden');
  landscapeDisplay.addEventListener('change', changeLandscape);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
