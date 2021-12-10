const state = {
  tempCount: 50,
  clicked: false,
};

const increaseTempCount = () => {
  const tempCountContainer = document.getElementById('tempValue');
  state.tempCount += 1;
  tempCountContainer.textContent = state.tempCount;
};

const decreaseTempCount = () => {
  const tempCountContainer = document.getElementById('tempValue');
  state.tempCount -= 1;
  tempCountContainer.textContent = state.tempCount;
};

const updateTempColor = (temperature) => {
  const tempCountContainer = document.getElementById('tempValue');
  let color = 'teal';
  if (temperature >= 80) {
    color = 'red';
  } else if (temperature >= 70) {
    color = 'orange';
  } else if (temperature >= 60) {
    color = 'yellow';
  } else if (temperature >= 50) {
    color = 'green';
  }
  tempCountContainer.classList = color;
};

const updateSeason = () => {
  const inputSeason = document.getElementById('seasonSelect').value;
  const seasonContainer = document.getElementById('season');
  let season = '';
  let seasonColor = '';
  if (inputSeason === 'Spring') {
    season = '🌸 🌧🌼🍃 🌤 🌸🌼🌧 🌧🍃';
    seasonColor = 'spring';
  } else if (inputSeason === 'Summer') {
    season = '🕊 🌻 🌼 🦋🍃 🌞 🌼🍃🌻 🐞';
    seasonColor = 'summer';
  } else if (inputSeason === 'Autumn') {
    season = '🍂🍁 🍂🍂 🍁🍂 🍂  🍁🍂🍂';
    seasonColor = 'autumn';
  } else if (inputSeason === 'Winter') {
    season = '❄️🌨💨 🌨❄️💨🌨❄️❄️💨🌨';
    seasonColor = 'winter';
  }
  seasonContainer.textContent = season;
  const outsideContent = document.getElementById('outsideView');
  outsideContent.classList = `look__outside ${seasonColor}`;
};

const registerEventHandlers = () => {
  const temperature = document.getElementsByClassName('orange');
  temperature.addEventListener('click', updateTempColor);

  const increase = document.getElementById('clickIncrease');
  increase.addEventListener('click', increaseTempCount);

  const decrease = document.getElementById('clickDecrease');
  decrease.addEventListener('click', decreaseTempCount);

  updateSeason();
  const seasonSelect = document.getElementById('seasonSelect');
  seasonSelect.addEventListener('change', updateSeason);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
