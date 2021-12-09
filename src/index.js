const state = {
    tempCount: 0
  };

// temperature change function
const tempchanger = (temp) => {
    if (temp >= 80) {
        return ["red", "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"];
    } else if (temp > 70 && temp < 80) {
        return ["orange", "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"];
    } else if (temp > 60 && temp < 70) {
        return ["yellow", "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"];
    } else if (temp > 50 && temp < 60) {
        return ["green", "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"];
    } else if (temp < 50) {
        return ["teal", "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"];
    }

}

// Sky change function
const skyChanger = (sky) => {
  if (sky === "sunny") {
    return "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
  } else if (sky === "cloudy") {
    return "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
  } else if (sky === "rainy") {
    return "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
  } else if (sky === "snowy") {
    return "🌧🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
  } 
}


// Up Temp
const uptemp = (event) => {
    state.tempCount += 5;
    const temp = document.querySelector("#tempCount")
    const div = document.getElementById("tempCount")
    tempData = tempchanger(state.tempCount)
    div.style.color = tempData[0]
    temp.textContent = `${state.tempCount}`
    document.getElementById("wetherEmoji").innerHTML = tempData[1];

};


// Down Temp
const downtemp = (event) => {
    state.tempCount -= 1;
    const temp = document.querySelector("#tempCount")
    const div = document.getElementById("tempCount")
    tempData = tempchanger(state.tempCount)
    div.style.color = tempData[0]
    temp.textContent = `${state.tempCount}`
    document.getElementById("wetherEmoji").innerHTML = tempData[1];
  };

// change skyline
const skylinechange = (event) => {
  const skySelect = document.querySelector("#skyOptions").value;
  newsky = skyChanger(skySelect)
  document.getElementById("skyEmoji").innerHTML = newsky;
};

// change text
const textChange = (event) => {
  const textSelect = document.querySelector("#name").value;
  document.getElementById("cityName").innerHTML = textSelect;
};

// Reset text 
const resetText = (event) => {
  const textSelect = document.querySelector("#name").value;
  document.getElementById("cityName").innerHTML = 'Seattle';
  document.getElementById('name').value = "";
};

// register event handler]

  const registerEventHandlers = (event) => {
    const tempupbutton = document.querySelector("#tempUp");
    tempupbutton.addEventListener("click", uptemp);
    
    const tempdownbutton = document.querySelector("#tempDown");
    tempdownbutton.addEventListener("click", downtemp);

    const weatheroptions = document.querySelector("#skyOptions");
    weatheroptions.addEventListener("change", skylinechange);

    const textrename = document.querySelector("#name");
    textrename.addEventListener("input", textChange);

    const reset = document.querySelector("#resetButton");
    reset.addEventListener("click", resetText);
};
document.addEventListener("DOMContentLoaded", registerEventHandlers);

