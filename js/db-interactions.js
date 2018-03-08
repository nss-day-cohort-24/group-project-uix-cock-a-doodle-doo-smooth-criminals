"use strict";


    let firebase = require("./fb-config"),
    user = require("./user");





function addUser(userObj) {
	console.log("addUser", userObj);
	return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/users.json`,
      type: 'POST',
      data: JSON.stringify(userObj),
      dataType: 'json'
   }).done((userID) => {
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
         console.log(userData);
         return userData;

    });
 }

function checkUserExist(){
    


}

module.exports = {addUser,getUserData};