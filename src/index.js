import "./index.css";

let temperatureValue = document.getElementById('temp-value');
temperatureValue.textContent = 71;
// create event handler
const changingTemps = () => {
  temperatureValue += 1;
  if (temperatureValue >= 80) {
    temperatureValue.className = 'red';
  } else if (temperatureValue < 80 && temperatureValue >= 70) {
    temperatureValue.className = 'orange';
  } else if (temperatureValue < 70 && temperatureValue >= 60) {
    temperatureValue.className = 'yellow';
  } else if (temperatureValue < 60 && temperatureValue >= 50) {
    temperatureValue.className = 'green';
  } else {
    temperatureValue.className = 'teal';
  }
};
//this is registering the event handler
const registerChangingTemps = () => {
  temp.addEventListener('click', changingTemps);
};

document.addEventListener('DOMContentLoaded', registerChangingTemps);
