const currentTempCounter = {
  temp: 75,
};

const skyOptions = {
  sunny: '☀️☁️☀️☀️☁️ ☀️ ☀️☁️ ☁️☀️☀️☀️☁️☀️☀️☁️☀️☀️☁️',
  cloudy: '☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️',
  rainy: '🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️',
  snowy: '❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️',
  catsAndDogs: '🌧️🌧️🐈🐶🌧️🐈🐶🌧️🐈🐶🌧️🐈🐶🌧️🐈🐶🌧️🐈🌧️🌧️',
};

// Event handler for increasing temperature
const increaseTemp = (event) => {
  const currentTempEl = document.getElementById('current-temp');
  currentTempCounter.temp += 1;
  currentTempEl.textContent = currentTempCounter.temp;
};

// Event handler for decreasing temperature
const decreaseTemp = (event) => {
  const currentTempEl = document.getElementById('current-temp');
  currentTempCounter.temp -= 1;
  currentTempEl.textContent = currentTempCounter.temp;
};

// Event handler for changing the sky
const changeSky = () => {
  const skySelection = document.getElementById('drop-down').value;
  const skyContainer = document.getElementById('sky-container');

  if (skySelection === 'Sunny') {
    skyContainer.textContent = skyOptions.sunny;
  } else if (skySelection === 'Cloudy') {
    skyContainer.textContent = skyOptions.cloudy;
  } else if (skySelection === 'Rainy') {
    skyContainer.textContent = skyOptions.rainy;
  } else if (skySelection === 'Snowy') {
    skyContainer.textContent = skyOptions.snowy;
  } else if (skySelection === `It's raining cats and dogs!`) {
    skyContainer.textContent = skyOptions.catsAndDogs;
  }
};

const registerHandlers = (event) => {
  const increaseTempEl = document.getElementById('increase-temp');
  increaseTempEl.addEventListener('click', increaseTemp);

  const decreaseTempEl = document.getElementById('decrease-temp');
  decreaseTempEl.addEventListener('click', decreaseTemp);

  const skySelect = document.getElementById('drop-down');
  skySelect.addEventListener('change', changeSky);
};

document.addEventListener('DOMContentLoaded', registerHandlers);
