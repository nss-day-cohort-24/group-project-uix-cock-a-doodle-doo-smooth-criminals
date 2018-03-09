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



let buildWeatherObj = (a, b) => {
    let WeatherObj = {
        city:a,
        weather:b,
        uid: user.getUser()
    };
    return WeatherObj;
};






//LOGIN BUTTON************************
$("#login").click(function() {
    console.log("clicked auth");
    user.logInGoogle()
    .then((userData) => {
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
        let wetObj = buildWeatherObj(data.city.name, data.list[0].weather[0].main);
        db.addWeather(wetObj);
    });
    DOMbuild.cityLocation(weather.city());
    });
};




//console.log("hello world");


// module.exports = {buildUserObj};