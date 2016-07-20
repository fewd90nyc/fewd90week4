var ctemp;
var ftemp;


function calculateTotalFTemp() {
document.body.style.backgroundColor = "red";
ctemp = document.getElementById("ctemp").value;
var ftemp = (ctemp * 1.8) +32;
document.getElementById("solutionF").innerHTML = ftemp;
}

document.getElementById("clickmeF").onclick = calculateTotalFTemp;


function calculateTotalCTemp() {
document.body.style.backgroundColor = "blue";
ftemp = document.getElementById("ftemp").value;
var ctemp = (ftemp - 32) / 1.8;
document.getElementById("solutionC").innerHTML = ctemp;
}

document.getElementById("clickme").onclick = calculateTotalCTemp;
