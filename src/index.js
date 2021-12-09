console.log("gettinghere")
////DO WITHIN REGISTER EVENT HANDLER FUNCTION
const plus_button = document.getElementById("plus_button");
plus_button.addEventListener ("click", increment);
const minus_button = document.getElementById("minus_button");
minus_button.addEventListener ("click", decrement);
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
    if (document.getElementById("counting") > 80) {
        document.getElementById("ground").innerText = spring;
    }
    else if (70 <= document.getElementById("counting") && document.getElementById("counting") <=79) {
        document.getElementById("ground").innerText = summer;
        summer
    }
    else if (60 <= document.getElementById("counting") && document.getElementById("counting") <= 69) {
        document.getElementById("ground").innerText = fall;
    }
    else {
        document.getElementById("ground").innerText = winter;
    }
}