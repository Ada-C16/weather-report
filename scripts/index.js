tempValue = document.querySelector('#tempvalue');
temp = 72;
tempValue.textContent = `${temp}`;

const weatherTypes = ['☀️', '🌤', '🌥', '🌧', '🌨'];
weatherDisplay = document.querySelector('#weatherdisplay');
weatherDisplay.textContent = `${weatherTypes[0]}`;

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
let citySelected = 0;
let tempMemory = [72, 72, 72];
let weatherMemory = ['☀️', '☀️', '☀️'];

const envSkyAll = [
  document.querySelector('#cityonesky'),
  document.querySelector('#citytwosky'),
  document.querySelector('#citythreesky'),
];

const envAnimalsAll = [
  document.querySelector('#cityoneanimals'),
  document.querySelector('#citytwoanimals'),
  document.querySelector('#citythreeanimals'),
];

const envWeatherAll = [
  document.querySelector('#cityoneweather'),
  document.querySelector('#citytwoweather'),
  document.querySelector('#citythreeweather'),
];

const envPlantsAll = [
  document.querySelector('#cityoneplants'),
  document.querySelector('#citytwoplants'),
  document.querySelector('#citythreeplants'),
];

const oneReset = function () {
  tempMemory[citySelected] = document.querySelector('#tempvalue').textContent;
  weatherMemory[citySelected] =
    document.querySelector('#weatherdisplay').textContent;
  citySelected = 0;
  tempMemory[0] = 72;
  weatherMemory[0] = '☀️';

  envSkyAll[citySelected].textContent = `${sky[0]}`;
  envWeatherAll[citySelected].textContent = `${weather[0]}`;
  envPlantsAll[citySelected].textContent = `${plants[0]}`;
  envAnimalsAll[citySelected].textContent = `${animals[0]}`;
  document.querySelector('#tempvalue').textContent = String(
    tempMemory[citySelected]
  );
  document.querySelector('#weatherdisplay').textContent =
    weatherMemory[citySelected];
  currentCity.textContent = cityAll[citySelected].value;
};
const twoReset = function () {
  tempMemory[citySelected] = document.querySelector('#tempvalue').textContent;
  weatherMemory[citySelected] =
    document.querySelector('#weatherdisplay').textContent;
  citySelected = 1;
  tempMemory[1] = 72;
  weatherMemory[1] = '☀️';
  envSkyAll[citySelected].textContent = `${sky[0]}`;
  envWeatherAll[citySelected].textContent = `${weather[0]}`;
  envPlantsAll[citySelected].textContent = `${plants[0]}`;
  envAnimalsAll[citySelected].textContent = `${animals[0]}`;
  document.querySelector('#tempvalue').textContent = String(
    tempMemory[citySelected]
  );
  document.querySelector('#weatherdisplay').textContent =
    weatherMemory[citySelected];
  currentCity.textContent = cityAll[citySelected].value;
};
const threeReset = function () {
  tempMemory[citySelected] = document.querySelector('#tempvalue').textContent;
  weatherMemory[citySelected] =
    document.querySelector('#weatherdisplay').textContent;
  citySelected = 2;
  tempMemory[2] = 72;
  weatherMemory[2] = '☀️';
  envSkyAll[citySelected].textContent = `${sky[0]}`;
  envWeatherAll[citySelected].textContent = `${weather[0]}`;
  envPlantsAll[citySelected].textContent = `${plants[0]}`;
  envAnimalsAll[citySelected].textContent = `${animals[0]}`;
  document.querySelector('#tempvalue').textContent = String(
    tempMemory[citySelected]
  );
  document.querySelector('#weatherdisplay').textContent =
    weatherMemory[citySelected];
  currentCity.textContent = cityAll[citySelected].value;
};

const cityAll = [
  document.querySelector('#cityonename'),
  document.querySelector('#citytwoname'),
  document.querySelector('#citythreename'),
];
cityAll[0].value = 'Maple';
cityAll[1].value = 'Spruce';
cityAll[2].value = 'Pine';

const cityNameOneReset = function () {
  document.querySelector('#cityonename').value = 'Maple';
};
const cityNameTwoReset = function () {
  document.querySelector('#citytwoname').value = 'Spruce';
};
const cityNameThreeReset = function () {
  document.querySelector('#citythreename').value = 'Pine';
};

const currentCity = document.querySelector('#currentcity');
currentCity.textContent = cityAll[0].value;

envSkyAll[0].textContent = `${sky[0]}`;
envSkyAll[1].textContent = `${sky[0]}`;
envSkyAll[2].textContent = `${sky[0]}`;

envWeatherAll[0].textContent = `${weather[0]}`;
envWeatherAll[1].textContent = `${weather[0]}`;
envWeatherAll[2].textContent = `${weather[0]}`;

envAnimalsAll[0].textContent = `${animals[0]}`;
envAnimalsAll[1].textContent = `${animals[0]}`;
envAnimalsAll[2].textContent = `${animals[0]}`;

envPlantsAll[0].textContent = `${plants[0]}`;
envPlantsAll[1].textContent = `${plants[0]}`;
envPlantsAll[2].textContent = `${plants[0]}`;

//Weather functions

