let tempValue = 34;

// select sky -> local landscape functionality
const updateSky = () => {
  const inputSky = document.getElementById('skySelect').value;
  const skyContainer = document.getElementById('sky');
  let sky = '';
  let skyColor = '';
  if (inputSky === 'Stormy Weather') {
    sky = '☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️';
    skyColor = 'cloudy';
  } else if (inputSky === 'Walking on Sunshine') {
    sky = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️   ☁️   ☁️  ☁️     ☁️☁️☁️   ☁️☁️';
    skyColor = 'sunny';
  } else if (inputSky === 'Singing in the Rain') {
    sky = '💧🌧🌈🌈⛈🌧🌧💧⛈🌧🌦💧🌧🌧⛈💧🌧🌧⛈💧🌧🌧';
    skyColor = 'rainy';
  } else if (inputSky === 'Winter Wonderland') {
    sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨🌨❄️❄️🌨🌨🌨❄️❄️🌨';
    skyColor = 'snowy';
  }
  skyContainer.textContent = sky;
  const gardenContent = document.getElementById('gardenContent');
  gardenContent.classList = `garden__content ${skyColor}`;
};

// your city functionality
const updateCityName = () => {
  const inputName = document.getElementById('cityNameInput').value;
  const headerCityName = document.getElementById('headerCityName');
  headerCityName.textContent = inputName;
};

const resetCityName = () => {
  const cityNameInput = document.getElementById('cityNameInput');
  cityNameInput.value = 'Salt Lake City, UT';
  updateCityName();
};

// change color of temperature as values change
const updateTempStyles = (currentTemp) => {
  const tempValueContainer = document.getElementById('tempValue');
  let color = 'teal';
  if (currentTemp >= 80) {
    color = 'red';
  } else if (currentTemp >= 70) {
    color = 'orange';
  } else if (currentTemp >= 60) {
    color = 'yellow';
  } else if (currentTemp >= 50) {
    color = 'green';
  }
  tempValueContainer.classList = color;
};

// local garden emojis
const updateGarden = (currentTemp) => {
  const landscapeContainer = document.getElementById('landscape');
  let landscape = '🌲🌲🍁🌲🌲🍁🌲🌲🍁🌲🌲🍁🌲🌲🍁🌲🌲⛄️🌲🌲';
  if (currentTemp >= 80) {
    landscape = '🏜_🌵🌵__🐍_🦂_🌵🌵__🐍_🌵🌵_🦂🌵🌵__🌵';
  } else if (currentTemp >= 70) {
    landscape = '🌿🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷🌸🌿🌼_🌱🌷🌻🌿';
  } else if (currentTemp >= 60) {
    landscape = '🛤_🌾🌾_🍃_🪨___🌾🌾🌾_🍃___🌾🌾_🌾🌾_';
  }
  landscapeContainer.textContent = landscape;
};

// temperature functionality
const updateTemp = (tempValue) => {
  const tempValueContainer = document.getElementById('tempValue');
  tempValueContainer.textContent = tempValue;
  updateTempStyles(tempValue);
  updateGarden(tempValue);
};

const increaseTemp = () => {
  tempValue += 1;
  updateTemp(tempValue);
};

const decreaseTemp = () => {
  tempValue -= 1;
  updateTemp(tempValue);
};

// talk to the DOM
const registerEventHandlers = () => {
  updateTemp(tempValue);

  const increaseTempControl = document.getElementById('increaseTempControl');
  increaseTempControl.addEventListener('click', increaseTemp);

  const decreaseTempControl = document.getElementById('decreaseTempControl');
  decreaseTempControl.addEventListener('click', decreaseTemp);

  updateCityName();
  const cityNameInput = document.getElementById('cityNameInput');
  cityNameInput.addEventListener('input', updateCityName);

  const cityNameResetBtn = document.getElementById('cityNameReset');
  cityNameResetBtn.addEventListener('click', resetCityName);

  updateSky();
  const skySelect = document.getElementById('skySelect');
  skySelect.addEventListener('change', updateSky);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
