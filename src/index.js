// Wave 2 Increase & Decreasing Temp
const state = {
  tempCurrent: 60
};

const decreaseTemp = () => {
  const currentTempEl = document.getElementById("currentTemp");

  state.tempCurrent -= 1
  currentTempEl.textContent = `${state.tempCurrent}°F`;
};

const increaseTemp =  () => {
  const currentTempEl = document.getElementById("currentTemp");

  state.tempCurrent += 1
  currentTempEl.textContent = `${state.tempCurrent}°F`;
}

// Registering event handlers
const registerHandlers = () => {
  const decreaseButton = document.getElementById("decrease");
  decreaseButton.addEventListener("click", decreaseTemp);

  const increaseButton = document.getElementById("increase");
  increaseButton.addEventListener("click", increaseTemp);
};

document.addEventListener("DOMContentLoaded", registerHandlers);