// ========= CHANGE TEMP =========

const state = {
  temp: 42,
};

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

const changeCityName = (event) => {
  const inputNewCity = document.getElementById('cityNameInputField').value;
  const cityDisplayed = document.querySelector('#header-City-Name');
  cityDisplayed.textContent = inputNewCity;
};

const resetCity = (event) => {
  const inputDiffCity = document.getElementById('cityNameInputField');
  cityNameInputField.value = 'Denver';
  changeCityName();
};

// ========= CHANGE SKY =========

const changeSky = (event) => {
  const selectNewSky = document.getElementById('dropdown-sky').value;
  const skyDisplayArea = document.getElementById('sky-image');

  if (selectNewSky === 'Snowy') {
    skyDisplayArea.textContent = '🌨❄️❄️❄️🌨❄️❄️🌨❄️❄️❄️🌨❄️❄️🌨';
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
  let landscape = '⛄️';
  if (state.temp >= 80) {
    landscape = '🌵🌵🌵🌵🌵🌵';
  } else if (state.temp >= 70) {
    landscape = '🌻🌻🌻🌻🌻🌻';
  } else if (state.temp >= 60) {
    landscape = '🌾🌾🌾🌾🌾🌾';
  } else if (state.temp >= 50) {
    landscape = '🍂🍂🍁🍁🍁🍂🍂';
  } else if (state.temp <= 50) {
    landscape = '🌲⛄️⛄️⛄️⛄️🌲';
  }
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

  changeLandscape();
  const landscapeDisplay = document.getElementById('garden');
  landscapeDisplay.addEventListener('change', changeLandscape);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
