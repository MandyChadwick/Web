const myURL = 'https://mandychadwick.github.io/Web/jsonuploaded/jsonfile.json';

fetch(myURL)
  .then((response) => response.json())
  .then((rides) => {
   // console.log(rides);

    //Fill in html with vehicle name 
    document.getElementById('met-name').textContent = rides.vehicles[0].name;
    document.getElementById('dio-name').textContent = rides.vehicles[1].name;
    document.getElementById('pcx-name').textContent = rides.vehicles[2].name;
    document.getElementById('atv-name').textContent = rides.vehicles[3].name;
    document.getElementById('4door-name').textContent = rides.vehicles[4].name;
    document.getElementById('2door-name').textContent = rides.vehicles[5].name;

    //Fill in html with number of persons allowed 
    document.getElementById('met-max').textContent = rides.vehicles[0].max_persons;
    document.getElementById('dio-max').textContent = rides.vehicles[1].max_persons;
    document.getElementById('pcx-max').textContent = rides.vehicles[2].max_persons;
    document.getElementById('atv-max').textContent = rides.vehicles[3].max_persons;
    document.getElementById('4door-max').textContent = rides.vehicles[4].max_persons;
    document.getElementById('2door-max').textContent = rides.vehicles[5].max_persons;

    //Fill in html with ride for reserved half day
    document.getElementById('res-met-half').textContent = rides.vehicles[0].res_half;
    document.getElementById('res-dio-half').textContent = rides.vehicles[1].res_half;
    document.getElementById('res-pcx-half').textContent = rides.vehicles[2].res_half;
    document.getElementById('res-atv-half').textContent = rides.vehicles[3].res_half;
    document.getElementById('res-4door-half').textContent = rides.vehicles[4].res_half;
    document.getElementById('res-2door-half').textContent = rides.vehicles[5].res_half;

    //Fill in html with ride for reserved full day
    document.getElementById('res-met-full').textContent = rides.vehicles[0].res_full;
    document.getElementById('res-dio-full').textContent = rides.vehicles[1].res_full;
    document.getElementById('res-pcx-full').textContent = rides.vehicles[2].res_full;
    document.getElementById('res-atv-full').textContent = rides.vehicles[3].res_full;
    document.getElementById('res-4door-full').textContent = rides.vehicles[4].res_full;
    document.getElementById('res-2door-full').textContent = rides.vehicles[5].res_full;

    //Fill in html with ride for walk ins half day
    document.getElementById('in-met-half').textContent = rides.vehicles[0].in_half;
    document.getElementById('in-dio-half').textContent = rides.vehicles[1].in_half;
    document.getElementById('in-pcx-half').textContent = rides.vehicles[2].in_half;
    document.getElementById('in-atv-half').textContent = rides.vehicles[3].in_half;
    document.getElementById('in-4door-half').textContent = rides.vehicles[4].in_half;
    document.getElementById('in-2door-half').textContent = rides.vehicles[5].in_half;

    //Fill in html with ride for walk ins full day
    document.getElementById('in-met-full').textContent = rides.vehicles[0].in_full;
    document.getElementById('in-dio-full').textContent = rides.vehicles[1].in_full;
    document.getElementById('in-pcx-full').textContent = rides.vehicles[2].in_full;
    document.getElementById('in-atv-full').textContent = rides.vehicles[3].in_full;
    document.getElementById('in-4door-full').textContent = rides.vehicles[4].in_full;
    document.getElementById('in-2door-full').textContent = rides.vehicles[5].in_full;

  });
