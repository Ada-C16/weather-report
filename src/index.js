// Initial state of the page:

const state = {
  degrees: 35,
  landscape: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
  skyState: 	"☁️ ☁️ ☁️ ☀️ ☁️ ☁️",
  city: "City of Seattle",
}; 

// Default values to display:

document.getElementById("degrees").innerHTML = `${state.degrees}°`;
document.getElementById("landscape").innerHTML = `${state.landscape}`;
document.getElementById("skyState").innerHTML = `${state.skyState}`;
document.getElementById("city").innerHTML = `${state.city}`;

const tempUp = () => {
  const temp = document.querySelector("#degrees");
  state.degrees +=1;
  checkLandscape(state)
  temp.textContent = `${state.degrees}°`;
};

//Helper function:

const checkLandscape = (state) => {
  const landscape = document.querySelector("#landscape");
  if (state.degrees <=59) {
    landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  }
  else if (state.degrees >=60 && state.degrees <=69) {
    landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
  }
  else if (state.degrees >=70 && state.degrees <=79){
    landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  }
  else if (state.degrees >=80){
    landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  }
};

// Event handling functions:

const tempDown = () => {
  const temp = document.querySelector("#degrees");
  state.degrees -=1;
  checkLandscape(state)
  temp.textContent = `${state.degrees}°`;
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
  const selectMenu = document.querySelector("#skies");
  if (selectMenu.value === "Sunny"){
    skyState.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
  }
  else if (selectMenu.value === "Cloudy"){
    skyState.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
  }
  else if (selectMenu.value === "Rainy"){
    skyState.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
  }
  else {
    skyState.textContent ="🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
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