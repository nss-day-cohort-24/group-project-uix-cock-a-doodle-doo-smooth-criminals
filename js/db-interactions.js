"use strict";


    let firebase = require("./fb-config"),
    user = require("./user");

    let userID;


function addUser(userObj) {
	//console.log("addUser", userObj);
	return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/users.json`,
      type: 'POST',
      data: JSON.stringify(userObj),
      dataType: 'json'
   }).done((userID) => {
       console.log("this is the userID",userID);
      return userID;
   });
}

<<<<<<< HEAD
function getUserData() {
    console.log("url", firebase.getFBsettings().databaseURL);
=======
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

function getUserData(user) {
    //console.log("url", firebase.getFBsettings().databaseURL);
>>>>>>> master
     return $.ajax({
         url: `${firebase.getFBsettings().databaseURL}/users.json`
         // url: `https://musichistory-d16.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"`
     }).done((userData) => {
<<<<<<< HEAD
         console.log("userData", userData);
        var userArray = Object.keys(userData);
        userArray.forEach((key) => {
            
            let currentUid = userData.key.uid;

            console.log("this is the key",currentUid);
          });

         console.log("piece of data",userArray);
=======
         //console.log("userData", userData);
         //console.log(userData);
>>>>>>> master
         return userData;

    });
 }

function checkUserExist(){



}

module.exports = {addUser,getUserData, addWeather};