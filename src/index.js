

// let count = 0;
// const tempUp = document.getElementById("increment");
// const tempDown = document.getElementById("decrement");
// const textHolder = document.getElementById("tempCount");
// textHolder.innerHTML = count;

// tempUp.addEventListener("click", function() {
//   textHolder.innerHTML = ++count;
// });

// tempDown.addEventListener("click", function() {
//   textHolder.innerHTML = --count;
// });

const state = {count: 0,};
const tempCounter = () => {

    const tempUp = document.getElementById("increment");
    const tempDown = document.getElementById("decrement");
    const textHolder = document.getElementById("tempCount");
    textHolder.innerHTML = state.count;

    tempUp.addEventListener("click", function() {
    textHolder.innerHTML = ++state.count;
    });

    tempDown.addEventListener("click", function() {
    textHolder.innerHTML = --state.count;
    });

}


const tempColor = () => {
    const textHolder = document.getElementById("tempCount");
    textHolder.innerHTML = state.count;
    if (state.count >= 80) {
        textHolder.classList.add ("red");

    }
    else {
        textHolder.classList.add ("teal");
    }

};


// const tempColor = () => {
//     return state.count >=80 ? 'red'
//          : (state.count >= 70 && state.count <= 79) ? 'orange'
//          : (state.count >= 60 && state.count <= 69) ? 'yellow'
//          : (state.count >= 50 && state.count <= 59) ? 'green'
//          : (state.count <= 49) ? "teal"
//          : 'black';
// };

tempCounter()



