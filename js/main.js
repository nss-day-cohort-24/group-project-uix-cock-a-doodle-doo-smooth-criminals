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


// Preparing the object to be posted to firebase
function buildUserObj() {
    let userObj = {
    // We can use the same variable or reference that we use to display the name at the top of the page
    name: "",
    location:"",
    uid: user.getUser()
  };
  //console.log("userObj",userObj);
  return userObj;
  
}


function dbMaster(){
    let userObj = buildUserObj();
    db.addUser(userObj);
    let currentUid = user.getUser();
    db.getUserData(currentUid);
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
      db.getUserData(userData.user.uid)
      .then((fbData) => {
          console.log('user id', userData.user);
          console.log('fire base data', fbData);
          for (let item in fbData){
              console.log('this is the second fbData',fbData);
              if (fbData[item].uid === userData.user.uid){
                  
            }
        }
    });
    db.getUserWeather(userData.user.uid)
    .then((userWetData) => {
        console.log('weather data', userWetData);
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
    });
  });



//LOG OUT BUTTON**********************



  function dbMaster(){
    let userObj = buildUserObj();
    db.addUser(userObj);
    let currentUid = user.getUser();
    db.getUserData(currentUid);
  }


//LOG OUT BUTTON

$("#logout").click(function() {
    //console.log('clicked logout');
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


