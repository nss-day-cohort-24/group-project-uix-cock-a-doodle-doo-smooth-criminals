"use strict";

console.log("Books Data On Station");

//Create a function that stores the user's input in a var, then add that value to the end of the api url.

// userBook input will grab their input using document.getElementById().value.... Then, encodeURI the user input, and pass it to the userInputTo 

let apiURL;


let bookSubmitButton = $("#form-submit"); // The button to submit the form...
let titleField = $("#book-title");  // The form field for the book title...
let authorField = $("#author-name"); // The form field for the author name field...
let yearPubField = $("#publish-year"); //The form field for the year published field...
let bookForm = $("book-form"); // The entire field element...


function userInputToURL (element, apiURL) {
	let titleQuery = titleField.val();
	console.log("here is your title query brah", titleQuery);
	
	apiURL = `http://openlibrary.org/search.json?q=${titleQuery}`;
	
	// encodedURL = apiURL.encodeURI(uri: apiURL);
	console.log("here is your encoded url brah", apiURL);
	 // Template URL with a blank query ... 
}


titleField.focusout(userInputToURL(apiURL));
	


authorField.focusout(userInputToURL(apiURL));

yearPubField.focusout(userInputToURL(apiURL));

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
