// variable storing fixed temperature
const temp = {
  tempByDegree: 70,
};

// variables holding html queries that I reuse more than once:
const garden = document.querySelector('#ground-emojis');
const tempContainer = document.querySelector('#temperature');

// behavior of temp toggles
const increaseTemp = () => {
  temp.tempByDegree += 1;
  tempContainer.textContent = `${temp.tempByDegree}`;
  let color = changeTempColor();
  tempContainer.className = color;
};

const decreaseTemp = () => {
  tempContainer.textContent = `${temp.tempByDegree}`;
  temp.tempByDegree -= 1;
  let color = changeTempColor();
  tempContainer.className = color;
};

// behavior of selecting sky dropdown
const selectSky = () => {
  const skySelector = document.querySelector('#sky');
  const skyEmojis = document.querySelector('#sky-emojis');
  if (skySelector.value === 'cloudy') {
    skyEmojis.innerHTML = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (skySelector.value === 'rainy') {
    skyEmojis.innerHTML = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (skySelector.value === 'sunny') {
    skyEmojis.innerHTML = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (skySelector.value === 'snowy') {
    skyEmojis.innerHTML = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
};

// behavior of temperature changes
const changeTempColor = () => {
  let color = '';
  if (temp.tempByDegree < 49) {
    color = 'teal';
    garden.innerHTML = '🌨❄️🥶🌬️❄️❄️⛄️⛄️⛄️🌬️🥶🌨';
  } else if (temp.tempByDegree < 59) {
    color = 'green';
    garden.innerHTML = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (temp.tempByDegree < 69) {
    color = 'yellow';
    garden.innerHTML = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (temp.tempByDegree < 79) {
    color = 'orange';
    garden.innerHTML = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else {
    color = 'red';
    garden.innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  }
  return color;
};

// behavior of city name input
const changeCity = () => {
  const cityName = document.querySelector("#city-name");
  const getCityDefault = document.querySelector('#default-city')
  let cityText = cityName.value;
  getCityDefault.innerHTML = cityText
  console.log(cityText);
};

// behavior of reset button
const resetCity = () => {
  document.querySelector('#city-name').value = ""
};

// event handlers 
const registerEventHandlers = () => {
  const upButton = document.querySelector('#up-arrow');
  upButton.addEventListener('click', increaseTemp);

  const downButton = document.querySelector('#down-arrow');
  downButton.addEventListener('click', decreaseTemp);

  const skySelector = document.querySelector('#sky');
  skySelector.addEventListener('change', selectSky);

  const cityName = document.querySelector('#city-name');
  cityName.addEventListener('change', changeCity);

  const resetButton = document.querySelector('#reset-button');
  resetButton.addEventListener('click', resetCity);
};

registerEventHandlers();
