var mainCanvas = document.querySelector("#mainCanvas");
var c = mainCanvas.getContext("2d");

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var cen = {cx: canvasWidth / 2, cy: canvasHeight / 2};

c.canvas.width  = canvasWidth;
c.canvas.height = canvasHeight;

var requestAnimationFrame = window.requestAnimationFrame || 
							window.mozRequestAnimationFrame || 
							window.webkitRequestAnimationFrame || 
							window.msRequestAnimationFrame;

function drawClock() {
	c.clearRect(0, 0, canvasWidth, canvasHeight);

	//STATIC PARTS----------------

	//canvas background
	c.fillStyle = "#177f75";
	c.fillRect(0, 0, canvasWidth, canvasHeight);

	//clock tall part
	c.fillStyle = "#663300";
	c.fillRect(cen.cx - 100, cen.cy, 200, canvasHeight / 2);

	//clock semicircle on top

	c.beginPath();
	c.arc(cen.cx, cen.cy - 100, 100, 0, Math.PI * 2, false);
	
	c.fillStyle = "#663300";
	c.fill();

	//clock square that goes around the face (with rounded corners)
	var r = 20;

	c.beginPath();
	c.moveTo(cen.cx - 125 + r, cen.cy - 125);
	c.lineTo(cen.cx + 125 - r, cen.cy - 125);
	c.quadraticCurveTo(cen.cx + 125, cen.cy - 125, cen.cx + 125, cen.cy - 125 + r);
	c.lineTo(cen.cx + 125, cen.cy + 125 - r);
	c.quadraticCurveTo(cen.cx + 125, cen.cy + 125, cen.cx + 125 - r, cen.cy + 125);
	c.lineTo(cen.cx - 125 + r, cen.cy + 125);
	c.quadraticCurveTo(cen.cx - 125, cen.cy + 125, cen.cx - 125, cen.cy + 125 - r);
	c.lineTo(cen.cx - 125, cen.cy - 125 + r);
	c.quadraticCurveTo(cen.cx - 125, cen.cy - 125, cen.cx - 125 + r, cen.cy - 125);
	c.closePath();

	c.fillStyle = "#663300";
	c.fill();


	//clock face background
	c.beginPath();
	c.arc(cen.cx, cen.cy, 100, 0, Math.PI * 2, false);
	c.closePath();

	c.fillStyle = "#c99f3a";
	c.fill();

	//clock face front
	c.beginPath();
	c.arc(cen.cx, cen.cy, 75, 0, Math.PI * 2, false);
	c.closePath();

	c.fillStyle = "#faebd7";
	c.fill();

	//hands center
	c.beginPath();
	c.arc(cen.cx, cen.cy, 5, 0, Math.PI * 2, false);
	c.closePath();

	c.fillStyle = "#000";
	c.fill();

	//lines at 3 6 9 12
	c.strokeStyle = "#000";
	c.lineWidth = "3";

	c.beginPath();
	c.moveTo(cen.cx, cen.cy - 100);
	c.lineTo(cen.cx, cen.cy - 75);
	c.stroke();

	c.beginPath();
	c.moveTo(cen.cx - 100, cen.cy);
	c.lineTo(cen.cx - 75, cen.cy);
	c.stroke();

	c.beginPath();
	c.moveTo(cen.cx + 100, cen.cy);
	c.lineTo(cen.cx + 75, cen.cy);
	c.stroke();

	c.beginPath();
	c.moveTo(cen.cx, cen.cy + 100);
	c.lineTo(cen.cx, cen.cy + 75);
	c.stroke();


	//MOVING PARTS----------------

	var date = new Date();
	var s = date.getSeconds();
	var m = date.getMinutes();
	var h = date.getHours();

	var sAngle = s * Math.PI / 30 - Math.PI / 2;
	var mAngle = m * Math.PI / 30 - Math.PI / 2;
	var hAngle = h * Math.PI / 40 + Math.PI / 2;

	c.strokeStyle = "#000";
	c.lineWidth = "2";

	//second hand
	c.beginPath();
	c.moveTo(cen.cx, cen.cy);
	c.lineTo(cen.cx + 100 * Math.cos(sAngle), cen.cy + 100 * Math.sin(sAngle));
	c.stroke();

	c.lineWidth = "5";

	//minute hand
	c.beginPath();
	c.moveTo(cen.cx, cen.cy);
	c.lineTo(cen.cx + 100 * Math.cos(mAngle), cen.cy + 100 * Math.sin(mAngle));
	c.stroke();

	//hour hand
	c.beginPath();
	c.moveTo(cen.cx, cen.cy);
	c.lineTo(cen.cx + 75 * Math.cos(hAngle), cen.cy + 75 * Math.sin(hAngle));
	c.stroke();

	requestAnimationFrame(drawClock);
}

drawClock();