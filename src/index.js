// Initial state of the page:

const state = {
  degrees: 35,
  defaultMessage: "Pick Sky state and Temperature!",
  city: "City of Seattle",
}; 

// Default values to display:

document.getElementById("degrees").innerHTML = `${state.degrees}°`;
document.getElementById("defaultMessage").innerHTML = `${state.defaultMessage}`;
document.getElementById("city").innerHTML = `${state.city}`;

//Helper function:

const checkLandscape = () => {

  const defaultMessage = document.querySelector("#defaultMessage");
  if (defaultMessage!==null) {
    defaultMessage.remove()
  }
  const cold = document.getElementById("land-cold");
  const cool = document.getElementById("land-cool");
  const warm = document.getElementById("land-warm");
  const hot = document.getElementById("land-hot");
  
  if (state.degrees <=59) {

    warm.style.display = "none";
    hot.style.display = "none";
    cold.style.display = "block";
    cool.style.display = "none";
  }
  else if (state.degrees >=60 && state.degrees <=69) {

    cold.style.display = "none";
    warm.style.display = "none";
    hot.style.display = "none";
    cool.style.display = "block";
  }
  else if (state.degrees >=70 && state.degrees <=79){

    cold.style.display = "none";
    cool.style.display = "none";
    hot.style.display = "none";
    warm.style.display = "block";
  }
  else if (state.degrees >=80){

    cold.style.display = "none";
    warm.style.display = "none";
    cool.style.display = "none";
    hot.style.display = "block";
  }
};

// Event handling functions:

const tempUp = () => {
  const temp = document.querySelector("#degrees");
  state.degrees +=1;
  temp.textContent = `${state.degrees}°`;
  checkLandscape()
};

const tempDown = () => {
  const temp = document.querySelector("#degrees");
  state.degrees -=1;
  temp.textContent = `${state.degrees}°`;
  checkLandscape()
};

const changeCity = () => {
  const city = document.querySelector("#city");
  const input = document.getElementById("input").value;
  if (input==="") {
    city.textContent = state.city;
  }
  else {
    city.textContent = `City of ${input}`;
  }
}

const changeSky = () => {

  const defaultMessage = document.querySelector("#defaultMessage");
  if (defaultMessage!==null) {
    defaultMessage.remove()
  }
  const selectMenu = document.querySelector("#skies");
  const sunny = document.getElementById("sky-sunny");
  const cloudy = document.getElementById("sky-cloudy");
  const rainy = document.getElementById("sky-rainy");
  const snowy = document.getElementById("sky-snowy");

  if (selectMenu.value === "Sunny"){

    cloudy.style.display = "none";
    rainy.style.display = "none";
    snowy.style.display = "none";
    sunny.style.display = "block";
  }
  else if (selectMenu.value === "Cloudy"){

    sunny.style.display = "none";
    rainy.style.display = "none";
    snowy.style.display = "none";
    cloudy.style.display = "block";
  }
  else if (selectMenu.value === "Rainy"){

    cloudy.style.display = "none";
    sunny.style.display = "none";
    snowy.style.display = "none";
    rainy.style.display = "block";
  }
  else {
    
    cloudy.style.display = "none";
    sunny.style.display = "none";
    rainy.style.display = "none";
    snowy.style.display = "block";
  }
  
}

// Registering events:

const registerEventHandlers = () => {

  const upButton = document.querySelector("#up");
  upButton.addEventListener("click", tempUp);

  const downButton = document.querySelector("#down");
  downButton.addEventListener("click", tempDown);

  const refreshButton = document.querySelector("#button-refresh");
  refreshButton.addEventListener("click", changeCity);

  const selectMenu = document.querySelector("#skies");
  selectMenu,addEventListener("change",changeSky)

};

// Event listener:

document.addEventListener("DOMContentLoaded", registerEventHandlers);