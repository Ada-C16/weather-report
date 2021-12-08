// Wave 2 Increase & Decreasing Temp
const state = {
  tempCurrent: 60
};

// Combine decreaseTemp and increaseTemp into one function during refactor
const decreaseTemp = () => {
  const currentTempEl = document.getElementById("currentTemp");

  state.tempCurrent -= 1
  currentTempEl.textContent = `${state.tempCurrent}°F`;

  changeBackgroundTemp()
};

const increaseTemp =  () => {
  const currentTempEl = document.getElementById("currentTemp");

  state.tempCurrent += 1
  currentTempEl.textContent = `${state.tempCurrent}°F`;
  changeBackgroundTemp()
};

// Adjusting Background Temp According to Weather
const changeBackgroundTemp = () => {
  const tempSectionEl = document.querySelector(".tempDefault");

  console.log(state.tempCurrent)

  if (state.tempCurrent >=80) {
    tempSectionEl.id = "veryHotTemp";
    console.log("It's very hot")
  }

  else if (state.tempCurrent <=79 && state.tempCurrent >= 70) {
    tempSectionEl.id = "hotTemp";
    console.log("It's hot")
  }

  else if(state.tempCurrent <=69 && state.tempCurrent >=60) {
    tempSectionEl.id = "middleTemp";
    console.log("It's normal")
  }

  else if (state.tempCurrent <= 59 && state.tempCurrent >= 50) {
    tempSectionEl.id = "coldTemp";
    console.log("It's cold")
  }

  else if (state.tempCurrent < 50) {
    tempSectionEl.id = "veryColdTemp"
    console.log("It's very cold")

  }
};

// Registering event handlers
const registerHandlers = () => {
  const decreaseButton = document.getElementById("decrease");
  decreaseButton.addEventListener("click", decreaseTemp);

  const increaseButton = document.getElementById("increase");
  increaseButton.addEventListener("click", increaseTemp);
};

document.addEventListener("DOMContentLoaded", registerHandlers);