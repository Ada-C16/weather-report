const updateCityName = () => {
  const inputName = document.getElementById('city-name-input').value;
  const headerCityName = document.getElementById('header-city-name');
  headerCityName.textContent = inputName;
};

const resetCityName = () => {
  const cityNameInput = document.getElementById('city-name-input');
  cityNameInput.value = 'Salt Lake City, UT';
  updateCityName();
};

const registerEventHandlers = () => {
  updateCityName();
  const cityNameInput = document.getElementById('city-name-input');
  cityNameInput.addEventListener('input', updateCityName);

  const cityNameResetBtn = document.getElementById('city-name-reset');
  cityNameResetBtn.addEventListener('click', resetCityName);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
