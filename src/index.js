const currentTempCounter = {
  temp: 72,
};

// Event handler for increasing temperature
const increaseTemp = (event) => {
  const currentTempEl = document.getElementById('current-temp');
  currentTempCounter.temp += 1;
  currentTempEl.textContent = currentTempCounter.temp;
};

// Event handler for decreasing temperature
const decreaseTemp = (event) => {
  const currentTempEl = document.getElementById('current-temp');
  currentTempCounter.temp -= 1;
  currentTempEl.textContent = currentTempCounter.temp;
};

const registerHandlers = (event) => {
  const increaseTempEl = document.getElementById('increase-temp');
  const decreaseTempEl = document.getElementById('decrease-temp');
  increaseTempEl.addEventListener('click', increaseTemp);
  decreaseTempEl.addEventListener('click', decreaseTemp);
};

document.addEventListener('DOMContentLoaded', registerHandlers);
