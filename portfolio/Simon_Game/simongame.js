//select the HTML elements
let blue = document.getElementById("blue");
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");


let redAudio = document.getElementById("redAudio");
let greenAudio = document.getElementById("greenAudio");
let blueAudio = document.getElementById("blueAudio");
let yellowAudio = document.getElementById("yellowAudio");

const playRedAudio = () => redAudio.play();
const playGreenAudio = () => greenAudio.play();
const playBlueAudio = () => blueAudio.play();
const playYellowAudio = () => yellowAudio.play();
//array for the computer's choice
let changedColors = [];
//array for the gamer's choice
let gamerColors = [];
//array for compare
let compareColors = [];
//array for sounds
let playSounds = [];

//add click event listener to the HTML elements, change and back the opacity
blue.addEventListener("click", function() {
  playBlueAudio();
  gamerColors.push("blue");
  this.style.opacity = 1;
  this.style.filter = "brightness(180%)";
  setTimeout(function colorBack() {
    blue.style.opacity = 0.8;
    blue.style.filter = "brightness(100%)";
  }, 300);
})

green.addEventListener("click", function() {
  playGreenAudio();
  gamerColors.push("green");
  this.style.opacity = 1;
  this.style.filter = "brightness(180%)";
  setTimeout(function colorBack() {
    green.style.opacity = 0.8;
    green.style.filter = "brightness(100%)";
  }, 300);

})

red.addEventListener("click", function() {
  playRedAudio();
  gamerColors.push("red");
  this.style.opacity = 1;
  this.style.filter = "brightness(180%)";
  setTimeout(function colorBack() {
    red.style.opacity = 0.8;
    red.style.filter = "brightness(100%)";
  }, 300);

})

yellow.addEventListener("click", function() {
  playYellowAudio();
  gamerColors.push("yellow");
  this.style.opacity = 1;
  this.style.filter = "brightness(150%)";
  setTimeout(function colorBack() {
    yellow.style.opacity = 0.8;
    yellow.style.filter = "brightness(100%)";
  }, 300);
})

//array of the colors
let colors = [blue, green, red, yellow];
//array for sounds
let sounds = [blueAudio, greenAudio, redAudio, yellowAudio];
//the end of the loop
let count = 0;

let a = 0;

function game() {
  //one good answer, one more loop, one more color
  count++;
  gamerColors = [];

  //random color
  let j = Math.floor(Math.random() * 4);
  changedColors.push(colors[j]);
  compareColors.push(colors[j].id);
  playSounds.push(sounds[j]);
  //when changes the opacity, the gamer can see the computer's choice
  for (let i = 0; i < changedColors.length; i++) {
    setTimeout(function() {
      playSounds[i].play();
      changedColors[i].style.opacity = 1;
      changedColors[i].style.filter = "brightness(150%)";
      setTimeout(function colorBack() {
        changedColors[i].style.opacity = 0.8;
        changedColors[i].style.filter = "brightness(100%)";
      }, 300)
    }, (1500 - a) * i)
  }
}

//compare the gamer's choice with the computer's random choice
function result() {
  if (JSON.stringify(compareColors) === JSON.stringify(gamerColors)) {
    //the game will quicker
    a += 10;
    alert("Good!😀 Your points: " + count * 10);
  } else {
    alert("Game Over! ☹️");
    count = 0;
    a = 0;
    changedColors = [];
    compareColors = [];

  }
}
