"use strict";


    let firebase = require("./fb-config"),
    user = require("./user");
    let userArray;
    let userID;
    let news = require("./news");


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

function addUser(userObj) {
	console.log("addUser", userObj);
	return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/users.json`,
      type: 'POST',
      data: JSON.stringify(userObj),
      dataType: 'json'
   }).done((userID) => {
    //    console.log("this is the userID",userID);
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








function getUserData() {
    console.log("url", firebase.getFBsettings().databaseURL);
     return $.ajax({
         url: `${firebase.getFBsettings().databaseURL}/users.json`
         // url: `https://musichistory-d16.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"`
     }).done((userData) => {
         console.log("userData", userData);

        checkUserExist(userData);

         return userData;

    });
 }

function checkUserExist(userData){
    console.log("this is the userData",userData);
    let userArray = (Object.values(userData));
    console.log("user Array",userArray);
    let uidArray = [];
    for (let i=0;i<userArray.length;i++){
        console.log("here");
        let currentPush = userArray[i].uid;
        console.log("current push",currentPush);
        uidArray.push(currentPush);
    }
    console.log("uidArray",uidArray);
    let currentUid = user.getUser();
    console.log("uid",currentUid);
    if(uidArray.includes(currentUid)){
        console.log("already exists");
        news.retrieveNews(currentUid);
    }else{
        console.log("this is a new user");
        let userObj = buildUserObj();
        addUser(userObj);

    }
}


module.exports = {addUser,getUserData, addWeather, getUserWeather, checkUserExist};

