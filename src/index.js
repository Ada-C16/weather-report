const state = {
  temp: 68,
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

const renderLandscape = (temp) => {
  const landscapeElem = document.querySelector('#landscape');
  landscapeElem.textContent = getLandscapeFromTemp(temp);
}

const getLandscapeFromTemp = (temp) => {
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

const startUp = () => {
  renderTemp(state.temp);
  renderLandscape(state.temp);

  const increaseTempBtn = document.querySelector('#increase-temp');
  increaseTempBtn.addEventListener('click', increaseTemp);

  const decreaseTempBtn = document.querySelector('#decrease-temp');
  decreaseTempBtn.addEventListener('click', decreaseTemp);
}

document.addEventListener('DOMContentLoaded', startUp);