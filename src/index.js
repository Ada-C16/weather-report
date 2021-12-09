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

const plantOptions = {
  tooHot: '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
  summer: '🌿🌼🌷🌻🌿☘️🌱🌻🌷🌸🌿🌷🌻🌿☘️🌱🌻🌷',
  spring: '🌳🌸🌼🌷🌳🌸🌼🌷🌳🌸🌼🌷🌳🌸🌼🌷🌳🌸',
  winter: '🎄☃️🌲🎄☃️🌲🎄☃️🌲🎄☃️🌲🎄☃️🌲🎄☃️🌲🎄☃️',
};

const produceOptions = {
  tooHot: '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥',
  summer: '🍆 🌽 🥭 🍒 🍉🍓🍆 🌽 🥭 🍒 🍉🍓🍆 🌽 🥭 🍒 🍉',
  spring: '🥦🍑🥒🍍🍓🥦🍑🥒🍍🍓🥦🍑🥒🍍🍓🥦🍑🥒🍍🍓🥦🍑🥒🍍🍓',
  winter: '🍊🌰🍋🥂🍊🌰🍋🥂🍊🌰🍋🥂🍊🌰🍋🥂🍊🌰🍋🥂🍊🌰🍋🥂🍊🌰',
};

// Event handler for increasing temperature
const increaseTemp = (event) => {
  const currentTempEl = document.getElementById('current-temp');
  currentTempCounter.temp += 1;
  currentTempEl.textContent = currentTempCounter.temp;
  changeElementsBasedOnTempNumber();
};

// Event handler for decreasing temperature
const decreaseTemp = (event) => {
  const currentTempEl = document.getElementById('current-temp');
  currentTempCounter.temp -= 1;
  currentTempEl.textContent = currentTempCounter.temp;
  changeElementsBasedOnTempNumber();
};

// Event handler for changing the sky
const changeSky = (event) => {
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

// Event handler for changing the plants and produce based on temperature
// as well as updating the color the the temperature text element
const changeElementsBasedOnTempNumber = () => {
  const plantContainer = document.getElementById('plant-container');
  const produceContainer = document.getElementById('produce-container');
  const currentTempEl = document.getElementById('current-temp');

  if (currentTempCounter.temp >= 80) {
    plantContainer.textContent = plantOptions.tooHot;
    produceContainer.textContent = produceOptions.tooHot;
    currentTempEl.style.color = 'red';
  } else if (currentTempCounter.temp >= 70) {
    plantContainer.textContent = plantOptions.summer;
    produceContainer.textContent = produceOptions.summer;
    currentTempEl.style.color = 'orange';
  } else if (currentTempCounter.temp > 60) {
    plantContainer.textContent = plantOptions.spring;
    produceContainer.textContent = produceOptions.spring;
    currentTempEl.style.color = 'yellow';
  } else if (currentTempCounter.temp > 50) {
    plantContainer.textContent = plantOptions.winter;
    produceContainer.textContent = produceOptions.winter;
    currentTempEl.style.color = 'green';
  } else {
    currentTempEl.style.color = 'teal';
  }
};

// Event handler for setting the city name in the main heading
const setCityName = (event) => {
  const input = document.getElementById('city-search-input').value;
  const cityName = document.getElementById('city-name');
  cityName.textContent = input;
};

// Event handler for resetting the city name in the heading to its default
const resetCityName = () => {
  const cityNameInput = document.getElementById('city-search-input');
  cityNameInput.value = 'Philadelphia';
  setCityName();
};

// Registers event handlers
const registerHandlers = (event) => {
  const increaseTempEl = document.getElementById('increase-temp');
  increaseTempEl.addEventListener('click', increaseTemp);

  const decreaseTempEl = document.getElementById('decrease-temp');
  decreaseTempEl.addEventListener('click', decreaseTemp);

  const skySelect = document.getElementById('drop-down');
  skySelect.addEventListener('change', changeSky);

  const cityResetEl = document.getElementById('resetButton');
  cityResetEl.addEventListener('click', resetCityName);

  const cityNameInput = document.getElementById('city-search-input');
  cityNameInput.addEventListener('input', setCityName);
};

document.addEventListener('DOMContentLoaded', registerHandlers);
