(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
