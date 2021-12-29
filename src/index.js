//DROP DOWN 
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const skyOptions =()=> {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



//----------TEMPERATURE ELEMENTS
//Temp Adjustment Features
const tempState = {
  tempCount: 0
};

const newTemp = document.createElement("span");

//function to change the color & image based on tempState.tempCount
const changeColorByTemp = () => {
  if (tempState.tempCount >= 10) {
    tempCount.style.color = "brown";
    newTemp.textContent = "🏜 🏜 🏜 🌵 🌵 🦂 🌵 🌵 🦂 🌵 🌵 🏜 🏜 🏜"
  } else if (tempState.tempCount >= 8){
    tempCount.style.color = "orange";
    newTemp.textContent = "🌋 🌋 🌋 🏝 🏝  🛫 🏝 🏝 🛬  🏝 🏝 🌋 🌋 🌋"
  } else if (tempState.tempCount >= 7){
    tempCount.style.color = "forestgreen";
    newTemp.textContent = "⛰ ⛰ ⛰ 🌳 🌳 🏡 🌳 🌳 🏡 🌳 🌳 ⛰ ⛰ ⛰"
  } else if (tempState.tempCount >= 5){
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
  tempCountElement.textContent = `The Temperature is: ${tempState.tempCount} \xB0F`
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

//----------SKY ELEMENTS
