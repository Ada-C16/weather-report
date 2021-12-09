const state = {
  temp: 68,
  sky: 'sunny',
  cityName: 'Tacoma',
}

const renderTemp = (temp) => {
  const tempElem = document.querySelector('#current-temp');
  tempElem.className = getTempClass(temp);
  tempElem.textContent = `${temp}`;
}


const getTempClass = (temp) => {
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
}

const renderLandscape = (temp) => {
  const landscapeElem = document.querySelector('#landscape');
  landscapeElem.textContent = getLandscapeContent(temp);
}

const getLandscapeContent = (temp) => {
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
}

const increaseTemp = () => {
  state.temp++;
  renderTemp(state.temp);
  renderLandscape(state.temp);
}

const decreaseTemp = () => {
  state.temp--;
  renderTemp(state.temp);
  renderLandscape(state.temp);
}

const renderSky = (sky) => {
  const skyElem = document.querySelector('#sky');
  skyElem.textContent = getSkyContent(sky);
}

const getSkyContent = (sky) => {
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
}

const changeSky = (e) => {
  state.sky = e.target.value;
  renderSky(state.sky);
}

const renderCityName = (cityName) => {
  const nameElem = document.querySelector('#city-name');
  nameElem.textContent = cityName;
}

const changeCityName = (e) => {
  state.cityName = e.target.value;
  renderCityName(state.cityName);
}

const resetCityName = () => {
  state.cityName = 'Tacoma';
  renderCityName(state.cityName);
  document.querySelector('#change-name').value = state.cityName;
}

const startUp = () => {
  renderTemp(state.temp);
  renderLandscape(state.temp);
  renderSky(state.sky);
  renderCityName(state.cityName);

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
}

document.addEventListener('DOMContentLoaded', startUp);