"use strict";


    let firebase = require("./fb-config"),
    user = require("./user");




// function addUser(currentUser){
// 	console.log("addUser", currentUser);
// 	return $.ajax({
//       url: `${firebase.getFBsettings().databaseURL}/users.json`,
//       type: 'POST',
//       data: JSON.stringify(currentUser),
//       dataType: 'json'
//    });
// }
// This is to add the uid and name to the firebase
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

function checkUserExist(){
    
}

module.exports = {addUser};