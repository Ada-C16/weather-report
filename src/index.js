// Function to change sky photos
const changePhoto = () => {
   if (skySelect.value === "sunny") {
       document.getElementById("skyViews").src = "assets/sunny_sky.jpg";
   }
   else if (skySelect.value === "cloudy") {
       document.getElementById("skyViews").src = "assets/cloudy_sky.jpg";
   }
   else if (skySelect.value === "rainy") {
       document.getElementById("skyViews").src = "assets/rainy_sky.jpg";
   }
   else if (skySelect.value === "snowy") {
       document.getElementById("skyViews").src = "assets/snow_photo.jpg";
   }
   else {
       document.getElementById("skyViews").src = "assets/sky_photo.jpg";
   }
};



// Temporary Temperature Counter
let tempValue = 30;

const updateTemp = tempValue => {
    const tempCount = document.getElementById("tempCount");
    tempCount.textContent = `Temperature (Farenheit): ${tempValue}`;
    //update temp colors
    //update landscape
};

// Temperature Increase Event Handler
const tempIncrease = () => {
    tempValue += 1;
    updateTemp(tempValue);
};

// Temperature Decrease Event Handler
const tempDecrease = () => {
    tempValue -= 1;
    updateTemp(tempValue);
};


// Updating Temperature Colors
const updateTempColor = (currentTemp) => {
    const tempContainer = document.getElementById("tempCount");
    let color = "salmon";
    if (currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    }
    tempContainer.classList = color;
};

// Landscape Event Handler
const updateLandscape = (currentTemp) => {
    const landscapeContainer = document.body;
    let backgroundColor = "rgb(93, 155, 174)";
    if (currentTemp >= 80) {
        backgroundColor = "skyblue";
    } else if (currentTemp >= 70) {
        backgroundColor = "cadetblue";
    } else if (currentTemp >= 60) {
        backgroundColor = "slategrey";
    } else if (currentTemp >= 50) {
        backgroundColor = "grey";
    }
    landscapeContainer.style.backgroundColor = backgroundColor;
}


// CityName Event Handler
const inputCityName = () => {
    const cityInput = document.getElementById("cityNameSelect").value;
    const cityHeader = document.getElementById("cityHeader");
    cityHeader.textContent = cityInput;
};


// CityName Reset Button Handler
const addResetBtn = () => {
    const resetBtn = document.getElementById("cityNameSelect");
    resetBtn.value = "Brooklyn";
    inputCityName();
};


// Event Listeners
const registerEvents = () => {
    console.log("loaded");

    const increaseButton = document.getElementById("clickButtonIn");
    increaseButton.addEventListener("click", () => {
        console.log("clicked");
        tempIncrease(); 
        updateTempColor(tempValue);
        updateLandscape(tempValue);
    });

    const decreaseButton = document.getElementById("clickButtonDe");
    decreaseButton.addEventListener("click", () => {
        console.log("clicked2");
        tempDecrease();
        updateTempColor(tempValue);
        updateLandscape(tempValue);
    });

    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", (event) => {
        console.log("select changed");
        console.log(event);
        console.log(skySelect.value);
        changePhoto();
    });

    skySelect.addEventListener("click", () => {
        console.log("clicked select");
    });
    
    const cityNameSelect = document.getElementById("cityNameSelect");
    cityNameSelect.addEventListener("input", inputCityName);


    // Reset Button
    const resetBtn = document.getElementById("cityNameReset");
    resetBtn.addEventListener("click", addResetBtn);

};

document.addEventListener("DOMContentLoaded", registerEvents);