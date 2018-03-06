"use strict";

console.log("Book Data");

//Create a function that stores the user's input in a var, then add that value to the end of the api url.

// userBook input will grab their input using document.getElementById().value.... Then, encodeURI the user input, and pass it to the userInputTo 



let bookSubmitButton = $("#form-submit");
console.log("What is the button?", bookSubmitButton);

bookSubmitButton.click(userInputToURL(event));


function userInputToURL (string) {
	
	let bookTitleSearch = $("#book-title").val();
	console.log("book title", bookTitleSearch);

	let authorSearch = $("#author-name").val();
	console.log("authorSearch", authorSearch);

	let yearPublishedSearch = $("#publish-year").val();
	console.log("yearPublishedSearch", yearPublishedSearch);


}


function grabBookData(userBookInput) {
   
	return $.ajax({
		url: `https://openlibrary.org/search.json?q=${userBookInput}`,

	}).done(() => {

		return ;
   });
}
