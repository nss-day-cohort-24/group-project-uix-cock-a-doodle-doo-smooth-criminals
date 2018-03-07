"use strict";

console.log("Books Data On Station");

//Create a function that stores the user's input in a var, then add that value to the end of the api url.

// userBook input will grab their input using document.getElementById().value.... Then, encodeURI the user input, and pass it to the userInputTo 


let apiURL = `http://openlibrary.org/search.json?q=`;
let bookSubmitButton = $("#form-submit");


var titleInput = $("#book-title");
var string = "";



var titleField = $("#book-title");
var authorField = $("#author-name");
var yearPubField = $("#publish-year");
let bookForm = $("book-form");


titleField.focusout(function (event) {
	console.log("focus out fired", titleInput.val());
	let uri = 
	titleInput = titleField.val();
	titleInput.encodeURI


});



authorField.focusout(function (event) {
	console.log("authorField focus out", authorField.val()); 
});	

yearPubField.focusout(function (event) {
	console.log("year pub field focus out", yearPubField.val());
});

function userInputToURL (event, string) {
	// console.log(titleField);
	
}

bookSubmitButton.click(function (event) {
	console.log("Click me again");
});







function grabBookData(userBookInput) {
   
	return $.ajax({
		url: `https://openlibrary.org/search.json?q=${userBookInput}`,

	}).done(() => {

		return ;
   });
}
