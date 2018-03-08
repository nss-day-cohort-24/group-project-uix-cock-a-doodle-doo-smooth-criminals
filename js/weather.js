"use strict";

function zipWeather(zipCode){
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&APPID=aeace81c0d72e15b17ad94207544e2f8`
    }).done(function(data) {
        console.log("this is the weather data", data);
    });
}







// function get_some_api_data(reslove, reject) {
//     $.ajax({
//         url: "http://api.openweathermap.org/data/2.5/forecast?zip=37129,us&APPID=aeace81c0d72e15b17ad94207544e2f8"
//     }).done(function(weatherData) {
//         reslove(weatherData); // Execute the success function reference passed to us
//       })
//       .fail(function(xhr, status, error) {
//         reject(error); // Execute the failure function reference passed to us
//       });
//     }




// $('#form').submit(function(event){
//     event.preventDefault();
//     //console.log('city of choice', $('#city-input').val());
//     let city = $('#city-input').val();
//     console.log("city choice", city);
    
//   });
module.exports = {zipWeather};