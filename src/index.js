// Helper function to check Temp //
function tempCheck(tempConst) {
  if (tempConst >= 35) {
    document.getElementById('temp_const').style.color = 'red';
    document.getElementById('container').style.backgroundImage =
      'url(assets/desert-heat.jpg)';
  } else if (tempConst < 35 && tempConst >= 25) {
    document.getElementById('temp_const').style.color = '#86340A';
    document.getElementById('container').style.backgroundImage =
      'url(assets/sunny-sky.jpg)';
  } else if (tempConst < 25 && tempConst >= 19) {
    document.getElementById('temp_const').style.color = '#7EB5A6';
    document.getElementById('container').style.backgroundImage =
      'url(assets/gloomy-weather.jpg)';
  } else if (tempConst < 19 && tempConst >= 5) {
    document.getElementById('temp_const').style.color = '#CEE5D0';
    document.getElementById('container').style.backgroundImage =
      'url(assets/Cold.jpg)';
  } else if (tempConst < 5) {
    document.getElementById('temp_const').style.color = 'Aqua';
    document.getElementById('container').style.backgroundImage =
      'url(assets/ice-cold.png)';
  }
}
// Wave 2: Increase and Decrease Temperature //

var tempLower = document.getElementById('lower_temp');
var tempHigher = document.getElementById('higher_temp');
var tempConst = document.getElementById('temp_const').innerHTML;

tempLower.addEventListener('click', () => {
  tempConst = parseInt(tempConst) - 1;
  document.getElementById('temp_const').innerHTML = tempConst;
  tempCheck(tempConst);
});
tempHigher.addEventListener('click', () => {
  tempConst = parseInt(tempConst) + 1;
  document.getElementById('temp_const').innerHTML = tempConst;
  tempCheck(tempConst);
});

// Wave 3: Selecting the Sky //
const selectElement = document.querySelector('#sky');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  if (event.target.value == 'sunny') {
    result.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (event.target.value == 'cloudy') {
    result.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (event.target.value == 'rainy') {
    result.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (event.target.value == 'snowy') {
    result.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
});

// Wave 4: Naming the City

const cityButton = document.getElementById('city');
const cityName = document.getElementById('page-title').innerHTML;

cityButton.addEventListener('click', () => {
  document.getElementById(
    'page-title'
  ).innerHTML = `Weather Report - 🌟 ${cityButton.value} 🌟`;
});
