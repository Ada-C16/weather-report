const tempNum = document.getElementById('tempNum');
tempNum.textContent = 90;

const resetCityName = () => {
  const resetButton = document.getElementById('inputCityName');
  resetButton.value = '';
};
const increaseTemp = () => {
  // sets tempNum as object, finds it using ElementById

  tempNum.textContent = parseInt(tempNum.textContent) + 1;
};
const decreaseTemp = () => {
  // sets tempNum as object, finds it using ElementById
  // coverts tempNum.textContent (which is str) to an int and subtracts 1
  tempNum.textContent = parseInt(tempNum.textContent) - 1;
};

const acceptInput = () => {
  const userInput = document.getElementById('inputCityName');
  const nameToChange = document.getElementById('headerCityName');
  // reassigning nameToChange to userInput.value
  nameToChange.textContent = userInput.value;
};
const changeTheSky = () => {
  const skySelect = document.getElementById('skySelect').value;
  const skyGarden = document.getElementById('skyGarden');
  console.log(skySelect);
  if (skySelect === 'Cloudy with a chance of meatballs') {
    skyGarden.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️☁️☁️ ☁️ ☁️☁️';
  } else if (skySelect === 'Sunny with a fall of fruit') {
    skyGarden.textContent = '☀️ ☀️☀️☀️ ☀️☀️☀️ ☀️☀️';
  } else if (skySelect === 'Raining cats and dogs') {
    skyGarden.textContent = '🌧⚡️⛈🌧🌧💧⛈🌧⚡️🌧💧🌧🌧';
  } else if (skySelect === 'Snowy with a slough of sweets') {
    skyGarden.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
};
console.log();
const registerEvents = () => {
  //sets arrowUp as an object
  const arrowUp = document.getElementById('arrowUp');
  //use addEventListener attribute of arrowUp object
  //specify that event type is 'click', then call function to increase tempNum by +1
  //build this function at top of file, then call function within registerEvents
  arrowUp.addEventListener('click', increaseTemp);
  // repeat the same process for arrowDown to decreaseTemp
  const arrowDown = document.getElementById('arrowDown');
  arrowDown.addEventListener('click', decreaseTemp);
  const inputCityName = document.getElementById('inputCityName');
  inputCityName.addEventListener('input', acceptInput);
  const resetButton = document.getElementById('Reset');
  resetButton.addEventListener('click', resetCityName);
  const changeSky = document.getElementById('skySelect');
  changeSky.addEventListener('change', changeTheSky);
};

document.addEventListener('DOMContentLoaded', registerEvents);
