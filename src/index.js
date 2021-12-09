function up() {
    var temperature = document.getElementById("temperature").value = parseInt(document.getElementById("temperature").value) + 1;
    console.log(temperature);
    currenttemperature(temperature);
}
function down() {
    var temperature = document.getElementById("temperature").value = parseInt(document.getElementById("temperature").value) - 1;
    console.log(temperature); 
    currenttemperature(temperature);
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


window.onload = function(){
    var up_btn = document.getElementById("weather-up");
    up_btn.onclick = up;

    var down_btn = document.getElementById("weather-down");
    down_btn.onclick = down;

}

