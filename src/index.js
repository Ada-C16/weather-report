document.getElementById("up-button").onclick = function(){
    var tempInt = parseInt(document.getElementById("temperature").innerHTML);
    tempInt++;
    document.getElementById("temperature").innerHTML = tempInt;
    tempColor(tempInt);
}

document.getElementById("down-button").onclick = function(){
    var tempInt = parseInt(document.getElementById("temperature").innerHTML);
    tempInt--;
    document.getElementById("temperature").innerHTML = tempInt;
    tempColor(tempInt);
}

function tempColor(temp) {
        let color = undefined;
        let floor = undefined;
        if (temp >= 80) {
          color = 'red';
          floor = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
        } else if (temp >= 70) {
          color = 'orange';
          floor = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
        } else if (temp >= 60) {
          color = 'yellow';
          floor = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
        } else if (temp >= 50) {
          color = 'green';
          floor = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
        } else {
          color = 'teal';
          floor = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
        }
    document.getElementById("temperature").className = color;
    document.getElementById("floor-container").textContent = floor;
}




