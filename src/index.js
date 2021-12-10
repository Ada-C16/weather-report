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
  tempElement.textContent = `${state.temp}°F`;
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

// **********************************************
// Temperature Changing Number Text Color
// **********************************************

const colorChange = () => {
  if (state.temp > 79) {
    document.querySelector('#tempContainer').style.color = '#dd0a35';
  } else if (state.temp > 69) {
    document.querySelector('#tempContainer').style.color = '#f87d42';
  } else if (state.temp > 59) {
    document.querySelector('#tempContainer').style.color = '#ffce3e';
  } else if (state.temp > 49) {
    document.querySelector('#tempContainer').style.color = '#b9e937';
  } else {
    document.querySelector('#tempContainer').style.color = '#bae8e8';
  }
};

// **********************************************
// Temperature Changing Landscape
// **********************************************

const landscapeChange = () => {
  if (state.temp > 79) {
    document.querySelector('#landscape').style.backgroundImage =
      "url('images/summer.png')";
  } else if (state.temp > 69) {
    document.querySelector('#landscape').style.backgroundImage =
      "url('images/spring.png')";
  } else if (state.temp > 59) {
    document.querySelector('#landscape').style.backgroundImage =
      "url('images/autumn.png')";
  } else {
    document.querySelector('#landscape').style.backgroundImage =
      "url('images/winter.png')";
  }
};

{
  /* <a href='https://dryicons.com/free-icons/seasons'> Icon by Dryicons </a> */
}

// **********************************************
// Sky Selecting Behavior
// **********************************************

// **********************************************
// Registering the Event Handlers
// **********************************************

// Selecting the HTML element the event will occur on.
function registerEventHandlers() {
  const plusButton = document.querySelector('#plusButton');
  plusButton.addEventListener('click', increaseTemp);
  const minusButton = document.querySelector('#minusButton');
  minusButton.addEventListener('click', decreaseTemp);

  plusButton.addEventListener('click', colorChange);
  minusButton.addEventListener('click', colorChange);

  plusButton.addEventListener('click', landscapeChange);
  minusButton.addEventListener('click', landscapeChange);
}

// registers our event handlers in response to the event that fires when the DOM has loaded completely (DOMContentLoaded).
document.addEventListener('DOMContentLoaded', registerEventHandlers);

// can also pass in an annonymous function instead of a named on in the eventListener.
// tempElement.addEventListener('click', () => {
//   tempElement.textContent = 'Hi';
// });
