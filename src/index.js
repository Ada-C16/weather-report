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


const swapStyleSheet = (direction) => {
  if (direction === 'left') {
    if (vibe.sheet > 1) {
      vibe.sheet -= 1;
    }
  } else if (direction === 'right') {
    if (vibe.sheet <3) {
      vibe.sheet += 1;
    }
  }

  document.getElementById("vibe").setAttribute("href", `styles/vibe${vibe.sheet}.css`)
  document.getElementById("vibeName").textContent=`Vibe #${vibe.sheet}`
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

  const vibeChangerLeft = document.querySelector("#left");
  vibeChangerLeft.addEventListener("click", function(){
    swapStyleSheet('left')
  })

  const vibeChangerRight = document.querySelector("#right");
  vibeChangerRight.addEventListener("click", function(){
    swapStyleSheet('right')
  })

  const submitInputButton = document.querySelector("#inputButton");
  submitInputButton.addEventListener("click", submitInput);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
