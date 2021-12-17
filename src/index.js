// Display city name

const cityInput = document.getElementById('city');
const headerElement = document.querySelector('header');
const displayCity = document.createElement('h3');

const updateCityValue = function (event) {
  displayCity.textContent = ` 🌈 ${event.target.value} 🌈`;
  headerElement.appendChild(displayCity);
  displayCity.className = 'city-display';
};

// Reset buuton
const resetButton = document.getElementById('reset-button');
const resetCityName = function () {
  if (headerElement.children.length > 2) {
    headerElement.removeChild(displayCity);
    cityInput.value = cityInput.defaultValue;
  } else {
    console.log('HANDLE THIS ERROR');
  }
};

// Temperature
// the Color of temperatureValue.text  will change so will the emojis in weather garden

const temperatureValue = document.getElementById('temperature-value');
const decrementButton = document.getElementById('decrement');
const increaseButton = document.getElementById('increment');
// const displayLandscape = document.getElementById('display-landscape');

const stateTemp = { value: 0 };
const landscape = {
  winter: '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲',
  freezing: '❄️❄️❄️⛄️❄️❄️⛄️❄️❄️⛄️❄️❄️❄️',
  autumn: '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃🍃',
  spring: '🌸🌿🌼🌿🌷🌻🌿_☘️🌱_🌻🌷🌷',
  summer: '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂🦂',
};

const changeColorAndLand = (value) => {
  const displayLandscape = document.getElementById('display-landscape');

  if (stateTemp.value >= 80) {
    temperatureValue.className = 'red-text';
    displayLandscape.textContent = landscape.summer;
  } else if (stateTemp.value >= 70 && stateTemp.value <= 79) {
    temperatureValue.className = 'orange-text';
    displayLandscape.textContent = landscape.spring;
  } else if (stateTemp.value >= 60 && stateTemp.value <= 69) {
    temperatureValue.className = 'yellow-text';
    displayLandscape.textContent = landscape.autumn;
  } else if (stateTemp.value >= 35 && stateTemp.value <= 59) {
    temperatureValue.className = 'green-text';
    displayLandscape.textContent = landscape.winter;
  } else {
    temperatureValue.className = 'white-text';
    displayLandscape.textContent = landscape.freezing;
  }
};

const changeTemperature = function (event) {
  console.log(event);
  changeColorAndLand(stateTemp.value);
  if (event.target.id === 'increment') {
    stateTemp.value++;
    temperatureValue.textContent = stateTemp.value;
  } else if (event.target.id === 'decrement') {
    stateTemp.value--;
    temperatureValue.textContent = stateTemp.value;
  }
};

//sky

const sky = document.getElementById('sky-type');

const changeSky = function (event) {
  const displaySky = document.getElementById('display-sky');

  while (displaySky.firstChild) {
    displaySky.removeChild(displaySky.firstChild);
  }

  const skyLeft = document.createElement('span');
  const skyMiddle = document.createElement('span');
  const skyRight = document.createElement('span');

  displaySky.appendChild(skyLeft);
  displaySky.appendChild(skyMiddle);
  displaySky.appendChild(skyRight);

  if (event.target.value == 'Sunny') {
    sunnyDisplay(skyLeft, skyMiddle, skyRight);
  } else if (event.target.value == 'Cloudy') {
    cloudyDisplay(skyLeft, skyMiddle, skyRight);
  } else if (event.target.value == 'Rainy') {
    rainyDisplay(skyLeft, skyMiddle, skyRight);
  } else if (event.target.value == 'Snowy') {
    snowyDisplay(skyLeft, skyMiddle, skyRight);
  }
};

const sunnyDisplay = (left, middle, right) => {
  left.className = 'cloudy';
  middle.className = 'sunny';
  right.className = 'cloudy';
};

const cloudyDisplay = (left, middle, right) => {
  left.className = 'cloudy';
  middle.className = 'cloudy';
  right.className = 'cloudy';
};

const rainyDisplay = (left, middle, right) => {
  left.className = 'rainy';
  middle.className = 'rainbow';
  right.className = 'rainy';
};

const snowyDisplay = (left, middle, right) => {
  left.className = 'snowy';
  middle.className = 'snowy';
  right.className = 'snowy';
};

// Events

const registeredEventsListeners = function () {
  resetButton.addEventListener('click', resetCityName);

  cityInput.addEventListener('input', updateCityValue);

  [decrementButton, increaseButton].forEach((button) =>
    button.addEventListener('click', changeTemperature)
  );

  sky.addEventListener('change', changeSky);
};

document.addEventListener('DOMContentLoaded', registeredEventsListeners);
