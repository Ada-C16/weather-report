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

const createGroundListener = () => {
  //   | Temperature (F) | Landscape                         |
  // | --------------- | --------------------------------- |
  // | 80+             | `"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"`       |
  // | 70-79           | `"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"`      |
  // | 45-69           | `"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"`        |
  // | 44 or below     | `"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"` |
  console.log(document.getElementById('temp_display').innerHTML);
  document.getElementById('temp_display').addEventListener('DOMSubtreeModified', function () {
    if (document.getElementById('temp_display').innerHTML <= 44) {
      console.log('inside cold condition');
      document.getElementById('ground_emojis').innerHTML =
        '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else if (document.getElementById('temp_display').innerHTML <= 69) {
      console.log('inside cool condition');
      document.getElementById('ground_emojis').innerHTML =
        '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (document.getElementById('temp_display').innerHTML <= 79) {
      console.log('inside warm condition');
      document.getElementById('ground_emojis').innerHTML = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    }else if (document.getElementById('temp_display').innerHTML >= 80) {
      console.log('inside hot condition');
      document.getElementById('ground_emojis').innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
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
