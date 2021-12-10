let temp=83;

const changeTempColor = (currentTemp)=> {
    const tempValueEl = document.getElementById("tempValue");
    let color = "teal";
    if (currentTemp>=80) {
        color='orange';
    } else if (currentTemp>=70) {
        color='yellow';
    }else if (currentTemp>=60) {
        color='green';
    } else if (currentTemp>=50) {
        color='blue';
    }
    tempValueEl.classList = color;
}

const updateTemp = () => {
    const tempValueEl = document.getElementById("tempValue");
    tempValueEl.textContent=temp;
    changeTempColor(temp);
}

const clickIncreaseTemp=()=> {
    const tempEl=document.getElementById('tempValue')
    temp+=1;
    tempEl.textContent = temp
};
const clickDecreaseTemp=()=> {
    const tempEl=document.getElementById('tempValue')
    temp-=1;
    tempEl.textContent = temp
};

const updateCityName = () => {
    const inputName = document.getElementById("cityNameInput").value;
    const cityName = document.getElementById("cityName");
    cityName.textContent = inputName;
};

const resetCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.value = "Los Angeles";
    updateCityName();
};



const registerHandlers=()=> {
    updateTemp(temp);
    
    const upButton = document.getElementById('increaseTempControl');
    upButton.addEventListener ('click', clickIncreaseTemp)
    
    const downButton = document.getElementById('decreaseTempControl');
    downButton.addEventListener ('click', clickDecreaseTemp)

    updateCityName();
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);

    const cityNameResetBtn = document.getElementById("cityNameReset");
    cityNameResetBtn.addEventListener("click", resetCityName);
};

document.addEventListener("DOMContentLoaded", registerHandlers);