function ggw(url, callback) {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	script.onreadystatechange = callback;
	script.onload = callback;

	head.appendChild(script);
}

var timer = undefined;


function countdown() {
	var arr = _.range(3, 0, -1);

	var i = 0;
	var max = arr.length;

	var run = function run() {
		if (i >= max) {
			shape.clear();
			return galaxy();
		}

		shape.print(arr[i++]);
		setTimeout(run, 1e3 + i);
	};

	run();
}

function galaxy() {
	shape.spiral({
		radius: 0,
		increment: 1,
		lifeTime: 100,
		electronCount: 1
	});

	timer = setTimeout(galaxy, 16);
}

function ring() {
	shape.spiral();

	timer = setTimeout(ring, 16);
}

/*
document.addEventListener('keypress', function (_ref15) {
	var keyCode = _ref15.keyCode;
	var target = _ref15.target;

	if (keyCode == 13) {
		clearTimeout(timer);
		var value = (target.value + "").trim();
		target.value = '';
		var rndValue = getRandom(1, 9);
		console.log(rndValue);

		switch (rndValue) {
			case 1:
				ring();
				return galaxy();

			case 2:
				return shape.init();

			case 3:
				return shape.explode();

			case 4:
				return shape.clear();

			case 5:
				return queue();

			case 6:
				return countdown();

			case 7:
				shape.clear();
				return galaxy();

			case 8:
				shape.clear();
				return ring();

			default:
				return shape.print(value);
		}
	}
});
*/

document.addEventListener('keypress', function (_ref15) {
	var keyCode = _ref15.keyCode;
	var target = _ref15.target;

	if (keyCode == 13) {
		clearTimeout(timer);
		var value = (target.value + "").trim();
		target.value = '';
		var rndValue = getRandom(1, 9);
		console.log(rndValue);

		switch (rndValue) {
			case 1:
			ring();
			return galaxy();

			case 2:
			return shape.init();

			case 3:
			return shape.explode();

			case 4:
			return shape.clear();

			case 5:
			return queue();

			case 6:
			return countdown();

			case 7:
			shape.clear();
			return galaxy();

			case 8:
			shape.clear();
			return ring();

			default:
			return shape.print(value);
		}
	}
});

ggw("https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js", _=> {ggw("assets2/eff.js", _=> {shape.init();sHel();});});


function sHel() {

	setInterval(() => {
		FONT_COLOR = getRandomColor();
		ELECTRON_COLOR = getRandomColor();
		CELL_HIGHLIGHT = getRandomColor();
	}, 800);

	var text = 'j3nqa';

	var i = 0;
	var max = text.length;

	var run = function run() {
		if (i >= max) return ring(), setInterval(() => { shape.print(text); }, 6e3);

		shape.print(text.slice(0, ++i));
		timer = setTimeout(run, 1e3 + i);
	};

	run();
}

function getRandomColor() {
	var h = Math.floor(360 * Math.random()),
		s = 30 + Math.floor(70 * Math.random()),
		v = 30 + Math.floor(50 * Math.random());
	return "hsl(" + h + ", " + s + "%, " + v + "% )";
}


function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}