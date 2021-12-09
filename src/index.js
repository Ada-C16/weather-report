// Add state
const state = {
  tempF: 32,
  tempC: 0,
};

// Select the HTML element the event will occur on.
const increaseTempFButton = document.querySelector('#increaseTempFButton');
const decreaseTempFButton = document.querySelector('#decreaseTempFButton');
const increaseTempCButton = document.querySelector('#increaseTempCButton');
const decreaseTempCButton = document.querySelector('#decreaseTempCButton');

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

// Make a function to run when it occurs (behavior).
// Fahrenheit
const increaseTempF = () => {
  const tempFContainer = document.querySelector('#tempFContainer');
  const tempFSpan = document.createElement('span');
  tempFContainer.appendChild(tempFSpan);
  state.tempF += 1;
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

// Register that function as an 'event listener'.
increaseTempFButton.addEventListener('click', increaseTempF);
increaseTempCButton.addEventListener('click', increaseTempC);

// can also pass in an annonymous function instead of a named on in the eventListener.
// TempFElement.addEventListener('click', () => {
//   TempFElement.textContent = 'Hi';
// });
