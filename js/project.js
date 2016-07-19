var inputFtoC
var inputCtoF

function calculateConversion () {
	inputFtoC = document.getElementById("inputFtoC").value;

	var conversion = (inputFtoC - 32) * (5/9) 

	document.getElementById("solutionFtoC").innerHTML = conversion;

}

document.getElementById("convertFtoC").onclick = calculateConversion;


function calculateConversions () {
	inputCtoF = document.getElementById("inputCtoF").value;

	var conversions = (inputCtoF * (9/5)) + 32 

	document.getElementById("solutionCtoF").innerHTML = conversions;

}

document.getElementById("convertCtoF").onclick = calculateConversions;





