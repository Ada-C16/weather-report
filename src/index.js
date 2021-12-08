// ========= CHANGE TEMP =========

const state = {
  temp: 32,
};

const increaseTemp = (event) => {
  state.temp += 1;
  const tempDisplayed = document.querySelector('#temp-value');
  tempDisplayed.textContent = state.temp;
  if (state.temp > 50) {
    tempDisplayed.style.color = 'red';
  } else if (state.temp < 40) {
    tempDisplayed.style.color = 'blue';
  }
};

const decreaseTemp = (event) => {
  state.temp -= 1;
  const tempDisplayed = document.querySelector('#temp-value');
  tempDisplayed.textContent = state.temp;
  if (state.temp > 50) {
    tempDisplayed.style.color = 'red';
  } else if (state.temp < 40) {
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

// const resetCity = (event) => {
//   const inputChangeCity = document.getElementById('#cityName');
//   changeCity.value = 'Denver';
// };

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

document.addEventListener('DOMContentLoaded', registerEventHandlers);
