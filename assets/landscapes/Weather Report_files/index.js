let initTemp = 71;
const city = 'Seattle';

document.getElementById('currentTemp').innerHTML = initTemp;

cityValue = document.getElementById('inputCity').value = city;
document.getElementById('city1').innerHTML = `${cityValue}✨`;

// const state = {
//   currentTemp: (document.getElementById('currentTemp').innerHTML = initTemp),
// };

// document.getElementById('currentTemp';

// const changeTemp = () => {
//   console.log('hello');
//   var tempToChange = document.getElementById('currentTemp').innerHTML;
//   console.log(tempToChange);
//   let increment = tempToChange;
//   console.log(increment);
//   ++increment;
//   console.log(increment);
//   document.getElementById('currentTemp').innerHTML = increment;
// };

//printing default value of data that is 0 in h2 tag
document.getElementById('currentTemp').innerHTML = initTemp;

//creation of increment function
function increment() {
  initTemp += 1;
  document.getElementById('currentTemp').innerHTML = initTemp;
}
//creation of decrement function
function decrement() {
  initTemp -= 1;
  document.getElementById('currentTemp').innerHTML = initTemp;
}

// const changeTempDown = () => {
//   state.currentTemp += 1;
//   var tempToChange = document.getElementById('currentTemp').innerHTML;
//   tempToChange = state.currentTemp;
// let decrease = ;
// --decrease;
// console.log(decrease);
// document.getElementById('currentTemp').innerHTML = decrease;
// };

const registerEventHandlers = () => {
  // const tempUp = document.getElementById('tempAdjustUp');
  // tempUp.addEventListener('click', increment);
  // const tempLow = document.getElementById('tempAdjustLow');
  // tempLow.addEventListener('click', changeTempDown);
};
// const changeTemp = () => {
//   const tempToChange = document.getElementById('#currentTemp');
//   consol
//   const tempValue = tempToChange.innerHTML;
//   console.log(tempValue);
//   ++tempValue;
//   console.log(tempvalue);
//   document.getElementById('#currentTemp').innerHTML = tempValue;
// };

// const registerEventHandlers = () => {
//   const tempUp = document.getElementById('#tempAdjustUp');
//   tempUp.addEventListener('click', changeTemp);
// };

document.addEventListener('DOMContentLoaded', registerEventHandlers);

// onst tempUp = document.getElementById('currentTemp').value;
//   document.getElementById('current-temp').innerHTML = inputTempVariable

// document.getElementById('tempAdjustHigh').onclick;
// document.getElementById('');

// const setTemp()=>{
//   let
//   initTemp=initTemp
// }

const resetCity = () => {
  let inputCityVariable = document.getElementById('input-city').value;
  document.getElementById('seattleCity').innerHTML = inputCityVariable;
};
