"use strict";
let bootstrap = require("../lib/node_modules/bootstrap");

let news = require("./news");
let user = require("./user");
let config = require("./fb-config");
var firebase = require("./fb-config");

require("firebase/auth");
require("firebase/database");

let bookSearch = require("./book_data_fetch.js");


$("#login").click(function() {
    console.log("clicked auth");
    user.logInGoogle()
    .then((result) => {
      console.log("result from login", result.user.uid);
      user.setUser(result.user.uid);

    });
  });



$("#logout").click(function() {
    console.log('clicked logout');
    user.logOut();
});




console.log("hello world");


