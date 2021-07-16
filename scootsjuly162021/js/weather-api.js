const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=9c660d6d4bebbdb32b5b902235fddae4&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   // console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;
    var temp= document.getElementById('current-temp').textContent = jsObject.main.temp;
var wSpeed= document.getElementById('wind').textContent = jsObject.wind.speed;
var windchill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windchill= Math.round(windchill);
if (windchill <= temp) { document.getElementById("windchill").innerHTML= windchill;
    
 } else {
    document.getElementById("windchill").innerHTML= "N/A";
 }


  });



    