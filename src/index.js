const state = {
  tempCurrent: 60
};

// Combine decreaseTemp and increaseTemp into one function during refactor
// const decreaseTemp = () => {
//   const currentTempEl = document.getElementById("currentTemp");

//   state.tempCurrent -= 1
//   currentTempEl.textContent = `${state.tempCurrent}°F`;

//   changeLandscapeColor()
// };

// const increaseTemp =  () => {
//   const currentTempEl = document.getElementById("currentTemp");

//   state.tempCurrent += 1
//   currentTempEl.textContent = `${state.tempCurrent}°F`;
//   changeLandscapeColor()
// };

const adjustTemp = (event) => {
  const currentTempEl = document.querySelector("#currentTemp");

  if (event.target.id === "decrease") {
    state.tempCurrent -= 1;
  } 
  else if (event.target.id === "increase") {
    state.tempCurrent += 1;
  }

  currentTempEl.textContent = `${state.tempCurrent}°F`;
  changeLandscapeColor()
}

// Adjusting Landscape & Background Color According to Temperature
const changeLandscapeColor = () => {
  const landscapeEmoji = document.querySelector("#landscape")
  const tempSectionEl = document.querySelector(".tempDefault");

  if(state.tempCurrent >=80) {
    landscapeEmoji.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    tempSectionEl.id = "veryHotTemp";
  }

  else if (state.tempCurrent <=79 && state.tempCurrent >= 70) {
    landscapeEmoji.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    tempSectionEl.id = "hotTemp";
  }

  else if(state.tempCurrent <=69 && state.tempCurrent >=60) {
    landscapeEmoji.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    tempSectionEl.id = "middleTemp";
  }

  else if (state.tempCurrent <= 59 && state.tempCurrent >= 50) {
    landscapeEmoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    tempSectionEl.id = "coldTemp";
  }

  else {
    landscapeEmoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    tempSectionEl.id = "veryColdTemp";
  }
};

// Adjusting Sky Levels According to Temperature
const changeSky = () => {
  const skySelectedEl = document.querySelector(".skyChoice");
  const skyLandscapeEl = document.querySelector("#sky");

  if (skySelectedEl.value === "sunny") {
    skyLandscapeEl.textContent = "☁️☀️☁️☀️☁️☀️☁️☀️☁️☀️☁️";
  }

  else if (skySelectedEl.value === "cloudy") {
    skyLandscapeEl.textContent = "☁️☁️ 🌤 ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
  }

  else if (skySelectedEl.value === "rainy") {
    skyLandscapeEl.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌧💧🌧";
  }

  else {
    skyLandscapeEl.textContent = "🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️❄️";
  }
};

// Changing city name
const updateCity = (event) => {
  const cityDisplay = document.getElementById("cityDisplay")
  cityDisplay.textContent = event.target.value;
};

// Reset city button
const resetCity = () => {
  const cityInput = document.querySelector("#cityForm");
  cityInput.reset();
}

// Registering event handlers
const registerHandlers = () => {
  const decreaseButton = document.getElementById("decrease");
  decreaseButton.addEventListener("click", adjustTemp);

  const increaseButton = document.getElementById("increase");
  increaseButton.addEventListener("click", adjustTemp);

  // const decreaseButton = document.getElementById("decrease");
  // decreaseButton.addEventListener("click", decreaseTemp);

  // const increaseButton = document.getElementById("increase");
  // increaseButton.addEventListener("click", increaseTemp);

  const selectSky = document.querySelector(".skyChoice");
  selectSky.addEventListener("change", changeSky)

  const cityInput = document.querySelector("input");
  cityInput.addEventListener('input', updateCity);

  const resetCityButton = document.querySelector("#resetCity");
  resetCityButton.addEventListener("click", resetCity)
};

document.addEventListener("DOMContentLoaded", registerHandlers);