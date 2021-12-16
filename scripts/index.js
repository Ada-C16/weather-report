// changes the temperature by one degree
function changeTempBy(x) {
  let el = document.getElementById('temperature_in_fahrenheit');
  let temp = el.innerText;
  temp = Number(temp) + x;
  temp = String(temp);
  el.innerText = temp;
}

// event listeners for increase and decrease buttons

const increaseBtn = document.getElementById('increase_temperature');
increaseBtn.addEventListener('click', () => {
  changeTempBy(1);
  updateTempTextColor();
  changeLandscape();
});

const decreaseBtn = document.getElementById('decrease_temperature');
decreaseBtn.addEventListener('click', () => {
  changeTempBy(-1);
  updateTempTextColor();
  changeLandscape();
});

// changes the temperature number's text color or backgound by temp range

function updateTempTextColor() {
  const el = document.getElementById('temperature_in_fahrenheit');
  const temp = Number(el.innerText);

  let color;
  if (temp >= 80) {
    color = 'red';
  } else if (temp >= 70) {
    color = 'orange';
  } else if (temp >= 60) {
    color = 'yellow';
  } else if (temp >= 50) {
    color = 'green';
  } else {
    color = 'teal';
  }
  el.style.color = color;
}

// temperature range changes landscapes
function changeLandscape() {
  let el = document.getElementById('temperature_in_fahrenheit');
  let currentTemp = el.innerText;

  let landscape;
  if (currentTemp >= 80) {
    landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (currentTemp >= 70) {
    landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (currentTemp >= 60) {
    landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else {
    landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }

  const displayLandscape = document.getElementById('landscape');
  displayLandscape.innerText = landscape;
}

// // ************//
// //Selection changes sky
// function changeSky() {
//   let skySelection = document.getElementById('select_sky').selected;

//   let skyOutput;
//   if (skySelection === 'Sunny') {
//     skyOutput = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
//   } else if (skySelection === 'Cloudy') {
//     skyOutput = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
//   } else if (skySelection === 'Rainey') {
//     skyOutput = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
//   } else if (skySelection === 'Snowy') {
//     skyOutput = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
//   }

//   let skyDisplay = document.getElementById('sky');
//   skyDisplay.innerText = skyOutput;
// }
// // event listener for sky selection
// const skySelection = document.getElementById('increase_temperature');
// increaseBtn.addEventListener('click', () => {
//   changeTempBy(1);
//   updateTempTextColor();
//   changeLandscape();
// });

// changes the header city name when the city is inputted
let cityInput = document.querySelector('input');
let newHeader = document.getElementById('header_city_id');

cityInput.oninput = function () {
  newHeader.innerHTML = cityInput.value;
};

// Resets the city name input display value to default (NY)
function resetButton() {
  let input = document.getElementById('cityNameInput');
  input.value = 'New York';
}

// Resets the city name header to default (NY)
function resetHeaderCityToDefault() {
  let header = document.getElementById('header_city_id');
  header.textContent = 'New York';
}
