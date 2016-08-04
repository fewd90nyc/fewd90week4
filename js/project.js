var inputFtoC
var inputCtoF
var convertCtoF
var convertFtoC
var solutionCtoF
var solutionFtoC

function CalculateTotal(){
	inputFtoC = document.getElementById("inputFtoC").value;
	inputCtoF = document.getElementById("inputCtoF").value;
	
	var convertFtoC = (inputFtoC / 33.8);
	var convertCtoF = (inputCtoF * 33.8);

	solutionCtoF = document.getElementById("solutionCtoF").value;
	solutionFtoC = document.getElementById("solutionFtoC").value;
	
	document.getElementById("solutionFtoC").innerHTML = convertFtoC;
	document.getElementById("solutionCtoF").innerHTML = convertCtoF;


	document.getElementById("convertFtoC").onclick = solutionFtoC;
	document.getElementById("convertFtoC").onclick = solutionFtoC;

	// convertFtoC = document.getElementById("convertFtoC").value;
	// convertCtoF = document.getElementById("convertCtoF").value;



	}

// var maxAge;
// var age;
// var numPerDay;

// function calculateTotal() {
// 	maxAge = document.getElementById("maxAge").value;
// 	age = document.getElementById("age").value;
// 	numPerDay = document.getElementById("numPerDay").value;

// var total = (maxAge - age) * 365 * numPerDay;

// document.getElementById("solution").innerHTML = total;

// document.getElementById("clickme").onclick = calculateTotal
// }