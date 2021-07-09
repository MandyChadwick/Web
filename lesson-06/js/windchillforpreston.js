var temp= document.getElementById('current-temp').textContent = jsObject.main.temp;
var wSpeed= document.getElementById('wind').textContent = jsObject.wind.speed;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("windchill").innerHTML= windchill;