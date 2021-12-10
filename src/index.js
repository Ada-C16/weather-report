let temp = 75;

const changeTemp = (temp) => {
  const tempEl = document.getElementById('temp');
  tempEl.textContent = temp;
  changeTempColors(temp);
  changeTempLandscape(temp);
};

const increaseTemp = () => {
  temp += 1;
  changeTemp(temp);
};

const decreaseTemp = () => {
  temp -= 1;
  changeTemp(temp);
};

const changeTempColors = (temp) => {
  const tempDisplayEl = document.getElementById('tempDisplay');
  const tempBackground = document.getElementById('tempBox');
  if (temp >= 80) {
    tempDisplayEl.style.color = 'red';
    tempBackground.style.backgroundColor = 'rgb(255, 208, 208)';
  } else if (temp >= 60) {
    tempDisplayEl.style.color = 'rgb(244, 158, 0)';
    tempBackground.style.backgroundColor = 'rgb(255, 232, 190)';
  } else if (temp >= 45) {
    tempDisplayEl.style.color = 'rgba(232, 213, 6, 0.927)';
    tempBackground.style.backgroundColor = 'rgb(255, 255, 231)';
  } else if (temp >= 33) {
    tempDisplayEl.style.color = 'blue';
    tempBackground.style.backgroundColor = 'rgb(172, 216, 255';
  } else {
    tempDisplayEl.style.color = 'blueviolet';
    tempBackground.style.backgroundColor = 'rgb(225, 197, 251)';
  }
};

const changeTempLandscape = (temp) => {
  const tempPic = document.getElementById('tempPic');
  if (temp >= 80) {
    tempPic.src = 'assets/80_up.jpg';
    tempPic.alt =
      'Sunflower head with leaves behind it and a tree and blue sky in the background';
  } else if (temp >= 60) {
    tempPic.src = 'assets/60-79.jpg';
    tempPic.alt = 'Purple flowers growing our of dried leaves';
  } else if (temp >= 45) {
    tempPic.src = 'assets/45-59.jpg';
    tempPic.alt =
      'Woods with orange leaves covering the ground and partially bare trees with mainly orange leaves and a few green ones';
  } else if (temp >= 33) {
    tempPic.src = 'assets/33-44.jpg';
    tempPic.alt = 'Bare trees in a bog with dead grass and fog';
  } else {
    tempPic.src = 'assets/32_down.jpg';
    tempPic.alt =
      'Snow-covered ground with a red ruler buried up to 7 inches. Houses and trees are out-of-focus in the background';
  }
};

const registerEventHandlers = () => {
  const increaseTempClick = document.getElementById('increaseTemp');
  increaseTempClick.addEventListener('click', increaseTemp);

  const decreaseTempClick = document.getElementById('decreaseTemp');
  decreaseTempClick.addEventListener('click', decreaseTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
