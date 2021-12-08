// select the HTML element the even will occur on

// make a function to run when it occurs

// register that function as an 'event listening'
const registerEventHandlers = () => {};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

// date & time
let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}
document.getElementById('date-time').innerHTML = day;
