// import '../styles/index.css';

//Temperature control

const state = {
  currentTemperature: 64,
};

const temperature = document.querySelector('#temperature');

const increaseTemperature = (event) => {
  console.log('in Temperature:', event);
  state.currentTemperature += 1;
  // const temperature = document.querySelector('#temperature');
  temperature.textContent = `${state.currentTemperature}`;
};

const decreaseTemperature = (event) => {
  console.log('in Temperature:', event);
  state.currentTemperature -= 1;

  // const temperature = document.querySelector('#temperature');
  temperature.textContent = `${state.currentTemperature}`;
};

// if (state.currentTemperature <= 49) {
//   temperature.className = 'teal';
// } else if (state.currentTemperature <= 59) {
//   temperature.className = 'green';
// } else if (state.currentTemperature <= 69) {
//   temperature.className = 'yellow';
// } else if (state.currentTemperature <= 79) {
//   temperature.className = 'orange';
// } else {
//   temperature.className = 'red';
// }

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
const registerEventHandlers = (event) => {
  const increaseTempButton = document.querySelector('#increaseTempButton');
  increaseTempButton.addEventListener('click', increaseTemperature);
  const decreaseTempButton = document.querySelector('#decreaseTempButton');
  decreaseTempButton.addEventListener('click', decreaseTemperature);
  const skySelection = document.querySelector('#sky');
  skySelection.addEventListener('change', selectSky);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
