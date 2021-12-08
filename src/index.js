const state = {
  tempGauge: 70,
};

const updateTempState = () => {
  const tempGaugeElement = document.querySelector('#temp-gauge');
  tempGaugeElement.textContent = `${state.tempGauge}`;

  const landscapeEmojisElement = document.querySelector('#landscape-emojis');
  if (state.tempGauge >= 80) {
    landscapeEmojisElement.textContent = `🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂`;
  } else if (state.tempGauge >= 70) {
    landscapeEmojisElement.textContent = `🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷`; 
  } else if (state.tempGauge >= 60) {
    landscapeEmojisElement.textContent = `🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃`;
  } else if (state.tempGauge <= 59) {
    landscapeEmojisElement.textContent = `🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲`;
  }
};

const tempUp = (event) => {
  console.log('in tempUp', event);
  state.tempGauge += 1;
  updateTempState();
};

const tempDown = (event) => {
  console.log('in tempDown', event);
  state.tempGauge -= 1;
  updateTempState();
};

const registerEventHandlers = (event) => {
  console.log('in the registerEventHandlers', event);
  const upButton = document.querySelector('#upButton');
  upButton.addEventListener('click', tempUp);
  const downButton = document.querySelector('#downButton');
  downButton.addEventListener('click', tempDown);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
console.log('hello');
