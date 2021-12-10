'use strict';
// set temperature
const state = {
  temp: 70,
};

// change city name displayed
const changeCity = () => {
  const cityName = document.getElementById('city');
  const textInput = document.getElementById('typeCityName');
  cityName.textContent = textInput.value;
};
const resetCity = () => {
  const cityName = document.getElementById('city');
  const textInput = document.getElementById('typeCityName');
  textInput.value = 'San Antonio';
  cityName.textContent = 'San Antonio';
};

// change the temperature
const changeTemp = (temp) => {
  const tempDisplay = document.getElementById('tempDisplay');
  const landscape = document.getElementById('landscape');
  if (temp >= 80) {
    tempDisplay.setAttribute('style', 'background-color: red');
    landscape.src = '/assets/texasWeather.jpg';
  } else if (temp >= 70) {
    tempDisplay.setAttribute('style', 'background-color: orange');
    landscape.src = '/assets/hotWeather.jpg';
  } else if (temp >= 60) {
    tempDisplay.setAttribute('style', 'background-color: yellow');
    landscape.src = '/assets/springWeather.jpg';
  } else if (temp >= 50) {
    tempDisplay.setAttribute('style', 'background-color: green; color: white');
    landscape.src = '/assets/fallWeather.jpg';
  } else {
    tempDisplay.setAttribute('style', 'background-color: teal; color: white');
    landscape.src = '/assets/winterWeather.jpg';
  }
};

const increaseTemp = () => {
  state.temp += 1;
  tempDisplay.textContent = `${state.temp}F`;
  changeTemp(state.temp);
};

const decreaseTemp = () => {
  state.temp -= 1;
  tempDisplay.textContent = `${state.temp}F`;
  changeTemp(state.temp);
};

// change the way the weather is displayed
const displayWeather = () => {
  const weatherDisplay = document.getElementById('weatherSky');
  const plainOption = document.getElementById('plainSky');
  const sunnyOption = document.getElementById('clearSky');
  const cloudyOption = document.getElementById('cloudySky');
  const rainyOption = document.getElementById('rainySky');
  const coldOption = document.getElementById('coldSky');
  if (sunnyOption.selected) {
    weatherDisplay.setAttribute(
      'style',
      "background-image: url('/assets/Sun_GIF.gif')"
    );
  } else if (cloudyOption.selected) {
    weatherDisplay.setAttribute(
      'style',
      "background-image: url('/assets/Cloudy_GIF.webp')"
    );
  } else if (rainyOption.selected) {
    weatherDisplay.setAttribute(
      'style',
      "background-image: url('/assets/Rainy_GIF.gif')"
    );
  } else if (coldOption.selected) {
    weatherDisplay.setAttribute(
      'style',
      "background-image: url('/assets/Cold_GIF.gif')"
    );
  } else {
    weatherDisplay.setAttribute(
      'style',
      "background-image: url('/assets/Plain_GIF.gif')"
    );
  }
};

// registering all events
const registerEventHandlers = () => {
  const tempIncreaseButton = document.getElementById('tempIncrease');
  const tempDecreaseButton = document.getElementById('tempDecrease');
  const weatherButton = document.getElementById('changeSky');
  const changesCity = document.getElementById('typeCityName');
  const reset = document.getElementById('reset');
  tempIncreaseButton.addEventListener('click', increaseTemp);
  tempDecreaseButton.addEventListener('click', decreaseTemp);
  weatherButton.addEventListener('click', displayWeather);
  changesCity.addEventListener('input', changeCity);
  reset.addEventListener('click', resetCity);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
