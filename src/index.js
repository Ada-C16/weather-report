console.log();
const registerEvents = () => {
  const clickMeBtn = document.getElementById('clickMeBtn');
  clickMeBtn.addEventListener('click', () => {
    console.log('clicked');
  });
};

document.addEventListener('DOMContentLoaded', registerEvents);
