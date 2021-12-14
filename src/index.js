let tempValue = 50;
const changeLandscape = () => {
  const inputLandscape = document.getElementById("landscape").value;
  const landscapeContainer = document.getElementById("Garden");
  let sky = "";
  let skyColor = "";
  if (inputLandscape === "Pink") {
      sky = "🌷🦩🌷🦩🌷🦩🌷🦩 ";
      skyColor = "bubble_gum";
  } else if (inputLandscape === "Summer") {
      sky = "☄️🔥☄️🔥☄️🔥☄️🔥☄️🔥";
      skyColor = "Boba";
  } else if (inputLandscape === "Boba") {
      sky = "🧋🧋🧋🧋🧋🧋🧋🧋🧋";
      skyColor = "light_purple_pink";
  } else if (inputLandscape === "Hurricane") {
      sky = "💨🌊💦⛈💨🌊💦⛈💨🌊💦⛈";
      skyColor = "summer";
  } else if (inputLandscape === "Cats") {
    sky = "🐱 🐱 🐱 🐱 🐱 🐱 🐱 🐱 🐱 🐱 🐱";
    skyColor = "pink";
}
landscapeContainer.textContent = sky;
  const gardenContent = document.getElementById("gardenContent");
  gardenContent.classList = `garden__content ${skyColor}`;
};



const changeTempColor = (currentTemp) => {
  const tempValueContainer = document.getElementById("tempValue");
  let color = "bubble_gum";
  if ( currentTemp >= 80) {
      color = "red";
  } else if (currentTemp >= 70) {
      color = "light_purple_pink";
  } else if (currentTemp >= 60) {
      color = "fuscia";
  } else if (currentTemp >= 50) {
      color = "yellowgreen ";
  }
  tempValueContainer.classList = color;
}




const updateTemp = tempValue => {
  const tempValueContainer = document.getElementById("tempValue");
  tempValueContainer.textContent = tempValue;
  changeTempColor(tempValue);
  updateGarden(tempValue);
};

const incTemp = () => {
  tempValue += 1;
  updateTemp(tempValue);
};
const decTemp = () => {
  tempValue -= 1;
  updateTemp(tempValue);
};



const registerEventHandlers = () => {
  updateTemp(tempValue);

  const incrementValue = document.getElementById("incrementValue");
  incrementValue.addEventListener("click", incTemp);
  
  const decrementValue = document.getElementById("decrementValue");
  decrementValue.addEventListener("click", decTemp);

  updateCityName();
  const cityNameInput = document.getElementById("cityNameInput");
  cityNameInput.addEventListener("input", updateCityName);

  const cityNameResetBtn = document.getElementById("cityNameReset");
  cityNameResetBtn.addEventListener("click", resetCityName);

  updateSky();
  const skySelect = document.getElementById("skySelect");
  skySelect.addEventListener("change", updateSky);
};
document.addEventListener('DOMContentLoaded',registerEventHandlers)