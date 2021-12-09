// variable storing fixed temperature
const temp = {
  tempByDegree: 70,
};

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
  console.log(skySelector.value)
}

// behaviour of temperature changes
const changeTempColor = () => {
  const tempChanger = document.querySelector("temperature");
  let color = ''
  if (temp.tempByDegree  < 49) {
    color = "teal"
  } else if (temp.tempByDegree  < 59) {
    color = "green"
  } else if (temp.tempByDegree  < 69) {
    color = "yellow"
  } else if (temp.tempByDegree  < 79) {
    color = "orange"
  } else {
    color = "red"
}
  return color

}

// event handler for temperature toggle
const registerEventHandlers = () => {
  const upButton = document.querySelector('#up-arrow');
  upButton.addEventListener('click', increaseTemp);

  const downButton = document.querySelector('#down-arrow');
  downButton.addEventListener('click', decreaseTemp);
};

  const skySelector  = document.querySelector('#sky');
  skySelector.addEventListener('change', selectSky);


registerEventHandlers();


// conditionals for landscape changes in weather garden
// 80 & above = text color red = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
// 70-79 = text color orange = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
// 60-69 = = text color yellor =	"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
// 59 or below = text color green ="🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
// 49 or below = text color teal = "🌨❄️🥶🌬️❄️❄️⛄️⛄️⛄️🌬️🥶🌨"

