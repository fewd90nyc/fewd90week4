var inputTemp;
var convertedTemp;
var measurement;

document.getElementById("CtoF").onclick = convertToF;
document.getElementById("FtoC").onclick = convertToC;

function convertToF() {
	inputTemp = getInputTemp();
	if (isNaN(inputTemp)) {
		document.getElementById("convertedTemp").innerHTML = "N/A";
	}
	else {
		convertedTemp = (inputTemp * 1.8) + 32;	
		runTemp('fahrenheit',8457);
	}
}

function convertToC() {
	inputTemp = getInputTemp();
	if (isNaN(inputTemp)) {
		document.getElementById("convertedTemp").innerHTML = "N/A";
	}
	else {
		convertedTemp = (inputTemp - 32) / 1.8;
		runTemp('celsius',8451);
	}
}

function getInputTemp (){
	return parseInt(document.getElementById("inputTemp").value);
}

function runTemp (measurement,tempCode) {
	convertedTemp = (convertedTemp.toFixed(1));
	document.getElementById("convertedTemp").innerHTML = convertedTemp + " &#"+tempCode;
	if (measurement == 'celsius') {
		if (convertedTemp > 37.8) {
			document.body.style.background = "url('http://foundtheworld.com/wp-content/uploads/2015/07/Sahara-Desert-1.jpg') no-repeat";
			document.body.style.backgroundSize = "cover";
		}
		else if (convertedTemp < 0) {
			document.body.style.background = "url('http://www.nasa.gov/centers/jpl/images/content/417140main_antarctic20100112-640.jpg') no-repeat";
			document.body.style.backgroundSize = "cover";
		}
		else {
			document.body.style.background="#F5F3EE"
		}
	}
	else if (measurement == 'fahrenheit') {
		if (convertedTemp > 100) {
			document.body.style.background = "url('http://foundtheworld.com/wp-content/uploads/2015/07/Sahara-Desert-1.jpg') no-repeat";
			document.body.style.backgroundSize = "cover";
		}
		else if (convertedTemp < 32) {
			document.body.style.background = "url('http://www.nasa.gov/centers/jpl/images/content/417140main_antarctic20100112-640.jpg') no-repeat";
			document.body.style.backgroundSize = "cover";
		}
		else {
			document.body.style.background="#F5F3EE"
		}
	}
	else {
	}
}
