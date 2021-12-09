// Add state
const state = {
  temp: 32,
};

// **********************************************
// Temperature Increase and Decrease Buttons
// **********************************************

// update state (raise temp) function
// Fahrenheit***
const updateTemp = () => {
  const tempElement = document.querySelector('#tempContainer');
  tempElement.textContent = `${state.temp}`;
  // colorLandscapeChange();
};

// Make a function to run when event occurs (behavior).
// Fahrenheit***
const increaseTemp = () => {
  const tempContainer = document.querySelector('#tempContainer');
  const tempSpan = document.createElement('span');
  tempContainer.appendChild(tempSpan);
  state.temp += 1;
  updateTemp();
};

const decreaseTemp = () => {
  const tempContainer = document.querySelector('#tempContainer');
  const tempSpan = document.createElement('span');
  tempContainer.appendChild(tempSpan);
  state.temp -= 1;
  updateTemp();
};

// **************************************************************
// Temperature Changing Number Text Color and Landscape Behavior
// **************************************************************

// const colorLandscapeChange = () => {
//   if (state.temp <= 40) {
//     color = #a4fbe3;
//   };
//   document.querySelector("#tempContainer").getElementsByClassName.color = color;
// };

// **********************************************
// Sky Selecting Behavior
// **********************************************

// **********************************************
// Registering the Event Handlers
// **********************************************

// Selecting the HTML element the event will occur on.
const registerEventHandlers = () => {
  const plusButton = document.querySelector('#plusButton');
  plusButton.addEventListener('click', increaseTemp);
  const minusButton = document.querySelector('#minusButton');
  minusButton.addEventListener('click', decreaseTemp);
};

// registers our event handlers in response to the event that fires when the DOM has loaded completely (DOMContentLoaded).
document.addEventListener('DOMContentLoaded', registerEventHandlers);

// can also pass in an annonymous function instead of a named on in the eventListener.
// tempElement.addEventListener('click', () => {
//   tempElement.textContent = 'Hi';
// });
