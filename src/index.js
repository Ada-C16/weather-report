const state = {
  tempGauge: 70,
};

const updateTempState = () => {
  const tempGaugeElement = document.querySelector('#temp-gauge');
  tempGaugeElement.textContent = `${state.tempGauge}`;

  const landscapeEmojisElement = document.querySelector('#landscape-emojis');
  if (state.tempGauge >= 80) {
    landscapeEmojisElement.textContent = `🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂`;
  } else if (state.tempGauge >= 70) {
    landscapeEmojisElement.textContent = `🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷`; 
  } else if (state.tempGauge >= 60) {
    landscapeEmojisElement.textContent = `🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃`;
  } else if (state.tempGauge <= 59) {
    landscapeEmojisElement.textContent = `🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲`;
  }
};

const tempColor = () => {
  const tempGaugeElement = document.querySelector('#temp-gauge');

  if (state.tempGauge >= 80) {
    tempGaugeElement.className = "hot";
  } else if (state.tempGauge >= 70) {
    tempGaugeElement.className = "normal";
  } else if (state.tempGauge >= 60) {
    tempGaugeElement.className = "chilly";
  } else if (state.tempGauge >= 50) {
    tempGaugeElement.className = "cold";
  } else if (state.tempGauge <= 49) {
    tempGaugeElement.className = "freezing";
  }
}

const tempUp = (event) => {
  console.log('in tempUp', event);
  state.tempGauge += 1;
  updateTempState();
  tempColor();
};

const tempDown = (event) => {
  console.log('in tempDown', event);
  state.tempGauge -= 1;
  updateTempState();
  tempColor();
};

const changeSky = (event) => {
  const skyElement = document.querySelector("#sky-select");
  const skyEmojis = document.querySelector("#sky-emojis");

  if (skyElement.value === "cloudy") {
    console.log(skyElement.value);
    skyEmojis.textContent = `☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️`
  } else if (skyElement.value === "rainy") {
    console.log(skyElement.value);
    skyEmojis.textContent = `🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧`
  } else if (skyElement.value === "sunny") {
    console.log(skyElement.value);
    skyEmojis.textContent = `☁️ ☁️ ☁️ ☀️ ☁️ ☁️`
  } else if (skyElement.value === "snowy") {
    console.log(skyElement.value);
    skyEmojis.textContent = `🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨`
  };
};

const registerEventHandlers = (event) => {
  console.log('in the registerEventHandlers', event);
  const upButton = document.querySelector('#upButton');
  upButton.addEventListener('click', tempUp);
  const downButton = document.querySelector('#downButton');
  downButton.addEventListener('click', tempDown);
  const skyElement = document.querySelector("#sky-select");
  skyElement.addEventListener('change', changeSky);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
console.log('hello');
