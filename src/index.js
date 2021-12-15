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
    landscapeHandler()
};

const landscapeHandler = () => {
    const landscape = document.getElementById("landscapeOutput");
    if (state.temp >= 80) {
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.temp >= 70 && state.temp < 80) {
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.temp >= 60 && state.temp < 70) {
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

