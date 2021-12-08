// ***** select the HTML element the even will occur on ****
// ***** make a function to run when it occurs *****

const state = {
  temp: 49,
};
// temperature settings
const updateTempStyles = (temp) => {
  const tempArrow = document.getElementById('temp-number');
  let color = 'teal';
  if (temp >= 80) {
    color = 'red';
  } else if (temp >= 70) {
    color = 'orange';
  } else if (temp >= 60) {
    color = 'yellow';
  } else if (temp >= 50) {
    color = 'green';
  }
  tempArrow.classList = color;
};

const updateTemp = (temp) => {
  const tempContainer = document.getElementById('temp-number');
  tempContainer.textContent = temp;
  updateTempStyles(state.temp);
  updateGarden(state.temp);
};

const increaseTemp = () => {
  state.temp += 1;
  updateTemp(state.temp);
};

const decreaseTemp = () => {
  state.temp -= 1;
  updateTemp(state.temp);
};

// changing sky image when select different sky option
const selectSky = document.getElementById('selectSky').value;
selectSky.addEventListener('change', event);

// ******** register that function as an 'event listening' ********
const registerEventHandlers = () => {
  updateSky();
  const skySelect = document.getElementById('selectSky');
  skySelect.addEventListener('change', updateSky);
};

// set date of the week
let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}
document.getElementById('date-time').innerHTML = day;

document.addEventListener('DOMContentLoaded', registerEventHandlers);
