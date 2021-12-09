var tempLower = document.getElementById('lower_temp');
var tempHigher = document.getElementById('higher_temp');
const tempConst = document.getElementById('temp_const');

tempLower.addEventListener('click', (tempConst) => {
  tempConstText = tempConst.toString();
  tempConst.textContent = tempConstText;
});
tempHigher.addEventListener('click', () => {
  alert('Youve increased the temperature');
});

// if (tempLower) {
//   // temp=temp-1;
//   console.log(tempHigher);
// } else {
//   // temp=temp+1
//   document.body.style.background = 'red';
// }
// const tempColor = (temp) => {
//   if (temp >= 35) {
//     // temp color becomes red
//     // background image becomes desert hot;
//   }
//   elif (temp<35 && temp>=25) {
//     // temp color becomes orange
//     // background image becomes warm spring;
//   }
//   elif (temp<25 && temp>=15) {
// // temp color becomes green
//     // background image becomes desert cool;
//   }

//   elif (temp<15 && temp>=5) {
//     // temp color becomes blue
//     // background image becomes cold;
//   }

//   else {
//   // temp color becomes white
//     // background image becomes ice cold;
//   }
// }

// Wave 3: Selecting the Sky
const selectElement = document.querySelector('#sky');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  if (event.target.value == 'sunny') {
    result.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (event.target.value == 'cloudy') {
    result.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (event.target.value == 'rainy') {
    result.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (event.target.value == 'snowy') {
    result.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
});
