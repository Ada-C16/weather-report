// ========= CHANGE TEMP =========

const state = {
  temp: 42,
};

const increaseTemp = (event) => {
  state.temp += 1;
  const tempDisplayed = document.querySelector('#temp-value');
  tempDisplayed.textContent = state.temp;
  if (state.temp >= 80) {
    tempDisplayed.style.color = 'red';
  } else if (state.temp >= 70) {
    tempDisplayed.style.color = 'pink';
  } else if (state.temp >= 60) {
    tempDisplayed.style.color = 'orange';
  } else if (state.temp >= 50) {
    tempDisplayed.style.color = 'green';
  } else if (state.temp <= 49) {
    tempDisplayed.style.color = 'blue';
  }
};

const decreaseTemp = (event) => {
  state.temp -= 1;
  const tempDisplayed = document.querySelector('#temp-value');
  tempDisplayed.textContent = state.temp;
  if (state.temp >= 80) {
    tempDisplayed.style.color = 'red';
  } else if (state.temp >= 70) {
    tempDisplayed.style.color = 'pink';
  } else if (state.temp >= 60) {
    tempDisplayed.style.color = 'orange';
  } else if (state.temp >= 50) {
    tempDisplayed.style.color = 'green';
  } else if (state.temp <= 49) {
    tempDisplayed.style.color = 'blue';
  }
};

// ========= CHANGE CITY =========

// const changeCity = document.getElementById('#cityName');

const changeCityName = (event) => {
  const inputNewCity = document.querySelector('#cityNameInputField').value;
  const cityDisplayed = document.querySelector('#header-City-Name');
  cityDisplayed.textContent = inputNewCity;
};

// const clearCity = (event) => {
//   const inputChangeCity = document.getElementById('#cityName');
//   changeCity.value = '';
// };

// this function resets the field to Denver
const resetCity = (event) => {
  const inputNewCity = document.querySelector('#cityNameInputField').value;
  inputNewCity.value = 'Denver';
};

// ========= REGISER EH =========

const registerEventHandlers = (event) => {
  const warmerButton = document.querySelector('#warmer-button');
  warmerButton.addEventListener('click', increaseTemp);

  const coolerButton = document.querySelector('#cooler-button');
  coolerButton.addEventListener('click', decreaseTemp);

  changeCityName();
  const userChangesCity = document.querySelector('#cityNameInputField');
  userChangesCity.addEventListener('input', changeCityName);
};
const resetCityButton = document.querySelector('#reset-city-button');

document.addEventListener('DOMContentLoaded', registerEventHandlers);
