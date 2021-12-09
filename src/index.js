const state = {
  temp: 70,
  sky: '',
};

const controlTemp = (e) => {
  changeTempNum(e);
  changeTempColor();
  changeActivityView();
};

const changeTempNum = (e) => {
  const tempNum = document.getElementById('tempNum');
  if (e.target.textContent === 'up') {
    state.temp++;
  } else {
    state.temp--;
  }
  tempNum.textContent = state.temp;
};

const changeTempColor = () => {
  const tempText = document.getElementById('temp');
  let color;
  if (state.temp >= 87) {
    color = 'red';
  } else if (state.temp >= 82) {
    color = 'orange';
  } else if (state.temp >= 68) {
    color = 'green';
  } else if (state.temp >= 60) {
    color = 'gray';
  } else if (state.temp >= 50) {
    color = 'blue';
  } else {
    color = 'white';
  }
  tempText.style.color = color;
};

const changeActivityView = () => {
  const activityEmoji = document.querySelector('.activity-emoji');
  let emoji = '';
  if (state.temp >= 87 && state.sky === 'sunny') {
    emoji = 'hot and sunny';
  } else if (state.temp >= 82) {
    emoji = '🔥';
  } else if (state.temp >= 68) {
    emoji = '&#127957';
  } else if (state.temp >= 60) {
    emoji = '&#9918';
  } else if (state.temp >= 50) {
    emoji = '🔥';
  } else {
    emoji = '&#9924';
  }
  activityEmoji.innerHTML = emoji;
};

const controlSky = (e) => {
  state.sky = e.target.value;
  changeActivityView();
  changeSkyView();
};

const changeSkyView = () => {
  const viewBg = document.querySelector('.view-background');
  const skyEmoji = document.querySelector('.sky-emoji');
  let emoji = '';
  let color;

  if (state.sky === 'sunny') {
    emoji = '&#9728;';
    color = 'skyblue';
  } else if (state.sky === 'cloudy') {
    emoji = '&#9729;';
    color = 'gainsboro';
  } else if (state.sky === 'rainy') {
    emoji = '&#127783;';
    color = 'lightgray';
  } else if (state.sky === 'snowy') {
    emoji = '&#10052;';
    color = 'snow';
  }
  skyEmoji.innerHTML = emoji;
  viewBg.style.backgroundColor = color;
};

const controlLocation = () => {
  const locationText = document.getElementById('location');
  const locationInput = document.getElementById('location-input');
  locationText.textContent = locationInput.value;
  locationInput.value = '';
};

const registerHandler = () => {
  // temp
  const tempBtns = document.querySelectorAll('.temp-btn');
  tempBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => controlTemp(e));
  });
  // sky
  const skyCondition = document.getElementById('sky-condition');
  skyCondition.addEventListener('change', (e) => {
    controlSky(e);
  });
  // location
  const submitBtn = document.querySelector('.submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    controlLocation();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  state.sky = document.getElementById('sky-condition').value;
  changeSkyView();
  changeActivityView();
  registerHandler();
});
