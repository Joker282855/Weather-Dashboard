var humidityFiveEl = document.querySelector("#lightning");
var windFiveEl = document.querySelector("#shower");
var tempFiveEl = document.querySelector("#sunami");
var humidityFourEl = document.querySelector("#tornado");
var windFourEl = document.querySelector("#fire");
var tempFourEl = document.querySelector("#red");
var humidityThreeEl = document.querySelector("#swamp");
var windThreeEl = document.querySelector("#water");
var tempThreeEl = document.querySelector("#blue");
var humidiyTwoEl = document.querySelector("#space");
var windTwoEl = document.querySelector("#sky");
var tempTwoEl = document.querySelector("#forest");
var humidityOneForecastEl = document.querySelector("#clear");
var windOneForecastEl = document.querySelector("#sunny");
var tempOneForecastEl = document.querySelector("#rain");
var cityHumidityEl = document.querySelector("#moisture");
var cityWindEl = document.querySelector("#blow");
var cityTempEl = document.querySelector("#cold-hot");
var nameOfCityEl = document.querySelector("#weather-name");
var searchInforEl = document.querySelector("#city-facts");
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
          displayCityInfo(data, city);
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
    
    // format city's name
    var cityName = city.name
    console.log(cityName);
        
    // create a container for each of the buttons
    var cityEl = document.createElement("div");
    cityEl.classList = "flex-row justify-space-between align-item-center"

    // create the button for the recent search
    var buttonEl = document.createElement("button");
    buttonEl.textContent = cityName;
    buttonEl.classList = "bg-secondary"

    // append the button element to the container
    cityEl.appendChild(buttonEl);

    // append the div container to its parent container
    citySearchEl.appendChild(cityEl);
};

var displayCityInfo = function(city, searchTerm) {
    console.log(city);
    console.log(searchTerm);

    // create variables that hole the information for the spans
    var name = city.name
    console.log(name);

    var temperature = city.main.temp
    console.log(temperature);

    var wind = city.wind.speed
    console.log(wind);

    var humidity = city.main.humidity
    console.log(humidity);

    // tell the computer what the text content for each of the different conditions are

    nameOfCityEl.textContent = name;
    cityTempEl.textContent = temperature;
    cityWindEl.textContent = wind;
    cityHumidityEl.textContent = humidity

};

var getFutureForecast = function(search) {
    // format the second response when they search for a city
    var future = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&appid=22f77c72887272eb5c62d174a8e491b8";

    fetch(future).then(function(response) {
        response.json().then(function(data) {
            displayForecast(data, search);
        });
    });
};

getFutureForecast("Los Angeles");

var futureConditionHandler = function(event) {
    event.preventDefault();
    console.log(event);

    var future = cityInputEl.value.trim();

    if (future) {
        getFutureForecast(future)
        cityInputEl.value = "";
    }
};

var displayForecast  = function(search, searchTerm) {
    console.log(search);
    console.log(searchTerm);

    // create variables for all of the span elements
    var tempOne = search.list[0].main.temp
    console.log(tempOne);

    var windOne = search.list[0].wind.speed
    console.log(windOne);

    var humidityOne = search.list[0].main.humidity
    console.log(humidityOne);

    var tempTwo = search.list[1].main.temp
    console.log(tempTwo);

    var windTwo = search.list[1].wind.speed
    console.log(windTwo);

    var humidityTwo = search.list[1].main.humidity
    console.log(humidityTwo);

    var tempThree = search.list[2].main.temp
    console.log(tempThree);

    var windThree = search.list[2].wind.speed

    var humidityThree = search.list[2].main.humidity

    var tempFour = search.list[3].main.temp

    var windFour = search.list[3].wind.speed

    var humidityFour = search.list[3].main.humidity

    var tempFive = search.list[4].main.temp

    var windFive = search.list[4].wind.speed

    var humidityFive = search.list[4].main.humidity

    // sending the content for each of the boxes

    tempOneForecastEl.textContent = tempOne;
    windOneForecastEl.textContent = windOne;
    humidityOneForecastEl.textContent = humidityOne;
    tempTwoEl.textContent = tempTwo;
    windTwoEl.textcontent = windTwo;
    humidiyTwoEl.textContent = humidityTwo;
    tempThreeEl.textContent = tempThree;
    windThreeEl.textContent = windThree;
    humidityThreeEl.textContent = humidityThree;
    tempFourEl.textContent = tempFour;
    windFourEl.textContent = windFour;
    humidityFourEl.textContent = humidityFour;
    tempFiveEl.textContent = tempFive;
    windFiveEl.textContent = windFive;
    humidityFiveEl.textContent = humidityFive;
}

cityFormEl.addEventListener("submit", citySubmitHandler);
cityFormEl.addEventListener("submit", futureConditionHandler);