//canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;


//draw

function draw() {

  //current date
  var date = new Date();

  //clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //current seconds
  var seconds = date.getSeconds();
  //seconds
  ctx.beginPath();
  //origo = the center of the canvas
  ctx.moveTo(width / 2, height / 2);
  // 6 degrees during one second
  // rad = degrees * pi/180
  // from the circle's equation :
  // x (here a) = origo + radius (here the length of the clock hand) * sin(rad) or sin(degrees*pi/180)
  // y (here b) = origo + radius (here the length of the clock hand) * cos(rad) or cos(degrees*pi/180)
  var a = width / 2 + 0.9 * width / 2 * Math.sin(6 * seconds * Math.PI / 180);
  var b = height / 2 - 0.9 * height / 2 * Math.cos(6 * seconds * Math.PI / 180);
  ctx.lineTo(a, b);
  ctx.strokeStyle = "rgb(23, 61, 57)";
  ctx.lineWidth = 2.5;
  ctx.stroke();


  // current minutes
  var minutes = date.getMinutes();
  //minutes
  ctx.beginPath();
  ctx.moveTo(width / 2, height / 2);
  //6 degrees during one minute
  // rad = degrees * pi/180
  // from the circle's equation :
  // x (here c) = origo + radius (here the length of the clock hand) * sin(rad) or sin(degrees*pi/180)
  // y (here d) = origo + radius (here the length of the clock hand) * cos(rad) or cos(degrees*pi/180)
  var c = width / 2 + 0.8 * width / 2 * Math.sin(6 * minutes * Math.PI / 180);
  var d = height / 2 - 0.8 * height / 2 * Math.cos(6 * minutes * Math.PI / 180);
  ctx.lineTo(c, d);
  ctx.strokeStyle = "rgb(23,61,57)";
  ctx.lineWidth = 3.5;
  ctx.stroke();


  //current hours
  var hours = date.getHours();
  //hours
  ctx.beginPath();
  ctx.moveTo(width / 2, height / 2);
  //30 degrees during one hour
  // rad = degrees * pi/180
  // from the circle's equation :
  // x (here e) = origo + radius (here the length of the clock hand) * sin(rad) or sin(degrees*pi/180)
  // y (here f) = origo + radius (here the length of the clock hand) * cos(rad) or cos(degrees*pi/180)

  var e = width / 2 + 0.6 * width / 2 * Math.sin((30 * (hours + minutes / 60)) * Math.PI / 180);
  var f = height / 2 - 0.6 * height / 2 * Math.cos(30 * (hours + minutes / 60) * Math.PI / 180);
  ctx.lineTo(e, f);
  ctx.strokeStyle = "rgb(23,61,57)";
  ctx.lineWidth = 4.5;
  ctx.stroke();

  //clock face

  for (var i = 0; i < 12; i++) {
    var x1 = width / 2 + 0.9 * width / 2 * Math.sin(30 * i * Math.PI / 180);
    var y1 = height / 2 - 0.9 * height / 2 * Math.cos(30 * i * Math.PI / 180);

    var x2 = width / 2 + 0.8 * width / 2 * Math.sin(30 * i * Math.PI / 180);
    var y2 = height / 2 - 0.8 * height / 2 * Math.cos(30 * i * Math.PI / 180);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x1, y1);
    ctx.lineWidth = 3;
    ctx.stroke();
  }
}

draw();

// update in every seconds
setInterval(draw, 1000);
