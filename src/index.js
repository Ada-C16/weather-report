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
  if (skySelect === "cloudy") {
    document.getElementById("skyEmoji").innerHTML = "sunny";
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
  if (skySelect === "cloudy") {
    document.getElementById("skyEmoji").innerHTML = "sunny";
  }
};
  
// register event handler]

  const registerEventHandlers = (event) => {
    const tempupbutton = document.querySelector("#tempUp");
    tempupbutton.addEventListener("click", uptemp);
    
    const tempdownbutton = document.querySelector("#tempDown");
    tempdownbutton.addEventListener("click", downtemp);

    const weatheroptions = document.querySelector("#skyOptions");
    weatheroptions.addEventListener("change", skylinechange);
  };
document.addEventListener("DOMContentLoaded", registerEventHandlers);

