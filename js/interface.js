console.log("hi clint");

var thermostat = new Thermostat();

var updateTempreture = function() {
  $('#temperature').text(thermostat.temperature);
};

$(document).ready(function() {
  $('#temperature').text(thermostat.temperature);

  $('.increase-temp').on('click', function() {
    thermostat.increaseTemperature(1);
    $('#temperature').text(thermostat.temperature);
  });

 $('.decrease-temp').on('click', function() {
    thermostat.decreaseTemperature(1);
    $('#temperature').text(thermostat.temperature);
  });

 $('.reset-temp').on('click', function() {
    thermostat.reset();
    $('.btn').text(thermostat.powerSavingText);
    $('#temperature').text(thermostat.temperature);
  });

  $('.btn').on('click', function() {
    thermostat.powerSavingToggle();
    thermostat.powerSavingOnOffText();
    $('.btn').text(thermostat.powerSavingText);
    $('#temperature').text(thermostat.temperature);
  });

});