// Initial state of the page:

const state = {
  degrees: 35,
  landscape: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
  skyState: 	"Pick Sky state!",
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
  skyState.textContent = ""
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