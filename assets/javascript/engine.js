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


//create an array of strings
var movies = ["Cats!", "Dogs!", "Elephants!", "Monkeys", "Skunks"];


    // ========================================================

    // Generic function for displaying movie data 
    function renderButtons(){ 

        // Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
        $('#moviesView').empty();

        // Loops through the array of movies
        for (var i = 0; i < movies.length; i++){

            // Then dynamicaly generates buttons for each movie in the array

            // Note the jQUery syntax here... 
            var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
            a.addClass('movie'); // Added a class 
            a.attr('data-name', movies[i]); // Added a data-attribute
            a.text(movies[i]); // Provided the initial button text
            $('#moviesView').append(a); // Added the button to the HTML
        }
    }

    // ========================================================

    // This function handles events where one button is clicked
    $('#addMovie').on('click', function(){

        // This line of code will grab the input from the textbox
        var movie = $('#movie-input').val().trim();

        // The movie from the textbox is then added to our array
        movies.push(movie);
        
        // Our array then runs which handles the processing of our movie array
        renderButtons();

        // We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
        return false;
    })

    // ========================================================

    // This calls the renderButtons() function
    renderButtons();


                   


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
             




