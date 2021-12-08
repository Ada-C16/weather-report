const state = {
  temp: 70,
};

const controlTemp = (e) => {
  changeTempNum(e);
  changeTempColor();
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

const controlSky = (e) => {
  console.log(e.target.value);
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

document.addEventListener('DOMContentLoaded', registerHandler);
