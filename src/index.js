const state = {
  tempCurrent: 60,
};

// Adjusting Temperature Depending on Which Button is Clicked
const adjustTemp = (event) => {
  const currentTempEl = document.querySelector('#current-temp');

  if (event.target.id === 'decrease') {
    state.tempCurrent -= 1;
  } else if (event.target.id === 'increase') {
    state.tempCurrent += 1;
  }

  currentTempEl.textContent = `${state.tempCurrent}°F`;
  changeLandscapeColor();
};

// Adjusting Landscape & Background Color According to Temperature
const changeLandscapeColor = () => {
  const landscapeEmoji = document.querySelector('#landscape');
  const tempSectionEl = document.querySelector('.temp-default');

  if (state.tempCurrent >= 80) {
    landscapeEmoji.textContent = '🌵🔥‼️🐌🐍🦂♨️🌵🔥🌵♨️🐍🦂🐍🏜';
    tempSectionEl.id = 'veryHotTemp';
  } else if (state.tempCurrent <= 79 && state.tempCurrent >= 70) {
    landscapeEmoji.textContent = '🌸🌿🌼🌷🌿🌷🌻🌿🌱🌼🌱🌸🌻🌷';
    tempSectionEl.id = 'hotTemp';
  } else if (state.tempCurrent <= 69 && state.tempCurrent >= 60) {
    landscapeEmoji.textContent = '🌾🪨🍁🍃🪨🍃🍂🍃💨🍁🍃🍂🏠💨🌲';
    tempSectionEl.id = 'middleTemp';
  } else if (state.tempCurrent <= 59 && state.tempCurrent >= 50) {
    landscapeEmoji.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    tempSectionEl.id = 'coldTemp';
  } else {
    landscapeEmoji.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    tempSectionEl.id = 'veryColdTemp';
  }
};

// Adjusting Sky Levels
const changeSky = () => {
  const skySelectedEl = document.querySelector('.sky-choice');
  const skyLandscapeEl = document.querySelector('#sky');

  if (skySelectedEl.value === 'sunny') {
    skyLandscapeEl.textContent = '☁️☀️☁️☀️☁️☀️☁️☀️☁️☀️☁️';
  } else if (skySelectedEl.value === 'cloudy') {
    skyLandscapeEl.textContent = '☁️☁️ 🌤 ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (skySelectedEl.value === 'rainy') {
    skyLandscapeEl.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌧💧🌧';
    alert("Don't forget to bring an umbrella! It's raining outside!");
  } else {
    skyLandscapeEl.textContent = '🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️❄️';
    alert("Bundle up and don't forget your gloves! It's snowing outside!");
  }
};

// Changing city name
const updateCity = (event) => {
  const cityDisplay = document.querySelector('#city-display');
  cityDisplay.textContent = event.target.value;
};

// Reset city button
const resetCity = () => {
  const cityInput = document.querySelector('#city-form');
  cityInput.reset();
};

// Registering event handlers
const registerHandlers = () => {
  const decreaseButton = document.querySelector('#decrease');
  decreaseButton.addEventListener('click', adjustTemp);

  const increaseButton = document.querySelector('#increase');
  increaseButton.addEventListener('click', adjustTemp);

  const selectSky = document.querySelector('.sky-choice');
  selectSky.addEventListener('change', changeSky);

  const cityInput = document.querySelector('input');
  cityInput.addEventListener('input', updateCity);

  const resetCityButton = document.querySelector('#reset-city');
  resetCityButton.addEventListener('click', resetCity);
};

document.addEventListener('DOMContentLoaded', registerHandlers);
