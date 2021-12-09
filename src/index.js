const tempNum = document.getElementById('tempNum');
tempNum.textContent = 90;

const resetCityName = () => {
  const resetButton = document.getElementById('inputCityName');
  resetButton.value = '';
};
const increaseTemp = () => {
  // sets tempNum as object, finds it using ElementById

  tempNum.textContent = parseInt(tempNum.textContent) + 1;
  changeTempBackground(tempNum.textContent);
};
const decreaseTemp = () => {
  // sets tempNum as object, finds it using ElementById
  // coverts tempNum.textContent (which is str) to an int and subtracts 1
  tempNum.textContent = parseInt(tempNum.textContent) - 1;
  changeTempBackground(tempNum.textContent);
};
const changeTempBackground = (tempNum) => {
  const changeColor = document.getElementById('tempAdjuster');
  let color = 'blue';
  if (tempNum >= 90) {
    color = 'red';
  } else if (tempNum >= 80) {
    color = 'orange';
  } else if (tempNum >= 70) {
    color = 'yellow';
  } else if (tempNum >= 60) {
    color = 'green';
  } else if (tempNum >= 40) {
    color = 'blue';
  }
  //property assignmnet
  changeColor.className = color;
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
  const emojiGarden = document.getElementById('emojiGarden');
  console.log(skySelect);
  if (skySelect === 'Cloudy with a chance of meatballs') {
    skyGarden.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️☁️☁️ ☁️ ☁️☁️';
    emojiGarden.textContent = '🍝🍝🥖🧀🍝🍝🍝🥖🧀🧀';
  } else if (skySelect === 'Sunny with a fall of fruit') {
    skyGarden.textContent = '☀️ ☀️☀️☀️ ☀️☀️☀️ ☀️☀️';
    emojiGarden.textContent = '🍒🍒🍏🍏 🥬🍒🍒🫐🫐🍊🍊🥬🥒🥒';
  } else if (skySelect === 'Raining cats and dogs') {
    skyGarden.textContent = '🌧⚡️⛈🌧🌧💧⛈🌧⚡️🌧💧🌧🌧';
    emojiGarden.textContent = '🐱🐱🐈‍⬛🐱🐶🐈🐈‍⬛🐕🐶🐶🐕‍🦺🐱🐶🐈🐈';
  } else if (skySelect === 'Snowy with a spread of sweets') {
    skyGarden.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    emojiGarden.textContent = '🥮🍰🍰🍡🍪🍭🧁🥮🧁🧁🍭🍰🍡🍪🍪';
  }
};

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
