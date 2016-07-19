var width = 80,
    height = 400,
    maxTemp = 100, //celsius
    minTemp = 0, //celsius
    currentTemp = 0; //celsius

var bottomY = height - 5,
    topY = 5,
    bulbRadius = 20,
    tubeWidth = 21.5,
    tubeBorderWidth = 1;

var bulb_cy = bottomY - bulbRadius,
    bulb_cx = width/2,
    top_cy = topY + tubeWidth/2;

var p=d3.precisionFixed(0.5); f=d3.format("." + p + "f");

// scale step size
var step = 5, step_f = 9;

// domains for both celsius and frahrenheit
var domain = [minTemp,maxTemp], 
	domain_f = [minTemp*9/5+32,maxTemp*9/5+32];

// tick values
var tickValues = d3.range((domain[1] - domain[0])/step + 1)
					.map(function(v) { return domain[0] + v * step; });
var tickValues_f = d3.range((domain_f[1] - domain_f[0])/step_f + 1)
		.map(function(v) { return domain_f[0] + v * step_f; });

// scales
var scale = d3.scaleLinear()
  .range([height-topY-bulbRadius*2, top_cy])
  .domain(domain);
var scale_f = d3.scaleLinear()
  .range([height-topY-bulbRadius*2, top_cy])
  .domain(domain_f);

// axis
var axis = d3.axisLeft()
  .scale(scale)
  .tickSizeInner(7)
  .tickSizeOuter(0)
  .tickValues(tickValues);
var axis_f = d3.axisRight()
  .scale(scale_f)
  .tickSizeInner(7)
  .tickSizeOuter(0)
  .tickValues(tickValues_f);

// mercury fill default height
var tubeFill_bottom = bulb_cy,
    tubeFill_top = scale(currentTemp);

// set up svg
var svg = d3.select("#thermo")
  .append("svg")
  .attr("width", width)
  .attr("height", height);


// DRAWING (FROM TOP TO BOTTOM)
// top "bulb"
svg.append("circle")
  .attr("r", tubeWidth/2)
  .attr("cx", width/2)
  .attr("cy", top_cy)
  .style("stroke-width", tubeBorderWidth + "px");

// tube column outline
svg.append("rect")
  .attr("class", "tube")
  .attr("x", width/2 - tubeWidth/2)
  .attr("y", top_cy)
  .attr("height", bulb_cy - top_cy)
  .attr("width", tubeWidth)
  .style("stroke", "#999")
  .style("stroke-width", tubeBorderWidth + "px");

// tube column to hide lines in bottom blub
svg.append("rect")
  .attr("class", "tube")
  .attr("x", width/2 - (tubeWidth - tubeBorderWidth)/2)
  .attr("y", top_cy)
  .attr("height", bulb_cy - top_cy)
  .attr("width", tubeWidth - tubeBorderWidth);

// outline of bottom bulb
svg.append("circle")
  .attr("r", bulbRadius)
  .attr("cx", bulb_cx)
  .attr("cy", bulb_cy)
  .style("stroke-width", tubeBorderWidth + "px");

// bottom bulb fill
svg.append("circle")
  .attr("r", bulbRadius - 6)
  .attr("cx", bulb_cx)
  .attr("cy", bulb_cy)
  .style("fill", "rgb(230,0,0)")
  .style("stroke", "rgb(230,0,0)")
  .style("stroke-width", "2px");

// red mercury fill
svg.append("rect")
  .attr("id", "redmercury")
  .attr("x", width/2 - (tubeWidth - 10)/2)
  .attr("y", tubeFill_top)
  .attr("width", tubeWidth - 10)
  .attr("height", 0); //note that default temp is 0 celsius

// AXIS
svg.append("g")
  .attr("id", "tempScale")
  .attr("transform", "translate(" + (width/2 - tubeWidth/2) + ",0)")
  .call(axis);

svg.append("g")
  .attr("id", "tempScale")
  .attr("transform", "translate(" + (width/2 + tubeWidth/2) + ",0)")
  .call(axis_f);

// ANIMATION
d3.select("#CtoF").on("input", function(){
	currentTemp = +this.value;

	d3.select("#redmercury")
	.transition()
	.delay(750)
	.attr("y", scale(currentTemp))
	.attr("height", tubeFill_bottom-scale(currentTemp));

	document.getElementById("FtoC").value = f(currentTemp*9/5+32);
});

d3.select("#FtoC").on("input", function(){
	currentTemp = +this.value;

	d3.select("#redmercury")
	.transition()
	.delay(750)
	.attr("y", scale(currentTemp))
	.attr("height", tubeFill_bottom-scale(currentTemp));

	document.getElementById("CtoF").value = f((currentTemp-32)*5/9);
});


