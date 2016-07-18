
var number;
var newNumber;

var input;
var newInput;

function calculate(){
number=document.getElementById("inputFtoC").value;
newNumber=Math.round((number -32)/1.8);
document.getElementById("solutionFtoC").innerHTML = newNumber;
document.getElementById("solutionFtoC").textDecoration = underline;
}


function Total(){
input=document.getElementById("inputCtoF").value;
newInput=(input *1.8)+32;
document.getElementById("solutionCtoF").innerHTML = newInput;


}

document. getElementById("convertFtoC"). onclick=calculate;
document. getElementById("convertCtoF"). onclick=Total;



