console.log("hi clint");

var thermostat = new Thermostat();

var updateTemperature = function() {
  $('#temperature', '').attr('class', thermostat.textColor());
  $('#temperature').text(thermostat.temperature);
  
};

$(document).ready(function() {
  updateTemperature();

  $('.increase-temp').on('click', function() {
    thermostat.increaseTemperature(1);
    updateTemperature();
  });

 $('.decrease-temp').on('click', function() {
    thermostat.decreaseTemperature(1);
    updateTemperature();
  });

 $('.reset-temp').on('click', function() {
    thermostat.reset();
    $('.btn').text(thermostat.powerSavingText);
    updateTemperature();
  });

  $('.PSMtoggle').on('click', function() {
    thermostat.powerSavingToggle();
    thermostat.powerSavingOnOffText();
    $('.PSMtoggle').text(thermostat.powerSavingText);
    updateTemperature();
    if (thermostat.powerSaving) {
      $('.PSMtoggle').css("background-color", "lightgreen");
    } else { 
      $('.PSMtoggle').css("background-color", "red");
    }
  });

   $('#temperature').mouseover(function(){ 
      $('#temperature').css("text-shadow", "5px 5px 5px #D0D0D0");
    if (thermostat.temperature > 25) {
     $('body').css("background-image", 'url("http://minimalistwallpaper.com/wp-content/uploads/2013/06/Abstraction-Fiery-Colors-Lava.jpg")');
    } else if (thermostat.temperature < 18) {
     $('body').css("background-image", 'url("http://ak5.picdn.net/shutterstock/videos/2912455/preview/stock-footage-snowflakes-falling-against-a-green-frosty-background.jpg")');
    }
  });

  $('#temperature').mouseleave(function(){
    $('#temperature').css("text-shadow", "5px 5px 5px #F8F8F8");
    $('body').css("background-image", 'url("http://www.bluebayrestaurant.co.nz/images/bgSlider/img01.jpg")');
  });

  $('#degText').mouseenter(function(){
    $('#degText').css("color","grey");
    $('.textInfo').text("Now you are hovering on the word degrees!");
  });
  $('#degText').mouseleave(function(){
    $('.textInfo').text("Information");
    $('#degText').css("color","skyblue");
  });

 $('.svgcircle').mouseenter(function(){
    $('.textInfo').text("Now you are hovering on the SVG Circle Element!");
    $('.svgcircle').css("fill", "lightgreen");
    // $('.svgcircle').css("stroke-width", "10");
    $('.svgcircle').css("r", "80");
  });
  $('.svgcircle').mouseleave(function(){
    $('.textInfo').text("Information");
     $('.svgcircle').css("fill", "yellow");
     $('.svgcircle').css("stroke-width", "4");
     $('.svgcircle').css("r", "40");
  });

  $('#degSym').mouseenter(function(){
    $('#degSym').css("color","grey");
  });
  $('#degSym').mouseleave(function(){
    $('#degSym').css("color","skyblue");
  });

});