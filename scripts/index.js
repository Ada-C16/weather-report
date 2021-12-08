//set temperature
const temp_up = document.querySelector('#temp_up');
const temp_down = document.querySelector('#temp_down');
const temp_reading = document.querySelector('.temp_reading');
const temp_bg = document.querySelector('.temperature');
let temp = temp_reading.innerHTML;
temp_up.addEventListener('click', function () {
  temp_reading.innerHTML = temp++;
  set_weather();
});
temp_down.addEventListener('click', function () {
  temp_reading.innerHTML = temp--;
  set_weather();
});
//set landscape
const garden = document.querySelector('.weather_garden');
const sky = document.querySelector('.weather_sky');
let new_sky = sky.innerHTML;
const sky_condition = document.querySelector('#sky_condition');
const sky_val = sky_condition.value;

sky_condition.addEventListener('change', function set_sky(e) {
  let val = e.target.value;
  if (val === 'rainy') {
    new_sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    sky.innerHTML = new_sky;
  } else if (val === 'sunny') {
    new_sky = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    sky.innerHTML = new_sky;
  } else if (val === 'cloudy') {
    new_sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    sky.innerHTML = new_sky;
  } else {
    new_sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    sky.innerHTML = new_sky;
  }
});

const set_weather = () => {
  if (temp >= 80) {
    temp_reading.style.color = 'red';
    garden.innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (temp >= 70 && temp < 80) {
    temp_reading.style.color = 'orange';
    garden.innerHTML = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temp >= 60 && temp < 70) {
    temp_reading.style.color = 'yellow';
    temp_bg.style.backgroundColor = 'lightblue';
    garden.innerHTML = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (temp >= 50 && temp < 60) {
    temp_bg.style.backgroundColor = 'white';
    temp_reading.style.color = 'green';
    temp_reading.style.color = 'skyblue';
    garden.innerHTML = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};
set_weather();
