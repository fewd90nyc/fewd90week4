// F to C = (x - 32) * .5556


var inputFtoC;

function calculateTemp1() {
	inputFtoC = document.getElementById("inputFtoC").value;

	var total = (inputFtoC - 32) * 0.5556;

	document.getElementById("solutionFtoC").innerHTML = total; 
}

document.getElementById("convertFtoC").onclick = calculateTemp1;


// C to F = (x * 1.8) + 32\

var inputCtoF;

function calculateTemp2() {
	inputCtoF = document.getElementById("inputCtoF").value;

	var total = (inputCtoF * 1.8) + 32;

	document.getElementById("solutionCtoF").innerHTML = total; 
}

document.getElementById("convertCtoF").onclick = calculateTemp2;



