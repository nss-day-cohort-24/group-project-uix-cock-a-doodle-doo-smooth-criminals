'use strict';
//IF THE USER IS LOGGED IN, HIDE THE LOG IN BUTTON
//ELSE USER IS LOGGED OUT, HIDE LOG OUT BUTTON
if (currentuser === loggedin) {
    $('#login').attr('hidden', true);
    $('#logout').removeAttr('hidden', true);
}
else (currentuser === loggedOut) {
    $('#logout').attr('hidden', true);
    $('#login').removeAttr('hidden', true);
}