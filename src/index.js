for (let i = 30; i < 80; i += 5) {
  document.body.onload = addElement(i);
}

/* a function to create the temps, 
this is the only function syntax i could get to work?
It didnt like when I tried an arrow function.
Overall its a pretty clunky function. I'm still in the 
"just trying to get it to work" phase with JS
*/

function addElement(i) {
  let section = document.createElement('section');
  section.className = 'container';

  if (i < 45) section.style.color = 'rgb(103, 128, 147)';
  else if (i >= 45 && i <= 60) section.style.color = 'rgb(81, 136, 98)';
  else if (i >= 65) section.style.color = 'rgb(255, 236, 27)';

  let div = document.createElement('div');
  div.className = 'content';
  let h3 = document.createElement('h3');

  let temp = 0;
  h3.textContent = `${temp + i}°`;

  div.appendChild(h3);
  section.appendChild(div);
  document.body.appendChild(section);
}

function changeToRadish() {
  const source = document.getElementById('video');
  source.setAttribute('src', 'radish_med.mp4');
  document.body.style.backgroundColor = 'white';
}

function changeToMint() {
  const source = document.getElementById('video');
  source.setAttribute('src', 'mint_med.mp4');
  document.body.style.backgroundColor = 'black';
}

/* The code above is responsible for creating the numbers/sections for numbers 
and changing the colors/videos from radish to mint. The code below is responsible for
the scrolling effects. In order for both sections to work I had to place them
at different places in the html file. I'm not experienced enough to know why
or if there is a work around where I can just have the one script/src tag
for all of this. Help!

var frameNumber = 0, // start video at frame 0
  playbackConst = 100, // lower nums = faster playback
  setHeight = document.getElementById('set-height'); // get page height from video duration
vid = document.getElementById('v0'); // var vid = $('#v0')[0]; jquery option

// dynamically set the page height according to the video length
vid.addEventListener('loadedmetadata', function () {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst;
});

// User requestAnimationFrame for smooth playback
function scrollPlay() {
  var frameNumber = window.pageYOffset / playbackConst;
  vid.currentTime = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay); */
