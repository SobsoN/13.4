function formatTime(time) {
	var hour = Math.floor(time / 3600);
	var	minute = Math.floor(time % 3600 / 60);
	var	second = Math.floor(time % 60);
	var	outcome = "";

	if (hour > 0) {
	 	outcome += (hour + " hours ");
	}
	if (minute > 0) {
	 	outcome += (minute + " minutes ");
	}	
	outcome += (second + " seconds");
	return outcome
}

exports.printFormatedTime = formatTime;