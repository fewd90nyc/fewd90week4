var inputCtoF;
var inputFtoC;
var solutionFtoC;
var solutionCtoF;

function convertFtoC() {
	inputFtoC = document.getElementById("inputFtoC").value;
	solutionFtoC = document.getElementById("solutionFtoC").value;

	var total = (inputFtoC - 32) * (5/9);
	document.getElementById("solutionFtoC").innerHTML = total;
	}
	document.getElementById("convertFtoC").onclick = convertFtoC;

function convertCtoF()  {
	inputCtoF = document.getElementById("inputCtoF").value;
	solutionCtoF = document.getElementById("solutionCtoF").value;

	var total = (inputCtoF * (9 / 5)) +32;
	document.getElementById("convertCtoF").innerHTML = total;
	}
	document.getElementById("convertCtoF").onclick = convertCtoF;
