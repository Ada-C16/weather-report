// import '../styles/index.css';

const tempDegree = document.querySelector('#temperatureDegree');
const landscape = document.querySelector('#landscape');
const selectedSky = document.querySelector('#skyEmojis');
const gardenBackground = document.querySelector('#weatherGardenContainer');
const inputCity = document.querySelector('#inputCity');
const displayCity = document.getElementById('cityNameDisplay');
const resetButton = document.getElementById('resetCity');
const state = {
  tempNumber: 80,
  skyState: ' ☁️ ☁️ ☀️ ☁️ ☁️ ☀️ ☀️ ☀️ ☁️ ☀️',
  gardenColor: '#D6FFFF',
};

// Temperature up and down buttons
const increaseTemperature = () => {
  state.tempNumber += 1;
  tempDegree.textContent = `${state.tempNumber}`;
  changeTheme();
};

const decreaseTemperature = () => {
  state.tempNumber -= 1;
  tempDegree.textContent = `${state.tempNumber}`;
  changeTheme();
};

//Issue: needs to have colors c
const changeTheme = () => {
  // if different ranges, change color
  if (state.tempNumber >= 80) {
    tempDegree.style.color = '#EA0009';
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (state.tempNumber >= 70 && state.tempNumber <= 79) {
    tempDegree.style.color = '#F0940A';
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (state.tempNumber >= 60 && state.tempNumber <= 69) {
    tempDegree.style.color = '#F4D10A';
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.tempNumber >= 50 && state.tempNumber <= 59) {
    tempDegree.style.color = '#1F7001';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else {
    tempDegree.style.color = '#256D6C';
    landscape.textContent = '⛄️⛄️⛄️⛄️⛄️🌲⛄️⛄️🌲⛄️🌲⛄️🌲';
  }
};

//City name reset button

const updateCity = (event) => {
  displayCity.textContent = event.target.value;
};

//reset City
const resetCity = (event) => {
  event.target.value = 'Seattle';
  displayCity.textContent = event.target.value;
};

//register event handlers

const registerEventHandlers = () => {
  //up button
  const tempUpButton = document.querySelector('#tempButtonUp');
  tempUpButton.addEventListener('click', increaseTemperature);
  //down button
  const tempDownButton = document.querySelector('#tempButtonDown');
  tempDownButton.addEventListener('click', decreaseTemperature);

  //City input
  inputCity.addEventListener('change', updateCity);

  //reset city
  resetButton.addEventListener('click', resetCity);

  //wave 3: onchangehandler
  const skyDropdown = document.querySelector('.sky');
  skyDropdown.addEventListener('change', (event) => {
    if (event.target.value === 'sunny') {
      selectedSky.textContent = ' ☁️ ☁️ ☀️ ☁️ ☁️ ☀️ ☀️ ☀️ ☁️ ☀️';
      gardenBackground.style.backgroundColor = '#D6FFFF';
    } else if (event.target.value === 'cloudy') {
      selectedSky.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
      gardenBackground.style.backgroundColor = '#C9C9C9';
    } else if (event.target.value === 'rainy') {
      selectedSky.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
      gardenBackground.style.backgroundColor = '#9FCFE0';
    } else if (event.target.value === 'snowy') {
      selectedSky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
      gardenBackground.style.backgroundColor = '#A1B6D6';
    }
  });
};

const setUp = () => {
  tempDegree.textContent = `${state.tempNumber}`;
  selectedSky.textContent = `${state.skyState}`;
  gardenBackground.style.backgroundColor = `${state.gardenColor}`;
  registerEventHandlers();
  changeTheme();
};
//execute registerEventHandlers
//runs code once DOM is ready. DOM isn't fully loaded, eventhandlers might not exist yet. Ex: buttoon on line 35
document.addEventListener('DOMContentLoaded', setUp);
