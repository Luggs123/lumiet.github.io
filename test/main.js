function processImage() {
	
}

function main() {
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var base = new Image();
var newBase = new Image();
var darkBase = new Image();
var newDarkBase = new Image();
var lightBase = new Image();
var newLightBase = new Image();
var testElem = document.getElementById("test");


for(var i = 0; i<3; i++){		
	switch(i) {
		case 0: base.onload = 
		function() { 
			ctx.filter = 'hue-rotate('+ (Math.random()*360) +'deg)'; 
			ctx.drawImage(this,0,0); 
			newBase.src = canvas.toDataURL(); 
			test.style = 'background: url("'+newBase.src+'")';
			ctx.clearRect(0,0,canvas.width,canvas.height);		
			};  break;
		case 1: darkBase.onload = 
		function() {
			ctx.filter = 'hue-rotate('+ (Math.random()*360) +'deg)'; 
			ctx.drawImage(this,0,0); 
			newDarkBase.src = canvas.toDataURL();
			test.style.background += 'url("'+newDarkBase.src+'")';
			ctx.clearRect(0,0,canvas.width,canvas.height);
		};  break;
		case 2: lightBase.onload = 
		function() {
			ctx.filter = 'hue-rotate('+ (Math.random()*360) +'deg)'; 
			ctx.drawImage(this,0,0); 
			newLightBase.src = canvas.toDataURL();
		}; break;	
		default: break;
	}
	} 
base.src = "assets/base.png";
darkBase.src = "assets/dark-base.png"; 
lightBase.src = "assets/light-base.png"; 

console.log(newBase.src);
console.log("lol hi");


/*	console.log("losdfsdf");
amnt = Math.random()*360;
console.log(amnt);
document.getElementById("shading").style = "filter: hue-rotate(" + amnt + "deg);"; */

}