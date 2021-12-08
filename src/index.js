// variable storing fixed temperature
const temp = {
  tempByDegree: 70,
};

// behaviour of temp toggles
const increaseTemp = () => {
  const tempContainer = document.querySelector('#temperature');
  tempContainer.textContent = `${temp.tempByDegree}`;
  temp.tempByDegree += 1;
};

const decreaseTemp = () => {
  const tempContainer = document.querySelector('#temperature');
  tempContainer.textContent = `${temp.tempByDegree}`;
  temp.tempByDegree -= 1;
}

// event handler for temperature toggle
const registerEventHandlers = () => {
  const upButton = document.querySelector('#up-arrow');
  upButton.addEventListener('click', increaseTemp);

  const downButton = document.querySelector('#down-arrow');
  downButton.addEventListener('click', decreaseTemp);
};

registerEventHandlers();
