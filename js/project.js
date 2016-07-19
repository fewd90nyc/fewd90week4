var inputFtoC;
var solutionFtoC;
var convertFtoC;

var inputCtoF;
var solutionCtoF;
var convertCtoF;


function calculateFtoC() {

 inputFtoC = document.getElementById("inputFtoC").value;

  var solutionFtoC = (inputFtoC - 32) * 5/9;

  document.getElementById("inputCtoF").value = solutionFtoC;
}

document.getElementById("convertFtoC").onclick = calculateFtoC;

function calculateCtoF() {

  inputCtoF = document.getElementById("inputCtoF").value;

  var solutionCtoF = (inputCtoF * 9/5) + 32;

  document.getElementById("inputFtoC").value = solutionCtoF;
}

document.getElementById("convertCtoF").onclick = calculateCtoF;


var colors = new Array(
  [255,54,54],
  [207,113,27],
  [226,145,59],
  [220,126,111],
  [54,240,255],
  [27,179,20]);



var step = 0;

var colorIndices = [0,1,2,3];

var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);


