//----------Sky ELEMENTS

const changeSky = () => {
  const skyImage = document.getElementById("skyChoice").value;
  document.getElementById("skyContainer").innerHTML = skyImage;
}

//----------TEMPERATURE ELEMENTS
//Temp Adjustment Features
const tempState = {
  tempCount: 0
};

const newTemp = document.createElement("span");

//function to change the color & image based on tempState.tempCount
const changeColorByTemp = () => {
  if (tempState.tempCount >= 32) {
    tempCount.style.color = "brown";
    newTemp.textContent = "🏜 🏜 🏜 🌵 🌵 🦂 🌵 🌵 🦂 🌵 🌵 🏜 🏜 🏜"
  } else if (tempState.tempCount >= 24){
    tempCount.style.color = "orange";
    newTemp.textContent = "🌋 🌋 🌋 🏝 🏝  🛫 🏝 🏝 🛬  🏝 🏝 🌋 🌋 🌋"
  } else if (tempState.tempCount >= 18){
    tempCount.style.color = "forestgreen";
    newTemp.textContent = "⛰ ⛰ ⛰ 🌳 🌳 🏡 🌳 🌳 🏡 🌳 🌳 ⛰ ⛰ ⛰"
  } else if (tempState.tempCount >= 8){
    tempCount.style.color = "maroon";
    newTemp.textContent = "🏔 🏔 🏔 🌲 🌲 🏠 🌲 🌲 🏠 🌲 🌲 🏔 🏔 🏔 "
  } else if (tempState.tempCount >= 0) {
    tempCount.style.color = "dodgerblue";
    newTemp.textContent = "🗻 🗻 🗻 ☃️ ☃️ 🏘  ☃️ ☃️ 🏘  ☃️ ☃️ 🗻 🗻 🗻"  
  }else {
    tempCount.style.color = "rebeccapurple";
    newTemp.textContent = "🐻‍❄️ TOO 🐧 COLD 🥶 FOR 🐧 PEOPLE 🐻‍❄️"
  };
}

const updateTempCount = () => {
  const tempCountElement = document.querySelector("#tempCount");
  tempCountElement.textContent = `The Temperature is: ${tempState.tempCount} \xB0C`
};

//Tempt goes up
const addTempButton = document.querySelector("#addTempButton");

const addTemp = () => {
  const tempContainer = document.querySelector("#tempContainer");  
  tempState.tempCount +=1;
  changeColorByTemp();
  tempContainer.appendChild(newTemp);
  updateTempCount();
};

//Tempt goes down
const subTempButton = document.querySelector("#subTempButton");

const subTemp = () => {
  const newTemp = document.createElement("span");
  const tempContainer = document.querySelector("#tempContainer");
  tempState.tempCount-=1;
  changeColorByTemp();
  updateTempCount();
};
//Temp Event Listeners
addTempButton.addEventListener('click', addTemp)
subTempButton.addEventListener('click', subTemp)

