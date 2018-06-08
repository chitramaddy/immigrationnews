//function to render the html for every article scraped
function scrapeArticles(results){
    
    //empty the article area
    $("#article-area").empty();

    //loop through the results coming back from the scraped website
    for(var i=0; i<results.length; i++){
        var article = results[i];

        //div to display the article with attr of link. Clicking the div will take the user to the original link
        var div = $("<div>");
        div.addClass("article");
        div.attr("href", article.link);
        
        var ul = $("<ul>");
        ul.attr(articleId, article.objectId);

        //create <h3> to display the title of article
        var title = $("<h3>");
        title.text(article.title);

        //create <img> to display the image
        var img = $("<img>");
        img.attr("src", article.img);

        //Append all of the article info to the div
        div.append(ul, title, img);

        //Append the new created article to the article display area
        $("#article-area").append(div);

    }
}

$("#scrapeArt").on("click", function(){
    
    scrapeArticles(results);
})