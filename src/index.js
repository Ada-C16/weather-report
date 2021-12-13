const state = {
    temp: 48,
    initTempColorClass: 'forty-degrees',
    tempBox: document.getElementById('temp-box'), // NOT SURE IF THIS IS OK
    landscapes_map: {
        '80+': '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂',
        '70+': '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷',
        '60+': '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃',
        '50+': '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲',
        '40+': '🌬🌨 ️⛄🌬🌨 ️⛄🌬🌨 ️⛄🌬🌨 ️',
    },
    sky_map: {
        sunny: '  ☁️      ☀️ ☁️      ☁️ ☁️',
        cloudy: '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️',
        rainy: '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧',
        snowy: '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨',
    }
}

// does it make sense to use state this way?

// set initial temp and display it
// should these be defined globally? in a function?

// let temp = 55;
// const tempBox = document.getElementById('temp-box');
// tempBox.textContent = temp;

// setting initial temp and color
state.tempBox.classList.add(state.initTempColorClass);
state.tempBox.textContent = `${state.temp} °F`;


// MAYBE THIS IS BAD BECAUSE I'M RESTYLING EVERY SINGLE TIME TEMP CHANGES

// HELPER FUNCTIONS

const styleColorAndLandscape = () => {
    results = determineTempRange();
    setTempColor(results.tempColorClass);
    setTempLandscape(results.tempLandscape); 
}

const determineTempRange = () => {
    temp = state.temp;
    landscapes_map = state.landscapes_map;
    if (temp >=80) {
        tempColorClass = 'eighty-degrees';
        tempLandscape = landscapes_map['80+']
    } else if (temp >= 70) {
        tempColorClass = 'seventy-degrees';
        tempLandscape = landscapes_map['70+']
    } else if (temp >= 60) {
        tempColorClass = 'sixty-degrees';
        tempLandscape = landscapes_map['60+']
    } else if (temp >= 50) {
        tempColorClass = 'fifty-degrees';
        tempLandscape = landscapes_map['50+']
    } else {
        tempColorClass = 'forty-degrees';
        tempLandscape = landscapes_map['40+']
    }
    return {
        tempColorClass, 
        tempLandscape
    }
}

const setTempColor = (className) => {
    state.tempBox.removeAttribute('class');
    state.tempBox.classList.add(className);
}

const setTempLandscape = (landscapeType) => {
    const landscape = document.getElementById('landscape');
    landscape.textContent = landscapeType;
}


// FUNCTIONS FOR EACH ELEMENT'S EVENT HANDLER

const registerIncreaseButton = () => {
    const increaseButton = document.querySelector('#increase');
    increaseButton.addEventListener('click', () => {
        state.temp += 1
        state.tempBox.textContent = `${state.temp} °F`;
        styleColorAndLandscape();
    });
}

const registerDecreaseButton = () => {
    const decreaseButton = document.querySelector('#decrease');
    decreaseButton.addEventListener('click', () => {
        state.temp -= 1;
        state.tempBox.textContent = `${state.temp} °F`;
        styleColorAndLandscape();
    })
}

const registerCityInput = () => {
    const cityHeader = document.getElementById('display-city')
    const cityInput= document.getElementById('city-name')
    cityInput.addEventListener('input', () => {
        cityHeader.innerHTML = cityInput.value
    })
}

const registerCityResetButton = () => {
    const resetButton = document.getElementById('reset');
    const cityHeader = document.getElementById('display-city')
    const cityInput= document.getElementById('city-name')
    resetButton.addEventListener('click', () => {
        cityHeader.innerHTML = 'Seattle';
        cityInput.value = 'Seattle';
    });
}

const registerSkySelect = () => {
    const sky = document.getElementById('sky')
    const skyMenu = document.getElementById('sky-select');
    skyMenu.addEventListener('change', () => {
        if (skyMenu.value == 'sunny') {
            sky.textContent = state.sky_map.sunny;
        } else if (skyMenu.value == 'cloudy') {
            sky.textContent = state.sky_map.cloudy;
        } else if (skyMenu.value == 'rainy') {
            sky.textContent = state.sky_map.rainy;
        } else {
            sky.textContent = state.sky_map.snowy;
        }
    })
};

// REGISTER ALL EVENT HANDLERS
const registerEventHandlers = () => {
    registerIncreaseButton();
    registerDecreaseButton();
    registerCityInput();
    registerCityResetButton();
    registerSkySelect();
}

// RUN ON LOAD
if (document.readyState !== 'loading') {
    registerEventHandlers();
} else {
    document.addEventListener('DOMContentLoaded', registerEventHandlers);
}









// this function is responsible for changing two things in one function...

// const tempStyle = () => {
//     // console.log('running tempStyle')
//     temp = state.temp;
//     tempBox = state.tempBox;
//     const landscape = document.getElementById('landscape')
    
//     tempBox.removeAttribute('class');

//     if (temp >=80) {
//         tempBox.classList.add('eighty-degrees');
//         landscape.textContent = state.landscapes_map['80+']
//     } else if (temp >= 70) {
//         tempBox.classList.add('seventy-degrees');
//         landscape.textContent = state.landscapes_map['70+']
//     } else if (temp >= 60) {
//         state.tempBox.classList.add('sixty-degrees');
//         landscape.textContent = state.landscapes_map['60+']
//     } else if (temp >= 50) {
//         state.tempBox.classList.add('fifty-degrees');
//         landscape.textContent = state.landscapes_map['50+']
//     } else {
//         tempBox.classList.add('forty-degrees');
//         landscape.textContent = state.landscapes_map['40+']
//     }
// }

// HELPER FUNCTIONS?


// HOW CAN I ELIMINATE THESE REPEATED CONDITIONALS
// const setTempColor = () => {

//     state.tempBox.removeAttribute('class');

//     if (state.temp >=80) {
//         state.tempBox.classList.add('eighty-degrees');
//     } else if (state.temp >= 70) {
//         state.tempBox.classList.add('seventy-degrees');
//     } else if (state.temp >= 60) {
//         state.tempBox.classList.add('sixty-degrees');
//     } else if (state.temp >= 50) {
//         state.tempBox.classList.add('fifty-degrees');
//     } else {
//         state.tempBox.classList.add('forty-degrees');
//     }
// }

// const setTempLandscape = () => {
    
//     const landscape = document.getElementById('landscape')

//     if (state.temp >=80) {
//         landscape.textContent = state.landscapes_map['80+']
//     } else if (state.temp >= 70) {
//         landscape.textContent = state.landscapes_map['70+']
//     } else if (state.temp >= 60) {
//         landscape.textContent = state.landscapes_map['60+']
//     } else if (state.temp >= 50) {
//         landscape.textContent = state.landscapes_map['50+']
//     } else {
//         landscape.textContent = state.landscapes_map['40+']
//     }
// }

// const setTempColor = () => {

//     state.tempBox.removeAttribute('class');

//     state.tempBox.classList.add();
//     // if (state.temp >=80) {
//     //     state.tempBox.classList.add('eighty-degrees');
//     // } else if (state.temp >= 70) {
//     //     state.tempBox.classList.add('seventy-degrees');
//     // } else if (state.temp >= 60) {
//     //     state.tempBox.classList.add('sixty-degrees');
//     // } else if (state.temp >= 50) {
//     //     state.tempBox.classList.add('fifty-degrees');
//     // } else {
//     //     state.tempBox.classList.add('forty-degrees');
//     // }
// }