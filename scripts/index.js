let myTemp = 75;
let myCity = 'Seattle, WA';


/*Things that happen when the page loads*/
window.addEventListener('load', function (){

    //let's set up the initial values for the page

    //display the labels
    setTemperature(0);
    document.getElementById("city").value = myCity;
    setCity(myCity);

    //make the buttons and other form elementsw do something
    //by binding an action to the function
    document.getElementById("reduceTemp").onclick = function() {
        setTemperature(-1);
    };
    document.getElementById("increaseTemp").onclick = () => {
        setTemperature(+1);
    };    
    document.getElementById("city").onkeyup = () => {
        setCity();
    };      
    document.getElementById("sky").onchange = () => {
        console.log(this.event);
        changeSky();
    };     
    document.getElementById("temperature_small").onfocus = () => {
        document.getElementById("temperature_small").value = '';
    }
    document.getElementById("temperature_small").onblur = () =>{
        document.getElementById("temperature_small").value = myTemp;
    }    
    
    document.getElementById("temperature_small").onkeyup = function (){
        let varInput = (document.getElementById("temperature_small").value).replace(String.fromCharCode(176), '');
        console.log('varInput is: ' + varInput);
        if (isNaN(varInput)){
            alert('We only accept numbers.')
            document.getElementById("temperature_small").value = myTemp;
        }else{
            theChange = varInput - myTemp;
        }
        setTemperature(theChange);
    }   
});

const setTemperature = (tempChange) => {
    //reset the myTemp global variable
    myTemp = (myTemp + tempChange);
    //make a pretty label
    let myTempLabel =  myTemp + String.fromCharCode(176);
    //update the display elements for temp
    document.getElementById("temperature_big").innerHTML = myTempLabel;
    document.getElementById("temperature_small").value = myTempLabel.replace(String.fromCharCode(176), '');

    //do some conditional changes to the page based on the temp
    if (myTemp >= 80){
        if (myTemp > 150){
            alert('Planet earth in imminent danger.')
        }
        setMainTextColor('red');
        document.getElementById('landscape-image').src = './assets/landscapes/summer.png';
    }else if ((myTemp >= 70)&&(myTemp < 80)){
        setMainTextColor('orange');
        document.getElementById('landscape-image').src = './assets/landscapes/fall.png';
    }else if ((myTemp >= 60)&&(myTemp < 70)){
        setMainTextColor('yellow');
        document.getElementById('landscape-image').src = './assets/landscapes/spring.png';
    }else if ((myTemp >= 50)&&(myTemp < 60)){
        setMainTextColor('green');
        document.getElementById('landscape-image').src = './assets/landscapes/winter.png';
    }else{
        setMainTextColor('teal');
    }
}

const setMainTextColor = (theColor) => {
    for (let i=0, len=document.getElementsByClassName('theMainText').length; i<len; i++) {
        document.getElementsByClassName('theMainText')[i].style.color = theColor;
    }      
}

const setCity = () => {
    myCity = document.getElementById("city").value;
    document.getElementById("cityname").innerHTML = myCity
}

const changeSky = () => {
    const selectedSky = document.getElementById("sky").options[document.getElementById("sky").selectedIndex].value;
    let theMainDiv = document.getElementById("main");
    let fontColor = "black";
    let fontsToChange = document.getElementsByClassName("theMainText");

    console.log('changing sky to:' + selectedSky);
    //change the images
    console.log(" changing backgroundImage to: url(./assets/skies/" + selectedSky + ".jpg)")
    theMainDiv.style.backgroundImage = "url('./assets/skies/" + selectedSky + ".jpg')";
    //now change the fonts so you can see them

    fontsWhite = ['snow', 'rainy', 'cloudy'];
    console.log('the selected sky is at index for fontsWhite at:' + fontsWhite.indexOf(selectedSky));
    if (fontsWhite.indexOf(selectedSky) !== -1){       
        fontColor = "white";
    }else{
        fontColor = "black";
    }
       //now loop through the elements and update their css
    for (let i=0, len=fontsToChange.length; i<len; i++) {
        fontsToChange[i].style.textShadow = '5px 5px 2px ' + fontColor;
    }  

}