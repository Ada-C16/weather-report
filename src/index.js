//Increase/Decrease

// var count = 0;
// document.getElementById("degrees").textContent = count;
// var down = document.getElementById("down-button");
// var up = document.getElementById("up-button");


// function decreaseTemp(){
//     count = count - 1;
//     document.getElementById("degrees").textContent = count;
// }

// function increaseTemp(){
//     count = count + 1;
//     document.getElementById("degrees").textContent = count;
// }

// have to include onclick="increaseTemp()" in place of id in html tag for the above to work

let count = 0;
document.getElementById("degrees").textContent = count;
let degreeNum = document.querySelector("#degrees");

let upButton = document.getElementById("up-button");
let downButton = document.getElementById("down-button");




upButton.addEventListener('click', () => {
    count = count + 1;

    if(count <= 49){
        degreeNum.className = "freezing";
    }
    else if(count <= 59){
        degreeNum.className = "cold";
    }
    else if(count <= 69){
        degreeNum.className = "warm";
    }
    else if(count <= 79){
        degreeNum.className = "hot";
    }
    else{
        degreeNum.className = "scorching";
    }

    document.getElementById("degrees").textContent = count;
});

// upButton.addEventListener('change', () => {
//     let degreeNum = document.querySelector("#degrees");

//     if(count <= 49){
//         degreeNum.className = "freezing";
//     }
//     else if(count <= 59){
//         degreeNum.className = "cold";
//     }
// });
// downButton.addEventListener('change', () => {
//     let degreeNum = document.querySelector("#degrees");

//     if(count <= 49){
//         degreeNum.className = "freezing";
//     }
// });

downButton.addEventListener('click', () => {
    count = count - 1;

    if(count <= 49){
        degreeNum.className = "freezing";
    }
    else if(count <= 59){
        degreeNum.className = "cold";
    }
    else if(count <= 69){
        degreeNum.className = "warm";
    }
    else if(count <= 79){
        degreeNum.className = "hot";
    }
    else{
        degreeNum.className = "scorching";
    }

    document.getElementById("degrees").textContent = count;
});

//change text color 

