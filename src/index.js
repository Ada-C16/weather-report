let tempValue = 71;

const updateTemperature = (currentTemp) => {
  let tempValue = document.querySelector('#tempValue');
  tempValue.textContent = currentTemp + ` °F`;
  const landscapeContainer = document.getElementById('landscape');
  let landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  if (currentTemp >= 80) {
    tempValue.className = 'red';
    landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (currentTemp >= 70) {
    tempValue.className = 'orange';
    ('🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷');
  } else if (currentTemp >= 60) {
    tempValue.className = 'yellow';
    ('🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃');
  } else if (currentTemp >= 50) {
    tempValue.className = 'green';
  } else if (currentTemp >= 40) {
    tempValue.className = 'teal';
  }
  landscapeContainer.textContent = landscape;
};

const updateSky = () => {
  const inputSky = document.getElementById('skyInput').value;
  const skyContainer = document.getElementById('sky');
  let sky = '';
  let skyColor = '';
  if (inputSky === 'Cloudy') {
    sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    skyColor = 'cloudy';
  } else if (inputSky === 'Sunny') {
    sky = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️';
    skyColor = 'sunny';
  } else if (inputSky === 'Rainy') {
    sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    skyColor = 'rainy';
  } else if (inputSky === 'Snowy') {
    sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    skyColor = 'snowy';
  }
  skyContainer.textContent = sky;
  const landscapeContent = document.getElementById('landscapeContent');
  landscapeContent.classList = `weather_content ${skyColor}`;
};

const updateCityName = () => {
  const inputCityName = document.querySelector('#cityNameInput').value;
  const cityName = document.querySelector('#cityName');
  cityName.textContent = `✨` + inputCityName + `✨`;
};

const resetCityName = () => {
  const cityName = document.querySelector('#cityNameInput');
  cityName.value = 'Seattle';
  updateCityName();
};

const increaseTemp = () => {
  tempValue += 1;
  updateTemperature(tempValue);
};

const decreaseTemp = () => {
  tempValue -= 1;
  updateTemperature(tempValue);
};

const registerEventHandlers = () => {
  updateTemperature(tempValue);

  const tempIncrease = document.querySelector('#tempUp');
  tempIncrease.addEventListener('click', increaseTemp);

  const tempDecrease = document.querySelector('#tempDown');
  tempDecrease.addEventListener('click', decreaseTemp);

  const skyInput = document.querySelector('#skyInput');
  skyInput.addEventListener('change', updateSky);

  const cityNameInput = document.querySelector('#cityNameInput');
  cityNameInput.addEventListener('input', updateCityName);

  const cityNameReset = document.querySelector('#resetCityName');
  cityNameReset.addEventListener('click', resetCityName);

  const landscapeInput = document.querySelector('#landscape');
  landscapeInput.addEventListener;
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
