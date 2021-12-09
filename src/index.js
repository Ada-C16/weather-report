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
        landscape: '🌲🌲⛄️🌲🍂🌲🍁🌲🌲⛄️🍂🌲',
      },
      cold: {
        upperBound: 49,
        lowerBound: null,
        landscape: '🌲🌲⛄️🌲🍂🌲🍁🌲🌲⛄️🍂🌲',
      },
    },
  },
  sky: {
    night: '✨✨✨🌙✨✨',
    sunny: '☁️ ☁️ ☁️ ☀️ ☁️ ☁️',
    cloudy: '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️',
    rainy: '🌧🌈⛈🌧💧⛈🌧🌦🌧💧🌧',
    snowy: '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨',
  },
  city: {
    defaultCity: 'Seattle',
    inputCity: '',
  },
};

const increaseTemp = () => {
  state.temperature.currentTemp++;
  setTempDisplay();
};

const decreaseTemp = () => {
  state.temperature.currentTemp--;
  setTempDisplay();
};

const resetTemp = () => {
  state.temperature.currentTemp = state.temperature.defaultTemp;
  setTempDisplay();
};

// set the class of the temperature so that it corresponds to the temperature
const setTempDisplay = () => {
  const tempDisplay = document.getElementById('temp-display');
  const landscapeDisplay = document.getElementById('ground');
  let currentTemp = state.temperature.currentTemp;

  tempDisplay.innerHTML = currentTemp;

  for (let climate in state.temperature.tempRanges) {
    const { upperBound, lowerBound, landscape } =
      state.temperature.tempRanges[climate];
    if (upperBound && lowerBound) {
      if (currentTemp >= lowerBound && currentTemp <= upperBound) {
        tempDisplay.className = climate;
        landscapeDisplay.innerHTML = landscape;
      }
    } else if (!lowerBound && currentTemp <= upperBound) {
      tempDisplay.className = climate;
      landscapeDisplay.innerHTML = landscape;
    } else if (!upperBound && currentTemp >= lowerBound) {
      tempDisplay.className = climate;
      landscapeDisplay.innerHTML = landscape;
    }
  }
};

const selectSky = (event) => {
  const weather = event.originalTarget.value;
  const sky = document.getElementById('sky');
  sky.innerHTML = state.sky[weather];
};

const resetSky = () => {
  const sky = document.getElementById('sky');
  sky.innerHTML = state.sky.night;
};

const resetCity = () => {
  const city = document.getElementById('city');
  city.innerHTML = state.city.defaultCity;
  const cityInput = document.getElementById('set-city');
  cityInput.value = state.city.defaultCity;
};

const updateCity = (event) => {
  const city = document.getElementById('city');
  state.city.inputCity = event.explicitOriginalTarget.value;
  city.innerText = state.city.inputCity;
};

const registerEventHandlers = () => {
  const upArrow = document.getElementById('up-arrow');
  upArrow.addEventListener('click', increaseTemp);

  const downArrow = document.getElementById('down-arrow');
  downArrow.addEventListener('click', decreaseTemp);

  const resetTempButton = document.getElementById('reset-temp');
  resetTempButton.addEventListener('click', resetTemp);

  const selectSkyDropdown = document.getElementById('select-sky');
  selectSkyDropdown.addEventListener('change', selectSky);

  const resetSkyButton = document.getElementById('reset-sky');
  resetSkyButton.addEventListener('click', resetSky);

  const resetCityButton = document.getElementById('reset-city');
  resetCityButton.addEventListener('click', resetCity);

  const cityInput = document.getElementById('set-city');
  cityInput.addEventListener('input', updateCity);

  resetSky();
  resetTemp();
  resetCity();
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

// wave 4
