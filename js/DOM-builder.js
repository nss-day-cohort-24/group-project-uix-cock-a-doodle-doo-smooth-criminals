'use strict';
//IF THE USER IS LOGGED IN, HIDE THE LOG IN BUTTON
//ELSE USER IS LOGGED OUT, HIDE LOG OUT BUTTON

let booksInput = require("./book_data_fetch");
console.log("wtf is books input?", booksInput);

let hideLogButtons = (currentUser) => {
    console.log('hideLogButtons function started');
    if (currentUser !== null) {
        $('#login').attr('hidden', true);
        $('#logout').removeAttr('hidden', true);
    } else if (currentUser === null) {
        console.log('hiding logout button');
        $('#logout').attr('hidden', true);
        $('#login').removeAttr('hidden', true);
    }
    console.log('hideLogButtons function ended');

};


//Jesie started here-------

let formDOMString = ``;


// this is the shorthand method of calling: $(document).ready(function(){})
$(function() { 
    
    console.log( "ready!" );
    
    formDOMString =     //Store the html as a string...
    `<form id="book-form">
      <fieldset>
         <legend>Enter your search values</legend>
         Book Title <br>
         <input type="text" id="book-title"> <br>
         Author <br>
         <input type="text" id="author-name"> <br>
         Year Published <br>
         <input type="text" id="publish-year"> <br>
         
         <button id="form-submit" type="submit">Search</button>
          
     </fieldset>
          
    </form>`;

$(".container").append(formDOMString);

}).then(booksInput.userInputToURL(formDOMString));


//---------Jesie ended here
module.exports = {hideLogButtons};