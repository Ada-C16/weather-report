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
    });
    // add event listener to decrease temp button
    const decreaseButton = document.querySelector('#decrease');
    decreaseButton.addEventListener('click', () => {
        temp -= 1;
        tempBox.textContent = temp;
    })
}


if (document.readyState !== 'loading') {
    displayTemp();
} else {
    document.addEventListener('DOMContentLoaded', displayTemp);
}