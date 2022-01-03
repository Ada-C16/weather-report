// // Event handling
// const addCrab = () => {
//   const newCrab = document.createElement("span");
//   const crabContainer = document.querySelector("#crabContainer");
//   newCrab.textContent = "🦀";
//   crabContainer.appendChild(newCrab);
// };

// // Registering event handler
// const registerEventHandlers = () => {
//   const crabButton = document.querySelector("#addCrabButton");
//   crabButton.addEventListener("click", addCrab);
// };

// document.addEventListener("DOMContentLoaded", registerEventHandlers);

// Event handing
const state = {
  currentTemp: 75,
};

const temp = document.getElementById('temp');
temp.textContent = state.currentTemp;
console.log('index.js is connected');

const incTemp = () => {
  const temp = document.getElementById('temp');
  state.currentTemp += 1;
  temp.textContent = state.currentTemp;
};

// Registering event handler
const registerEventHandlers = () => {
  const incTempButton = document.getElementById('incTemp');
  incTempButton.addEventListener('click', incTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
