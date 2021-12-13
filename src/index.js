const tempValue = document.getElementById('temp-value');
tempValue.className = 'special';
tempValue.textContent = 71;
const skyEmojis = document.querySelector('#sky-emoji');
const plantEmoji = document.querySelector('#plant-emoji');
const landBackground = document.querySelector('#emojis-container');
plantEmoji.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
skyEmojis.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
landBackground.className = 'sunny-color';
document.getElementById('city').value = 'Enter your city';
let initialTempValue = 71;

// create event handler

const changingTemps = (value) => {
  if (value >= 80) {
    tempValue.className = 'red';
    plantEmoji.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (value < 80 && value >= 70) {
    tempValue.className = 'orange';
    plantEmoji.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (value < 70 && value >= 60) {
    tempValue.className = 'yellow';
    plantEmoji.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (value < 60 && value >= 50) {
    tempValue.className = 'green';
    plantEmoji.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else {
    tempValue.className = 'teal';
    plantEmoji.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};

const increaseTemps = () => {
  initialTempValue += 1;
  tempValue.textContent = initialTempValue;
  changingTemps(initialTempValue);
};

const decreaseTemps = () => {
  initialTempValue -= 1;
  tempValue.textContent = initialTempValue;
  changingTemps(initialTempValue);
};

const changeSkyLandscape = (skyStatus) => {
  if (skyStatus === 'sunny') {
    skyEmojis.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    landBackground.className = 'sunny-color';
  } else if (skyStatus === 'cloudy') {
    skyEmojis.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    landBackground.className = 'cloudy-color';
  } else if (skyStatus === 'rainy') {
    skyEmojis.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    landBackground.className = 'rainy-color';
  } else if (skyStatus === 'snowy') {
    skyEmojis.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    landBackground.className = 'snowy-color';
  }
};

const changeToDefault = () => {
  document.getElementById('city').value = 'Enter your city';
};
const changeCityName = (changeCity) => {
  const city = document.querySelector('.dynamic');
  city.textContent = changeCity;
};
//this is registering the event handler
const registerHandlers = () => {
  const upArrow = document.getElementById('up-arrow');
  const downArrow = document.getElementById('down-arrow');
  upArrow.addEventListener('click', increaseTemps);
  downArrow.addEventListener('click', decreaseTemps);

  const selectElement = document.querySelector('#sky-options');
  selectElement.addEventListener('change', (event) => {
    changeSkyLandscape(event.target.value);
  });

  const cityName = document.getElementById('city');
  cityName.addEventListener('change', (event) => {
    changeCityName(event.target.value);
  });

  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', changeToDefault);
};

document.addEventListener('DOMContentLoaded', registerHandlers);
