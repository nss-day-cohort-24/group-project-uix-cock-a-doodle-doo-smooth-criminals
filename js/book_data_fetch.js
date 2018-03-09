"use strict";
var $ = require("jquery");
console.log("Books Data On Station");
//Create a function that stores the user's input in a var, then add that value to the end of the api url.

// userBook input will grab their input using document.getElementById().value.... Then, encodeURI the user input, and pass it to the userInputTo 

var apiURL = ``;


let bookSubmitButton = $("#form-submit"); // The button to submit the form...
let titleField = $("#book-title"); // The form field for the book title...
let authorField = $("#author-name"); // The form field for the author name field...
let yearPubField = $("#publish-year"); //The form field for the year published field...
let totalQuery = "";



function userInputToURL(element) {
   
    console.log('what book title:', titleField.val());
    let titleQuery = titleField.val();
    console.log("here is your title query brah", titleQuery);
    totalQuery += titleQuery;
    apiURL = `http://openlibrary.org/search.json?q=${titleQuery}`;

    let encodedURL = encodeURI(apiURL);
    console.log("what is encoded url", encodedURL);
}


titleField.focusout(
    function(e) {
    console.log(titleField.val());
    
    let titleQuery = titleField.val();
    console.log("here is your title query brah", titleQuery);
    
    apiURL = `http://openlibrary.org/search.json?q=${titleQuery}`;

    let encodedURL = encodeURI(apiURL);
    console.log("what is encoded url", encodedURL);
});

authorField.focusout( function(e) {
    console.log(authorField.val());
    
    let authorQuery = authorField.val();
    console.log("here is your title query brah", authorQuery);
    
    apiURL = `http://openlibrary.org/search.json?q=${authorQuery}`;

    let encodedURL = encodeURI(apiURL);
    console.log("what is encoded url", encodedURL);
});

yearPubField.focusout(    function(e) {
    console.log(yearPubField.val());
    
    let yearPubQuery = yearPubField.val();
    console.log("here is your title query brah", yearPubQuery);
    
    apiURL = `http://openlibrary.org/search.json?q=${yearPubQuery}`;

    let encodedURL = encodeURI(apiURL);
    console.log("what is encoded url", encodedURL);
});



bookSubmitButton.click(function(event) {
    console.log("Click me again");
});


function grabBookData(userBookInput) {

    return $.ajax({
        url: `https://openlibrary.org/search.json?q=${userBookInput}`,

    }).done(() => {

        return;
    });
}

module.exports = { userInputToURL };