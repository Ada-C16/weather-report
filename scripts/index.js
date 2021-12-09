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

// WAVE 3&4

// SKY DISPLAY

const skyElement = document.getElementById('temp');

// CITY DISPLAY
const cityElement = document.getElementById('temp');

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
