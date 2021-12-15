const state = { 
    temp: 75,
    location: "Seattle"
};

const registerEventHandlers = () => {
    document.getElementById("increment-btn").addEventListener('click', tempHandler(1));
    document.getElementById("decrement-btn").addEventListener('click', tempHandler(-1));
};



const tempHandler = (step) => {
    const tempInput = document.getElementById("tempInput");
    const tempInt = parseInt(tempInput.textContent) + step;
    console.log(tempInt);
    tempInput.textContent = String(tempInt);
    state.temp = tempInt;
    //update garden
};

