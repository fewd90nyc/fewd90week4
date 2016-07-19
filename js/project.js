function convertFtoC() {
	var tempC = 0;
	var tempF = document.getElementById("inputFtoC").value;

	if (tempF && !isNaN(tempF)) {
		tempC = ((tempF- 32) * 5) / 9;
	}

	if (tempC !== 0) {
		tempC = tempC.toFixed(3);
	}

	document.getElementById("solutionFtoC").innerHTML = tempC;
}


function convertCtoF() {
	var tempF = 0;
	var tempC = document.getElementById("inputCtoF").value;

	if (tempC && !isNaN(tempC)) {
		tempF = ((tempC * 9) / 5) + 32;
	}

	if (tempF !== 0) {
		tempF = tempF.toFixed(3);
	}


	document.getElementById("solutionCtoF").innerHTML = tempF;
}


document.getElementById("convertFtoC").onclick = convertFtoC;
document.getElementById("convertCtoF").onclick = convertCtoF;