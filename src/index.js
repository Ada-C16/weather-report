// display a temp variable on the page
// make up button clickable and increase the temp
// make down button clickable and decrease the temp
// change the scene depending on the sky
// make an input city name display on the page

const state = {
  clickCount: 0,
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

const registerEventHandlers = () => {
  const tempUp = document.getElementById('up');
  const tempDown = document.getElementById('down');
  tempUp.addEventListener('click', increaseClickCount);
  tempDown.addEventListener('click', decreaseClickCount);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
