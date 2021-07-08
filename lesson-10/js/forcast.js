const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=9c660d6d4bebbdb32b5b902235fddae4&units=imperial";


const theweekday = new Array(7);
theweekday[0] = "Sunday";
theweekday[1] = "Monday";
theweekday[2] = "Tuesday";
theweekday[3] = "Wednesday";
theweekday[4] = "Thursday";
theweekday[5] = "Friday";
theweekday[6] = "Saturday";


fetch(forecast)
  .then((response) => response.json())
  .then((dayForecast) => {
    console.log(dayForecast);

    const fivedayforecast = dayForecast.list.filter((forecast) =>
      forecast.dt_txt.includes("18:00:00")
    );
  

    let day = 0;

    fivedayforecast.forEach((theDay) => {
      let d = new Date(theDay.dt_txt);
     

      let section = document.createElement("section");
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let img = document.createElement("img");
      let h4 = document.createElement("h4");

      section.setAttribute("class", "forecast");
      div.setAttribute("class", "forecastBox");

      // gives each day its proper name
      h3.innerHTML = theweekday[d.getDay()];
      h3.setAttribute("class", `forecast${day + 1}`);

      // gives the src a url
      const imagesrc = `//openweathermap.org/img/wn/${fivedayforecast[day].weather[0].icon}@2x.png`;
     

      // assigns a description to the day
      const desc = fivedayforecast[day].weather[0].description;
     

// shows 5 day forecast

      img.setAttribute("class", `div.iconBox${day + 1}`);
      img.setAttribute("src", imagesrc);
      img.setAttribute("alt", desc);

      // assigns temperature to h4
      h4.innerHTML = dayForecast.list[day].main.temp.toFixed(0);
      h4.setAttribute("class", `tempDay${day + 1}`);

// changes children of the section

      section.appendChild(h3);
      section.appendChild(img);
      section.appendChild(h4);
// puts it all in the section
      document.querySelector("div.forecastBox").appendChild(section);

      day++;
    });
  });
