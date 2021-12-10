// change the scene depending on the sky
// make a reset city name button
// add a "landscape" element

const state = {
  clickCount: 50,
};

const increaseClickCount = () => {
  const displayTemp = document.getElementById('temp');
  state.clickCount += 1;
  displayTemp.textContent = state.clickCount;
  console.log('up');
};

const decreaseClickCount = () => {
  const displayTemp = document.getElementById('temp');
  state.clickCount -= 1;
  displayTemp.textContent = state.clickCount;
  console.log('down');
};

const displayCity = () => {
  console.log('test');
  document.getElementById('city-title').textContent =
    document.getElementById('user').value;
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
