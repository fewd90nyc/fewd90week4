var inputFtoC;

var inputCtoF;

function calculateTotal () {
	inputFtoC = document.getElementById("inputFtoC").value;
	inputCtoF = document.getElementById("inputCtoF").value;
	
	var totalFtoC = (inputFtoC - 32) * (5/9);
	var totalCtoF = inputCtoF / (5/9) + 32;

	document.getElementById("solutionFtoC").innerHTML = totalFtoC;
	document.getElementById("solutionCtoF").innerHTML = totalCtoF;

}

document.getElementById("convertFtoC").onclick = calculateTotal;
document.getElementById("convertCtoF").onclick = calculateTotal;