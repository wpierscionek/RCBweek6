var cartoonsList = ["Tom And Jerry","Full Metall Alchemist", "One Piece", "Dragon Ball Z",
 "Naruto", "Ed, Edd, n Eddy", "Courage the Cowardly Dog", "Dexter's Laboratory ",
  "The Smurfs", "Looney Tunes", "Inspector Gadget", "X-men", "Garfield and Friends"]; 

function gernerateButtons() {
	$("#cartoons").empty();

	for (var i = 0; i < cartoonsList.length; i++) { 
	var cartoonButton = $("<button id="+cartoonsList[i]+">"+cartoonsList[i]+"</button>");
	cartoonButton.attr("data-name", cartoonsList[i]);
	$("#cartoons").append(cartoonButton);
	};
};
	
	function displayCartoonInfo() {
        var button  = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + button + "&api_key=dc6zaTOxFJmzC&limit=21";

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifContainer = $("<div class=item>")
                    var rating = results[i].rating;
                    var button = $("<p>").text("Rating:" + rating);

                    var personImage = $("<img>");
                    personImage.addClass("personImageClass");
                    personImage.attr("src", results[i].images.fixed_height.url);
                    personImage.attr("data-still", results[i].images.fixed_height_still.url);
    				personImage.attr("data-animate", results[i].images.fixed_height.url);
    				personImage.attr("data-state", "animate");
                    gifContainer.append(button)
                    gifContainer.append(personImage)
                    $("#gifs").prepend(gifContainer);
                };
                if (results.length == 0) {
                	$("#cartoons").append("<p> There is no gifs for this title.</p>");
                };
            });
        };
 gernerateButtons(); 

$("#search").on("click", function() {

    var userInput = $("#cartoon-input").val().trim();
    cartoonsList.push(userInput);
    gernerateButtons();
     return false;
  });
$("#clear").on("click", function() {
	$("#gifs").empty();
});

 $("#gifs").on("click", ".personImageClass", function() { 
  	var state = $(this).attr("data-state"); 
  	if (state == "still"){
                $(this).attr("src", $(this).data("animate"));
                $(this).attr("data-state", "animate");
            }else{
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still");
            };
	});

$(document).on("click", "button", displayCartoonInfo);