const weatherForward = function () {
  weatherValue = document.querySelector('#weatherdisplay');
  let weathernum = weatherTypes.indexOf(weatherValue.textContent);
  if (weathernum + 1 < weatherTypes.length) {
    weatherValue.textContent = `${weatherTypes[weathernum + 1]}`;
    envSkyAll[citySelected].textContent = `${sky[weathernum + 1]}`;
    envWeatherAll[citySelected].textContent = `${weather[weathernum + 1]}`;
    // envOneAnimals.textContent = `${animals[weathernum + 1]}`;
    // envOnePlants.textContent = `${plants[weathernum + 1]}`;
  } else {
    weatherValue.textContent = `${weatherTypes[0]}`;
    envSkyAll[citySelected].textContent = `${sky[0]}`;
    envWeatherAll[citySelected].textContent = `${weather[0]}`;
    // envOneAnimals.textContent = `${animals[0]}`;
    // envOnePlants.textContent = `${plants[0]}`;
  }
};
const weatherBack = function () {
  weatherValue = document.querySelector('#weatherdisplay');
  let weathernum = weatherTypes.indexOf(weatherValue.textContent);
  if (weathernum > 0) {
    weatherValue.textContent = `${weatherTypes[weathernum - 1]}`;
    envSkyAll[citySelected].textContent = `${sky[weathernum - 1]}`;
    envWeatherAll[citySelected].textContent = `${weather[weathernum - 1]}`;
    // envOneAnimals.textContent = `${animals[weathernum - 1]}`;
    // envOnePlants.textContent = `${plants[weathernum - 1]}`;
  } else {
    weatherValue.textContent = `${weatherTypes[weatherTypes.length - 1]}`;
    envSkyAll[citySelected].textContent = `${sky[weatherTypes.length - 1]}`;
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
    envAnimalsAll[citySelected].textContent = `${
      animals[4 - Math.floor(temp / 20)]
    }`;
    envPlantssAll[citySelected].textContent = `${
      plants[4 - Math.floor(temp / 20)]
    }`;
  }
};
const tempDecrease = () => {
  tempValue = document.querySelector('#tempvalue');
  let temp = Number(tempValue.textContent);
  temp -= 1;
  tempValue.textContent = `${temp}`;
  if (0 < temp && temp < 100) {
    envAnimalsAll[citySelected].textContent = `${
      animals[4 - Math.floor(temp / 20)]
    }`;
    envPlantsAll[citySelected].textContent = `${
      plants[4 - Math.floor(temp / 20)]
    }`;
  }
};

// City Functions

// var cityOne = document.querySelector('#cityonename');
// cityOne.textContent = 'Maple';

// var cityTwo = document.querySelector('#citytwoname');
// cityTwo.textContent = 'Spruce';

// var cityThree = document.querySelector('#citythreename');
// cityThree.textContent = 'Pine';

const selectOne = () => {
  tempMemory[citySelected] = document.querySelector('#tempvalue').textContent;
  weatherMemory[citySelected] =
    document.querySelector('#weatherdisplay').textContent;
  citySelected = 0;
  document.querySelector('#tempvalue').textContent = String(
    tempMemory[citySelected]
  );
  document.querySelector('#weatherdisplay').textContent =
    weatherMemory[citySelected];
  currentCity.textContent = cityAll[citySelected].value;
};
const selectTwo = () => {
  tempMemory[citySelected] = document.querySelector('#tempvalue').textContent;
  weatherMemory[citySelected] =
    document.querySelector('#weatherdisplay').textContent;
  citySelected = 1;
  document.querySelector('#tempvalue').textContent = String(
    tempMemory[citySelected]
  );
  document.querySelector('#weatherdisplay').textContent =
    weatherMemory[citySelected];
  currentCity.textContent = cityAll[citySelected].value;
};
const selectThree = () => {
  tempMemory[citySelected] = document.querySelector('#tempvalue').textContent;
  weatherMemory[citySelected] =
    document.querySelector('#weatherdisplay').textContent;
  citySelected = 2;
  document.querySelector('#tempvalue').textContent = String(
    tempMemory[citySelected]
  );
  document.querySelector('#weatherdisplay').textContent =
    weatherMemory[citySelected];
  currentCity.textContent = cityAll[citySelected].value;
};

// var envOneSky = document.querySelector('#cityonesky');
// envOneSky.textContent = `${sky[0]}`;
// var envOneWeather = document.querySelector('#cityoneweather');
// envOneWeather.textContent = `${weather[0]}`;
// var envOneAnimals = document.querySelector('#cityoneanimals');
// envOneAnimals.textContent = `${animals[0]}`;
// var envOnePlants = document.querySelector('#cityoneplants');
// envOnePlants.textContent = `${plants[0]}`;

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
  selectCityOne.addEventListener('click', selectOne);
  const selectCityTwo = document.querySelector('#citytwo');
  selectCityTwo.addEventListener('click', selectTwo);
  const selectCityThree = document.querySelector('#citythree');
  selectCityThree.addEventListener('click', selectThree);
  const MapleReset = document.querySelector('#cityoneresetname');
  MapleReset.addEventListener('click', cityNameOneReset);
  const SpruceReset = document.querySelector('#citytworesetname');
  SpruceReset.addEventListener('click', cityNameTwoReset);
  const PineReset = document.querySelector('#citythreeresetname');
  PineReset.addEventListener('click', cityNameThreeReset);
  const OneReset = document.querySelector('#cityoneresetenvironment');
  OneReset.addEventListener('click', oneReset);
  const TwoReset = document.querySelector('#citytworesetenvironment');
  TwoReset.addEventListener('click', twoReset);
  const ThreeReset = document.querySelector('#citythreeresetenvironment');
  ThreeReset.addEventListener('click', threeReset);
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
