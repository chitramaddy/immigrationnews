$("#scrapeArt").on("click", function(){
    $.ajax({
        type: "GET",
        url: "/all"
    }).then(function(){
        console.log("scraped new articles");
        location.replace("/all");
    })
})


   $(document).on("click", ".saveArt", function (event) {

       //grab the id of the article to be saved
       var id = $(this).data("artid");

       //send a request to the server
       $.ajax({
           type: "GET",
           url: "/savedarticles/+",
           data: {
               id: id
           }
           //Then once the data is collected, save it to the page
       }).then(function(data){
         console.log(data);  
    });

   })