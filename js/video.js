var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	console.log("auto play is set to " + video.autoplay);
	video.loop = false;
	console.log("auto play is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video = document.querySelector("#player1")
	video.autoplay = true;
	video.loop = true;
	video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video = document.querySelector("#player1")
	video.autoplay = true;
	video.loop = true;
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow Down");
	video = document.querySelector("#player1");
	video.playbackRate *= 0.9; // decrease speed by 10%
	console.log("New speed:", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed up");
	video = document.querySelector("#player1");
	video.playbackRate *= 1.1; // decrease speed by 10%
	console.log("New speed:", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current location:", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	video = document.querySelector("#player1");
	muteButton = document.querySelector("#mute");

	video.muted = !video.muted;

	if (video.muted) {
		muteButton.textContent = "Unmute";
		console.log("Video muted");
	} else {
		muteButton.textContent = "Mute";
		console.log("Video unmuted");
	}
});

document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log("The current value is " + video.volume);
	console.log(document.querySelector("#volume"));
	console.log("The current value is " + video.volume);
});


document.querySelector("#vintage").addEventListener("click", function () {
	video = document.querySelector("#player1");
	video.classList.add("oldSchool");
	console.log("Old School style applied");
});

document.querySelector("#orig").addEventListener("click", function () {
	video = document.querySelector("#player1");
	video.classList.remove("oldSchool");
	console.log("Original style restored");
});
