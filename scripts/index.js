const state = {
  temp: 68,
};

const tempElement = document.getElementById('temp');

const tempEmojiHolder = document.querySelector('#temp-emoji-holder');

const tempUp = document.createElement('button');
tempUp.id = 'temp-up';
tempUp.textContent = '⬆️';
tempEmojiHolder.appendChild(tempUp);

const tempDown = document.createElement('button');
tempDown.id = 'temp-down';
tempDown.textContent = '⬇️';
tempEmojiHolder.appendChild(tempDown);
tempElement.appendChild(tempEmojiHolder);

const tempNum = document.createElement('p');
tempNum.textContent = state.temp;
tempNum.id = 'temp-text';
tempElement.appendChild(tempNum);

// ADD TEMP FUNCTIONALITY

// ADD
const upTempFunc = () => {
  state.temp = state.temp + 1;
  document.getElementById('temp-text').innerHTML = state.temp;

  displayFlowers(state.temp);
};

// SUBTRACT
const downTempFunc = () => {
  state.temp = state.temp - 1;
  document.getElementById('temp-text').innerHTML = state.temp;
};

// REGISTER EVENT HANDLER

// WEATHER GARDEN

const changeFlowerGarden = document.getElementById('garden-flowers');

const changeFlowers = () => {
  console.log(state.temp);
  if (state.temp < 59) {
    changeFlowerGarden.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (state.temp <= 69) {
    changeFlowerGarden.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (state.temp <= 79) {
    changeFlowerGarden.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else {
    changeFlowerGarden.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  }
};
changeFlowerGarden.addEventListener('ADD EVENT NAME', () => changeFlowers());

// SKY DISPLAY

const skyElement = document.getElementById('sky');

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const changeSky = () => {
  document.getElementById('myDropdown').classList.toggle('show');
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// CITY DISPLAY
const cityElement = document.getElementById('city');

// Need to add this for eventListener

const registerEventHandlers = (event) => {
  const addTempButton = document.getElementById('temp-up');
  addTempButton.addEventListener('click', () => upTempFunc());

  const downTempButton = document.getElementById('temp-down');
  downTempButton.addEventListener('click', () => downTempFunc());
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
