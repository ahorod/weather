var apiKey = "eecdbd8f071e2930604773eb935f9b97";

function kelvinToFarenheit(degreesKelvin) {
  return (9 / 5) * (degreesKelvin - 273) + 32;
}
function kelvinToCelsius(degreesKelvin) {
  return degreesKelvin - 273.15;
}

$(document).ready(function() {

    $('#temp').click(function() {

      var city = $('#temp-location').val();
      $('#temp-location').val("");
      var temperatureFormat = $("#temp-system").val();
      console.log(temperatureFormat );
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
        if (temperatureFormat === "F") {
          var farenheit = kelvinToFarenheit(response.main.temp);
          farenheit = farenheit.toFixed(0);
          $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%. The temperature is " + farenheit + " degrees farenheit");

        }
        else {
          var celsius = kelvinToCelsius(response.main.temp);
          celsius = celsius.toFixed(0);
          $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%. The temperature is " + celsius + " degrees C");

        }
      });
    });



});


var apiKey = "eecdbd8f071e2930604773eb935f9b97";

function kelvinToFarenheit(degreesKelvin) {
  return (9 / 5) * (degreesKelvin - 273) + 32;
}
function kelvinToCelsius(degreesKelvin) {
  return degreesKelvin - 273.15;
}

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      var farenheit = kelvinToFarenheit(response.main.temp);
      farenheit = farenheit.toFixed(0);
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%. The temperature is " + farenheit + " degrees farenheit");
      console.log(response);
    });
  });

});
