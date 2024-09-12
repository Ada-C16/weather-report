function twoDecimals(str,val) {
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1); 
    return Number(str);   
}

function up() {
    var temperature = document.getElementById("temperature").value = parseInt(document.getElementById("temperature").value) + 1;
    var convert = (parseInt(document.getElementById("temperature").value )- 32)/1.8;

//// returns  current temperature
    var celsius = document.getElementById("celsius-temperature").value = parseFloat(twoDecimals(convert,2));
    console.log(celsius);
    currenttemperature(temperature, celsius);

/////SETS MAX TEMPERATURUE ON EARTH
    if(temperature> 134){
        document.getElementById("temperature").value = parseInt(134);
        console.log(document.getElementById("temperature").textContent )
    }
}
function down() {
    var temperature = document.getElementById("temperature").value = parseInt(document.getElementById("temperature").value) - 1;
    var convert = (parseInt(document.getElementById("temperature").value )- 32)/1.8;

//// returns  current temperature
    var celsius = document.getElementById("celsius-temperature").value = parseFloat(twoDecimals(convert,2));
    console.log(celsius);

///SETS MIN TEMPERATURUE ON EARTH
    if(temperature< -89){
        document.getElementById("temperature").value = parseInt(-89);
        console.log(document.getElementById("temperature").textContent )
    }

    currenttemperature(temperature, celsius);
}

const temperatureMinMax = () => {
    if(temperature>134){
        document.getElementById("temperature").textContent = parseInt(-89);
    }
}

const currenttemperature = (temperature) => {
    if(temperature >= 1 && temperature <= 49){
        document.getElementById("temperature").style.color = "teal";
        earth.textContent =  "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        document.getElementById("earth-landscape").style.backgroundImage = "linear-gradient(180deg, LightSteelBlue, #093824)"
    } else if(temperature >= 50 && temperature <= 59 ){
        document.getElementById("temperature").style.color = "green";
        document.getElementById("earth-landscape").style.backgroundImage = "linear-gradient(180deg, green, saddlebrown)"
        earth.textContent =  "🌲🍁🌲🍁🍂🌲🍁🌲🌲🍂🌲";
    } else if(temperature >= 60 && temperature <= 69){
        document.getElementById("temperature").style.color = "yellow";
        document.getElementById("earth-landscape").style.backgroundImage = "linear-gradient(180deg, #093824, saddlebrown)"
        
        earth.textContent =  "🌾🌾_🍃_🌾__🛤_🌾🌾🌾_🍃";
    } else if(temperature >= 70 && temperature <= 79){
        document.getElementById("temperature").style.color = "orange";
        document.getElementById("earth-landscape").style.backgroundImage = "linear-gradient(180deg, #093824, green)"
        earth.textContent =  "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if(temperature >= 80 && temperature <= 89){
        document.getElementById("temperature").style.color = "red";
        document.getElementById("earth-landscape").style.backgroundImage = "linear-gradient(180deg, saddlebrown, darkgoldenrod)";
        earth.textContent =  "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temperature >= 90 ){
        document.getElementById("temperature").style.color = "red";
        document.getElementById("earth-landscape").style.backgroundImage = "linear-gradient(180deg, saddlebrown, darkgoldenrod)";
        earth.textContent =  "🌵🏜🌵🔥🌵🦂🌵🏜🌵🔥🌵🦂";
    } else if (Math.sign(temperature) === -0 ){
        document.getElementById("temperature").style.color = "cyan";
        document.getElementById("earth-landscape").style.backgroundImage = "linear-gradient(180deg, LightSteelBlue, aliceblue)";
        earth.textContent =  "⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️";
    }

}
const currentSky = () => {
    var skyselection = document.getElementById("skyselector").value;
    console.log(skyselection);

    if (skyselection === 'sunny') {
        document.getElementById("sky-landscape").style.backgroundImage = "linear-gradient(180deg, LightSeaGreen, dodgerBlue)"
        sky.textContent = "☁️ ☁️ ☁️ 🌞 ☁️ ☁️";
    } else if (skyselection === "cloudy") {
        document.getElementById("sky-landscape").style.backgroundImage = "linear-gradient(180deg, SlateGray, dodgerBlue)"
        sky.textContent =  "☁️☁️ ☁️ ☁️☁️ 󠀠󠀠󠀠󠀠󠀠☁️󠀠󠀠󠀠󠀠󠀠🌞☁️ ☁️☁️";
    } else if (skyselection === "rainy") {
        document.getElementById("sky-landscape").style.backgroundImage = "linear-gradient(180deg, DarkSlateGray, steelBlue)"
        sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (skyselection === "snowy") {
        document.getElementById("sky-landscape").style.backgroundImage = "linear-gradient(180deg, LightSlateGrey, steelBlue)"
        sky.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    } else if (skyselection === "stormy") {
        document.getElementById("sky-landscape").style.backgroundImage = "linear-gradient(180deg, DarkSlateGrey, steelBlue)"
        sky.textContent = "🌨⚡🌨⛈️⛈️⚡🌨⛈️🌨⚡⚡⚡🌨🌨";
    } else if (skyselection === "reset") {
        document.getElementById("sky-landscape").style.backgroundImage = "linear-gradient(180deg, LightSeaGreen, DodgerBlue)"
        document.getElementById("earth-landscape").style.backgroundImage = "linear-gradient(180deg, #093824, green)";
        earth.textContent =  "🌸🌿🌼 🌷🌻🌿 ☘️🌱 🌻🌷";
        sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
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

const resetEverything = () =>{

    document.getElementById("temperature").value = parseInt(35);
    document.getElementById("celsius-temperature").value = parseFloat(1.66);
    document.getElementById("temperature").style.color = "teal";
    document.getElementById("sky-landscape").style.backgroundImage = "linear-gradient(180deg, LightSeaGreen, DodgerBlue)"
    document.getElementById("earth-landscape").style.backgroundImage = "linear-gradient(180deg, #093824, green)";
    earth.textContent =  "🌸🌿🌼 🌷🌻🌿 ☘️🌱 🌻🌷";
    sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    resetCity();
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

    var reset_everything = document.getElementById("reset_everything");
    reset_everything.onclick = resetEverything;
}

