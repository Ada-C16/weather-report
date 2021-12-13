tempValue = document.querySelector('#tempvalue');
temp = 72;
tempValue.textContent = `${temp}`;

const weatherTypes = ['☀️', '🌤', '🌥', '🌧', '🌨'];
weatherDisplay = document.querySelector('#weatherdisplay');
weatherDisplay.textContent = `${weatherTypes[0]}`;

//Weather functions
const weatherForward = function () {
  weatherValue = document.querySelector('#weatherdisplay');
  let weathernum = weatherTypes.indexOf(weatherValue.textContent);
  if (weathernum + 1 < weatherTypes.length) {
    weatherValue.textContent = `${weatherTypes[weathernum + 1]}`;
    envOneSky.textContent = `${sky[weathernum + 1]}`;
    envOneWeather.textContent = `${weather[weathernum + 1]}`;
    // envOneAnimals.textContent = `${animals[weathernum + 1]}`;
    // envOnePlants.textContent = `${plants[weathernum + 1]}`;
  } else {
    weatherValue.textContent = `${weatherTypes[0]}`;
    envOneSky.textContent = `${sky[0]}`;
    envOneWeather.textContent = `${weather[0]}`;
    // envOneAnimals.textContent = `${animals[0]}`;
    // envOnePlants.textContent = `${plants[0]}`;
  }
};
const weatherBack = function () {
  weatherValue = document.querySelector('#weatherdisplay');
  let weathernum = weatherTypes.indexOf(weatherValue.textContent);
  if (weathernum > 0) {
    weatherValue.textContent = `${weatherTypes[weathernum - 1]}`;
    envOneSky.textContent = `${sky[weathernum - 1]}`;
    envOneWeather.textContent = `${weather[weathernum - 1]}`;
    // envOneAnimals.textContent = `${animals[weathernum - 1]}`;
    // envOnePlants.textContent = `${plants[weathernum - 1]}`;
  } else {
    weatherValue.textContent = `${weatherTypes[weatherTypes.length - 1]}`;
    envOneSky.textContent = `${sky[weatherTypes.length - 1]}`;
    // envOneAnimals.textContent = `${animals[weatherTypes.length - 1]}`;
    // envOnePlants.textContent = `${plants[weatherTypes.length - 1]}`;
  }
};

//Temp functions
const tempIncrease = function () {
  tempValue = document.querySelector('#tempvalue');
  let temp = Number(tempValue.textContent);
  temp += 1;
  tempValue.textContent = `${temp}`;
  if (0 < temp && temp < 100) {
    envOneAnimals.textContent = `${animals[4 - Math.floor(temp / 20)]}`;
  }
};
const tempDecrease = () => {
  tempValue = document.querySelector('#tempvalue');
  let temp = Number(tempValue.textContent);
  temp -= 1;
  tempValue.textContent = `${temp}`;
  if (0 < temp && temp < 100) {
    envOneAnimals.textContent = `${animals[4 - Math.floor(temp / 20)]}`;
  }
};

// City Functions
var cityOne = document.querySelector('#cityonename');
cityOne.textContent = 'Maple';

var cityTwo = document.querySelector('#citytwoname');
cityTwo.textContent = 'Spruce';

var cityThree = document.querySelector('#citythreename');
cityThree.textContent = 'Pine';

const sky = ['    ☀️', '🌤 ☁️ ☁️', '🌥☁️☁️☁️☁️', '🌧🌧🌧🌧🌧', '🌨 🌨 🌨'];
const weather = ['🌈    ', '☁️   ☁️', '☁️ ☁️ ☁️', '💧🌧💧🌧💧', '❄︎ ❆ ❆ ❄︎'];
const animals = ['🦋  🐝', '🐿  🐁', '🐢  🦃 🐌', '🦞  🦭 🦎', '🐇  🦌 🐉'];
const plants = [
  '🌵 🌼 🌵',
  '🌷 🌱 🌺',
  '🌾  🍃  🌿',
  '🌲  🍂   🌲',
  '🪵  🐾  ⛄️',
];
let citySelected = 1;
const selecOne = () => {
  citySelected = 1;
};
const selectTwo = () => {
  citySelected = 1;
};
const selecThree = () => {
  citySelected = 1;
};

var envOneSky = document.querySelector('#cityonesky');
envOneSky.textContent = `${sky[0]}`;
var envOneWeather = document.querySelector('#cityoneweather');
envOneWeather.textContent = `${weather[0]}`;
var envOneAnimals = document.querySelector('#cityoneanimals');
envOneAnimals.textContent = `${animals[0]}`;
var envOnePlants = document.querySelector('#cityoneplants');
envOnePlants.textContent = `${plants[0]}`;

// const weatherBack = function () {
//   weatherValue = document.querySelector('#weatherdisplay');
//   let weather = weatherTypes.indexOf(weatherValue.textContent);
//   if (weather > 0) {
//     envOne.textContent = `${sky[weather - 1]}`;
//   } else {
//     weatherValue.textContent = `${weatherTypes[weatherTypes.length - 1]}`;
//   }
// };

// Register Events
const registerEventHandlers = () => {
  const tempUpButton = document.querySelector('#tempincrease');
  tempUpButton.addEventListener('click', tempIncrease);
  const tempDownButton = document.querySelector('#tempdecrease');
  tempDownButton.addEventListener('click', tempDecrease);
  const weatherForwardButton = document.querySelector('#weatherright');
  weatherForwardButton.addEventListener('click', weatherForward);
  const weatherBackButton = document.querySelector('#weatherleft');
  weatherBackButton.addEventListener('click', weatherBack);
  const selectCityOne = document.querySelector('#cityone');
  selectCityOne.addEventListener('mouseover', selectOne);
  const selectCityTwo = document.querySelector('#citytwo');
  selectCityTwo.addEventListener('mouseover', selectTwo);
  const selectCityThree = document.querySelector('#citythree');
  selectCityThree.addEventListener('mouseover', selectThree);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

// const addParrot = () => {
//   const newParrot = document.createElement('span');
//   const parrotContainer = document.querySelector('#parrotContainer');
//   newParrot.textContent = '🦜';
//   parrotContainer.appendChild(newParrot);
// };

// const registerEventHandlers = () => {
//   const parrotButton = document.querySelector('#addParrotButton');
//   parrotButton.addEventListener('mousemove', addParrot);
// };
