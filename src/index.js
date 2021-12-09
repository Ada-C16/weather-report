// Add state
const state = {
  tempF: 32,
};

// Select the HTML element the event will occur on.
const increaseTempFButton = document.querySelector('#increaseTempFButton');

// update state (raise temp) function
const updateTempF = () => {
  const tempFElement = document.querySelector('#tempFContainer');
  tempFElement.textContent = `${state.tempF}`;
};

// Make a function to run when it occurs (behavior).
const increaseTempF = () => {
  const tempFContainer = document.querySelector('#tempFContainer');
  const tempFSpan = document.createElement('span');
  tempFContainer.appendChild(tempFSpan);
  state.tempF += 1;
  updateTempF();
};

// Register that function as an 'event listener'.
increaseTempFButton.addEventListener('click', increaseTempF);

// can also pass in an annonymous function instead of a named on in the eventListener.
// TempFElement.addEventListener('click', () => {
//   TempFElement.textContent = 'Hi';
// });
