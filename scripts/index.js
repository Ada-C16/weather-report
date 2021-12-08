// SELECT ELEMENT TO MODIFY
const tempElement = document.getElementById('temp');

// TEMP DISPLAY
const emojiHolder = document.querySelector('#emoji-holder');
console.log(emojiHolder);

const tempUp = document.createElement('button');
tempUp.textContent = '⬆️';
emojiHolder.appendChild(tempUp);

const tempDown = document.createElement('button');
tempDown.textContent = '⬇️';
emojiHolder.appendChild(tempDown);
tempElement.appendChild(emojiHolder);

const tempNum = document.createElement('h3');
tempNum.textContent = 68;
tempNum.id = 'temp-text';
tempElement.appendChild(tempNum);

// ADD TEMP FUNCTIONALITY
let webTemp = 68;

let currentTemp = (document.getElementById('temp-text').innerText = webTemp);
console.log(currentTemp);

const upTempFunc = () => {
  webTemp = webTemp + 1;
  document.getElementById('temp-text').innerText = webTemp;
};

const downTempFunc = () => {
  webTemp = webTemp + 1;
  document.getElementById('temp-text').innerText = webTemp;
};

// SKY DISPLAY

const skyElement = document.getElementById('temp');

// CITY DISPLAY
const cityElement = document.getElementById('temp');

// WEATHER GARDEN
const weatherGarden = document.getElementsByClassName('garden-display');

// Need to add this for eventListener
// document.addEventListener('DOMContentLoaded', registerEventHandlers);

// if (document.readyState !== 'loading') {
//   loadTasks();
// } else {
//   document.addEventListener('DOMContentLoaded', loadTasks);
// }
