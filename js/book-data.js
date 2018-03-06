"use strict";

//Create a function that stores the user's input in a var, then add that value to the end of the api url.

// userBook input will grab their input using document.getElementById().value.... Then, encodeURI the user input, and pass it to the userInputTo 

var userBookTitleSearch = $("#book-title").val();
var userAuthorSearch = $("#author-name").val();
var userPublishSearch = $("#publish-year").val();


function userInputToURL (string) {
	
}


function grabBookData(userBookInput) {
   
	return $.ajax({
		url: `https://openlibrary.org/search.json?q=${userBookInput}`,

	}).done(() => {

		return ;
   });
}
