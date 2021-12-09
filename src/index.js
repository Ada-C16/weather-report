const state = {
  temp: 70,
  sky: '',
};

const controlTemp = (e) => {
  changeTempNum(e);
  changeTempColor();
  changeActivityView();
};

const changeTempNum = (e) => {
  const tempNum = document.getElementById('tempNum');
  if (e.target.textContent === 'up') {
    state.temp++;
  } else {
    state.temp--;
  }
  tempNum.textContent = state.temp;
};

const changeTempColor = () => {
  const tempText = document.getElementById('temp');
  let color;
  if (state.temp >= 87) {
    color = 'red';
  } else if (state.temp >= 82) {
    color = 'orange';
  } else if (state.temp >= 68) {
    color = 'green';
  } else if (state.temp >= 60) {
    color = 'gray';
  } else if (state.temp >= 50) {
    color = 'blue';
  } else {
    color = 'white';
  }
  tempText.style.color = color;
};

const changeActivityView = () => {
  const activity_img = document.querySelector('.activity-img');
  const activity_desc = document.querySelector('.activity-desc');
  let address = '';
  let alt = '';

  if (state.sky === 'snowy' && state.temp > 46) {
    address =
      'https://1.bp.blogspot.com/-_6_7CpBWod4/X1CK2ZNr0RI/AAAAAAABauo/C_cSxWVokzUJEHL18yUlPt2ZKGwhFa2qgCNcBGAsYHQ/s180-c/akusyu_uchuujin.png';
    alt = 'the sky is broken. immigrate to other planet.';
  } else if (state.temp >= 93 || state.temp <= 28) {
    address =
      'https://4.bp.blogspot.com/-LKypdYBi7d4/Vq88uGX4TYI/AAAAAAAA3ew/sJ5TQHcLAM8/s180-c/passport_checkin.png';
    alt = 'vacation somewhere nice';
  } else if (state.sky === 'snowy') {
    address = 'images/IMG_9974.jpg';
    alt = 'Snow!!';
  } else if (state.sky === 'rainy') {
    if (state.temp >= 50) {
      address = 'images/IMG_7409.jpg';
      alt = 'chill day';
    } else {
      address = 'images/IMG_8031.JPG';
      alt = 'fireplace hog';
    }
  } else if (state.sky == 'cloudy') {
    if (state.temp >= 85) {
      address =
        'https://3.bp.blogspot.com/-w3pVe9WxicA/XNE-_wHnIzI/AAAAAAABSto/F4VZ4fKWhVgT3MFpmbse7mwMMXvbge7FACLcBGAs/s180-c/gekijou_butai_kansyou.png';
      alt = 'theater';
    }
    if (state.temp >= 60) {
      address =
        'https://1.bp.blogspot.com/-59_nvImHVnM/XkZdUFSPVeI/AAAAAAABXWQ/Vbu2acjd6dwZjOoQIhRGeYjKPY2EtUCewCNcBGAsYHQ/s180-c/yagai_kyoushitsu_casual_walk.png';
      alt = 'hiking';
    } else {
      address =
        'http://3.bp.blogspot.com/-24UH5DXPPq4/U7O6zkrGQSI/AAAAAAAAiTM/gnBuOEzdvJk/s180-c/neko_cafe.png';
      alt = 'cat cafe';
    }
  } else if (state.sky === 'sunny') {
    if (state.temp >= 70) {
      address = 'images/IMG_3412.jpg';
      alt = 'kayaking';
    } else if (state.temp >= 50) {
      address =
        'https://1.bp.blogspot.com/-59_nvImHVnM/XkZdUFSPVeI/AAAAAAABXWQ/Vbu2acjd6dwZjOoQIhRGeYjKPY2EtUCewCNcBGAsYHQ/s180-c/yagai_kyoushitsu_casual_walk.png';
      alt = 'hiking';
    } else {
      address = 'images/IMG_8031.JPG';
      alt = 'fireplace hog';
    }
  }
  activity_img.src = address;
  activity_img.alt = alt;
  activity_desc.textContent = alt;
};

const controlSky = (e) => {
  state.sky = e.target.value;
  changeActivityView();
  changeSkyView();
};

const changeSkyView = () => {
  const viewBg = document.querySelector('.view-background');
  const skyEmoji = document.querySelector('.sky-emoji');
  let emoji = '';
  let color;

  if (state.sky === 'sunny') {
    emoji = '&#9728;';
    color = 'skyblue';
  } else if (state.sky === 'cloudy') {
    emoji = '&#9729;';
    color = 'gainsboro';
  } else if (state.sky === 'rainy') {
    emoji = '&#127783;';
    color = 'lightgray';
  } else if (state.sky === 'snowy') {
    emoji = '&#10052;';
    color = 'snow';
  }
  skyEmoji.innerHTML = emoji;
  viewBg.style.backgroundColor = color;
};

const controlLocation = () => {
  const locationText = document.getElementById('location');
  const locationInput = document.getElementById('location-input');
  locationText.textContent = locationInput.value;
  locationInput.value = '';
};

const registerHandler = () => {
  // temp
  const tempBtns = document.querySelectorAll('.temp-btn');
  tempBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => controlTemp(e));
  });
  // sky
  const skyCondition = document.getElementById('sky-condition');
  skyCondition.addEventListener('change', (e) => {
    controlSky(e);
  });
  // location
  const submitBtn = document.querySelector('.submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    controlLocation();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  state.sky = document.getElementById('sky-condition').value;
  changeSkyView();
  changeActivityView();
  registerHandler();
  changeTempColor();
});
