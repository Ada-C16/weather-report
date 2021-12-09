// city name
const updateCityName = () => {
  const cityNameInput = document.getElementById('cityNameInput').value;
  const headerCityName = document.getElementById('headerCityName');
  headerCityName.textContent = cityNameInput;
};

const resetCityName = () => {
  const cityNameInput = document.getElementById('cityNameInput');
  cityNameInput.value = 'Los Gatos';
  updateCityName();
};

// sky
const updateSky = () => {
  const skySelect = document.getElementById('skySelect').value;
  // sky -> choose picture
  const skyImg = document.getElementById('skyImg');
  let skyPic = '';
  let skyCol = '';
  if (skySelect === 'Cloudy') {
    skyPic = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    skyCol = 'cloudy';
  } else if (skySelect === 'Sunny') {
    skyPic = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️';
    skyCol = 'sunny';
  } else if (skySelect === 'Rainy') {
    skyPic = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    skyCol = 'rainy';
  } else if (skySelect === 'Snowy') {
    skyPic = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    skyCol = 'snowy';
  }
  skyImg.textContent = skyPic;

  // bg = skyCol
  const skyColor = document.getElementById('skyColor');
  skyColor.classList = skyCol;
};

// temperature
const state = {
  temp: 52,
};

const increaseTemp = () => {
  state.temp += 1;
  // I want to change temperature, so id="temperature"
  const increaseTemp = document.getElementById('temperature');
  increaseTemp.textContent = state.temp;
  // need update other function use this global variable here.
  updateTempCol(state.temp);
  updateGarden(state.temp);
};
const decreaseTemp = () => {
  state.temp -= 1;
  const decreaseTemp = document.getElementById('temperature');
  decreaseTemp.textContent = state.temp;
  updateTempCol(state.temp);
  updateGarden(state.temp);
};

// WHY console NOT update?
console.log(state.temp);

let cur = state.temp;
const updateTempCol = (cur) => {
  const temperature = document.getElementById('temperature');
  let col = '';
  if (cur >= 80) {
    col = 'red';
  } else if (cur >= 70) {
    col = 'orange';
  } else if (cur >= 60) {
    col = 'yellow';
  } else if (cur >= 50) {
    col = 'green';
  } else {
    col = 'teal';
  }
  // WHY use classList not textContent???
  temperature.classList = col;
};

const updateGarden = (cur) => {
  const garden = document.getElementById('garden');
  let plant = '';
  if (cur >= 80) {
    plant = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (cur >= 70) {
    plant = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (cur >= 60) {
    plant = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else {
    plant = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
  garden.textContent = plant;
};

// reflect on web
const registerEventHandlers = () => {
  // WHY register this one?
  // updateCityName();
  const cityNameInput = document.getElementById('cityNameInput');
  cityNameInput.addEventListener('input', updateCityName);

  const cityNameResetBtn = document.getElementById('cityNameResetBtn');
  cityNameResetBtn.addEventListener('click', resetCityName);

  // updateSky();
  const skySelect = document.getElementById('skySelect');
  skySelect.addEventListener('change', updateSky);

  // When I click button id="increaseTemp", I change increaseTemp
  const increaseTempBtn = document.getElementById('increaseTemp');
  increaseTempBtn.addEventListener('click', increaseTemp);

  const decreaseTempBtn = document.getElementById('decreaseTemp');
  decreaseTempBtn.addEventListener('click', decreaseTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
