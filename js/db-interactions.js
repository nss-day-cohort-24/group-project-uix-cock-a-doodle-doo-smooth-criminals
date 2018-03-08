"use strict";


    let firebase = require("./fb-config"),
    user = require("./user");
    let userIDs = [];

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
       userIDs.push(userID);
      return userID;
   });
}

function getUserData(user) {
    console.log("url", firebase.getFBsettings().databaseURL);
     return $.ajax({
         url: `${firebase.getFBsettings().databaseURL}/users.json?orderBy="uid"&equalTo="${user}"`
         // url: `https://musichistory-d16.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"`
     }).done((userData) => {
         console.log("userData", userData);
         console.log("array of userIDs",userIDs);
         let currentUserId = userIDs[0];
         console.log("piece of data",userData.currentUserId);
         return userData;

    });
 }

function checkUserExist(){



}

module.exports = {addUser,getUserData};