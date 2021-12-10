const selectSky = () => {
  document.getElementById('skySelect').getElementsByTagName('option')[name].selected = 'selected'
  changeSky(name)
}

const registerEventHandlers = (event) => {
  document.getElementById('skySelect').addEventListener("select", function(){selectSky(')});

}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
