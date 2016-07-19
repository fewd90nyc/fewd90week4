
 function convertFtoC() {
  	var userinput = document.getElementById("inputFtoC").value;
  	var result = (userinput - 32) * 5 / 9;
 	document.getElementById("solutionFtoC").innerHTML = result;
} 	

document.getElementById('solutionFtoC').onclick = convertFtoC;

 function convertCtoF() {
    var userinput = document.getElementById("inputCtoF").value;
    var result = userinput * 9 / 5 + 32;
    document.getElementById("solutionCtoF").innerHTML = result;
}

document.getElementById('solutionCtoF').onclick = convertCtoF;
