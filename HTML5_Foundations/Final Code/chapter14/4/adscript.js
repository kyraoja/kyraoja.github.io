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
	}
}
