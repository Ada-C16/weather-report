// change the scene depending on the sky
// make a reset city name button
// add a "landscape" element

const state = {
  clickCount: 50,
};

const colors = (clicks, text) => {
  if (clicks < 50) {
    text.style.color = 'blue';
  } else if (clicks < 59) {
    text.style.color = 'green';
  } else if (clicks < 69) {
    text.style.color = 'yellow';
  } else if (clicks < 79) {
    text.style.color = 'pink';
  } else {
    text.style.color = 'pink';
  }
};

const landscape = (clicks, container) => {
  if (clicks < 59) {
    container.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (clicks < 69) {
    container.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (clicks < 79) {
    container.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else {
    container.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  }
};
const increaseClickCount = () => {
  const displayTemp = document.getElementById('temp');
  const landscapeDisplay = document.getElementById('landscape-scene');
  state.clickCount += 1;
  displayTemp.textContent = state.clickCount;
  console.log('up');
  colors(state.clickCount, displayTemp);
  landscape(state.clickCount, landscapeDisplay);
};

const decreaseClickCount = () => {
  const displayTemp = document.getElementById('temp');
  state.clickCount -= 1;
  displayTemp.textContent = state.clickCount;
  console.log('down');
  colors(state.clickCount, displayTemp);
};

const displayCity = () => {
  console.log('test');
  document.getElementById('city-title').textContent =
    document.getElementById('city-name').value;
  return false;
};

const removeCity = () => {
  console.log('test');
  document.getElementById('city-title').textContent = '';
  return false;
};

const registerEventHandlers = () => {
  const tempUp = document.getElementById('up');
  const tempDown = document.getElementById('down');
  const cityPopulate = document.getElementById('submit');
  const cityRemove = document.getElementById('reset');
  tempUp.addEventListener('click', increaseClickCount);
  tempDown.addEventListener('click', decreaseClickCount);
  cityPopulate.addEventListener('click', displayCity);
  cityRemove.addEventListener('click', removeCity);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
