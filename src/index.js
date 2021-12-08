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

const registerEventHandlers = (event) => {
  const warmerButton = document.querySelector('#warmer-button');
  warmerButton.addEventListener('click', increaseTemp);

  const coolerButton = document.querySelector('#cooler-button');
  coolerButton.addEventListener('click', decreaseTemp);
};

// ========= CHANGE CITY =========

const changeCity = document.getElementById('#cityName');

const clearCity = (event) => {
  const changeCity = document.getElementById('#cityName');
  changeCity.value = 'Denver';
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
