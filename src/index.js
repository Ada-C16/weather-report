// import '../styles/index.css';

//Temperature control

const state = {
  currentTemperature: 82,
};

const temperature = document.querySelector('#temperature');
const currentLandscape = document.querySelector('#currentLandscape');

const increaseTemperature = (event) => {
  console.log('in Temperature:', event);
  state.currentTemperature += 1;
  // const temperature = document.querySelector('#temperature');
  temperature.textContent = `${state.currentTemperature}`;
  temperatureColorControl();
  // if (state.currentTemperature <= 49) {
  //   currentLandscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  //   temperature.className = `teal`;
  // } else if (state.currentTemperature <= 59) {
  //   currentLandscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  //   temperature.className = `green`;
  // } else if (state.currentTemperature <= 69) {
  //   currentLandscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  //   temperature.className = `yellow`;
  // } else if (state.currentTemperature <= 79) {
  //   currentLandscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  //   temperature.className = `orange`;
  // } else {
  //   currentLandscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  //   temperature.className = `red`;
  // }
};

const decreaseTemperature = (event) => {
  console.log('in Temperature:', event);
  state.currentTemperature -= 1;
  temperatureColorControl();

  // const temperature = document.querySelector('#temperature');
  temperature.textContent = `${state.currentTemperature}`;
  // if (state.currentTemperature <= 49) {
  //   currentLandscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  //   temperature.className = `teal`;
  // } else if (state.currentTemperature <= 59) {
  //   currentLandscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  //   temperature.className = `green`;
  // } else if (state.currentTemperature <= 69) {
  //   currentLandscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  //   temperature.className = `yellow`;
  // } else if (state.currentTemperature <= 79) {
  //   currentLandscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  //   temperature.className = `orange`;
  // } else {
  //   currentLandscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  //   temperature.className = `red`;
  // }
};

const temperatureColorControl = () => {
  const temperature = document.querySelector('#temperature');
  if (state.currentTemperature <= 49) {
    currentLandscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    return (temperature.className = `teal`);
  } else if (state.currentTemperature <= 59) {
    currentLandscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    return (temperature.className = `green`);
  } else if (state.currentTemperature <= 69) {
    currentLandscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    return (temperature.className = `yellow`);
  } else if (state.currentTemperature <= 79) {
    currentLandscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    return (temperature.className = `orange`);
  } else {
    currentLandscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    return (temperature.className = `red`);
  }
};

// SKY BOX
const selectSky = (event) => {
  const currentSky = document.querySelector('#currentSky');

  if (event.target.value == 'sunny') {
    currentSky.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (event.target.value == 'cloudy') {
    currentSky.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (event.target.value == 'rainy') {
    currentSky.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (event.target.value == 'snowy') {
    currentSky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
};

// CITY NAME BOX
const selectCity = (event) => {
  const cityName = document.querySelector('#currentCity');
  cityName.textContent = event.target.value;
};

const registerEventHandlers = (event) => {
  const increaseTempButton = document.querySelector('#increaseTempButton');
  increaseTempButton.addEventListener('click', increaseTemperature);
  const decreaseTempButton = document.querySelector('#decreaseTempButton');
  decreaseTempButton.addEventListener('click', decreaseTemperature);
  const skySelection = document.querySelector('#sky');
  skySelection.addEventListener('change', selectSky);
  const enterCityName = document.querySelector('#cityName');
  enterCityName.addEventListener('input', selectCity);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
