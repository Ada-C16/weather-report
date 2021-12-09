// import '../styles/index.css';

const tempDegree = document.querySelector('#temperatureDegree');
const landscape = document.querySelector('#landscape');
const state = {
  tempNumber: 80,
};

// Temperature up and down buttons
const increaseTemperature = (event) => {
  console.log(event);
  state.tempNumber += 1;
  //   const temperatureChangeContainer =
  //     document.querySelector('#temperatureDegree');
  tempDegree.textContent = `${state.tempNumber}`;
  changeTheme();
};

const decreaseTemperature = (event) => {
  console.log(event);
  state.tempNumber -= 1;
  // const temperatureChangeContainer =
  //   document.querySelector('#temperatureDegree');
  tempDegree.textContent = `${state.tempNumber}`;
  changeTheme();
};

//Issue: needs to have colors c
const changeTheme = () => {
  // if different ranges, change color
  if (state.tempNumber >= 80) {
    tempDegree.style.color = 'red';
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (state.tempNumber >= 70 && state.tempNumber <= 79) {
    tempDegree.style.color = 'orange';
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (state.tempNumber >= 60 && state.tempNumber <= 69) {
    tempDegree.style.color = 'yellow';
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.tempNumber >= 50 && state.tempNumber <= 59) {
    tempDegree.style.color = 'green';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else {
    tempDegree.style.color = 'teal';
    landscape.textContent = '⛄️⛄️⛄️⛄️⛄️🌲⛄️⛄️🌲⛄️🌲⛄️🌲';
  }
};

//register event handlers

const registerEventHandlers = () => {
  //up button
  const tempUpButton = document.querySelector('#tempButtonUp');
  tempUpButton.addEventListener('click', increaseTemperature);
  //down button
  const tempDownButton = document.querySelector('#tempButtonDown');
  tempDownButton.addEventListener('click', decreaseTemperature);

  //wave 4: onchangehandler
};

const setUp = () => {
  tempDegree.textContent = `${state.tempNumber}`;
  registerEventHandlers();
  changeTheme();
};
//execute registerEventHandlers
//runs code once DOM is ready. DOM isn't fully loaded, eventhandlers might not exist yet. Ex: buttoon on line 35
document.addEventListener('DOMContentLoaded', setUp);
