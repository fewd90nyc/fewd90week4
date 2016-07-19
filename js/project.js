// on click...
//save user input from box into variable
//calculate to F or C
// f to c = (userinput * 1.8) + 32
// save new result into variable
//display result

document.getElementById("convertFtoC").onclick = fahrenheitToCelcius;
document.getElementById("convertCtoF").onclick = celciusToFahrenheit;

function fahrenheitToCelcius(){
	var userInput = document.getElementById("inputFOrC").value;
	var fahrenheitResult = ((userInput * 1.8) + 32 );
	document.getElementById("solutionFToC").innerHTML = fahrenheitResult;
}

function celciusToFahrenheit(){
	var userInput = document.getElementById("inputFOrC").value;
	var celciusResult = ((userInput / 1.8) - 32 );
	document.getElementById("solutionCToF").innerHTML = celciusResult;
}



