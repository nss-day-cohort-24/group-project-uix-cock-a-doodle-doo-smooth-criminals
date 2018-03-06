"use strict";

function loadWeather(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?zip=37129,us&APPID=aeace81c0d72e15b17ad94207544e2f8"
    }).done(function(data) {
        console.log("this is the weather data", data);
        console.log('this is the low for the day', (9 / 5 * (data.list[0].main.temp_max - 273) + 32));
        console.log("this is the high for the day", (9 / 5 * (data.list[0].main.temp_min - 273) + 32));    
    });
}
$('#form').submit(function(event){
    event.preventDefault();
    //console.log('city of choice', $('#city-input').val());
    let city = $('#city-input').val();
    console.log("city choice", city);
    
  });



module.exports = {loadWeather};