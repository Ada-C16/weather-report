const updateCity = () => {
  const userInput = document.querySelector('#user_input').value;
  document.getElementById('city_name').innerHTML = userInput;
};

const createResetListener = () => {
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', function(){
    document.getElementById('city_name').innerHTML = 'My Favorite City 😌'; 
  })
};

const createSkyListener = () => {
  document.getElementById('sky_dropdown').addEventListener('change', function() {
    if (document.getElementById('sky_dropdown').value === "sunny"){
      document.getElementById('sky_emojis').innerHTML = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    }
    if (document.getElementById('sky_dropdown').value === "cloudy"){
    document.getElementById('sky_emojis').innerHTML =
      '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    }
    console.log(document.getElementById('sky_dropdown').value);
    if (document.getElementById('sky_dropdown').value === "rainy"){
      document.getElementById('sky_emojis').innerHTML = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    }
    console.log(document.getElementById('sky_dropdown').value);
    if (document.getElementById('sky_dropdown').value === "snowy"){
    document.getElementById('sky_emojis').innerHTML = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    }
  });

};

const createTempListeners = () => {
  const upArrow = document.querySelector("#raise_temp");
  const downArrow = document.querySelector('#lower_temp');
  const tempNum = document.getElementById('temp_display');
  tempNum.innerHTML = 55;
  upArrow.addEventListener("click", function(){
    tempNum.innerHTML = parseInt(tempNum.innerHTML) + 1;
  });
  downArrow.addEventListener('click', function () {
    tempNum.innerHTML = parseInt(tempNum.innerHTML) - 1;
  });
};

city_name_header;
change_widgets;
const createGroundListener = () => {
  document.getElementById('temp_display').addEventListener('DOMSubtreeModified', function () {
    if (document.getElementById('temp_display').innerHTML <= 44) {
      document.getElementById('ground_emojis').innerHTML = '🌲🎄🦭🦭🌲⛄️🌲🐻‍❄️⛄️🗻🐧🌲🎄';
      document.getElementById('weather_body').style.backgroundColor =
        'rgba(157, 236, 237, 0.701)';
      document.getElementById('city_name_header').style.backgroundColor =
        'rgba(157, 236, 237, 0.701)';
      document.getElementById('change_temp').style.backgroundColor =
        'rgba(157, 236, 237, 0.701)';
      document.getElementById('change_sky').style.backgroundColor =
        'rgba(157, 236, 237, 0.701)';
      document.getElementById('change_city').style.backgroundColor =
        'rgba(157, 236, 237, 0.701)';
    }else if (document.getElementById('temp_display').innerHTML <= 59) {
      document.getElementById('ground_emojis').innerHTML =
        '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
      document.getElementById('weather_body').style.backgroundColor =
        'rgba(99, 165, 235, 0.81)';
      document.getElementById('city_name_header').style.backgroundColor =
        'rgba(99, 165, 235, 0.81)';
      document.getElementById('change_temp').style.backgroundColor =
        'rgba(99, 165, 235, 0.81)';
      document.getElementById('change_sky').style.backgroundColor =
        'rgba(99, 165, 235, 0.81)';
      document.getElementById('change_city').style.backgroundColor =
        'rgba(99, 165, 235, 0.81)';
    } else if (document.getElementById('temp_display').innerHTML <= 69) {
      document.getElementById('ground_emojis').innerHTML =
        '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
      document.getElementById('weather_body').style.backgroundColor =
        'rgba(70, 184, 70, 0.701)';
      document.getElementById('city_name_header').style.backgroundColor =
        'rgba(70, 184, 70, 0.701)';
      document.getElementById('change_temp').style.backgroundColor =
        'rgba(70, 184, 70, 0.701)';
      document.getElementById('change_sky').style.backgroundColor =
        'rgba(70, 184, 70, 0.701)';
      document.getElementById('change_city').style.backgroundColor =
        'rgba(70, 184, 70, 0.701)';
    } else if (document.getElementById('temp_display').innerHTML <= 79) {
      document.getElementById('ground_emojis').innerHTML = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
      document.getElementById('weather_body').style.backgroundColor =
        'rgba(255, 234, 0, 0.701)';
      document.getElementById('city_name_header').style.backgroundColor =
        'rgba(255, 234, 0, 0.701)';
      document.getElementById('change_temp').style.backgroundColor =
        'rgba(255, 234, 0, 0.701)';
      document.getElementById('change_sky').style.backgroundColor =
        'rgba(255, 234, 0, 0.701)';
      document.getElementById('change_city').style.backgroundColor =
        'rgba(255, 234, 0, 0.701)';
    }else if (document.getElementById('temp_display').innerHTML >= 80) {
      document.getElementById('ground_emojis').innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
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
    } 
  });
};


const registerEventHandlers = () => {
  createSkyListener();
  updateCity();
  createResetListener();
  createTempListeners();
  createGroundListener();
};

// wait to register my event handlers until page is fully loaded.
document.addEventListener("DOMContentLoaded", registerEventHandlers);
