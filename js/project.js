var = inputFtoC;
var = inputCtoF;

function caculateCelsius() {
	inputFtoC = document.getElementById("inputFtoC").value;

	var Celsius = (inputFtoC * (9/5)) + 32;

document.getElementById("solutionFtoC").innerHTML = Celsius; 
}

document.getElementById("convertFtoC").onclick = caculateCelsius;

function calculateFahrenheit() {
	inputCtoF = document.getElementById("inputCtoF").value;

	var Fahrenheit = (inputFtoC - 32) * (5/9);

document.getElementById("solutionCtoF").innerHTML = Fahrenheit;
}

document.getElementById("convertCtoF").onclick = calculateFahrenheit;
