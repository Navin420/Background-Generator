// import { without } from 'lodash';
// console.log(without);

var _ = require('lodash');
console.log(_);
var array = [1,2,3,4,3,5,3,2,5];
console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//for setting value of linear gradient info as text in h3
// and also to set values of linear-gradient in body.style.background
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);