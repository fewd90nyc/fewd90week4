//user input
//

var inputFtoC;
var solutionFtoC;
var convertFtoC;

var inputCtoF;
var solutionCtoF;
var convertCtoF;

function calculateFtoC() {
	inputFtoC = document.getElementById("inputFtoC").value;
	var solutionFtoC = (inputFtoC - 32) * 5/9;
	document.getElementById("inputCtoF").value = solutionFtoC;
}

document.getElementById("convertFtoC").onclick = calculateFtoC;

function calculateCtoF() {
	inputCtoF = document.getElementById("inputCtoF").value;
	var solutionCtoF = (inputCtoF * 9/5) + 32;
	document.getElementById("inputFtoC").value = solutionCtoF;
}

document.getElementById("convertCtoF").onclick = calculateCtoF;
