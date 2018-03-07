"use strict";
let bootstrap = require("../lib/node_modules/bootstrap");

let news = require("./news");
let user = require("./user");
let config = require("./fb-config");
let firebase = require("./fb-config"),
    DOMbuild = require("./DOM-builder");


require("firebase/auth");
require("firebase/database");

let bookSearch = require("./book_data_fetch.js");

//LOGIN BUTTON
$("#login").click(function() {
    console.log("clicked auth");
    user.logInGoogle()
    .then((result) => {
      console.log("result from login", result.user.uid);
      user.setUser(result.user.uid);
      DOMbuild.hideLogButtons(user.getUser());
    });
  });

//LOG OUT BUTTON
$("#logout").click(function() {

    console.log('clicked logout');
    
    user.logOut();
    DOMbuild.hideLogButtons(null);
    //.then((user) => {
    
    //console.log("its da result", user.getUser());
    
    });




console.log("hello world");


