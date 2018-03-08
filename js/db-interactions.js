"use strict";


    let firebase = require("./fb-config"),
    user = require("./user");

    let userID;


function addUser(userObj) {
	console.log("addUser", userObj);
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

function getUserData() {
    console.log("url", firebase.getFBsettings().databaseURL);
     return $.ajax({
         url: `${firebase.getFBsettings().databaseURL}/users.json`
         // url: `https://musichistory-d16.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"`
     }).done((userData) => {
         console.log("userData", userData);
        var userArray = Object.keys(userData);
        userArray.forEach((key) => {
            
            let currentUid = userData.key.uid;

            console.log("this is the key",currentUid);
          });

         console.log("piece of data",userArray);
         return userData;

    });
 }

function checkUserExist(){



}

module.exports = {addUser,getUserData};