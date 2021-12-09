const tempChange = () => {
  const temperature = document.getElementById('tempNum');
  const tempUpButton = document.getElementById('up');
  const tempDownButton = document.getElementById('down');

  tempUpButton.addEventListener('click', () => {
    temperature.innerHTML = parseInt(temperature.innerHTML) + 1;
  });
  tempDownButton.addEventListener('click', () => {
    temperature.innerHTML = parseInt(temperature.innerHTML) - 1;
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

const landscape = () => {
  const sky = document.getElementById('sky');
  const plants = document.getElementById('plants');
  const ground = document.getElementById('ground');

  const temperature = document.getElementById('tempNum');

  sky.style.whiteSpace = 'pre';
  plants.style.whiteSpace = 'pre';
  ground.style.whiteSpace = 'pre';

  sky.innerText = snowSky;
  plants.innerText = snowPlants;
  ground.innerText = grass;
};

if (document.readyState !== 'loading') {
  tempChange();
  convertTemp();
  landscape();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    convertTemp();
    tempChange();
    landscape();
  });
}
