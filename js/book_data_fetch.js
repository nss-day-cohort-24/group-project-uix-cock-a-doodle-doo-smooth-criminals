"use strict";
var $ = require("jquery");
console.log("Books Data On Station");
//Create a function that stores the user's input in a var, then add that value to the end of the api url.

// userBook input will grab their input using document.getElementById().value.... Then, encodeURI the user input, and pass it to the userInputTo 

var URLQueryString = ``;
var encodedURLString;
var bookData;
let bookSubmitButton = $("#form-submit"); // The button to submit the form...
let titleField = $("#book-title"); // The form field for the book title...
let authorField = $("#author-name"); // The form field for the author name field...
let yearPubField = $("#publish-year"); //The form field for the year published field...


function userInputToURL(event, element) {
    
    // let titleQuery = titleField.val();
    // console.log("BOOM", titleQuery);
   
    // let authorQuery = authorField.val();
    // console.log("Goes", authorQuery);

    // let yearQuery = yearPubField.val();
    // console.log("The dynomiteeee!", yearQuery);

    // URLQueryString = `http://openlibrary.org/search.json?q=${titleQuery}+${authorQuery}+${yearQuery}`;
    // let encodedURLString = encodeURI(URLQueryString);
    // console.log("what is encoded url", encodedURLString);
}


titleField.focusout(function (event) {

    let titleQuery = titleField.val();
    
    URLQueryString = `${titleQuery}`;
    

});

authorField.focusout(function(event) {
    if (authorField.val === null) { 
        alert("Please Enter A Character");
    } else {
            
    let authorQuery = authorField.val();
    
    
    URLQueryString += `${authorQuery}`;
    
}
});

yearPubField.focusout(function(event) {
    
    let yearQuery = yearPubField.val();
    

    URLQueryString += `${yearQuery}`;
    

    encodedURLString = encodeURI(URLQueryString).toLowerCase();
    
    // return encodedURLString;
    grabBookData(encodedURLString);
});

function displayBookResults (bookData) {
    console.log("book results is here, check if this puppy works");
}



function grabBookData(string) {

    return $.ajax({
        url: `https://openlibrary.org/search.json?q=${encodedURLString}`,

    }).done((bookData) => {
        console.log("Should be info about a book", bookData);
        displayBookResults(bookData);
    });
}
console.log("WHAT IS MAH BOOK DATA!!", bookData);

bookSubmitButton.click(function(event) {
    console.log("Click me again");
    alert("Processing your request Mah Lord!");
});




module.exports = { userInputToURL };