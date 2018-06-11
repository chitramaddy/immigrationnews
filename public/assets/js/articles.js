$("#scrapeArt").on("click", function(){
    $.ajax({
        type: "GET",
        url: "/all"
    }).then(function(){
        console.log("scraped new articles");
        location.replace("/all");
    })
})


//Save article to the database when user clicks save article
   $(".saveArt").on("click", function (event) {

       //grab the  title and img of the article to be saved
       var title = $(this).siblings("p").text().trim();
       var img = $(this).siblings("img").attr("src");
       console.log(img);
       //Image console logging, but not getting passed on????

       //send a request to the server
       $.ajax({
           type: "POST",
           dataType: "json",
           url: "/savedarticles",
           data: {
               title: title,
               img: img
           }
           //once the data is collected, hide the article from the page
       }).then(function(results){
         console.log(results);           
        });
        $(this).parent().hide();

   });

   //When savedarticles button is clicked take the user to the saved articles page
   $("#saved").on("click", function(e){
       $.ajax({
           type: "GET",
           url: "/saved"
       }).then(function(results){
           location.replace("/saved");
       });
   });
