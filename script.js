let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.querySelector(".random");
let swap = document.querySelector(".swap");
let dropDown = document.querySelector(".colorFormat");
let saveButton = document.querySelector(".save");
let saveList = document.getElementById("saved");
let fromList = false;

body.style.background = "linear-gradient(to right, "+ color1.value+", "+color2.value+")";
css.textContent = body.style.background + ";";

saveList.addEventListener("change", setSavedGradient);
saveButton.addEventListener("click", save);
dropDown.addEventListener("change", convertCSStext); //only call the function when selecting a different option.
swap.addEventListener("click", swapColors);
random.addEventListener("click", randomize);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

/*if dropDown value = hex, set text content to color1&2.value (as color picker values are stored as hexadecimal)
if not, set textContent to be equal to body.style.background, (as background is stored as rgb)
this way we dont need to do any actual converting between rgb and hexadecimal.*/
function convertCSStext(){
	this.value === "hex" ? 
	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")" + ";"
	:
	css.textContent = body.style.background + ";"
}

//change background to match color pickers' colours, then update CSS according to if dropDown value is set to rgb or hex.
function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+color2.value
	+")";
	fromList === true ? fromList = false : saveList.selectedIndex = 0;
	if (dropDown.value === "rgb"){
		css.textContent = body.style.background + ";";
	}
	else if(dropDown.value === "hex"){
		css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")" + ";";
	}
}

//we must generate hexadecimal numbers instead of rgb because color pickers work with hexadecimals.
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
	//call the setGradient function with our new random hexadecimals as arguments
	setGradient(color1.value, color2.value);
}

function swapColors(){
	let swapColor = color1.value;
	color1.value = color2.value;
	color2.value = swapColor;
	setGradient(color1.value, color2.value);
}

/*adds a new <option> to the saveList (which is the <select class="saved">).
this new option's text will contain both color1 and color2 values.
and if we already have that background saved, do nothing*/
function save(){
	let newOption = document.createElement("option");
	newOption.text = `${color1.value},${color2.value}`;
	for (var i=0; i<saveList.length; i++){
		if(newOption.text === saveList.options[i].text){
			return;
		}
	}
	newOption.style.background = color1.value;
	saveList.add(newOption);
}

/*split the values into two values at the comma, ie. #5652cb,#1ad9cb splits into #5652cb and #1ad9cb.
since this is the correct format, we can pass these as arguments for setGradient.
fromList is set to true so that the saveList index doesn't change to 'saved backgrounds'
as it normally would, and instead displays the currently selected saved background.*/
function setSavedGradient(){
	let values = event.target.value;
	let valuesSplit = values.split(',');
	 color1.value = valuesSplit[0];
	 color2.value = valuesSplit[1];
	 fromList = true;
	setGradient(color1.value, color2.value, fromList);
}