// WAVE 2
// an element that displays the temperature
// one clickable element to increase temperature
// one clickable element to decrease temperature
// An element that displays a landscape

// OPTIONAL ENHANCEMENTS-- button to switch between celsius and fahrenheit

// separate function to set text color and landscape
// Make check for class name equal to celsius or fahranheit

// Grabbing my html elements
const state = {
  temp: 70,
};

const increaseTemp = document.getElementById('increase-temp');
const decreaseTemp = document.getElementById('decrease-temp');
const convertTemp = document.getElementById('convert-temp');
const garden = document.getElementById('garden');

const updateByTemp = (newTemp) => {
  if (newTemp >= 80) {
    temp.style.color = '#EA0009';
    garden.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (70 <= newTemp) {
    temp.style.color = '#F0940A';
    garden.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (60 <= newTemp) {
    temp.style.color = '#F4D10A';
    garden.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (50 <= newTemp) {
    temp.style.color = '#1F7001';
    garden.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (newTemp <= 49) {
    temp.style.color = '#256D6C';
    garden.textContent = '🌲🌲⛄️🌲⛄️🌲☃❄🌲🌲⛄️❄️🌲';
  }
};

const updateTemp = () => {
  const tempElement = document.getElementById('temp');
  tempElement.textContent = `${state.temp}`;
};

const incrementTemp = () => {
  state.temp += 1;
  updateTemp();
  updateByTemp(state.temp);
};

const decrementTemp = () => {
  state.temp -= 1;
  updateTemp();
  updateByTemp(state.temp);
};

increaseTemp.addEventListener('click', incrementTemp);
decreaseTemp.addEventListener('click', decrementTemp);

// WAVE 3
// dropdown menu to set the sky type
// an element that displays the sky

// grabbing html elements

const sky = document.getElementById('sky');
const skySelect = document.getElementById('sky-menu');

const updateSky = () => {
  if (skySelect.value === 'Sunny') {
    sky.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (skySelect.value === 'Cloudy') {
    sky.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (skySelect.value === 'Rainy') {
    sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
  } else if (skySelect.value === 'Snowy') {
    sky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  };
};

skySelect.addEventListener('change', updateSky);

// WAVE 4
// an element that displays the city name
// an element that lets you change city name

const city = document.getElementById("city-name");
const cityInput = document.getElementById("city-input");


const changeCity = () => {
  city.textContent = cityInput.value;
};

cityInput.addEventListener('keyup', changeCity);

// WAVE 5
// reset button to put city name back to default

const resetButton = document.getElementById("reset-city");

const resetCity = () => {
  city.textContent = "Seattle"
};

resetButton.addEventListener('click', resetCity);
