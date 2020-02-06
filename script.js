let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.querySelector(".random");

body.style.background = "linear-gradient(to right, "+ color1.value+", "+color2.value+")";
css.textContent = body.style.background + ";";

random.addEventListener("click", randomize);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function randomize(){
	let color1list = ["#"];
	let color2list = ["#"];
	const hexList = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	let select = 0;
	let select2 = 0;
	let i = 0
	while (i < 6){
		//generate integer between 0-16 (could ommit the zeroes but left in to remember formula)
		select = Math.floor(Math.random() * (16-0) + 0);
		select2 = Math.floor(Math.random() * (16-0) + 0);
		//push whatever is the nth element in hexlist to the end of this array. eg. hexlist[16] = 'f'
		color1list.push(hexList[select]);
		color2list.push(hexList[select2]);
		i++;
	}

	// to convert array to string without being joined by commas, to maintain the hex format. they'll be joined by "" intead. AKA nothing.
	color1.value = color1list.join("");
	color2.value = color2list.join("");
	setGradient(color1.value, color2.value);
}

function setGradient() {
 body.style.background =
 "linear-gradient(to right, "
 + color1.value
 + ", "
 +color2.value
 +")";

 	css.textContent = body.style.background + ";";
}