
const state = {
  degrees: 35,
}; 

document.getElementById("degrees").innerHTML = `${state.degrees}°`;

const tempUp = () => {
  const temp = document.querySelector("#degrees");
  state.degrees +=1;
  temp.textContent = `${state.degrees}°`;
};

const tempDown = () => {
  const temp = document.querySelector("#degrees");
  state.degrees -=1;
  temp.textContent = `${state.degrees}°`;
};

const registerEventHandlers = () => {
  const upButton = document.querySelector("#up");
  upButton.addEventListener("click", tempUp);

  const downButton = document.querySelector("#down");
  downButton.addEventListener("click", tempDown);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);