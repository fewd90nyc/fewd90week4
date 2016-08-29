var inputFtoC;
var inputCtoF;

function convertFtoC() {

	inputFtoC = document.getElementById("inputFtoC").value;

	var total = (inputFtoC - 32) / 1.8;

	document.getElementById("solutionFtoC").innerHTML = total + "&deg;C";
	}

	document.getElementById("convertFtoC").onclick = convertFtoC;

function convertCtoF() {

	inputCtoF = document.getElementById("inputCtoF").value;

	var total = (inputCtoF * 1.8) + 32;

	document.getElementById("solutionCtoF").innerHTML = total + "&deg;F";
	}
 
	document.getElementById("convertCtoF").onclick = convertCtoF;

