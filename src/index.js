//Temperature control

const state = {
  currentTemperature: 64,
};

const increaseTemperature = (event) => {
  console.log('in Temperature:', event);
  state.currentTemperature += 1;
  const temperature = document.querySelector('#temperature');
  temperature.textContent = `Temperature: ${state.currentTemperature}`;
};

const decreaseTemperature = (event) => {
  console.log('in Temperature:', event);
  state.currentTemperature -= 1;
  const temperature = document.querySelector('#temperature');
  temperature.textContent = `Temperature: ${state.currentTemperature}`;
};

const registerEventHandlers = (event) => {
  const increaseTempButton = document.querySelector('#increaseTempButton');
  increaseTempButton.addEventListener('click', increaseTemperature);
  const decreaseTempButton = document.querySelector('#decreaseTempButton');
  decreaseTempButton.addEventListener('click', decreaseTemperature);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
