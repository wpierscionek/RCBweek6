var cartoonsList = ["Tom And Jerry", "Dragon Ball Z", "Naruto", "Ed, Edd, 'n' Eddy", "Courage the Cowardly Dog", "Dexter's Laboratory ", "The Smurfs", "Looney Tunes / Merrie Melodies", "Inspector Gadget", "X-men", "Garfield and Friends"]; 

for (var i = 0; i < cartoonsList.length; i++) { 
	var cartoonButton = $("<button id="+cartoonsList[i]+">"+cartoonsList[i]+"</button>");
	// console.log (cartoonButton);
	cartoonButton.attr("data-name", cartoonsList[i]);
	$("#cartoons").append(cartoonButton);
}

$("button").on('click', function() {
        var button  = $(this).data('name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + button + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifContainer = $('<div class="item">')
                    var rating = results[i].rating;
                    var button = $('<p>').text("Rating: " + rating);
                    var personImage = $('<img>');
                    personImage.attr('src', results[i].images.fixed_height.url);

                    gifContainer.append(button)
                    gifContainer.append(personImage)
                    $('#gifs').prepend(gifContainer);
                }

            });
    });