function up() {
    var temperature = document.getElementById("temperature").value = parseInt(document.getElementById("temperature").value) + 1;

    currenttemperature(temperature);

/////SETS MAX TEMPERATURUE ON EARTH
if(temperature> 134){
    document.getElementById("temperature").value = parseInt(134);
    console.log(document.getElementById("temperature").textContent )
}
}
function down() {
    var temperature = document.getElementById("temperature").value = parseInt(document.getElementById("temperature").value) - 1;
    currenttemperature(temperature);

///SETS MIN TEMPERATURUE ON EARTH
    if(temperature< -89){
        document.getElementById("temperature").value = parseInt(-89);
        console.log(document.getElementById("temperature").textContent )
    }
}

const temperatureMinMax = () => {
    var tempy=  document.getElementById("temperature").textContent;

    if(temperature>134){
        document.getElementById("temperature").textContent = parseInt(-89);
    }
}

const currenttemperature = (temperature) => {
    if(temperature >= 1 && temperature <= 49){
        document.getElementById("temperature").style.color = "teal";
        earth.textContent =  "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if(temperature >= 50 && temperature <= 59 ){
        document.getElementById("temperature").style.color = "green";
        earth.textContent =  "🌲🍁🌲🍁🍂🌲🍁🌲🌲🍂🌲";
    } else if(temperature >= 60 && temperature <= 69){
        document.getElementById("temperature").style.color = "yellow";
        earth.textContent =  "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if(temperature >= 70 && temperature <= 79){
        document.getElementById("temperature").style.color = "orange";
        earth.textContent =  "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if(temperature >= 80 && temperature <= 89){
        document.getElementById("temperature").style.color = "red";
        earth.textContent =  "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temperature >= 90 ){
        document.getElementById("temperature").style.color = "red";
        earth.textContent =  "🌵🏜🌵🔥🌵🦂🌵🏜🌵🔥🌵🦂";
    } else if (Math.sign(temperature) === -0 ){
        document.getElementById("temperature").style.color = "cyan";
        earth.textContent =  "⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️";
    }

}
const currentSky = () => {
    var skyselection = document.getElementById("skyselector").value;
    console.log(skyselection);

    if (skyselection === 'sunny') {
        sky.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    } else if (skyselection === "cloudy") {
        sky.textContent =  "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (skyselection === "rainy") {
        sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (skyselection === "snowy") {
        sky.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
}

const changeCity = () =>{
    var userInput = document.getElementById("cityName").value;

    document.getElementById("cityGreeting").textContent ="Beautiful city of " + `${userInput}!`; 
    document.getElementById("cityName").value = "";
}

const resetCity = () =>{

    document.getElementById("cityGreeting").textContent ="Beautiful city of Nuevo San Juan Parangaricutiro!"; 
    document.getElementById("cityName").value = "";
}

window.onload = function(){
    var up_btn = document.getElementById("weather-up");
    up_btn.onclick = up;

    var down_btn = document.getElementById("weather-down");
    down_btn.onclick = down;

    var selector_pick= document.getElementById("skyselector");
    selector_pick.addEventListener('change', currentSky);

    var city_name = document.getElementById("submit_city_name");
    city_name.onclick = changeCity;

    var reset_city_name = document.getElementById("reset_city_name");
    reset_city_name.onclick = resetCity;
}

