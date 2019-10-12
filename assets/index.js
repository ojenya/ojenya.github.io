window.onkeydown = blcokE;
window.onkeypress = blcokE;

function blcokE(evt) {
	if(evt.keyCode == 123 || evt.keyCode == 85 || evt.keyCode == 17 || evt.keyCode == 16 || evt.keyCode == 74 || evt.keyCode == 116 || evt.keyCode == 73) {
		return false;
	}
}

var audio = document.getElementById("audio");
function pVid() {
	audio.paused ? audio.play() : audio.pause();
}
function play() {
	audio.play();
	window.scrollTo(0,1);
	document.webkitExitFullscreen()
}
audio.volume = 0.50;
audio.autoplay = true;


function renderTime() {
	var currentTime = new Date();
	var diem = "AM";
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

	if(h == 0) {
		h = 12;
	} else if(h > 12) {
		h = h - 12;
		diem = "PM";
	}
	if(h < 10) {
		h = "0" + h;
	}
	if(m < 10) {
		m = "0" + m;
	}
	if(s < 10) {
		s = "0" + s;
	}
	var myClock = document.getElementById('clockDisplay');
	if(!myClock) return
	myClock.textContent = h + ":" + m + ":" + s + " " + diem;
	myClock.innerText = h + ":" + m + ":" + s + " " + diem;
	setTimeout(renderTime, 1000);
}
renderTime();

/* Title */
if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", loaded );
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", loaded );
}

function loaded() {
	play();
	setInterval(loop, 150);
}

var x = 0;
var titleText = [ "⢀⠀",
"⡀⠀",	"⠄⠀",	"⢂⠀",	"⡂⠀",
"⠅⠀",	"⢃⠀",	"⡃⠀",	"⠍⠀",
"⢋⠀",	"⡋⠀",	"⠍⠁",	"⢋⠁",
"⡋⠁",	"⠍⠉",	"⠋⠉",	"⠋⠉",
"⠉⠙",	"⠉⠙",	"⠉⠩",	"⠈⢙",
"⠈⡙",	"⢈⠩",	"⡀⢙",	"⠄⡙",
"⢂⠩",	"⡂⢘",	"⠅⡘",	"⢃⠨",
"⡃⢐",	"⠍⡐",	"⢋⠠",	"⡋⢀",
"⠍⡁",	"⢋⠁",	"⡋⠁",	"⠍⠉",
"⠋⠉",	"⠋⠉",	"⠉⠙",	"⠉⠙",
"⠉⠩",	"⠈⢙",	"⠈⡙",	"⠈⠩",
"⠀⢙",	"⠀⡙",	"⠀⠩",	"⠀⢘",
"⠀⡘",	"⠀⠨",	"⠀⢐",	"⠀⡐",
"⠀⠠",	"⠀⢀",	"⠀⡀",
];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = "j3nqa "+titleText[x++%titleText.length];
	if(x % 15 == 0 && ( Date.now() - lastTimeMouse) > 6000)
		multipleSplats(parseInt(Math.random() * 4) + 1)
}