// SELECT ELEMENT TO MODIFY
const tempElement = document.getElementById('temp');

// TEMP DISPLAY
const tempEmojiHolder = document.querySelector('#temp-emoji-holder');
// console.log(tempEmojiHolder);

const tempUp = document.createElement('button');
tempUp.id = 'temp-up';
tempUp.textContent = '⬆️';
tempEmojiHolder.appendChild(tempUp);

const tempDown = document.createElement('button');
tempDown.id = 'temp-down';
tempDown.textContent = '⬇️';
tempEmojiHolder.appendChild(tempDown);
tempElement.appendChild(tempEmojiHolder);

const state = {
  temp: 68,
};

const tempNum = document.createElement('p');
tempNum.textContent = state.temp;
tempNum.id = 'temp-text';
tempElement.appendChild(tempNum);

// ADD TEMP FUNCTIONALITY

// ADD TEMP

const upTempFunc = () => {
  state.temp = state.temp + 1;
  document.getElementById('temp-text').innerHTML = state.temp;

  displayFlowers(state.temp);
};

// SUBTRACT TEMP
const downTempFunc = () => {
  state.temp = state.temp - 1;
  document.getElementById('temp-text').innerHTML = state.temp;
};

const addTempButton = document.getElementById('temp-up');
const downTempButton = document.getElementById('temp-down');

// REGISTER EVENT HANDLER
addTempButton.addEventListener('click', () => upTempFunc());
downTempButton.addEventListener('click', () => downTempFunc());

// WEATHER GARDEN
const weatherGarden = document.getElementById('garden-display');

const changeFlowerGarden = document.getElementById('garden-flowers');

const changeFlowers = () => {
  if (state.temp < 59) {
    changeFlowerGarden.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (60 < state.temp || state.temp <= 69) {
    changeFlowerGarden.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (70 <= state.temp || state.temp <= 79) {
    changeFlowerGarden.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else {
    changeFlowerGarden.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  }
};
changeFlowerGarden.addEventListener();

// WAVE 3&4

// SKY DISPLAY

const skyElement = document.getElementById('sky');

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function changeSky() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// CITY DISPLAY
const cityElement = document.getElementById('city');

// Need to add this for eventListener
// document.addEventListener('DOMContentLoaded', registerEventHandlers);

// const registerEventHandlers = (event) => {
//   console.log('in registerEventHandlers:', event);
//   // ... other registerEventHandler functionality
// };

// const registerEventHandlers = (event) => {
//   const addTempButton = document.getElementById('temp-up');
//   addTempButton.addEventListener('click', addCrab);
// };

// document.addEventListener('DOMContentLoaded', registerEventHandlers);

// if (document.readyState !== 'loading') {
//   __func__;
// } else {
//   document.addEventListener('DOMContentLoaded', _____);
// }
