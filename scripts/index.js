const state = {
  temp: 1,
};

window.addEventListener("load", () => {
  const temp = document.getElementById("temp");
  temp.textContent = String(state.temp);
  adjustTempColor(state.temp);
});

const adjustTempColor = (tempNumber) => {
  const temp = document.getElementById("temp");
  temp.classList.remove("red", "yellow", "green", "orange", "teal");
  let color = null;
  switch (true) {
    case tempNumber <= 49:
      color = "teal";
      break;
    case tempNumber <= 59:
      color = "green";
      break;
    case tempNumber <= 69:
      color = "yellow";
      break;
    case tempNumber <= 79:
      color = "orange";
      break;
    default:
      color = "red";
      break;
  }
  temp.classList = `${temp.classList} ${color}`;
  console.log(temp.classList);
};

const increaseTemp = () => {
  const temp = document.getElementById("temp");
  tempInt = parseInt(temp.textContent);
  tempInt += 1;
  temp.textContent = String(tempInt);
  state.temp += 1;
  adjustTempColor(tempInt);
};

const decreaseTemp = () => {
  const temp = document.getElementById("temp");
  tempInt = parseInt(temp.textContent);
  tempInt -= 1;
  temp.textContent = String(tempInt);
  state.temp -= 1;
  adjustTempColor(tempInt);
};

const registerEventHandlers = () => {
  const upButton = document.getElementById("upArrow");
  upButton.addEventListener("click", increaseTemp);

  const downButton = document.getElementById("downArrow");
  downButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
