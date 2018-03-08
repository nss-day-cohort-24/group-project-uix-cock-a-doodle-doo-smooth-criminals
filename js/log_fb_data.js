"use strict";

// To know when your data is committed to the Firebase Realtime Database server, you can use a Promise. Both set()and update() can return a Promise you can use to know when the write is committed to the database.	

function addData(obj, url) {
    $.ajax({
        url: `${firebase}${url}`,
        type: 'POST',
        data: JSON.stringify(obj),
        dataType: 'json'
    }).done((objID) => {
        console.log(objID);
    });
}
