let initTemp = 71;
const city = 'Seattle';

document.getElementById('currentTemp').innerHTML = `${initTemp}&deg;`;

cityValue = document.getElementById('inputCity').value = city;
document.getElementById('cityLog').innerHTML = `${cityValue}✨`;

const input = document.getElementById('inputCity').value;
console.log(input);

function updateValue(e) {
  console.log(e);
  const log = document.getElementById('cityLog');
  log.innerHTML = `${e.target.value}✨`;
}

document.getElementById('currentTemp').innerHTML = `${initTemp}&deg;`;
//creation of increment function
function increment() {
  initTemp += 1;
  document.getElementById('currentTemp').innerHTML = `${initTemp}&deg;`;
  tempColor(initTemp);
}
//creation of decrement function
function decrement() {
  initTemp -= 1;
  document.getElementById('currentTemp').innerHTML = `${initTemp}&deg;`;
  tempColor(initTemp);
}

function tempColor() {
  if (initTemp >= 80) {
    document.getElementById('currentTemp').style.color = '#EA0009';
    document.getElementById('land').textContent = `"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"`;
  } else if (initTemp > 69 && initTemp < 80) {
    document.getElementById('currentTemp').style.color = '#F0940A';
    document.getElementById('land').textContent = `"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"`;
  } else if (initTemp > 59 && initTemp < 70) {
    document.getElementById('currentTemp').style.color = '#F4D10A';
    document.getElementById('land').textContent = `"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"`;
  } else if (initTemp > 49 && initTemp < 60) {
    document.getElementById('currentTemp').style.color = '#1F7001';
    document.getElementById(
      'land'
    ).textContent = `"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"`;
  } else {
    document.getElementById('currentTemp').style.color = '#256D6C';
    document.getElementById(
      'land'
    ).textContent = `"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"`;
  }
}

// // Function for changing color of temp text
// const tempTextColor = () => {
//   const tempToColor = document.getElementById('currentTemp').innerHTML;
//   console.log(tempToColor);
// };

// const tempValue = document.getElementById('currentTemp').innerHTML;
// console.log(tempValue);

const changeSky = () => {
  console.log('hello');
  const changeDisplay = document.getElementById('tempDisplay');
  const changeBackground = document.getElementById('mainCover');
  const changeHeaders = document.getElementById('headers');
  const changeCity = document.getElementById('lovelyCity');
  const changeName = document.getElementById('cityLog');
  console.log(changeDisplay);
  console.log(changeBackground);
  const selector = document.getElementById('selectSky');
  const choice = selector.value;
  console.log(choice);
  currentClass = changeDisplay.classList;
  if (choice === 'sunny') {
    changeDisplay.style.backgroundImage =
      "url('./assets/landscapes/" + choice + ".jpeg')";
    changeBackground.style.background = '#D6FFFF';
    changeHeaders.style.color = 'gray';
    changeCity.style.color = 'gray';
    changeName.style.color = 'gray';
    document.getElementById('sky').textContent = `"☁️ ☁️ ☁️ ☀️ ☁️ ☁️"`;
  } else if (choice === 'rainy') {
    changeDisplay.style.backgroundImage =
      "url('./assets/landscapes/" + choice + ".jpeg')";
    changeBackground.style.background = '#9FCFE0';
    changeHeaders.style.color = 'white';
    changeCity.style.color = 'white';
    changeName.style.color = 'white';
    document.getElementById('sky').textContent = `"🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"`;
  } else if (choice === 'cloudy') {
    changeDisplay.style.backgroundImage =
      "url('./assets/landscapes/" + choice + ".jpeg')";
    changeBackground.style.background = '#C9C9C9';
    changeHeaders.style.color = 'white';
    changeCity.style.color = 'white';
    changeName.style.color = 'white';
    document.getElementById('sky').textContent = `"☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"`;
  } else if (choice === 'snow') {
    changeDisplay.style.backgroundImage =
      "url('./assets/landscapes/" + choice + ".jpeg')";
    changeBackground.style.background = '#A1B6D6';
    changeHeaders.style.color = 'white';
    changeCity.style.color = 'white';
    changeName.style.color = 'white';
    document.getElementById('sky').textContent = `"🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"`;
    console.log(changeDisplay);
  }
};

const registerEventHandlers = () => {
  const input = document.getElementById('inputCity');
  input.addEventListener('input', updateValue);

  const selectSky = document.getElementById('selectSky');
  selectSky.addEventListener('change', changeSky);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
