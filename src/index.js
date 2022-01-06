var temperature = 70;
  
  //  event handler
  const increaseTempFunc = () => {
    temperature += 1;
    const curTemp = temperature;
    const tempValContainer = document.getElementById('tempVal_id');
    tempValContainer.textContent = curTemp;
    
    
    /*Color*/
    const tempValueContainer = document.getElementById('tempVal_id');
    let color = undefined;
    if (curTemp >= 80) {
      color = 'red';
    } else if (curTemp >= 70) {
      color = 'orange';
    } else if (curTemp >= 60) {
      color = 'yellow';
    } else if (curTemp >= 50) {
      color = 'green';
    } else {
      color = 'teal';
    }
    tempValueContainer.classList = 'tempValue ' + color;
    /**/
    
    const flContainer = document.getElementById('lj_fl');
    let floor = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    if (curTemp >= 80) {
      floor = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (curTemp >= 70) {
      floor = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (curTemp >= 60) {
      floor = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    }
    flContainer.textContent = floor;
  
  };
  
  const decreaseTempFunc = () => {
    temperature -= 1;
    const curTemp = temperature;
    const tempValContainer = document.getElementById('tempVal_id');
    tempValContainer.textContent = curTemp;
    /*Color*/
    const tempValueContainer = document.getElementById('tempVal_id');
    let color = undefined;
    if (curTemp >= 80) {
      color = 'red';
    } else if (curTemp >= 70) {
      color = 'orange';
    } else if (curTemp >= 60) {
      color = 'yellow';
    } else if (curTemp >= 50) {
      color = 'green';
    } else {
      color = 'teal';
    }
    tempValueContainer.classList = 'tempValue ' + color;
    /**/
    
    const flContainer = document.getElementById('lj_fl');
    let floor = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    if (curTemp >= 80) {
      floor = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (curTemp >= 70) {
      floor = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (curTemp >= 60) {
      floor = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    }
    flContainer.textContent = floor;
  
  };
  
  const updateCityNameFunc = () => {
    const inputCityContainer = document.getElementById('city_name_input');
    const headerCityContainer = document.getElementById('header_cityName');
    headerCityContainer.textContent = inputCityContainer.value;
  };
  
  const resetCityNameFunc = () => {
    const headerCityContainer = document.getElementById('header_cityName');
    headerCityContainer.textContent = 'Steel City';
  };
  
  const updateSky = () => {
    const skyInputContainer = document.getElementById('sky_selection');
    const selectedSky = skyInputContainer.value;
    const ljSkyContainer = document.getElementById('lj_cielo');
    let sky = undefined;
    let skyColor = undefined;
    if (selectedSky === 'Sunny') {
      sky = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️';
      skyColor = 'sunny';
    } else if (selectedSky === 'Cloudy') {
      sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
      skyColor = 'cloudy';
    } else if (selectedSky === 'Rainy') {
      sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
      skyColor = 'rainy';
    } else {
      sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
      skyColor = 'snowy';
    }
    ljSkyContainer.textContent = sky;
    const ljContentContainer = document.getElementById('lj_content');
    ljContentContainer.classList = `lj__cont ${skyColor}`;
  };
  
  const registerEventHandlers = () => {
    const increaseTempBtn = document.getElementById('increaseTemp');
    increaseTempBtn.addEventListener('click', increaseTempFunc);
  
    const decreaseTempBtn = document.getElementById('decreaseTemp');
    decreaseTempBtn.addEventListener('click', decreaseTempFunc);
  
    const updateCityName = document.getElementById('city_name_input');
    updateCityName.addEventListener('input', updateCityNameFunc);
  
    const resetCityName = document.getElementById('city_name_reset');
    resetCityName.addEventListener('click', resetCityNameFunc);
  
    const skySelect = document.getElementById('sky_selection');
    skySelect.addEventListener('change', updateSky);
  };
  
  document.addEventListener('DOMContentLoaded', registerEventHandlers);
        