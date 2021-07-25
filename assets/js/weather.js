var citySearchEl = document.querySelector("#search-history");
var cityFormEl = document.querySelector("#city-box");
var cityInputEl = document.querySelector("#city-search");

var getCityInformation = function(city) {
  // formatting the api
  var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=22f77c72887272eb5c62d174a8e491b8";

  // make the fetch request to the api
  fetch(cityUrl).then(function(response) {
      response.json().then(function(data) {
          displayCityName(data, city);
      })
  })
};

var citySubmitHandler = function(event) {
    event.preventDefault();
    
    var cityName = cityInputEl.value.trim();

    if (cityName) {
        getCityInformation(cityName);
        cityInputEl.value = "";
    } else {
        alert("Please enter the name of an American City");
    }
    console.log(event);
};

var displayCityName = function(city, searchTerm) {
    console.log(city);
    console.log(searchTerm);

    // clear old city search
    citySearchEl.textContent = "";

    // loop over the city searches
    for (var i = 0; i < city.name.length; i++) {
        // format city's name
        var cityName = city.name
        console.log(cityName);
        
        // create a container for each of the buttons
        var cityEl = document.createElement("div");
        cityEl.classList = "list-item flex-row justify-space-between align-center"

        // create the button for the recent search
        var buttonEl = document.createElement("button");
        buttonEl.textContent = cityName;
        buttonEl.classList = "bg-secondary"

        // append the button element to the container
        cityEl.appendChild(buttonEl);

        // append the div container to its parent container
        citySearchEl.appendChild(cityEl);
    }
}

cityFormEl.addEventListener("submit", citySubmitHandler);