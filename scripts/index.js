// changes the temperature by one degree

function changeTemp(x) {
  let el = document.getElementById('temperature_in_fahrenheit');
  let temp = el.innerText;

  temp = Number(temp) + x;
  temp = String(temp);
  el.innerText = temp;
}

btn = document.getElementById('increase_temperature');
btn.onclick = () => changeTemp(1);
btn = document.getElementById('decrease_temperature');
btn.onclick = () => changeTemp(-1);

// ************//
// changes the temperature number's text color by temp range
function changeTempTextColor(currentTemp) {
  let tempText = document.getElementById('temperature_in_fahrenheit');
  let color = '';

  if (currentTemp >= 80) {
    color = 'red';
  } else if (currentTemp >= 70) {
    color = 'orange';
  } else if (currentTemp >= 60) {
    color = 'yellow';
  } else if (currentTemp >= 50) {
    color = 'green';
  }
  tempText.classList = color;
}

// ************//
// temperature ranges changes landscapes
function changeLandscape() {
  let el = document.getElementById('temperature_in_fahrenheit');
  let currentTemp = el.innerText;
  let landscapByTemp = documnet.getElementById('landscape');
  let landscape = landscapByTemp.innerHTML;

  if (currentTemp >= 80) {
    landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (currentTemp >= 70) {
    landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (currentTemp >= 60) {
    landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (currentTemp >= 50) {
    landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
  return landscape;
}

// ************//
//Selection changes sky
function changeSky() {
  let skySelection = document.getElementById('select_sky');
  let skyDisplay = document.getElementById('sky');
  let skyOutput = '';
  if (skySelection === 'Sunny') {
    skyOutput = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (skySelection === 'Cloudy') {
    skyOutput = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  }
  if (skySelection === 'Rainey') {
    skyOutput = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  }
  if (skySelection === 'Snowy') {
    skyOutput = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
  document.getElementById('sky').textContent = skyOutput;
}

// changes the header city name when the city is inputted

let cityInput = document.querySelector('input');
let newHeader = document.getElementById('header_city_id');

cityInput.oninput = function () {
  newHeader.innerHTML = cityInput.value;
};

// Resetting the city name input to default (NY)

function resetButton() {
  let input = document.getElementById('cityNameInput');
  // let header = document.getElementById('header_city_id');
  input.value = 'New York';
  // header.value = 'New York';
}

// Resetting the city name header to default (NY)

function resetHeaderCityToDefault() {
  let header = document.getElementById('header_city_id');
  header.textContent = 'New York';
}
