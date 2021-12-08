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
const stateTemp = { value: 0 };

const changeTemperature = function (event) {
  if (event.target.id === 'increment') {
    stateTemp.value++;
    temperatureValue.innerHTML = stateTemp.value;
  } else if (event.target.id === 'decrement') {
    stateTemp.value--;
    temperatureValue.innerHTML = stateTemp.value;
  }
};

// Events
const registerEventsListeners = function () {
  resetButton.addEventListener('click', resetCityName);
  cityInput.addEventListener('input', updateCityValue);
  [decrementButton, increaseButton].forEach(() =>
    addEventListener('click', changeTemperature)
  );
};

document.addEventListener('DOMContentLoaded', registerEventsListeners);
