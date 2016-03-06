var cartoons = ["Tom And Jerry", "Dragon Ball Z", "Naruto", "Ed, Edd, 'n' Eddy", "Courage the Cowardly Dog", "Dexter's Laboratory ", "The Smurfs", "Looney Tunes / Merrie Melodies", "Inspector Gadget", "X-men", "Garfield and Friends"]; 

for (var i = 0; i < cartoons.length; i++) { 
	var cartoonButton = $("<button id= "+cartoons[i]+">"+cartoons[i]+"</button>");
	// console.log (cartoonButton);
	cartoonButton.attr("data-name", cartoons[i]);
	$("#cartoons").append(cartoonButton);
}