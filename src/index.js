const state = {
  defaultTemp: 73,
};

const renderTemp = (event) => {
  const tempInt = document.querySelector('#number');
  tempInt.textContent = state.defaultTemp;
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
  console.log('hieeeeee');
  if (state.defaultTemp >= 80) {
    temp.className = 'red';
  } else if (state.defaultTemp >= 70 && state.defaultTemp <= 79) {
    temp.className = 'orange';
  } else if (state.defaultTemp >= 60 && state.defaultTemp <= 69) {
    temp.className = 'yellow';
  } else if (state.defaultTemp >= 50 && state.defaultTemp <= 59) {
    temp.className = 'aqua';
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
