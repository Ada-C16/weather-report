const state = {
  temp: 68
};

let isFahrenheit = true

const vibe = {
  sheet: 2
}

const changeTemp = (direction) => {
  if (direction === 'up') {
    state.temp += 1;
  } else if (direction === 'down') {
    state.temp -= 1;
  } else if (direction === null) {
    pass
  }

  const temperature = document.querySelector("#temperature");
  if (isFahrenheit) {
    temperature.textContent = `${state.temp}℉`;
  } else {
    temperature.textContent = `${(state.temp -32) * 5/9}℃`;
  }
  changeTempFontColor();
}


const swapStyleSheet = (event) => {

  if (vibe.sheet === 1 || vibe.sheet === 2) {
      vibe.sheet += 1;
  } else if (vibe.sheet === 3) {
      vibe.sheet = 1;
  }

  document.getElementById("vibe").setAttribute("href", `styles/vibe${vibe.sheet}.css`)
}

const changeTempFontColor = () => {
  if (state.temp <= 49) {
    color = "#3F50B5";
    landscape = "🤧⛄️🌲⛄️🛷🌲⛷🗻🌲⛸🏂⛄️🍂❄️";
  } else if (state.temp >= 50 && state.temp<= 59) {
    color = "#00BCD4";
    landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  } else if (state.temp >= 60 && state.temp  <= 69) {
    color = "#FEC106";
    landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
  } else if (state.temp >= 70 && state.temp  <= 79) {
    color = "#FF9802";
    landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  } else {
    color = "#F44336";
    landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  }
  document.getElementById("temperature").style.color = color;
  document.getElementById("landscapeContainer").textContent = landscape;
}

const submitInput = () => {
  let guestName = document.getElementById("fname").value;
  let location = document.getElementById("location").value;
  document.querySelector("#inputFormContents").textContent = `Welcome, ${guestName} :) Here's the weather for lovely ${location}!`
}

const changeSky = (currentSelection) => {
  let emojis = ''

  if (currentSelection == "sunny") {
    emojis = "☀️ 😎 ☀️";
  } else if (currentSelection == "cloudy") {
    emojis = "☁️ ☁️ ☁️";
  } else if (currentSelection == "rainy") {
    emojis = "🌧 💧 🌦";
  } else if (currentSelection == "snowy") {
    emojis = "🌨 ❄️ 🌨";
  } else {
    emojis = "🐻";
  }

  document.querySelector("#h1Header").textContent = `${emojis} MyWeather ${emojis}`;
}

const registerEventHandlers = (event) => {
  const tempButtonUp = document.querySelector("#plusButton");
  tempButtonUp.addEventListener("click", function(){changeTemp('up')});

  const tempButtonDown = document.querySelector("#minusButton");
  tempButtonDown.addEventListener("click", function(){changeTemp('down')});

  const celsiusSlider = document.querySelector("#switch");
  celsiusSlider.addEventListener("change",function(){
    if (isFahrenheit) {
      isFahrenheit = false;
    } else {
      isFahrenheit = true;
    }
    changeTemp("");
  })

  const vibeChangeButton = document.querySelector("#footerMsg");
  vibeChangeButton.addEventListener("click", swapStyleSheet);

  const submitInputButton = document.querySelector("#inputButton");
  submitInputButton.addEventListener("click", submitInput);

  const skySelectDropdown = document.querySelector("#sky");
  skySelectDropdown.addEventListener("change", function(){
    let currentSelection = skySelectDropdown.value
    changeSky(currentSelection)
  })
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
