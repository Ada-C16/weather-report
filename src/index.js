
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
  tempNum.innerHTML = 55;
  upArrow.addEventListener('click', function () {
    tempNum.innerHTML = parseInt(tempNum.innerHTML) + 1;
  });
  downArrow.addEventListener('click', function () {
    tempNum.innerHTML = parseInt(tempNum.innerHTML) - 1;
  });
};

city_name_header;
change_widgets;
const createGroundListener = () => {
  document
    .getElementById('temp_display')
    .addEventListener('DOMSubtreeModified', function () {
      if (document.getElementById('temp_display').innerHTML <= 44) {
        document.getElementById('ground_emojis').innerHTML =
          '🌲🎄🦭🦭🌲⛄️🌲🐻‍❄️⛄️🗻🐧🌲🎄';
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
      } else if (document.getElementById('temp_display').innerHTML <= 59) {
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
        document.getElementById('ground_emojis').innerHTML =
          '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
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
      } else if (document.getElementById('temp_display').innerHTML >= 80) {
        document.getElementById('ground_emojis').innerHTML =
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
      }
    });
};

const registerEventHandlers = () => {
  createSkyListener();
  updateCityListener();
  createResetListener();
  createTempListeners();
  createGroundListener();
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);



// Great Wall of China
// Petra
// Colosseum
// Chichen Itza
// Machu Picchu
// Taj Mahal
// Christ the Redeemer
// const axios = require('axios');
// const myApi = process.env['LOCATIONAPIKEY'];

// const findLatLon = () => {
//   axios
//     .get('https://us1.locationiq.com/v1/search.php', {
//       params: {
//         key: myApi,
//         q: 'Great Wall of China',
//         format: 'json',
//       },
//     })
//     .then((response) => {
//       console.log(
//         `Latitude: ${response.data[0].lat}\nLongitude: ${response.data[0].lon}`
//       );
//     })
//     .catch((error) => {
//       console.log(error.response.data);
//     });
// };

// findLatLon();

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

/*
This will convert city name to geo coordinates for weather api

http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
*/

// const getGeoCoordinates = () => {
//   const userInputCity = document.querySelector('#user_input').value;
//   fetch(
//     'http://api.openweathermap.org/geo/1.0/direct?q={userInputCity}&limit={limit}&appid={API key}'
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };

/*
This will call the weather api with geo coordinates and return weather

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
*/
// need to create a submit button and add event listener to button to activate this function