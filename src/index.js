const updateCity = () => {
  let userInput = document.querySelector('#user_input').value;
  document.getElementById('city_name').innerHTML = userInput;
};

const createResetListener = () => {
  let resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', function(){
    document.getElementById('city_name').innerHTML = "My Favorite City 😌"; 
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
    }
    console.log(document.getElementById('sky_dropdown').value);
    if (document.getElementById('sky_dropdown').value === "snowy"){
    document.getElementById('sky_emojis').innerHTML = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    }
  });

};

const createGroundListener = () => {
  //   selecting the tempNum element value
  //   each element changes the emojis in the sky
  // will need a conditional:
  // if sunny selected (eventlistener){sky emojis change to "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"}
//   | Temperature (F) | Landscape                         |
// | --------------- | --------------------------------- |
// | 80+             | `"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"`       |
// | 70-79           | `"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"`      |
// | 45-69           | `"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"`        |
// | 44 or below     | `"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"` |
  let hot = (document.getElementById('temp_display').innerHTML >= 80);
  let warm = (70 <= document.getElementById('temp_display').innerHTML <= 79);
  let cool = (45 <= document.getElementById('temp_display').innerHTML <= 69);
  let cold = (document.getElementById('temp_display').innerHTML <= 44);

  document.getElementById('temp_display').addEventListener('change', function () {
      if ((document.getElementById('sky_dropdown').value = hot)) {
        document.getElementById('sky_emojis').innerHTML =
          '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
      }
      if ((document.getElementById('sky_dropdown').value = warm)) {
        document.getElementById('sky_emojis').innerHTML =
          '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
      }
      if ((document.getElementById('sky_dropdown').value = cool)) {
        document.getElementById('sky_emojis').innerHTML = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
      }
      if ((document.getElementById('sky_dropdown').value = cold)) {
        document.getElementById('sky_emojis').innerHTML = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
      }
    });
};


const changeTemp = () => {
  let upArrow = document.querySelector("#raise_temp");
  console.
  let downArrow = document.querySelector('#lower_temp');
//   let tempNum = document.querySelector("#temp_display").innerHTML;
//   tempNum.textContent = "55";
//   // upArrow.addEventListener("click" => {
//   //   document.getElementById('temp_display').innerHTML += 1;
    
//   // });
// };


const registerEventHandlers = () => {
  // const crabButton = document.querySelector(“#addCrabButton");
  // crabButton.addEventListener("click",addCrab);
  createSkyListener();
  updateCity();
  createResetListener();
};

// wait to register my event handlers until page is fully loaded.
document.addEventListener("DOMContentLoaded", registerEventHandlers);

