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

// **********************************************
// Sky Selecting Behavior
// **********************************************

const skyChange = () => {
  let presentSky = document.querySelector('#skyOption');
  state.sky = presentSky.value;
  if (state.sky == 'Cloudy') {
    document.querySelector('#sky').style.backgroundImage =
      "url('images/cloudy.png')";
  } else if (state.sky == 'Rainy') {
    document.querySelector('#sky').style.backgroundImage =
      "url('images/rainy.png')";
  } else if (state.sky == 'Sunny') {
    document.querySelector('#sky').style.backgroundImage =
      "url('images/sunny.png')";
  } else {
    document.querySelector('#sky').style.backgroundImage =
      "url('images/snowy.png')";
  }
};

// **********************************************
// Input City Name and Reset City Name
// **********************************************

const inputCityName = () => {
  let city = document.querySelector('#inputCity');
  state.city = city.value;
  let displayCityInput = document.querySelector('#displayCityInput');
  displayCityInput.textContent = `${state.city}`;
};

const resetCityName = () => {
  document.querySelector('#inputCity');
  state.city = 'City Name';
  document.querySelector('#displayCityInput').textContent = `${state.city}`;
};

// **********************************************
// Optional Enhancements
// **********************************************
// TODO: work on the optional enhancements and deploy to github.

// Convert F to C and C to F
const cToF = (celsius) => {
  const cTemp = celsius;
  const fTemp = (cTemp * 9) / 5 + 32;
  return fTemp;
};

const fToC = (fahrenheit) => {
  const fTemp = fahrenheit;
  const cTemp = ((fTemp - 32) * 5) / 9;
  return cTemp;
};

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

  const skyOption = document.querySelector('#skyOption');
  skyOption.addEventListener('change', skyChange);

  const cityDisplay = document.querySelector('#inputCity');
  cityDisplay.addEventListener('input', inputCityName);

  const resetButton = document.querySelector('#resetButton');
  resetButton.addEventListener('click', resetCityName);
}

// registers our event handlers in response to the event that fires when the DOM has loaded completely (DOMContentLoaded).
document.addEventListener('DOMContentLoaded', registerEventHandlers);
