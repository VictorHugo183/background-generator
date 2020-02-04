var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

body.style.background = "linear-gradient(to right, "+ color1.value+", "+color2.value+")";
css.textContent = body.style.background + ";";

function setGradient() {
 body.style.background =
 "linear-gradient(to right, "
 + color1.value
 + ", "
 +color2.value
 +")";

 	css.textContent = body.style.background + ";";
}

/*This doesn't work because value must be in hexadecimal not rbg. FeelsBadMan.*/

//  function randomize(){
//  	var rbg1 = [];
//  	var rbg2 = [];
// 	var i = 0;
// 	while (i < 3) {
// 		rbg1.push(Math.floor(Math.random() * (255 - 0) +0));
// 		rbg2.push(Math.floor(Math.random() * (255 - 0) +0));
// 		i++;
// 	}
// 	var test = "rbg("+rbg1[0]+","+rbg1[1]+","+rbg1[2]+")";
// 	console.log(test);
// }

function randomize(){
	var color1list = ["#"];
	var color2list = ["#"];
	var hexList = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	var select = 0;
	var select2 = 0;
	i = 0
	while (i < 6){
		select = Math.floor(Math.random() * (16-0) + 0);
		select2 = Math.floor(Math.random() * (16-0) + 0);
		color1list.push(hexList[select]);
		color2list.push(hexList[select2]);
		i++;
	}
	//The pepega way to add the strings of an array to a variable.
	// color1.value = color1list[0] + color1list[1] + color1list[2] + color1list[3] + color1list[4] + color1list[5] + color1list[6];

	// to convert array to string without being joined by commas, to maintain the hex format. they'll be joined by "" intead. AKA nothing.
	color1.value = color1list.join("");
	color2.value = color2list.join("");
	console.log(color1.value);
	console.log(color2.value);
/*	var randomColor1 = color1.value;
	var randomColor2 = color2.value;*/
	setGradient(color1.value, color2.value);
}

random.addEventListener("click", randomize);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);