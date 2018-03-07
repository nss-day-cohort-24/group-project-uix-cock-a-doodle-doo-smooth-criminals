"use strict";
let bootstrap = require("../lib/node_modules/bootstrap");

let news = require("./news");
let user = require("./user");
let config = require("./fb-config");
var firebase = require("./fb-config");
let db = require("./db-interactions");

require("firebase/auth");
require("firebase/database");

let bookSearch = require("./book_data_fetch.js");


// Preparing the object to be posted to firebase
function buildUserObj() {
    let userObj = {
    // We can use the same variable or reference that we use to display the name at the top of the page
    name: "",
    location:"",
    uid: user.getUser()
  };
  console.log("userObj",userObj);
  return userObj;
  
}


$("#login").click(function() {
    console.log("clicked auth");
    user.logInGoogle()
    .then((result) => {
      console.log("result from login", result.user.uid);
      user.setUser(result.user.uid);
      dbMaster();



    });
  });

  $("#logout").click(() => {
    console.log("logout clicked");
    user.logOut();
  });

  function dbMaster(){
    let userObj = buildUserObj();
    db.addUser(userObj);
  }

console.log("hello world");


