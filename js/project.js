
 function convertFtoC() {
  var fTemp = document.getElementById("inputFtoC").value;
  var fToCel = (fTemp - 32) * 5 / 9;
  var convertFtoC = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    document.getElementById("convertFtoC").innerHTML = document.getElementById("solutionFtoC").value;
    
} 	


 function convertCtoF() {
    var inputCtoF = document.getElementById("inputCtoF").celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
   }


