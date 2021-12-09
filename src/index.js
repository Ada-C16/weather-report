const state = {
  temp: 68,
  sky: 'sunny',
  cityName: 'Tacoma',
};

// rendering
const renderTemp = () => {
  const { temp } = state;
  const tempElem = document.querySelector('#current-temp');
  tempElem.className = getTempClass();
  tempElem.textContent = `${temp}`;
};

const renderLandscape = () => {
  const landscapeElem = document.querySelector('#landscape');
  landscapeElem.textContent = getLandscapeContent();
};

const renderSky = () => {
  const skyElem = document.querySelector('#sky');
  skyElem.textContent = getSkyContent();
};

const renderCityName = () => {
  const { cityName } = state;
  const nameElem = document.querySelector('#city-name');
  nameElem.textContent = cityName;
};

const renderAll = () => {
  renderTemp();
  renderLandscape();
  renderSky();
  renderCityName();
};

// helper logic for rendering
const getTempClass = () => {
  const { temp } = state;
  if (temp >= 80) {
    return 'hot';
  } else if (temp >= 70) {
    return 'warm';
  } else if (temp >= 60) {
    return 'mid';
  } else if (temp >= 50) {
    return 'cool';
  } else {
    return 'cold';
  }
};

const getLandscapeContent = () => {
  const { temp } = state;
  if (temp >= 80) {
    return '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (temp >= 70) {
    return '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temp >= 60) {
    return '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (temp >= 50) {
    return '🌲🌲🍁🌲🍁___🍁🌲_🍃🍂🌲';
  } else {
    return '🌲🌲_️🌲⛄️❄️🌲❄️__🌲⛄️❄️_️';
  }
};

const getSkyContent = () => {
  const { sky } = state;
  console.log(sky);
  switch (sky) {
    case 'sunny':
      return '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    case 'cloudy':
      return '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    case 'rainy':
      return '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    case 'snowy':
      return '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
};

// logic for event listeners

const increaseTemp = () => {
  state.temp++;
  renderTemp();
  renderLandscape();
};

const decreaseTemp = () => {
  state.temp--;
  renderTemp();
  renderLandscape();
};

const changeSky = (e) => {
  state.sky = e.target.value;
  renderSky();
};

const changeCityName = (e) => {
  state.cityName = e.target.value;
  renderCityName();
};

const resetCityName = () => {
  state.cityName = 'Tacoma';
  document.querySelector('#change-name').value = state.cityName;
  renderCityName();
};

// startup logic

const registerEventHandlers = () => {
  const increaseTempBtn = document.querySelector('#increase-temp');
  increaseTempBtn.addEventListener('click', increaseTemp);

  const decreaseTempBtn = document.querySelector('#decrease-temp');
  decreaseTempBtn.addEventListener('click', decreaseTemp);

  const skySelector = document.querySelector('#select-sky');
  skySelector.addEventListener('change', changeSky);

  const cityNameInp = document.querySelector('#change-name');
  cityNameInp.addEventListener('input', changeCityName);

  const resetCityNameBtn = document.querySelector('#reset-name');
  resetCityNameBtn.addEventListener('click', resetCityName);
};

const startUp = () => {
  renderAll();
  registerEventHandlers();
};

document.addEventListener('DOMContentLoaded', startUp);
