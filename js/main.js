"use strict";
let bootstrap = require("../lib/node_modules/bootstrap");

let news = require("./news");
let user = require("./user");
let config = require("./fb-config"),
    weather = require("./weather");


let db = require("./db-interactions");
let firebase = require("./fb-config"),
    DOMbuild = require("./DOM-builder");



require("firebase/auth");
require("firebase/database");

let bookSearch = require("./book_data_fetch");
console.log("hello world");



function dbMaster(){
    db.getUserData();
    news.useNews(news.listNews);

}



let buildWeatherObj = (place, cast, high, low) => {
    let WeatherObj = {
        city:place,
        weather:cast,
        highTemp: high, 
        lowTemp:low,
        uid: user.getUser()
    };
    return WeatherObj;
};






//LOGIN BUTTON************************
$("#login").click(function() {
    console.log("clicked auth");
    user.logInGoogle()
    .then((userData) => {
    db.getUserWeather(userData.user.uid)
    .then((userWetData) => {
        //console.log('weather data', userWetData);
        DOMbuild.weatherPrinter(userWetData[Object.keys(userWetData)[Object.keys(userWetData).length - 1]].city,
        userWetData[Object.keys(userWetData)[Object.keys(userWetData).length - 1]].weather,
        userWetData[Object.keys(userWetData)[Object.keys(userWetData).length - 1]].highTemp, 
        userWetData[Object.keys(userWetData)[Object.keys(userWetData).length - 1]].lowTemp);
    });
      DOMbuild.setUsername(user.getUser(), userData.user.displayName);
      user.setUser(userData.user.uid);
      DOMbuild.hideLogButtons(user.getUser());
      changeLocation();
      dbMaster();
    }
);
  });


//LOG OUT BUTTON

$("#logout").click(function() {
    console.log('clicked logout');
    user.logOut();
    DOMbuild.hideLogButtons(null);
});

//SET PRIMARY LOCATION
let changeLocation = () => {
$('.location--change').click(function(){
    let zipCode = window.prompt('Your Zipcode Please');
    weather.zipWeather(zipCode)
    .then((data) => {
        //console.log('data');
        let wetObj = buildWeatherObj(data.city.name, data.list[0].weather[0].description, data.list[0].main.temp_max, data.list[0].main.temp_min);
        db.addWeather(wetObj);
        DOMbuild.weatherPrinter(data.city.name, data.list[0].weather[0].description, data.list[0].main.temp_max, data.list[0].main.temp_min);
    });
    });
};




//console.log("hello world");


// module.exports = {buildUserObj};