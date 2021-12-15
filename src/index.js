let tempValue = 32;

const changeTemperature = (currentTemp) => {
    let tempValue = document.querySelector('#tempValue');
    tempValue.textContent = currentTemp + ` °F`;
    let garden = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    if (currentTemp >= 80) {
        garden = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂'
    } 
    else if (currentTemp >= 70) {
      garden = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } 
    else if (currentTemp >= 60) {
      garden = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (currentTemp >= 50) {
      garden = '🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲'
    } 
    else if (currentTemp >= 40) {
      garden = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
    
    flowers.textContent = garden;

    console.log(tempValue);
  };
 
  const increaseTemperature = () => {
    tempValue += 1;
    changeTemperature(tempValue);
  };
  
  const decreaseTemperature = () => {
    tempValue -= 1;
    changeTemperature(tempValue);
  };
  

  ///////////////////////////

  const registerEventHandlers = () => {
    changeTemperature(tempValue);
  
    const tempIncrease = document.querySelector('#tempUp');
    tempIncrease.addEventListener('click', increaseTemperature);
  
    const tempDecrease = document.querySelector('#tempDown');
    tempDecrease.addEventListener('click', decreaseTemperature);
  
  };
  
  
  document.addEventListener('DOMContentLoaded', registerEventHandlers);