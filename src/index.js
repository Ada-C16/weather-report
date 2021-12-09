const changeTemp = () => {
  const temperature = document.getElementById('tempNum');
  const tempUpButton = document.getElementById('up');
  const tempDownButton = document.getElementById('down');

  tempUpButton.addEventListener('click', () => {
    temperature.innerHTML = parseInt(temperature.innerHTML) + 1;
    changeLandscape(temperature.innerHTML, tempType.innerHTML);
  });
  tempDownButton.addEventListener('click', () => {
    temperature.innerHTML = parseInt(temperature.innerHTML) - 1;
    changeLandscape(temperature.innerHTML, tempType.innerHTML);
  });
};

const convertTemp = () => {
  const temperature = document.getElementById('tempNum');
  const celsiusButton = document.getElementById('celsius');
  const fahrenheitButton = document.getElementById('fahrenheit');
  const tempType = document.getElementById('tempType');

  celsiusButton.addEventListener('click', () => {
    if (tempType.innerHTML === '℉') {
      temperature.innerHTML = Math.round(
        ((parseInt(temperature.innerHTML) - 32) * 5) / 9
      );
      tempType.innerHTML = '℃';
    }
  });

  fahrenheitButton.addEventListener('click', () => {
    if (tempType.innerHTML === '℃') {
      temperature.innerHTML = Math.round(
        (parseInt(temperature.innerHTML) * 9) / 5 + 32
      );
      tempType.innerHTML = '℉';
    }
  });
};

const initialLandscape = () => {
  const temperature = document.getElementById('tempNum');
  const tempType = document.getElementById('tempType');
  changeLandscape(temperature.innerHTML, tempType.innerHTML);
};

const changeLandscape = (temperature, tempType) => {
  const sky = document.getElementById('sky');
  const plants = document.getElementById('plants');
  const ground = document.getElementById('ground');
  ground.innerText = grass;
  sky.style.whiteSpace = 'pre';
  plants.style.whiteSpace = 'pre';
  ground.style.whiteSpace = 'pre';

  const snowLandscape = [snowSky, snowPlants];
  const rainLandscape = [rainySky, rainyPlants];
  const springLandscape = [springSky, springPlants];
  const autumnLandscape = [springSky, autumnPlants];

  if (tempType === '℉') {
    console.log('fahrenheit');
    if (temperature < 32) {
      sky.innerText = snowLandscape[0];
      plants.innerText = snowLandscape[1];
    } else if (temperature < 50) {
      sky.innerText = autumnLandscape[0];
      plants.innerText = autumnLandscape[1];
    } else if (temperature < 70) {
      sky.innerText = rainLandscape[0];
      plants.innerText = rainLandscape[1];
    } else {
      sky.innerText = springLandscape[0];
      plants.innerText = springLandscape[1];
    }
  } else {
    if (temperature < 10) {
      sky.innerText = snowLandscape[0];
      plants.innerText = snowLandscape[1];
    } else if (temperature < 20) {
      sky.innerText = autumnLandscape[0];
      plants.innerText = autumnLandscape[1];
    } else if (temperature < 30) {
      sky.innerText = rainLandscape[0];
      plants.innerText = rainLandscape[1];
    } else {
      sky.innerText = springLandscape[0];
      plants.innerText = springLandscape[1];
    }
  }
};

const changeSky = () => {
  const skyButton = document.getElementById('skyButton');
  const skyForm = document.getElementById('skyForm');
  const garden = document.getElementById('garden');
  const skies = {
    sunrise: '#000000',
    bluesky: '#00A1FF',
    clouds: '#D3D3D3',
    overcast: '#E4E3FC',
    starrynight: '#0B0677',
    rainbow: '#FF00FF',
    kittens: '#FFB6C1',
  };

  skyButton.addEventListener('click', (event) => {
    event.preventDefault();
    value = skyForm.options[skyForm.selectedIndex].value;
    console.log(value);
    garden.style.backgroundColor = skies[value];
  });
};

const changeCity = () => {
  const cityButton = document.getElementById('cityButton');
  const city = document.querySelector('#city');

  const headerCity = document.getElementById('header-city');

  cityButton.addEventListener('click', (event) => {
    event.preventDefault();
    headerCity.innerHTML = city.value;
  });
};

if (document.readyState !== 'loading') {
  changeTemp;
  convertTemp();
  initialLandscape();
  changeSky();
  changeCity();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    changeTemp();
    convertTemp();
    initialLandscape();
    changeSky();
    changeCity();
  });
}
