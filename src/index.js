/*
Approach:
- 1. temperature
    - click event +/- 
      - change the number displayed and the color displayed 
      - change the garden ground
- 2. Sky option
    - drop down option
      - change the garden sky
- 3. City Name
    - input event
      - change the city name on the header
    - reset the city name
      -reset the city name on the header

*/
const state = {
  temperature: 70,
};

//  event handler
const increaseTempFunc = () => {
  state.temperature += 1;
  const curTemp = state.temperature;
  updateTempFunc(curTemp);
};

const decreaseTempFunc = () => {
  state.temperature -= 1;
  const curTemp = state.temperature;
  updateTempFunc(curTemp);
};

const updateTempFunc = (curTemp) => {
  const tempValContainer = document.getElementById('tempVal_id');
  tempValContainer.textContent = curTemp;
  updateTempColor(curTemp);
  updateGarden(curTemp);
};

const updateTempColor = (curTemp) => {
  const tempValueContainer = document.getElementById('tempVal_id');
  let color = undefined;
  if (curTemp >= 80) {
    color = 'red';
  } else if (curTemp >= 70) {
    color = 'orange';
  } else if (curTemp >= 60) {
    color = 'yellow';
  } else if (curTemp >= 50) {
    color = 'green';
  } else {
    color = 'teal';
  }
  tempValueContainer.classList = 'tempValue ' + color;
};

const updateGarden = (curTemp) => {
  const groundContainer = document.getElementById('garden_ground');
  let ground = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  if (curTemp >= 80) {
    ground = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (curTemp >= 70) {
    ground = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (curTemp >= 60) {
    ground = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  }
  groundContainer.textContent = ground;
};

const updateCityNameFunc = () => {
  const inputCityContainer = document.getElementById('city_name_input');
  const headerCityContainer = document.getElementById('header_cityName');
  headerCityContainer.textContent = inputCityContainer.value;
};

const resetCityNameFunc = () => {
  const headerCityContainer = document.getElementById('header_cityName');
  headerCityContainer.textContent = 'Oregon';
};

const updateSky = () => {
  const skyInputContainer = document.getElementById('sky_selection');

  const selectedSky = skyInputContainer.value;
  const gardenSkyContainer = document.getElementById('garden_sky');
  let sky = undefined;
  let skyColor = undefined;
  if (selectedSky === 'Sunny') {
    sky = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️';
    skyColor = 'sunny';
  } else if (selectedSky === 'Cloudy') {
    sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    skyColor = 'cloudy';
  } else if (selectedSky === 'Rainy') {
    sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    skyColor = 'rainy';
  } else {
    sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    skyColor = 'snowy';
  }
  gardenSkyContainer.textContent = sky;
  const gardenContentContainer = document.getElementById('garden_content');
  gardenContentContainer.classList = `garden__content ${skyColor}`;
};

const registerEventHandlers = () => {
  const increaseTempBtn = document.getElementById('increaseTemp');
  increaseTempBtn.addEventListener('click', increaseTempFunc);

  const decreaseTempBtn = document.getElementById('decreaseTemp');
  decreaseTempBtn.addEventListener('click', decreaseTempFunc);

  const updateCityName = document.getElementById('city_name_input');
  updateCityName.addEventListener('input', updateCityNameFunc);

  const resetCityName = document.getElementById('city_name_reset');
  resetCityName.addEventListener('click', resetCityNameFunc);

  const skySelect = document.getElementById('sky_selection');
  skySelect.addEventListener('change', updateSky);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
