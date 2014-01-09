window.onload = function() {
	var adCanvas = document.getElementById("adCanvas");

	if (adCanvas.getContext) {
		// Initialize a 2d drawing context.
		var ctx = adCanvas.getContext("2d");

		drawAdvert();
	}

	function drawAdvert() {
		// Create the Background Rectangle
		ctx.fillStyle = "rgba(0,0,0,0.4)";
		ctx.fillRect(0,0,600,150);

		// Add the text
		ctx.font = "Bold 32px Georgia";
		ctx.textAlign = "center";
		ctx.fillStyle = "#FFF";

		// Calculate the positions for the text
		var textX = (adCanvas.width / 2) - 80;
		var textY = (adCanvas.height / 2);

		// Add the "New York's Best Pizza" text
		ctx.fillText("New York's Best Pizza", textX, textY - 10);

		// Udpate the font and add the "Joe's Pizza Co." text
		ctx.font = "Italic 22px Georgia";
		ctx.fillText("Joe's Pizza Co.", textX, textY + 25);
	}
}
