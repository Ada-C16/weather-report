// variable storing fixed temperature
const temp = {
  tempByDegree: 70,
};

// variable holding garden ground emojis query
const garden = document.querySelector('#ground-emojis')




// behaviour of temp toggles
const increaseTemp = () => {
  temp.tempByDegree += 1;
  const tempContainer = document.querySelector('#temperature');
  tempContainer.textContent = `${temp.tempByDegree}`;
  let color = changeTempColor();
  tempContainer.className = color;

};

const decreaseTemp = () => {
  const tempContainer = document.querySelector('#temperature');
  tempContainer.textContent = `${temp.tempByDegree}`;
  temp.tempByDegree -= 1;
  let color = changeTempColor();
  tempContainer.className = color;
}
// behaviour of selecting sky dropdown
const selectSky = () => {
  const skySelector = document.querySelector('#sky')
  const skyEmojis = document.querySelector('#sky-emojis')
  // console.log(skySelector.value)
  if (skySelector.value === "cloudy") {
    skyEmojis.innerHTML = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
  } else if (skySelector.value === "rainy") {
    skyEmojis.innerHTML = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
  } else if (skySelector.value ==="sunny"){
    skyEmojis.innerHTML = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
  } else if (skySelector.value === "snowy") {
    skyEmojis.innerHTML = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
  }
}

// behaviour of temperature changes
const changeTempColor = () => {
  const tempChanger = document.querySelector("temperature");
  let color = ''
  if (temp.tempByDegree  < 49) {
    color = "teal"
    garden.innerHTML = "🌨❄️🥶🌬️❄️❄️⛄️⛄️⛄️🌬️🥶🌨"
  } else if (temp.tempByDegree  < 59) {
    color = "green"
    garden.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
  } else if (temp.tempByDegree  < 69) {
    color = "yellow"
    garden.innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
  } else if (temp.tempByDegree  < 79) {
    color = "orange"
    garden.innerHTML = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
  } else {
    color = "red"
    garden.innerHTML = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
}
  return color
}

// behaviour of sky changes
// const changeSky = () => {
//   let sky = ''
//   if (skySelector === "cloudy") {
//     skyEmojis.innerHTML = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
//   } else if (skySelector === "rainy") {
//     skyEmojis.innerHTML = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
//   }
// }

// event handler for temperature toggle
const registerEventHandlers = () => {
  const upButton = document.querySelector('#up-arrow');
  upButton.addEventListener('click', increaseTemp);

  const downButton = document.querySelector('#down-arrow');
  downButton.addEventListener('click', decreaseTemp);

  const skySelector  = document.querySelector('#sky');
  skySelector.addEventListener('change', selectSky);
};


registerEventHandlers();


// conditionals for landscape changes in weather garden
// 80 & above = text color red = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
// 70-79 = text color orange = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
// 60-69 = = text color yellor =	"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
// 59 or below = text color green ="🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
// 49 or below = text color teal = "🌨❄️🥶🌬️❄️❄️⛄️⛄️⛄️🌬️🥶🌨"

