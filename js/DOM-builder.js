'use strict';
//IF THE USER IS LOGGED IN, HIDE THE LOG IN BUTTON
//ELSE USER IS LOGGED OUT, HIDE LOG OUT BUTTON
let booksInput = require("./book_data_fetch");

let hideLogButtons = (currentUser) => {
    //console.log('hideLogButtons function started');
    if (currentUser !== null) {
        $('#login').attr('hidden', true);
        $('#logout').removeAttr('hidden', true);
    } else if (currentUser === null) {
        //console.log('hiding logout button');
        $('#logout').attr('hidden', true);
        $('#login').removeAttr('hidden', true);
    }
    //console.log('hideLogButtons function ended');

};
// IF user is logged in, then display their username
//If user is NOT logged in, then display a link "Please sign in"

let setUsername = (currentUser, username) => {
   //console.log('setUsername function started');
   let loggedOutUser = `<a class="login" href="#">Please sign in</a>`;
   if (currentUser !== null) {
       $('#user--name').html(username);
   } else if (currentUser === null) {
       $('#user--name').html(loggedOutUser);
   }
   //console.log('setUsername function ended');
};

let cityLocation = (city) => {
    $('#user--location').html(city);
};


//Jesie started here-------

let formDOMString = ``;


// this is the shorthand method of calling: $(document).ready(function(){})
// $(function() { 
    
//     console.log( "ready!" );
    
//     formDOMString =     //Store the html as a string...
//     `<form id="book-form">
//       <fieldset>
//          <legend>Enter your search values</legend>
//          Book Title <br>
//          <input type="text" id="book-title"> <br>
//          Author <br>
//          <input type="text" id="author-name"> <br>
//          Year Published <br>
//          <input type="text" id="publish-year"> <br>
         
//          <button id="form-submit" type="submit">Search</button>
          
//      </fieldset>
          
//     </form>`;

// $(".container").append(formDOMString);

// }).then(booksInput.userInputToURL());

// module.exports = {hideLogButtons, setUsername, cityLocation};