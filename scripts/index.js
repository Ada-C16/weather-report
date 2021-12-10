console.log("gettinghere")
////DO WITHIN REGISTER EVENT HANDLER FUNCTION
const plus_button = document.getElementById("plus-button");
plus_button.addEventListener ("click", increment);
const minus_button = document.getElementById("minus-button");
minus_button.addEventListener ("click", decrement);
// const dropdown = document.getElementById("dropbtn");
// dropdown.addEventListener ("change", display_sky);

///"WHEN DOM CONTENT IS LOADED"

var data = 72;
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
data = data + 1;
document.getElementById("counting").innerText = data;
display_ground();
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
    display_ground();
}

function display_ground() {

    spring = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    summer = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    fall = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    winter = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";

    let count = document.getElementById("counting");
     
    if (data >= 80) {
        document.getElementById("ground").textContent = spring;
        count.style.color = "pink"
    }
    else if (70 <= data && data <=79) {
        document.getElementById("ground").textContent = summer;
        count.style.color = "green"
    }
    else if (60 <= data && data <= 69) {
        document.getElementById("ground").textContent = fall;
        count.style.color = "teal"
    }
    else {
        document.getElementById("ground").textContent = winter;
        count.style.color = "purple"
    }
}


function display_sky() {

    sunny= "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    cloudy = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    rainy = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    snowy = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";

    if (dropdown.value = "sunny") {
        document.getElementById("sky").textContent = sunny; 
    }
    else if (dropdown.value = "rainy") {
        document.getElementById("sky").textContent = rainy;
    }
    else if (dropdown.value = "cloudy") {
        document.getElementById("sky").textContent = cloudy;
    }
    else {
        document.getElementById("sky").textContent = snowy;
    }
}

