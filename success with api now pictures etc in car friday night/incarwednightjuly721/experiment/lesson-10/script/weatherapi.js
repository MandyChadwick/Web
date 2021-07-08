const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9c660d6d4bebbdb32b5b902235fddae4&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;
    var temp= document.getElementById('current-temp').textContent = jsObject.main.temp;
var wSpeed= document.getElementById('wind').textContent = jsObject.wind.speed;
var windchill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windchill= Math.round(windchill);
document.getElementById("windchill").innerHTML= windchill;


const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  });


  const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=9c660d6d4bebbdb32b5b902235fddae4&units=imperial";
  
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const fiveDayForecast = jsObject.list.filter (forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fiveDayForecast);
    fiveDayForecast.forEach(x=>{
    let d = new Date(x.dt_txt);
    document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
    document.getElementById
    
    
    
    (
    `forecast${day+1}`).textContent = x.main.temp;
    day ++
    });
    });
    