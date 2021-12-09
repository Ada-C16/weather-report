// funciton to change temp

function changeTemp(x) {
  let el = document.getElementById('temperature_in_fahrenheit');
  let temp = el.innerText;
  temp = Number(temp) + x;
  temp = String(temp);
  el.innerText = temp;
}

// function increaseTemp() {
//   changeTemp(1);
// }

function decreaseTemp() {
  changeTemp(1);
}

btn = document.getElementById('increase_temperature');
// btn.onclick = increaseTemp;

btn.onclick = () => changeTemp(1);
btn = document.getElementById('decrease_temperature');
btn.onclick = () => changeTemp(-1);

// oninput or onchange to update city name
