function changeTemp(x) {
  let el = document.getElementById('temperature_in_fahrenheit');
  let temp = el.innerText;
  temp = Number(temp) + x;
  temp = String(temp);
  el.innerText = temp;
}
// change the temperature by on degree
btn = document.getElementById('increase_temperature');
btn.onclick = () => changeTemp(1);
btn = document.getElementById('decrease_temperature');
btn.onclick = () => changeTemp(-1);

// change the city name everytime there is a change to the text input el
// oninput or onchange to update city name
// syntax = target.oninput = functionRef;

let cityInput = document.querySelector('input');
let newHeader = document.getElementById('header_city_id');

// cityInput.oninput = changeCityNameByTextInput;

// function changeCityNameByTextInput() {
//   newHeader = cityInput;
//   return newHeader;
// }

cityInput.oninput = function () {
  // this.value = this.value.toUpperCase();
  newHeader.innerHTML = cityInput.value;
};
