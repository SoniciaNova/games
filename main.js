var yvel = 0;
var ydir = "up";
var y = 20.5;
function init() {
	window.setInterval(function() {
		if (ydir === "up") {
			y += yvel;
			yvel += 0.125;
			if (yvel === 1) {
				ydir = "down";
			}
		} else if (ydir === "down") {
			y += yvel;
			yvel -= 0.125;
			if (yvel === -1) {
				ydir = "up";
			}
		}
		document.getElementById("logo").style.top = y + "px";
	},100);
}