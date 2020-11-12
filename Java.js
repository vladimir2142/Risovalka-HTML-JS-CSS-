var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");
colorCircles[6] = document.getElementById("DarkRed");
colorCircles[7] = document.getElementById("MediumVioletRed");
colorCircles[8] = document.getElementById("Coral");
colorCircles[9] = document.getElementById("Olive");

var targetColor="#F00";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";

var list=document.getElementById("list");
list.addEventListener("click", pickColor);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

function pickColor(e){
	console.log(e.target.tagName);
	if (e.target.tagName=="LI"){
		if (e.target.id=="red"){
			targetColor="#F00"
		}
		else if (e.target.id=="blue"){
			targetColor="#00F"
		}
		else if (e.target.id=="green"){
			targetColor="#0F0"
		}
		else if (e.target.id=="yellow"){
			targetColor="#FF0"
		}
		else if (e.target.id=="cyan"){
			targetColor="#0FF"
		}
		else if (e.target.id=="magenta"){
			targetColor="#F0F"
		}
		else if (e.target.id=="DarkRed")
		{
			targetColor='#8B0000'
		}
		else if (e.target.id=="MediumVioletRed")
		{
			targetColor='#C71585'
		}
		else if (e.target.id=="Coral")
		{
			targetColor='#FF7F50'
		}
		else if (e.target.id=="Olive")
		{
			targetColor='#808000'
		}
		for (var i =0; i<=9; i++) {
			colorCircles[i].style.height="50px";
			colorCircles[i].style.width="50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}

function drawOnCanvas(e){
	if (e.which==1){
		canvasContext.fillStyle=targetColor;
		canvasContext.beginPath();
		canvasContext.arc(e.offsetX, e.offsetY, 50, 0, Math.PI);
		canvasContext.fill();
	}
}

