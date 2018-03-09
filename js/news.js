"use strict";

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=851990c5e77e4c01a96bdbce99e41f98';

let firebase = require("./fb-config");


let articles;
var buttonNum = 0;
let buttonName;
let user = require("./user");
let newsImgAdd;
let newsTitleAdd;
let newsUrlAdd;





function useNews(callBackFunction){

    $.ajax({
        url: url
    }).done(function(data) {
        // When you tell jQuery to read a file via the ajax method
        // it reads the contents, and then executes whatever function
        // that you specify here in the done() method, and passes in
        // the contents of the file as the first argument.
        console.log("Top News");
        articles = data.articles;
        callBackFunction(articles);
});
}

function listNews(articles){
    //console.log(articles);
    $('#news-print-').html(`<h2>Your News</h2>`);
    for(let i=0;i<10;i++){

        let currentNews = articles[i];
        if(currentNews.urlToImage){
        $('#news-print-').append(`<br><a href="${currentNews.url}"><img src="${currentNews.urlToImage}" style="width:100px;height:100px;"></a><br>`);
        }
        $('#news-print-').append(`<a href="${currentNews.url}"><h3>${currentNews.title}<h3></a><br>`);
        if(currentNews.description){
            $('#news-print-').append(`${currentNews.description}<br>`);
          }

        if(currentNews.source.name){
        $('#news-print-').append(`<h6>${currentNews.source.name}<h6><button id="button${i}">Save</button><hr>`);
        }

    }
}


function buildNewsObj() {
    let newsObj = {
    // We can use the same variable or reference that we use to display the name at the top of the page
    imageUrl:getNewsImageUrl(articles),
    title:getNewsTitle(articles),
    url:getNewsUrl(articles),
    uid: user.getUser()
  };
  return newsObj;
}

$(document).ready(function() {
    $("#news-print-").click(function newsNumber(event) {
        let buttonName = event.target.id;
        buttonNum = buttonName.slice(6, 7);
        buttonNum = parseInt(buttonNum);
        console.log(buttonNum);
        let newsObj = buildNewsObj();
        addSavedNews(newsObj);

    });
});
  //console.log("userObj",userObj);
//   return userObj;

function addSavedNews(newsObj){
	console.log("add News", newsObj);
	return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/news.json`,
      type: 'POST',
      data: JSON.stringify(newsObj),
      dataType: 'json'
   }).done((newsID) => {
    //    console.log("this is the userID",userID);
      return newsID;
   });
}

function getNewsImageUrl(articles){
    console.log("num of button",buttonNum);
let currentNewsImg = articles[buttonNum];
let newsImgAdd = currentNewsImg.urlToImage;
console.log(newsImgAdd);
return newsImgAdd;
}

function getNewsTitle(articles){
    console.log("num of button",buttonNum);
let currentNewsTitle = articles[buttonNum];
let newsTitleAdd = currentNewsTitle.title;
console.log(newsTitleAdd);
return newsTitleAdd;
}

function getNewsUrl(articles){
    console.log("num of button",buttonNum);
let currentNewsUrl = articles[buttonNum];
let newsUrlAdd = currentNewsUrl.url;
console.log(newsUrlAdd);
return newsUrlAdd;
}

function retrieveNews(uid){
    console.log("url", firebase.getFBsettings().databaseURL);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/news.json`
        // url: `https://musichistory-d16.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"`
    }).done((newsData) => {
       findSavedNews(newsData);
        return newsData;

   });
}

function findSavedNews(newsData){
console.log("newsData",newsData);
let newsArray = (Object.values(newsData));
console.log("newsArray",newsArray);
let newsPrintArray = [];
for (let i=0;i<newsArray.length;i++){
    let currentUid = user.getUser();
    let currentCompare = newsArray[i].uid;
    if (currentUid == currentCompare){
        newsPrintArray.push(newsArray[i]);
        console.log("To print:",newsPrintArray);
    }

}
populateSavedNews(newsPrintArray);

}

function populateSavedNews(newsPrintArray){
    $('#news-saved').html(`<h2>Your Saved News</h2>`);
    for (let j=0;j<newsPrintArray.length;j++){
        let savedNews = newsPrintArray[j];
        console.log(savedNews);
        if (savedNews.imageUrl){
        $('#news-saved').append(`<br><a href="${savedNews.url}"><img src="${savedNews.imageUrl}" style="width:100px;height:100px;"></a><br>`);
        }
        $('#news-saved').append(`<a href="${savedNews.url}"><h3>${savedNews.title}<h3></a><br>`);
    }}

module.exports = {useNews,listNews,retrieveNews};
