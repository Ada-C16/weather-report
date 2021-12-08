// set initial temp
let temp = 55;

// select temp box
const displayTemp = () => {
    // display initial temp value
    const tempBox = document.getElementById('temp-box');
    tempBox.textContent = temp;
    // add event listener to increase temp button
    const increaseButton = document.querySelector('#increase');
    // console.log(`starting temp: ${temp}`)
    increaseButton.addEventListener('click', () => {
        temp += 1;
        tempBox.textContent = temp;
        // console.log('to temp style')
        tempStyle(temp, tempBox);
    });
    // add event listener to decrease temp button
    const decreaseButton = document.querySelector('#decrease');
    decreaseButton.addEventListener('click', () => {
        temp -= 1;
        tempBox.textContent = temp;
        // console.log('to temp style')
        tempStyle(temp, tempBox);
    })

    setSky();
}

const tempStyle = (temp, tempBox) => {
    // const tempBox = document.getElementById('temp-box')
    const landscape = document.getElementById('landscape')
    tempBox.removeAttribute('class');
    if (temp >=80) {
        // const tempBox = document.getElementById('temp-box');
        // tempBox.classList.remove('seventy-degrees', 'hi')
        // tempBox.removeAttribute('class');
        tempBox.classList.add('eighty-degrees');
        landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂'
    } else if (temp >= 70) {
        // const tempBox = document.getElementById('temp-box');
        // tempBox.classList.remove('eighty-degrees', 'seventy-degrees', 'sixty-degrees', 'fifty-degrees')
        // tempBox.removeAttribute('class');
        tempBox.classList.add('seventy-degrees');
        landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷'
    } else if (temp >= 60) {
        // const tempBox = document.getElementById('temp-box');
        // tempBox.removeAttribute('class');
        tempBox.classList.add('sixty-degrees');
        landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃'
    } else if (temp >= 50) {
        // const tempBox = document.getElementById('temp-box');
        // tempBox.removeAttribute('class');
        tempBox.classList.add('fifty-degrees');
        landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲'
    } else {
        // const tempBox = document.getElementById('temp-box')
        // tempBox.removeAttribute('class');
        tempBox.classList.add('forty-degrees')
        landscape.textContent = '🌬🌨 ️⛄🌬🌨 ️⛄🌬🌨 ️⛄🌬🌨 ️⛄'
    }
}

const setSky = () => {
    console.log('firing setSky func')
    const sky = document.getElementById('sky')
    const skyMenu = document.getElementById('sky-select');
    skyMenu.addEventListener('change', () => {
        console.log(skyMenu.value)
        if (skyMenu.value == 'sunny') {
            sky.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
        } else if (skyMenu.value == 'cloudy') {
            sky.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
        } else if (skyMenu.value == 'rainy') {
            sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
        } else {
            sky.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
        }
    }
)};


if (document.readyState !== 'loading') {
    displayTemp();
} else {
    document.addEventListener('DOMContentLoaded', displayTemp);
}