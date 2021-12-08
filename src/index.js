function up() {
    var max='136'
    document.getElementById("temperature").value = parseInt(document.getElementById("temperature").value) + 1;
    if (document.getElementById("temperature").value >= parseInt(max)) {
        document.getElementById("temperature").value = max;
    }
}
function down() {
    var min = '-89'
    document.getElementById("temperature").value = parseInt(document.getElementById("temperature").value) - 1;
    if (document.getElementById("temperature").value <= parseInt(min)) {
        document.getElementById("temperature").value = min;
    }
}

window.onload = function() {
    var up_btn = document.getElementById("weather-up");
    up_btn.onclick = up;
    
    var down_btn = document.getElementById("weather-down");
    down_btn.onclick = down;
}