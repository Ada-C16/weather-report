const skyLeft = {
  Sunny: '☀️🌤🌞🌤☀️',
  Cloudy: '🌫☁️🌥⛅️🌤',
  Rainy: '🌈⛈🌧🌧🌦',
  Snowy: '🌨❄️🌨❄️🌨',
};

const skyRight = {
  Sunny: '☀️🌤🌞🌤☀️',
  Cloudy: '🌤⛅️🌥☁️🌫',
  Rainy: '🌦🌧🌧⛈💧',
  Snowy: '🌨❄️🌨❄️🌨',
};

const skySelector = document.getElementById('sky__selector');
const leftSky = document.getElementById('sky__left');
const rightSky = document.getElementById('sky__right');

const defaultSky = skySelector.options[skySelector.selectedIndex].text;

leftSky.textContent = skyLeft[defaultSky];
rightSky.textContent = skyRight[defaultSky];

skySelector.addEventListener('change', function () {
  const currentSky = skySelector.options[skySelector.selectedIndex].text;
  leftSky.textContent = skyLeft[currentSky];
  rightSky.textContent = skyRight[currentSky];
});

const state = {
  temperature: 72,
};

const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const temperature = document.getElementById('temp');

const garden = document.getElementById('garden');

temperature.textContent = state.temperature;

const updateGarden = function () {
  //update garden based on temp
};

increaseButton.addEventListener('click', function () {
  state.temperature += 1;
  temperature.textContent = state.temperature;
});

decreaseButton.addEventListener('click', function () {
  state.temperature -= 1;
  temperature.textContent = state.temperature;
});
