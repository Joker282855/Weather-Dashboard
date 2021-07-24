var cityFormEl = document.querySelector("#city-box");
var cityInputEl = document.querySelector("#city-search");

var getCityInformation = function() {
  // formatting the api
  var cityUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=43.93&lon=-74.56&exclude=minutely,alerts&appid=22f77c72887272eb5c62d174a8e491b8";

  // make the fetch request to the api
  fetch(cityUrl).then(function(response) {
      response.json().then(function(data) {
          console.log(data);
      })
  })
};

var citySubmitHandler = function(event) {
    var cityName = cityInputEl.value.trim();

    if (cityName) {
        getCityInformation(cityName);
        cityInputEl.value = "";
    } else {
        alert("Please enter the name of an American City");
    }
};

getCityInformation();

cityFormEl.addEventListener("submit", citySubmitHandler);