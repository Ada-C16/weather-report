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

// Temperature Counter
// Function to change colors according to temperature




// Event Listeners
const registerEvents = () => {
    console.log("loaded");

    const increaseButton = document.getElementById("clickButtonIn");
    increaseButton.addEventListener("click", () => {
        console.log("clicked");
    });

    const decreaseButton = document.getElementById("clickButtonDe");
    decreaseButton.addEventListener("click", () => {
        console.log("clicked2");
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
    
};

document.addEventListener("DOMContentLoaded", registerEvents);