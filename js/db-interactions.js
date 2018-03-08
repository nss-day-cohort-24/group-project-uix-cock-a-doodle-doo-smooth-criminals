"use strict";


    let firebase = require("./fb-config"),
    user = require("./user");





function addUser(userObj) {
	//console.log("addUser", userObj);
	return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/users.json`,
      type: 'POST',
      data: JSON.stringify(userObj),
      dataType: 'json'
   }).done((userID) => {
      return userID;
   });
}


//ADDS WEATHER TO FIREBASE
function addWeather(weatherObj) {
	//console.log("addWeather", weatherObj);
	return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/weather.json`,
      type: 'POST',
      data: JSON.stringify(weatherObj),
      dataType: 'json'
   }).done((userID) => {
      return userID;
   });
}


//PULLING USER WEATHER DATA FROM FIREBASE
function getUserWeather(user) {
    //console.log("url", firebase.getFBsettings().databaseURL);
     return $.ajax({
         url: `${firebase.getFBsettings().databaseURL}/weather.json?orderBy="uid"&equalTo="${user}"`
     }).done((weatherData) => {
         return weatherData;
    });
 }








//PULLING USER DATA FORM FIREBASE
function getUserData(user) {
    //console.log("url", firebase.getFBsettings().databaseURL);
     return $.ajax({
         url: `${firebase.getFBsettings().databaseURL}/users.json?orderBy="uid"&equalTo="${user}"`
         // url: `https://musichistory-d16.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"`
     }).done((userData) => {
         //console.log("userData", userData);
         //console.log(userData);
         return userData;

    });
 }

 

function checkUserExist(){
}





module.exports = {addUser,getUserData, addWeather, getUserWeather};