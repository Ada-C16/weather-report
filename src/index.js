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
const skyMode = ["Morning", "Midday", "Sunset", "Midnight"];
const skyContainer = document.createElement('div');
skyContainer.setAttribute("id", "sky-container");

skyMode.forEach(mode => {
    let skyTheme = document.createElement('div');
    skyTheme.setAttribute("class", "sky-color");
    skyTheme.setAttribute("id", `${mode}`)
    // skyTheme.setAttribute("onclick", //function call)
    skyContainer.appendChild(skyTheme);
});

mainSection.append(skyContainer);


// add temp gauge

// add emoji weather