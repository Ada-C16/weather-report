const state = {
  temp: {
    cTemp: 20,
    fTemp: 68,
  },
  sky: 'sunny',
  cityName: 'Tacoma',
  tempType: 'f',
};

// rendering
const renderTemp = () => {
  const {
    temp: { cTemp, fTemp },
    tempType,
  } = state;
  const tempElem = document.querySelector('#current-temp');
  tempElem.className = getTempClass();

  tempElem.textContent = `${tempType === 'f' ? `${fTemp}°F` : `${cTemp}°C`}`;
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

const renderConvertBtn = () => {
  const { tempType } = state;
  const convertBtn = document.querySelector('#convert-btn');
  convertBtn.textContent = tempType === 'f' ? 'To Fahrenheit' : 'To Celsius';
};

const renderAll = () => {
  renderTemp();
  renderLandscape();
  renderSky();
  renderCityName();
  renderConvertBtn();
};

// helper logic for rendering
const getTempClass = () => {
  const {
    temp: { fTemp },
  } = state;
  if (fTemp >= 80) {
    return 'hot';
  } else if (fTemp >= 70) {
    return 'warm';
  } else if (fTemp >= 60) {
    return 'mid';
  } else if (fTemp >= 50) {
    return 'cool';
  } else {
    return 'cold';
  }
};

const getLandscapeContent = () => {
  const {
    temp: { fTemp },
  } = state;
  if (fTemp >= 80) {
    return '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (fTemp >= 70) {
    return '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (fTemp >= 60) {
    return '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (fTemp >= 50) {
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

const setCTemp = () => {
  const {
    temp: { fTemp },
  } = state;
  state.temp.cTemp = Math.round((5 / 9) * (fTemp - 32));
};

const setFTemp = () => {
  const {
    temp: { cTemp },
  } = state;
  state.temp.fTemp = Math.round(cTemp * (9 / 5) + 32);
};

// logic for event listeners
const increaseTemp = () => {
  const { tempType } = state;

  if (tempType === 'f') {
    state.temp.fTemp++;
    setCTemp();
  } else if (tempType === 'c') {
    state.temp.cTemp++;
    setFTemp();
  }

  renderTemp();
  renderLandscape();
};

const decreaseTemp = () => {
  const { tempType } = state;

  if (tempType === 'f') {
    state.temp.fTemp--;
    setCTemp();
  } else if (tempType === 'c') {
    state.temp.cTemp--;
    setFTemp();
  }

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

const toggleTempType = () => {
  const { tempType } = state;
  if (tempType === 'f') {
    setCTemp();
    state.tempType = 'c';
  } else if (tempType === 'c') {
    setFTemp();
    state.tempType = 'f';
  }
  renderConvertBtn();
  renderTemp();
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

  const convertTempTypeBtn = document.querySelector('#convert-btn');
  convertTempTypeBtn.addEventListener('click', toggleTempType);
};

const startUp = () => {
  renderAll();
  registerEventHandlers();
};

document.addEventListener('DOMContentLoaded', startUp);
