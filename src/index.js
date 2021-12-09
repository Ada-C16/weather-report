// ***** select the HTML element the even will occur on ****
// ***** make a function to run when it occurs *****

const state = {
  temp: 49,
};
// temperature settings
// changing color
const updateTempStyles = (temp) => {
  const tempArrow = document.getElementById('temp-number');
  let color = 'teal';
  if (temp >= 80) {
    color = 'red';
  } else if (temp >= 70) {
    color = 'orange';
  } else if (temp >= 60) {
    color = 'yellow';
  } else if (temp >= 50) {
    color = 'green';
  }
  tempArrow.classList.add(color);
  console.log(tempArrow);
};

const updateImages = (temp) => {
  const layoutImage = document.getElementById('layout-image');
  let image = 'assets/images/layout_snow1.png';
  if (temp >= 80) {
    image = 'assets/images/layout_desert1.png';
  } else if (temp >= 70) {
    image = 'assets/images/layout_sunny1.jpeg';
  } else if (temp >= 60) {
    image = 'assets/images/rainy_layout.png';
  } else if (temp >= 50) {
    image = 'assets/images/layout_snow1.png';
  }
  layoutImage.src = image;
};

const updateTemp = (temp) => {
  const tempContainer = document.getElementById('temp-number');
  tempContainer.textContent = temp;
  updateTempStyles(state.temp);
  updateImages(state.temp);
};

const increaseTemp = () => {
  state.temp += 1;
  updateTemp(state.temp);
};

const decreaseTemp = () => {
  state.temp -= 1;
  updateTemp(state.temp);
};

// change sky image when select different sky option
const updateSky = () => {
  let image = 'assets/images/sky_clipart3.png';
  const sky = document.getElementById('selectSky').value;
  const skyImage = document.getElementById('skyImage');
  if (sky == 'cloudy') {
    image = 'assets/images/sky_clipart3.png';
  } else if (sky == 'sunny') {
    image = 'assets/images/sunny_image.jpeg';
  } else if (sky == 'rainy') {
    image = 'assets/images/rainy_clipart2.png';
  } else if (sky == 'snowy') {
    image = 'assets/images/snowy_clipart1.png';
  }

  skyImage.src = image;
};

// change city name
const updateCityName = () => {
  const inputName = document.getElementById('cityNameInput').value;
  const cityName = document.getElementById('cityName');
  cityName.textContent = inputName;
};

// reset city name to original name
const resetCityName = () => {
  const inputName = document.getElementById('cityNameInput');
  inputName.value = 'Seattle';
  updateCityName();
};

// ******** register that function as an 'event listening' ********
const registerEventHandlers = () => {
  updateTemp(state.temp);
  const tempDecrease = document.getElementById('decreaseArrow');
  tempDecrease.addEventListener('click', decreaseTemp);

  const tempIncrease = document.getElementById('increaseArrow');
  tempIncrease.addEventListener('click', increaseTemp);

  updateSky();
  const skySelect = document.getElementById('selectSky');
  skySelect.addEventListener('change', updateSky);

  updateCityName();
  const cityNameInput = document.getElementById('cityNameInput');
  cityNameInput.addEventListener('input', updateCityName);

  const resetCityNameBtn = document.getElementById('resetCityNameBtn');
  resetCityNameBtn.addEventListener('click', resetCityName);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

// set date of the week
let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}
document.getElementById('date-time').innerHTML = day;
