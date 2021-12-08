const state = {
  temperature: {
    defaultTemp: 65,
    currentTemp: 65,
    tempRanges: {
      hottest: {
        upperBound: null,
        lowerBound: 80,
        landscape: '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂',
      },
      hot: {
        upperBound: 79,
        lowerBound: 70,
        landscape: '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷',
      },
      temperate: {
        upperBound: 69,
        lowerBound: 60,
        landscape: '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃',
      },
      chilly: {
        upperBound: 59,
        lowerBound: 50,
        landscape: '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲',
      },
      cold: {
        upperBound: 49,
        lowerBound: null,
        landscape: '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲',
      },
    },
  },
};

// parts to this problem
// 1. make each arrow into a button that increments or decrements the temperature
// a. up arrow increments temperature
// define the up arrow as a button
// set an event handler to listen for a click
// on click, update the state temperature and make sure the change is reflected in the HTML element
// b. down arrow decrements temperature
// 2. style the ground so that it corresponds to the temperature
// 3. style the number so that it corresponds to the temperature

const increaseTemp = () => {
  state.temperature.currentTemp++;
  console.log(state.temperature.currentTemp);
  setTempDisplay();
};

const decreaseTemp = () => {
  state.temperature.currentTemp--;
  console.log(state.temperature.currentTemp);
  setTempDisplay();
};

const setTempDisplay = () => {
  const tempDisplay = document.getElementById('temp-display');
  let currentTemp = state.temperature.currentTemp;
  tempDisplay.innerHTML = currentTemp;
  for (let climate in state.temperature.tempRanges) {
    const { upperBound, lowerBound } = state.temperature.tempRanges[climate];
    if (upperBound && lowerBound) {
      if (currentTemp >= lowerBound && currentTemp <= upperBound) {
        tempDisplay.className = climate;
      }
    } else if (!lowerBound && currentTemp <= upperBound) {
      tempDisplay.className = climate;
    } else if (!upperBound && currentTemp >= lowerBound) {
      tempDisplay.className = climate;
    }
  }
};

const registerEventHandlers = () => {
  const upArrow = document.getElementById('up-arrow');
  upArrow.addEventListener('click', increaseTemp);

  const downArrow = document.getElementById('down-arrow');
  downArrow.addEventListener('click', decreaseTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
