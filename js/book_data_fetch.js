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
let totalQuery = "";
let apiURL;


function grabBookData(string) {

    return $.ajax({
        url: `https://openlibrary.org/search.json?q=${encodedURLString}&limit=10`,
        type: "GET",
    });
}


titleField.focusout(function (event) {
    let titleQuery = titleField.val();
    
    URLQueryString = `${titleQuery}`;
  
});

authorField.focusout(function(event) {
    let authorQuery = authorField.val();
    URLQueryString += `${authorQuery}`; 
  
});

yearPubField.focusout(function(event) {
    let yearQuery = yearPubField.val();

    URLQueryString += `${yearQuery}`;

    encodedURLString = encodeURI(URLQueryString).toLowerCase();    
    // return encodedURLString;
    grabBookData(encodedURLString).then((resolve) => {
        let parsedData = JSON.parse(resolve);
        displayBookResults(parsedData.docs);
    });
  
});

function displayBookResults (bookData) {
    console.log("WHAT IS BOOK DATA INSIDE OF DISPLAY BOOK RESULTS FUNCTION", bookData);
   
    // let bookSearchResultCards = `</section> id="book-card-flex-containter">
    //     <div class="book-card">
    //         <h6>${title}</h6>
    //         <img src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image" alt="placeholder+image"> <br>
    //         <p class="book-card-author">${author}</p><br>
    //         <p class="book-card-year-pub">${yearPub}</p>
    //         <button class="save-book-button">Save To Your Collection</button>
    //         <button class="delete-book-button">Remove Book From Collection</button>
    //     </div>
    // </section>`;
}


titleField.focusout(function(e) {

    let titleQuery = titleField.val();
        
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

console.log("WHAT IS MAH BOOK DATA!!", bookData);

bookSubmitButton.click(function(event) {
    console.log("Click me again");
    displayBookResults(bookData);
});


module.exports = { };