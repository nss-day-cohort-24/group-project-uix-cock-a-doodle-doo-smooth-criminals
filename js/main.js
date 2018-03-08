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
    location:"37212",
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
      db.getUserData(userData.user.uid)
      .then((fbData) => {
          console.log('user id', userData.user.uid);
          console.log('fire base data', fbData);
          for (let item in fbData){
              console.log('this is the second fbData',fbData);
              if (fbData[item].uid == userData.user.uid){
                  console.log('found a match');
              }else if(fbData[item].uid !== userData.user.uid){
                  console.log("no match");
                  dbMaster();

              }
          }
      });
      user.setUser(userData.user.uid);
      DOMbuild.hideLogButtons(user.getUser());
      changeLocation();
    });
  });



//LOG OUT BUTTON**********************



  function dbMaster(){
    let userObj = buildUserObj();
    db.addUser(userObj);
    console.log("user added");
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
        let wetObj = buildWeatherObj(data.city.name, data.list[0].weather[0].main);
        db.addWeather(wetObj);
    });
    DOMbuild.cityLocation(weather.city());
    });
};




//console.log("hello world");


