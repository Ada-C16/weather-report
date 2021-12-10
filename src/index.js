const registerEvents = () => {
  console.log('loaded');

  let currentTemp = 71;

  const resetButton = document.getElementById('cityNameResetButton');
  resetButton.addEventListener('click', () => {
    document.getElementById('cityNameInput').value = 'Seattle';
    updateCityName();
  });

  const updateCityName = () => {
    console.log('Updating City name');
    const inputCity = document.getElementById('cityNameInput');
    const headerCityNameSpan = document.getElementById('headerCityName');
    headerCityNameSpan.textContent = inputCity.value;
  };

  const inputCity = document.getElementById('cityNameInput');
  inputCity.addEventListener('input', (event) => {
    console.log('Got an input event');
    updateCityName();
  });

  const skySelector = document.getElementById('skySelector');
  skySelector.addEventListener('change', (event) => {
    console.log('sky selector changed');
    console.log(event);
    console.log(skySelector.value);
    updateWeatherGarden();
  });

  const tempUp = document.getElementById('tempUp');
  tempUp.addEventListener('click', () => {
    console.log('Temp up clicked');
    currentTemp++;
    updateTemperatureValue();
  });

  const tempDown = document.getElementById('tempDown');
  tempDown.addEventListener('click', () => {
    console.log('Temp down clicked');
    currentTemp--;
    updateTemperatureValue();
  });

  const updateTemperatureValue = () => {
    const tempValue = document.getElementById('tempValue');
    tempValue.textContent = currentTemp;
    tempValue.classList = [];
    tempValue.classList.add(getColorClassForTemp(currentTemp));
    updateWeatherGarden();
  };

  const getColorClassForTemp = (temp) => {
    if (temp <= 49) {
      return 'teal';
    } else if (50 <= temp && temp <= 59) {
      return 'green';
    } else if (60 <= temp && temp <= 69) {
      return 'yellow';
    } else if (70 <= temp && temp <= 79) {
      return 'orange';
    } else if (80 <= temp) {
      return 'red';
    }
  };
  skyToEmoijMap = {
    sunny: '☀️ ',
    cloudy: '🌤 ',
    rainy: '🌧💧',
    snowy: '🌨❄️',
  };
  const updateSkyEmojis = () => {
    const skyEmojis = document.getElementById('skyEmoji');
    const skySelectorValue = skySelector.value;
    skyEmojis.textContent = skyToEmoijMap[skySelectorValue];
  };

  const updateLandscapeEmojis = () => {
    const landscapeEmoji = document.getElementById('landscapeEmoji');
    if (currentTemp <= 59) {
      landscapeEmoji.textContent = '⛄️🍂🌲🍁';
    } else if (60 <= currentTemp && currentTemp <= 69) {
      landscapeEmoji.textContent = '🌾🪨🛤🍃';
    } else if (70 <= currentTemp && currentTemp <= 79) {
      landscapeEmoji.textContent = '🌸🌻🌷';
    } else if (80 <= currentTemp) {
      landscapeEmoji.textContent = '🐍🌵🏜';
    }
  };

  const updateWeatherGarden = () => {
    updateSkyEmojis();
    updateLandscapeEmojis();
  };

  updateTemperatureValue();
  updateWeatherGarden();
};

document.addEventListener('DOMContentLoaded', registerEvents);
