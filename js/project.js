var inputFtoC;
var inputCtoF;

function FarenheitToCelsius() {
	inputFtoC = document.getElementById("inputFtoC").value;

	var total = (inputFtoC - 32) * (5/9);

	document.getElementById("solutionFtoC").innerHTML = total;	
}

function CelsiusToFarenheit() {
	inputCtoF = document.getElementById("inputCtoF").value;

	var total = (inputCtoF * 1.8) + 32;

	document.getElementById("solutionCtoF").innerHTML = total;

}

document.getElementById("convertCtoF").onclick = CelsiusToFarenheit;
document.getElementById("convertFtoC").onclick = FarenheitToCelsius;


	