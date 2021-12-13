// WAVE 2

const state = {
  temp: 70,
};

const increaseTemp = document.getElementById('increase-temp');
const decreaseTemp = document.getElementById('decrease-temp');
const convertButton = document.getElementById('convert-temp');
const garden = document.getElementById('garden');
const currentTemp = document.getElementById('temp');

const updateByTempFahrenheit = (newTemp) => {
  if (newTemp >= 80) {
    temp.style.color = '#EA0009';
    garden.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (70 <= newTemp) {
    temp.style.color = '#F0940A';
    garden.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (60 <= newTemp) {
    temp.style.color = '#F4D10A';
    garden.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (50 <= newTemp) {
    temp.style.color = '#1F7001';
    garden.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (newTemp <= 49) {
    temp.style.color = '#256D6C';
    garden.textContent = '🌲🌲⛄️🌲⛄️🌲☃❄🌲🌲⛄️❄️🌲';
  }
};

const updateByTempCelsius = (newTemp) => {
  if (newTemp >= 27) {
    temp.style.color = '#EA0009';
    garden.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (21 <= newTemp) {
    temp.style.color = '#F0940A';
    garden.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (16 <= newTemp) {
    temp.style.color = '#F4D10A';
    garden.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (10 <= newTemp) {
    temp.style.color = '#1F7001';
    garden.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (newTemp <= 9) {
    temp.style.color = '#256D6C';
    garden.textContent = '🌲🌲⛄️🌲⛄️🌲☃❄🌲🌲⛄️❄️🌲';
  }
};

const updateConvertButton = () => {
  if (currentTemp.className === "fahrenheit") {
    convertButton.textContent = "Convert to Celsius";
  } else if (currentTemp.className === "celsius") {
    convertButton.textContent = "Convert to Fahrenheit";
  };
};

const convertTemp = () => {
  if (currentTemp.className === "fahrenheit") {
    state.temp = Math.round((state.temp - 32) * 5/9);
    currentTemp.className = "celsius";
    updateTemp();
    updateByTempCelsius(state.temp);
    updateConvertButton();
  } else if (currentTemp.className === "celsius") {
    state.temp = Math.round((state.temp * 9/5) + 32);
    currentTemp.className = "fahrenheit";
    updateTemp();
    updateByTempFahrenheit(state.temp);
    updateConvertButton();
  };
};

const updateTemp = () => {
  if (currentTemp.className === "fahrenheit") {
    currentTemp.textContent = `${state.temp} ºF`;
  } else if (currentTemp.className === "celsius") {
    currentTemp.textContent = `${state.temp} ºC`;
  };
};

const incrementTemp = () => {
  state.temp += 1;
  updateTemp();
  if (currentTemp.className === "fahrenheit") {
    updateByTempFahrenheit(state.temp);
  } else if (currentTemp.className === "celsius") {
    updateByTempCelsius(state.temp);
  };
};

const decrementTemp = () => {
  state.temp -= 1;
  updateTemp();
  if (currentTemp.className === "fahrenheit") {
    updateByTempFahrenheit(state.temp);
  } else if (currentTemp.className === "celsius") {
    updateByTempCelsius(state.temp);
  };
};

// WAVE 3

const sky = document.getElementById('sky');
const skySelect = document.getElementById('sky-menu');
const skyBackground = document.getElementById('sky-background');

const updateSky = () => {
  if (skySelect.value === 'Sunny') {
    sky.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    skyBackground.style.backgroundColor = '#D6FFFF';
  } else if (skySelect.value === 'Cloudy') {
    sky.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    skyBackground.style.backgroundColor = '#C9C9C9';
  } else if (skySelect.value === 'Rainy') {
    sky.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    skyBackground.style.backgroundColor = '#9FCFE0';
  } else if (skySelect.value === 'Snowy') {
    sky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    skyBackground.style.backgroundColor = '#A1B6D6';
  }
};

// WAVE 4

const city = document.getElementById('city-name');
const cityInput = document.getElementById('city-input');

const changeCity = () => {
  city.textContent = '✨' + cityInput.value + '✨';
};

// WAVE 5

const resetButton = document.getElementById('reset-city');

const resetCity = () => {
  city.textContent = '✨Seattle✨';
};

// REGISTER EVENT LISTENERS

const registerEventHandlers = () => {
  
  increaseTemp.addEventListener('click', incrementTemp);

  decreaseTemp.addEventListener('click', decrementTemp);

  convertButton.addEventListener('click', convertTemp);

  skySelect.addEventListener('change', updateSky);

  cityInput.addEventListener('keyup', changeCity);

  resetButton.addEventListener('click', resetCity);

};


document.addEventListener("DOMContentLoaded", registerEventHandlers)