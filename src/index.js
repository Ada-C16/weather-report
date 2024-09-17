
const updateCityListener = () => {
  let userInput = document.querySelector('#user_input');
  let cityName = document.getElementById('city_name');

  userInput.addEventListener("keyup", () => {
    cityName.textContent = userInput.value;
  });
};



const createResetListener = () => {
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', function () {
    document.getElementById('city_name').textContent = 'Munich';
    document.querySelector('#user_input').value = ""
  });
};


const createSkyListener = () => {
  document
    .getElementById('sky_dropdown')
    .addEventListener('change', function () {
      if (document.getElementById('sky_dropdown').value === 'sunny') {
        document.getElementById('sky_emojis').innerHTML = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
      }
      if (document.getElementById('sky_dropdown').value === 'cloudy') {
        document.getElementById('sky_emojis').innerHTML =
          '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
      }
      console.log(document.getElementById('sky_dropdown').value);
      if (document.getElementById('sky_dropdown').value === 'rainy') {
        document.getElementById('sky_emojis').innerHTML = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
      }
      console.log(document.getElementById('sky_dropdown').value);
      if (document.getElementById('sky_dropdown').value === 'snowy') {
        document.getElementById('sky_emojis').innerHTML = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
      }
    });
};

const createTempListeners = () => {
  const upArrow = document.querySelector('#raise_temp');
  const downArrow = document.querySelector('#lower_temp');
  const tempNum = document.getElementById('temp_display');

  upArrow.addEventListener('click', function () {
    tempNum.textContent = (parseInt(tempNum.textContent) + 1).toString() + " °F";
    updateFromTemp(tempNum.textContent);
  });
  downArrow.addEventListener('click', function () {
    tempNum.textContent = (parseInt(tempNum.textContent) - 1).toString() + " °F";
    updateFromTemp(tempNum.textContent);
  });
};


const updateFromTemp = (updatedTemp) => {
  currentTemp = parseInt(updatedTemp);
    if (currentTemp <= 44) {
      document.getElementById('ground_emojis').textContent =
        '🌲🎄🦭🦭🌲⛄️🌲🐻‍❄️⛄️🗻🐧🌲🎄';
      document.getElementById('weather_body').style.backgroundColor =
        'rgba(157, 236, 237, 0.701)';
      document.getElementById('change_temp').style.backgroundColor =
        'rgba(157, 236, 237, 0.701)';
      document.getElementById('change_sky').style.backgroundColor =
        'rgba(157, 236, 237, 0.701)';
      document.getElementById('change_city').style.backgroundColor =
        'rgba(157, 236, 237, 0.701)';
    } else if (currentTemp <= 59) {
      document.getElementById('ground_emojis').textContent =
        '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
      document.getElementById('weather_body').style.backgroundColor =
        'rgba(99, 165, 235, 0.81)';
      document.getElementById('change_temp').style.backgroundColor =
        'rgba(99, 165, 235, 0.81)';
      document.getElementById('change_sky').style.backgroundColor =
        'rgba(99, 165, 235, 0.81)';
      document.getElementById('change_city').style.backgroundColor =
        'rgba(99, 165, 235, 0.81)';
    } else if (currentTemp <= 69) {
      document.getElementById('ground_emojis').textContent =
        '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
      document.getElementById('weather_body').style.backgroundColor =
        'rgba(70, 184, 70, 0.701)';
      document.getElementById('change_temp').style.backgroundColor =
        'rgba(70, 184, 70, 0.701)';
      document.getElementById('change_sky').style.backgroundColor =
        'rgba(70, 184, 70, 0.701)';
      document.getElementById('change_city').style.backgroundColor =
        'rgba(70, 184, 70, 0.701)';
    } else if (currentTemp <= 79) {
      document.getElementById('ground_emojis').textContent =
        '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
      document.getElementById('weather_body').style.backgroundColor =
        'rgba(255, 234, 0, 0.701)';
      document.getElementById('change_temp').style.backgroundColor =
        'rgba(255, 234, 0, 0.701)';
      document.getElementById('change_sky').style.backgroundColor =
        'rgba(255, 234, 0, 0.701)';
      document.getElementById('change_city').style.backgroundColor =
        'rgba(255, 234, 0, 0.701)';
    } else if (currentTemp >= 80) {
      document.getElementById('ground_emojis').textContent =
        '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
      document.getElementById('weather_body').style.backgroundColor =
        'rgba(247, 153, 12, 0.701)';
      document.getElementById('city_name_header').style.backgroundColor =
        'rgba(247, 153, 12, 0.701)';
      document.getElementById('change_temp').style.backgroundColor =
        'rgba(247, 153, 12, 0.701)';
      document.getElementById('change_sky').style.backgroundColor =
        'rgba(247, 153, 12, 0.701)';
      document.getElementById('change_city').style.backgroundColor =
        'rgba(247, 153, 12, 0.701)';
    };
};

const registerEventHandlers = () => {
  createSkyListener();
  updateCityListener();
  createResetListener();
  createTempListeners();
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);



