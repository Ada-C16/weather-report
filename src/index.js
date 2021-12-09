// Temperature //
const state = {
  tempByDegree: 75,
};

const clickButtonUp = () => {
  state.tempByDegree += 1;
  const tempElement = document.querySelector('#temp');
  tempElement.textContent = `${state.tempByDegree}`;
  color = changeTempColor();
  tempElement.className = color;
  //landscape
  const landElement = document.querySelector('#landscape');
  landscape = lanscapeScale();
  landElement.textContent = landscape;
};
const tempUp = document.querySelector('#tempUp');
tempUp.addEventListener('click', clickButtonUp);

const clickButtonDown = () => {
  state.tempByDegree -= 1;
  const tempChanger = document.querySelector('#temp');
  tempChanger.textContent = `${state.tempByDegree}`;
  color = changeTempColor();
  tempChanger.className = color;
  //landscape
  const landElement = document.querySelector('#landscape');
  landscape = lanscapeScale();
  landElement.textContent = landscape;
};

const selectSky = () => {
  const skySelector = document.querySelector('#sky');
  console.log(skySelector.value);
};
const tempDown = document.querySelector('#tempDown');
tempDown.addEventListener('click', clickButtonDown);

//change temp range color
const changeTempColor = () => {
  let color = '';
  if (state.tempByDegree < 49) {
    color = 'teal';
  } else if (state.tempByDegree < 60) {
    color = 'green';
  } else if (state.tempByDegree < 70) {
    color = 'yellow';
  } else if (state.tempByDegree < 80) {
    color = 'orange';
  } else {
    color = 'red';
  }
  return color;
};

const lanscapeScale = () => {
  let landscape = '';
  if (state.tempByDegree < 49) {
    landscape = '🌨❄️🥶🌬️❄️❄️⛄️⛄️⛄️🌬️🥶🌨';
  } else if (state.tempByDegree < 60) {
    landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (state.tempByDegree < 70) {
    landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.tempByDegree < 80) {
    landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else {
    landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  }
  return landscape;
};

// Sky //
const skySelector = document.querySelector('#sky');

skySelector.addEventListener('change', selectSky);

// City Name //
