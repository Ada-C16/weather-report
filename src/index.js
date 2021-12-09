const tempNum = document.getElementById('tempNum');
tempNum.textContent = 90;

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
};

document.addEventListener('DOMContentLoaded', registerEvents);
