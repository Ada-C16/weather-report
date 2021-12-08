// select p by id, adjust temp variable, set p to temp variable
// Create a state object that will hold the temp number
const state = {
  tempByDegree: 75,
};

const pushButton = () => {
  state.tempByDegree += 1;
  const tempChanger = document.querySelector('#temp');
  temp.textContent = `${state.tempByDegree}`;
};
const tempUp = document.querySelector('#tempUp');
tempUp.addEventListener('click', pushButton);

const buttonDown = () => {
  state.tempByDegree -= 1;
  const tempChanger = document.querySelector('#temp');
  temp.textContent = `${state.tempByDegree}`;
};
const tempDown = document.querySelector('#tempDown');
tempDown.addEventListener('click', buttonDown);
