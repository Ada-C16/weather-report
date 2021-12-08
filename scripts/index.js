// SELECT ELEMENT TO MODIFY
const tempElement = document.getElementById('temp');

// TEMP DISPLAY

const emojiHolder = document.getElementById('emoji-holder');

const tempUp = document.createElement('p');
tempUp.textContent = '⬆️';
tempUp.className = 'temp-changes';
emojiHolder.appendChild(tempUp);

const tempDown = document.createElement('p');
tempDown.textContent = '⬇️';
tempDown.className = 'temp-changes';
emojiHolder.appendChild(tempDown);
tempElement.appendChild(emojiHolder);

const tempNum = document.createElement('p');
tempNum.textContent = 68;
tempNum.className = 'temp-text';
tempElement.appendChild(tempNum);

// SKY DISPLAY

const skyElement = document.getElementById('temp');

// CITY DISPLAY
const cityElement = document.getElementById('temp');

// WEATHER GARDEN
const weatherGarden = document.getElementsByClassName('garden-display');

// Need to add this for eventListener
// document.addEventListener('DOMContentLoaded', registerEventHandlers);
