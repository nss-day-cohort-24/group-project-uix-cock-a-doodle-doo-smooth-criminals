"use strict";

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=851990c5e77e4c01a96bdbce99e41f98';

let articles;


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
    console.log(articles);
    for(let i=0;i<9;i++){
        let currentNews = articles[i];
        $('#news-print').append(`<a href="${currentNews.url}"><img src="${currentNews.urlToImage}" style="width:100px;height:100px;"></a><br>`);
        $('#news-print').append(`<a href="${currentNews.url}">${currentNews.title}</a><br>`);
        if (currentNews.hasOwnProperty("description")) {
            $('#news-print').append(currentNews.description);
            $('#news-print').append("<br>");
          }


        $('#news-print').append(currentNews.source.name);
        $('#news-print').append("<hr>");


    }
}

useNews(listNews);



