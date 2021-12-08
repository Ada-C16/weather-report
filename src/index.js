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
}

const tempStyle = (temp, tempBox) => {
    // const tempBox = document.getElementById('temp-box')
    tempBox.removeAttribute('class');
    if (temp >=80) {
        // const tempBox = document.getElementById('temp-box');
        // tempBox.classList.remove('seventy-degrees', 'hi')
        // tempBox.removeAttribute('class');
        tempBox.classList.add('eighty-degrees');
    } else if (temp >= 70) {
        // const tempBox = document.getElementById('temp-box');
        // tempBox.classList.remove('eighty-degrees', 'seventy-degrees', 'sixty-degrees', 'fifty-degrees')
        // tempBox.removeAttribute('class');
        tempBox.classList.add('seventy-degrees');
    } else if (temp >= 60) {
        // const tempBox = document.getElementById('temp-box');
        // tempBox.removeAttribute('class');
        tempBox.classList.add('sixty-degrees');
    } else if (temp >= 50) {
        // const tempBox = document.getElementById('temp-box');
        // tempBox.removeAttribute('class');
        tempBox.classList.add('fifty-degrees');
    } else {
        // const tempBox = document.getElementById('temp-box')
        // tempBox.removeAttribute('class');
        tempBox.classList.add('forty-degrees')
    }
}


if (document.readyState !== 'loading') {
    displayTemp();
} else {
    document.addEventListener('DOMContentLoaded', displayTemp);
}