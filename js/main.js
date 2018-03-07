"use strict";
let bootstrap = require("../lib/node_modules/bootstrap");
let news = require("./news");
let user = require("./user");

let bookSearch = require("./book_data_fetch.js");


$("#login").click(function() {
    console.log("clicked auth");
    user.logInGoogle()
    .then((result) => {
      console.log("result from login", result.user.uid);
      // user = result.user.uid;
      user.setUser(result.user.uid);
    //   $("#auth-btn").addClass("is-hidden");
    //   $("#logout").removeClass("is-hidden");
    });
  });


console.log("hello world");


