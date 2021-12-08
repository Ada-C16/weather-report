const mainSection = document.getElementById('main-section');

// h1
const weatherHeading = document.createElement('h1');
weatherHeading.textContent = "Weather Report";
mainSection.appendChild(weatherHeading)

// h2
const city = document.createElement('h2') ;
city.setAttribute("contenteditable","true");
city.textContent = "Mountain House";
mainSection.appendChild(city);

// make sky changer zone

// add temp gauge

// add emoji weather