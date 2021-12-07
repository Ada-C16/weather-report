let myTemp = 75;
let myCity = 'Seattle, WA';

/*Things that happen when the page loads*/
window.onload = function () {
    //let's set up the initial values for the page

    //display the labels
    setTemperature(0);
    document.getElementById("city").value = myCity;
    setCity(myCity);

    //make the buttons do something
    document.getElementById("reduceTemp").onclick = function() {
        setTemperature(-1);
    };
    document.getElementById("increaseTemp").onclick = function() {
        setTemperature(+1);
    };    
    document.getElementById("city").onkeyup = function() {
        setCity();
    };       
};

function setTemperature(tempChange){
    //reset the myTemp global variable
    myTemp = (myTemp + tempChange);
    //make a pretty label
    let myTempLabel =  myTemp + '&deg;';
    //update the display elements for temp
    document.getElementById("temperature_big").innerHTML = myTempLabel;
    document.getElementById("temperature_small").innerHTML = myTempLabel;

    //do some conditional changes to the page based on the temp
    // if (myTemp > 60)&&(myTemp < 100){

    // }
}

function setCity(){
    myCity = document.getElementById("city").value;
    document.getElementById("cityname").innerHTML = myCity
}

function changeSky(){
    whichSky = document.getElementById("sky")
    selectedSky = whichSky.options[whichSky.selectedIndex].value;
    console.log('changing sky to:' + selectedSky);
    //change the images



}