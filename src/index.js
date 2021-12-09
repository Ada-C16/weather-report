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
const increaseButton = document.getElementById('increase');
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
    temperatureValue.classList = 'red-text';
    displayLandscape.textContent = landscape.summer;
  } else if (stateTemp.value >= 70 && stateTemp.value <= 79) {
    temperatureValue.classList = 'orange-text';
    displayLandscape.textContent = landscape.spring;
  } else if (stateTemp.value >= 60 && stateTemp.value <= 69) {
    temperatureValue.classList = 'yellow-text';
    displayLandscape.textContent = landscape.autumn;
  } else if (stateTemp.value >= 35 && stateTemp.value <= 59) {
    temperatureValue.classList = 'green-text';
    displayLandscape.textContent = landscape.winter;
  } else {
    temperatureValue.classList = 'white-text';
    displayLandscape.textContent = landscape.freezing;
  }
};

const changeTemperature = function (event) {
  changeColorAndLand(stateTemp.value);
  if (event.target.id === 'increment') {
    stateTemp.value++;
    temperatureValue.innerHTML = stateTemp.value;
  } else if (event.target.id === 'decrement') {
    stateTemp.value--;
    temperatureValue.innerHTML = stateTemp.value;
  }
};

//sky

const sky = document.getElementsById('sky-type');

for (item in sky) {
  console.log(item);
}

// REGISTER EVENTS

const registerEventsListeners = function () {
  resetButton.addEventListener('click', resetCityName);
  cityInput.addEventListener('input', updateCityValue);
  [decrementButton, increaseButton].forEach(() =>
    addEventListener('click', changeTemperature)
  );
};

document.addEventListener('DOMContentLoaded', registerEventsListeners);
