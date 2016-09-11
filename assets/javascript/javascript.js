// 1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`. 
//     * We chose animals for our theme, but you can make a list to your own liking.

// 2. Your app should take the topics in this array and create buttons in your HTML.
//     * Try using a loop that appends a button for each string in the array.

// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating (PG, G, so on). 
//     * This data is provided by the GIPHY API.
//     * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.
$(document).ready(function(){
  ///this creates initial buttons at top
    var animalsarray = ["cats", "dogs", "elephants", "monkeys", "skunks"];
   
    function buttongenerator() {
        for (var i = 0; i < animalsarray.length; i++) {
            
            var name = animalsarray[i];
            var button = $('<button>');//creates the button
            button.addClass("gif-button");//adding class gif-button
            button.text(name);
            button.attr("data-name", name);
          

            $("#buttons").append(button);
        }
    }
        buttongenerator();


//this creates search results when click on buttons
$(document).on("click", ".gif-button", function(){
        var searchtext = $(this).data("name"); 
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchtext + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
          var results = response.data;
          console.log(results);   
           
        
//this creates new buttons with add button
  //  $('#addGIF').on('click', function(){
  // for (var i=0; i < results.length; i++) {
  //           var response = $('#gif-input').val().trim();
  //           response.push("gif-button");
  //              renderButtons();
  //              return false;
  //  })

          
      });
    });



});

