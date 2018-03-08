"use strict";
let cityName;
var cityWeather;

function zipWeather(zipCode){
    return $.ajax({
        url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&APPID=aeace81c0d72e15b17ad94207544e2f8`
    }).done(function(data) {
        console.log('this is all the data', data);
        console.log("this is the city", data.city.name);
        cityName = data.city.name;
        console.log("this the weather for the day", data.list[0].weather[0].main);
        return data;
    });

 }

 let city = () => {
     return cityName;
 };
 









module.exports = {zipWeather, city};