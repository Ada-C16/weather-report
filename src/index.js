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

const skyColor = {
  Sunny: 'skyblue',
  Cloudy: 'lightgrey',
  Rainy: 'lightblue',
  Snowy: 'lightsteelblue',
};

const skySelector = document.getElementById('sky__selector');
const leftSky = document.getElementById('sky__left');
const rightSky = document.getElementById('sky__right');

const defaultSky = skySelector.options[skySelector.selectedIndex].text;

leftSky.textContent = skyLeft[defaultSky];
rightSky.textContent = skyRight[defaultSky];

const backgroundColor = document.getElementsByClassName('weather__garden')[0];

backgroundColor.style.backgroundColor = skyColor['Sunny'];

skySelector.addEventListener('change', function () {
  const currentSky = skySelector.options[skySelector.selectedIndex].text;
  leftSky.textContent = skyLeft[currentSky];
  rightSky.textContent = skyRight[currentSky];
  backgroundColor.style.backgroundColor = skyColor[currentSky];
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
  if (state.temperature > 79) {
    garden.textContent = '🌵🐪🏜🐍🦂_🌵🌵__🐍_🏜🐫🦂';
    temperature.style.color = 'red';
  }
  if (state.temperature > 69 && state.temperature < 80) {
    garden.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    temperature.style.color = 'orange';
  }
  if (state.temperature > 59 && state.temperature < 70) {
    garden.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    temperature.style.color = 'yellow';
  }
  if (state.temperature < 60) {
    garden.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    temperature.style.color = 'green';
  }
  if (state.temperature < 50) {
    temperature.style.color = 'teal';
  }
};
updateGarden();

increaseButton.addEventListener('click', function () {
  state.temperature += 1;
  temperature.textContent = state.temperature;
  updateGarden();
});

decreaseButton.addEventListener('click', function () {
  state.temperature -= 1;
  temperature.textContent = state.temperature;
  updateGarden();
});

const newCity = document.getElementById('new__city');
const displayCity = document.getElementById('display__city');

newCity.addEventListener('input', function (e) {
  displayCity.textContent = e.target.value;
});

const reset = document.getElementById('reset');

reset.addEventListener('click', function () {
  displayCity.textContent = 'San Francisco';
  newCity.value = '';
});
