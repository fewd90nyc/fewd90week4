var inputFOrC;
var calcToFaren;
var calcToCel;
var ResFaren;
var ResCel;

document.getElementById("convertCtoF").onclick = ResFaren;
document.getElementById("calcToCel").onclick = ResCel;

function ResFaren(){
	document.getElementById("convertCtoF").onclick = ResFaren;
	if (convertCtoF) {
		ResFaren = (["inputFOrC" * 1.8] + 32) 
	}
}

function ResCel(){
	document.body.style.backgroundColor = "blue";
	document.getElementById("label").innerHTML = "Air is on.";
	heatOn = false;
	airOn = true;
}

function runHVAC() {
	if (heatOn) {
		currentTemp = currentTemp + 1;
	}
	else if(airOn) {
		currentTemp = currentTemp - 1;			
	}
	document.getElementById("currentTemp").innerHTML = currentTemp;			
}