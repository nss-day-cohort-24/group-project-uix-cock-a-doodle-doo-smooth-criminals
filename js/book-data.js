"use strict";
let $ = require('jquery');
//Create a function that stores the user's input in a var, then add that value to the end of the api url.

// userBook input will grab their input using document.getElementById().value.... Then, encodeURI the user input, and pass it to the userInputTo 

var userBookTitleSearch = ${"book-title"}.value;
var userAuthorSearch = ${"author-name"}.value;
var userPublishSearch = ${"publish-year"}.value;


function userInputToURL (string) {
	
}


function grabBookData(userBookInput) {
   
	return $.ajax({
		url: `https://openlibrary.org/search.json?q=${userBookInput}`,
		let pulledData = $.type(JSON.parse(json: string));
	}).done(() => {
		
		return ;
   });
}
