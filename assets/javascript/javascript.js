var topics = ['dogs', 'cats', 'monkeys', 'giraffes'];

$(document).ready(function() {

    function renderButtons() {

        $('#buttonsView').empty();

    function renderButtons() {
       $('#addButton').empty();
   
   //creates buttons
        for (var i = 0; i < topics.length; i++) {

        for (var i = 0; i < topics.length; i++) {
            var button = $('<button>');
        }

        $('#addTopic').on('click', function() {
            var topic = $('#topic-input').val().trim();
            topics.push(topic);
            renderButtons();
            return false;
        })

        function displayTopicInfo() {

            var topic = $(this).attr('data-name');
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&limit=10";
            $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {
                $("#topicsView").html(JSON.stringify(response));
            });
        }


        $(document).on('click', '.topic', displayTopicInfo);
        renderButtons();
    };
});

