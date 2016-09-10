1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`. 
    * We chose animals for our theme, but you can make a list to your own liking.

2. Your app should take the topics in this array and create buttons in your HTML.
    * Try using a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 

4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5. Under every gif, display its rating (PG, G, so on). 
    * This data is provided by the GIPHY API.
    * Only once you get images displaying with button presses should you move on to the next step.

6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.
<script type="text/javascript">

//create an array of strings
var animal = ["cats", "dogs", "elephants", "monkeys", "skunks"];


// Try using a loop that appends a button for each string in the array. //When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API
$('button').on('click', function() {
        var animal = $(this).data('animal');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.

                console.log(queryURL);

                console.log(response)

                // step 2: since the image information is inside of the data key then make a variable named results and set it equal to response.data

                //------------put step 2 in between these dashes--------------------
                var results = response.data;
                //--------------------------------

                for (var i = 0; i < results.length; i++) {



                    //------------put step 3 in between these dashes--------------------
                    var animalDiv = $('<div>');

                    var p = $('<p>').text("Rating: " + results[i].rating);

                    var animalImage = $('<img>');
                    animalImage.attr('src', results[i].images.fixed_height.url);

                    animalDiv.append(p);
                    animalDiv.append(animalImage);

                    $('#gifsAppearHere').prepend(animalDiv);
                    //--------------------------------
                }

      }


//When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
    
 // $('.gif').on('click', function(){
 //     var state = $(this).attr('data-state');
 //        if ( state == 'still'){
 //               $(this).attr('src', $(this).data('animate'));
  //              $(this).attr('data-state', 'animate');
  //          }else{
  //              $(this).attr('src', $(this).data('still'));
  //              $(this).attr('data-state', 'still');
  //          }

 

    //Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.
             


});


</script>