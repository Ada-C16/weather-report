const state = {
  tempCurrent: 60
};

// Adjusting Temperature Depending on Which Button is Clicked
const adjustTemp = (event) => {
  const currentTempEl = document.querySelector('#current-temp');

  if (event.target.id === 'decrease') {
    state.tempCurrent -= 1;
  } else if (event.target.id === 'increase') {
    state.tempCurrent += 1;
  }

  currentTempEl.textContent = `${state.tempCurrent}°F`;
  changeLandscapeColor();
}

// Adjusting Landscape & Background Color According to Temperature
const changeLandscapeColor = () => {
  const landscapeEmoji = document.querySelector('#landscape');
  const tempSectionEl = document.querySelector('.temp-default');
  const cloudImageOneEl = document.querySelector('#sky-img-1');
  const cloudImageTwoEl = document.querySelector("#sky-img-2")

  if (state.tempCurrent >= 80) {
    tempSectionEl.id = 'veryHotTemp';
    landscapeEmoji.textContent = '🌵🔥‼️🐌🐍🦂♨️🌵🔥🌵♨️🐍🦂🐍🏜';
    cloudImageOneEl.src="https://64.media.tumblr.com/6234956e2b0a62b0102a8d6f30ffcb8c/tumblr_myd7lbOUFp1r9mp00o2_500.gifv";
    cloudImageTwoEl.src="https://64.media.tumblr.com/7f0c1f27921d7af9b9cb0ce9c6dd8051/tumblr_myd7lbOUFp1r9mp00o5_400.jpg";
  } 
  
  else if (state.tempCurrent <= 79 && state.tempCurrent >= 70) {
    tempSectionEl.id = 'hotTemp';
    landscapeEmoji.textContent = '🌷🌸🌿🌼🌱🌿🌷🌻🌿🌱🌼🌱🌸🌻🌷';
    cloudImageTwoEl.src="https://64.media.tumblr.com/ce433dca252fd3cab981eff965970978/tumblr_myd7lbOUFp1r9mp00o1_500.gifv";
    cloudImageOneEl.src="https://64.media.tumblr.com/7f0c1f27921d7af9b9cb0ce9c6dd8051/tumblr_myd7lbOUFp1r9mp00o5_400.jpg";
  } 

  else if (state.tempCurrent <= 69 && state.tempCurrent >= 60) {
    tempSectionEl.id = 'middleTemp';
    landscapeEmoji.textContent = '🍁🍃💨🪨🍃🍂🍃💨🍁🍃🪨🍂🏠💨🌲';
    cloudImageOneEl.src="https://64.media.tumblr.com/0d64589f9007cc152174260fa7940543/tumblr_myd7lbOUFp1r9mp00o9_400.jpg";
    cloudImageTwoEl.src="https://64.media.tumblr.com/2dac3b04d52ef531c85373e878d7e862/tumblr_myd7lbOUFp1r9mp00o8_400.jpg";
  } 

  else if (state.tempCurrent <= 59 && state.tempCurrent >= 50) {
    tempSectionEl.id = 'coldTemp';
    landscapeEmoji.textContent = '🍂🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂⛄️🌲';
    cloudImageOneEl.src="https://64.media.tumblr.com/7680edca261309cb74e55ad052e65273/tumblr_myd7lbOUFp1r9mp00o7_400.jpg";
    cloudImageTwoEl.src="https://64.media.tumblr.com/7680edca261309cb74e55ad052e65273/tumblr_myd7lbOUFp1r9mp00o7_400.jpg";
  } 

  else {
    tempSectionEl.id = 'veryColdTemp';
    landscapeEmoji.textContent = '🍂🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂⛄️🌲';
    cloudImageOneEl.src="https://64.media.tumblr.com/7680edca261309cb74e55ad052e65273/tumblr_myd7lbOUFp1r9mp00o7_400.jpg";
    cloudImageTwoEl.src="https://64.media.tumblr.com/7680edca261309cb74e55ad052e65273/tumblr_myd7lbOUFp1r9mp00o7_400.jpg";
  }
}

// Adjusting Sky Levels
const changeSky = () => {
  const skySelectedEl = document.querySelector('.sky-choice');
  const skyLandscapeEl = document.querySelector('#sky');

  if (skySelectedEl.value === 'sunny') {
    skyLandscapeEl.textContent = '☁️☁️🌤☁️☁️☁️🌤☁️☁️☁️';
  } 
  else if (skySelectedEl.value === 'cloudy') {
    skyLandscapeEl.textContent = '☁️☁️🌤☁️☁️☁️🌤☁️☁️☁️';
  } 
  else if (skySelectedEl.value === 'rainy') {
    skyLandscapeEl.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌧💧🌧';
    alert("Don't forget to bring an umbrella! It's raining outside!");
  } 
  else {
    skyLandscapeEl.textContent = '🌨❄️🌨❄️🌨❄️🌨❄️🌨❄️❄️';
    alert("Bundle up and don't forget your gloves! It's snowing outside!");
  }
}

// Changing city name
const updateCity = (event) => {
  const cityDisplay = document.querySelector('#city-display');
  cityDisplay.textContent = event.target.value;
}

// Reset city button
const resetCity = () => {
  const cityInput = document.querySelector('#city-form');
  cityInput.reset();
}

// Registering event handlers
const registerHandlers = () => {
  const decreaseButton = document.querySelector('#decrease');
  decreaseButton.addEventListener('click', adjustTemp);

  const increaseButton = document.querySelector('#increase');
  increaseButton.addEventListener('click', adjustTemp);

  const selectSky = document.querySelector('.sky-choice');
  selectSky.addEventListener('change', changeSky);

  const cityInput = document.querySelector('input');
  cityInput.addEventListener('input', updateCity);

  const resetCityButton = document.querySelector('#reset-city');
  resetCityButton.addEventListener('click', resetCity);
}

document.addEventListener('DOMContentLoaded', registerHandlers);
