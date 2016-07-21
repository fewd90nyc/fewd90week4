var inputFtoC;
var inputCtoF;

function calculateTotalCtoF() {

	inputCtoF = document.getElementById("inputCtoF").value;

	var solutionCtoF = inputCtoF * 9 / 5 + 32;


	document.getElementById("solutionCtoF").innerHTML = solutionCtoF;
}

function calculateTotalFtoC() {
	inputFtoC = document.getElementById("inputFtoC").value;

	var solutionFtoC = (inputFtoC - 32) * (5 / 9);


	document.getElementById("solutionFtoC").innerHTML = solutionFtoC;

}

document.getElementById("convertFtoC").onclick = calculateTotalFtoC;
document.getElementById("convertCtoF").onclick = calculateTotalCtoF;
