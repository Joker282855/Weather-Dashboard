var getCityInformation = function(search) {
  // formatting the api
  var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=22f77c72887272eb5c62d174a8e491b8";

  // make the fetch request to the api
  fetch(cityUrl).then(function(response) {
      response.json().then(function(data) {
          console.log(data);
      })
  })
};

getCityInformation("Manhattan");