// Add state
const state = {
  tempF: 32,
  tempC: 0,
};

// update state (raise temp) function
// Fahrenheit
const updateTempF = () => {
  const tempFElement = document.querySelector('#tempFContainer');
  tempFElement.textContent = `${state.tempF}`;
};

// Celsius
const updateTempC = () => {
  const tempCElement = document.querySelector('#tempCContainer');
  tempCElement.textContent = `${state.tempC}`;
};

// Make a function to run when event occurs (behavior).
// Fahrenheit
const increaseTempF = () => {
  const tempFContainer = document.querySelector('#tempFContainer');
  const tempFSpan = document.createElement('span');
  tempFContainer.appendChild(tempFSpan);
  state.tempF += 1;
  updateTempF();
};

const decreaseTempF = () => {
  const tempFContainer = document.querySelector('#tempFContainer');
  const tempFSpan = document.createElement('span');
  tempFContainer.appendChild(tempFSpan);
  state.tempF -= 1;
  updateTempF();
};

// Celsius
const increaseTempC = () => {
  const tempCContainer = document.querySelector('#tempCContainer');
  const tempCSpan = document.createElement('span');
  tempCContainer.appendChild(tempCSpan);
  state.tempC += 1;
  updateTempC();
};

const decreaseTempC = () => {
  const tempCContainer = document.querySelector('#tempCContainer');
  const tempCSpan = document.createElement('span');
  tempCContainer.appendChild(tempCSpan);
  state.tempC -= 1;
  updateTempC();
};

// Selecting the HTML element the event will occur on.
// registering the event handlers
const registerEventHandlers = () => {
  const increaseTempFButton = document.querySelector('#increaseTempFButton');
  increaseTempFButton.addEventListener('click', increaseTempF);
  const decreaseTempFButton = document.querySelector('#decreaseTempFButton');
  decreaseTempFButton.addEventListener('click', decreaseTempF);
  const increaseTempCButton = document.querySelector('#increaseTempCButton');
  increaseTempCButton.addEventListener('click', increaseTempC);
  const decreaseTempCButton = document.querySelector('#decreaseTempCButton');
  decreaseTempCButton.addEventListener('click', decreaseTempC);
};

// registers our event handlers in response to the event that fires when the DOM has loaded completely (DOMContentLoaded).
document.addEventListener('DOMContentLoaded', registerEventHandlers);

// can also pass in an annonymous function instead of a named on in the eventListener.
// TempFElement.addEventListener('click', () => {
//   TempFElement.textContent = 'Hi';
// });
