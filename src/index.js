var data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}
//Weather Garden
// if (
//data <= 0
//data >= 1 && data <=3
//data >= 4 && data <=6
//data >= 7 && data <=9
//data >= 10 


// DOM listener
clickBox.addEventListener("click", clickEffect);
document.addEventListener("DOMContentLoaded", registerEventHandlers);