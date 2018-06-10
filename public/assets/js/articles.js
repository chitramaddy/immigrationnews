   //empty the article area
   $("#article-area").empty();

   //We are getting all the existing articles
   $.getJSON("/all", function (results) {
       location.reload();
   });

   $("#saveArt").on("click", function (event) {

    //grab the id of the article to be saved
    var id = $(this).data("artId");
    console.log(id);
    
    //send a request to the server


   })