// ***** select the HTML element for the event will occur on ****
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
  // overright all the class string or todo: tempArrow.classList.remove(color)
  tempArrow.className = '';
  // adding a new class name
  tempArrow.classList.add(color);
  // console.log(tempArrow);
};

const updateImages = (temp) => {
  //img attribute in HTML is an attribute on the DOM object
  //HTML is instruction for what DOM element to create and how to connect them together.
  //HTML tag is a DOM object
  //HTML attribute is a DOM attribute
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
  //div
  state.temp = temp; //
  const tempContainer = document.getElementById('temp-number');
  tempContainer.textContent = state.temp; //temp
  updateTempStyles(state.temp);
  updateImages(state.temp);
};

const increaseTemp = () => {
  // state.temp += 1;
  // updateTemp(state.temp);
  updateTemp(state.temp + 1);
};

const decreaseTemp = () => {
  // state.temp -= 1;
  // updateTemp(state.temp);
  updateTemp(state.temp - 1);
};

// change sky image when select different sky option
const updateSky = () => {
  const sky = document.getElementById('selectSky').value;
  const skyImage = document.getElementById('skyImage');
  let image = 'assets/images/sky_clipart3.png';
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

// change image when city name change
const updateCityImage = () => {
  //value of input tag
  const city = document.getElementById('cityNameInput').value;
  //img tag
  const cityImage = document.getElementById('cityImage');
  let image = 'assets/images/city_clipart4.jpeg';
  if (city == 'Tacoma') {
    image = 'assets/images/city_clipart1.png';
  } else if (city == 'Bellevue') {
    image = 'assets/images/city_clipart2.png';
  } else if (city == 'Renton') {
    image = 'assets/images/city_clipart3.png';
  } else if (city == 'Federal Way') {
    image = 'assets/images/city_clipart5.png';
  } else if (city == 'Seattle') {
    image = 'assets/images/city_clipart6.png';
  } else if (city == '') {
    image = 'assets/images/city_clipart.jpeg';
  }

  cityImage.src = image;
};

// change city name and invoking updateCityImage to change city image
const updateCityName = () => {
  //input tag for city name
  const inputName = document.getElementById('cityNameInput').value;
  //span tag for Seattle text
  const cityName = document.getElementById('cityName');
  //the input value when the user typed, will appears on span tag
  cityName.textContent = inputName;
  updateCityImage();
};

// reset city name to original name, Seattle
const resetCityName = () => {
  const inputName = document.getElementById('cityNameInput');
  inputName.value = '';
  updateCityName();
};

// ******** register the functions as 'event listener' ********
const registerEventHandlers = () => {
  updateTemp(state.temp);
  const tempDecrease = document.getElementById('decreaseArrow');
  tempDecrease.addEventListener('click', decreaseTemp);

  const tempIncrease = document.getElementById('increaseArrow');
  tempIncrease.addEventListener('click', increaseTemp);

  updateSky();
  const skySelect = document.getElementById('selectSky');
  skySelect.addEventListener('change', updateSky);

  updateCityImage();
  updateCityName();
  const cityNameInput = document.getElementById('cityNameInput');
  cityNameInput.addEventListener('input', updateCityName);

  const resetCityNameBtn = document.getElementById('resetCityNameBtn');
  resetCityNameBtn.addEventListener('click', resetCityName);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

// set day of the week
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
