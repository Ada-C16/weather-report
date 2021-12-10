const state = {
  defaultTemp: 73,
};

const renderTemp = (event) => {
  const tempInt = document.querySelector('#number');
  const landscape = document.querySelector('#landscape-garden');
  tempInt.textContent = state.defaultTemp;
  landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
};

const increaseTemp = (event) => {
  state.defaultTemp += 1;
  renderTemp();
  changeTempColor();
};

const decreaseTemp = (event) => {
  state.defaultTemp -= 1;
  renderTemp();
  changeTempColor();
};

const changeTempColor = (event) => {
  const temp = document.querySelector('#temp-number');
  const landscape = document.querySelector('#landscape-garden');
  console.log('hieeeeee');
  if (state.defaultTemp >= 80) {
    temp.className = 'red';
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (state.defaultTemp >= 70 && state.defaultTemp <= 79) {
    temp.className = 'orange';
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (state.defaultTemp >= 60 && state.defaultTemp <= 69) {
    temp.className = 'yellow';
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.defaultTemp >= 50 && state.defaultTemp <= 59) {
    temp.className = 'aqua';
    landscape.textContent = '🌲🌲_🌲🍂__🌲🍁🌲_🌲🍂🌲';
  } else {
    temp.className = 'blue';
  }
};

const registerEventHandlers = (event) => {
  renderTemp();
  const upTempButton = document.querySelector('#up-button');
  upTempButton.addEventListener('click', increaseTemp);
  const downTempButton = document.querySelector('#down-button');
  downTempButton.addEventListener('click', decreaseTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
