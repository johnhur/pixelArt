
for (var i = 0; i < 690; i++) {
	newDiv = document.createElement("div");
	newDiv.style.width = "3.0%";
	newDiv.style.float = "left";
	newDiv.style.paddingBottom = "3.0%";
	newDiv.style.backgroundColor = 'white';
	newDiv.style.border = 'thin solid black';
	document.body.appendChild(newDiv);
}

var red = document.createElement("div");
	red.style.width = "3.0%";
	red.style.width = "3.0%";
	red.style.float = "left";
	red.style.paddingBottom = "3.0%";
	red.style.backgroundColor = 'red'
	red.style.border = 'thin solid black';
	document.body.appendChild(red);

	red.addEventListener('click', function() {
		color = "red";
})

var purple = document.createElement("div");
	purple.style.width = "3.0%";
	purple.style.width = "3.0%";
	purple.style.float = "left";
	purple.style.paddingBottom = "3.0%";
	purple.style.backgroundColor = 'purple'
	purple.style.border = 'thin solid black';
	document.body.appendChild(purple);

	purple.addEventListener('click', function() {
		color = "purple";
})

var blue = document.createElement("div");
	blue.style.width = "3.0%";
	blue.style.width = "3.0%";
	blue.style.float = "left";
	blue.style.paddingBottom = "3.0%";
	blue.style.backgroundColor = 'blue'
	blue.style.border = 'thin solid black';
	document.body.appendChild(blue);

	blue.addEventListener('click', function() {
		color = "blue";
})

var yellow = document.createElement("div");
	yellow.style.width = "3.0%";
	yellow.style.width = "3.0%";
	yellow.style.float = "left";
	yellow.style.paddingBottom = "3.0%";
	yellow.style.backgroundColor = 'yellow'
	yellow.style.border = 'thin solid black';
	document.body.appendChild(yellow);

	yellow.addEventListener('click', function() {
		color = "yellow";
})

var green = document.createElement("div");
	green.style.width = "3.0%";
	green.style.width = "3.0%";
	green.style.float = "left";
	green.style.paddingBottom = "3.0%";
	green.style.backgroundColor = 'green'
	green.style.border = 'thin solid black';
	document.body.appendChild(green);

	green.addEventListener('click', function() {
		color = "green";
})

var orange = document.createElement("div");
	orange.style.width = "3.0%";
	orange.style.width = "3.0%";
	orange.style.float = "left";
	orange.style.paddingBottom = "3.0%";
	orange.style.backgroundColor = 'orange'
	orange.style.border = 'thin solid black';
	document.body.appendChild(orange);

	orange.addEventListener('click', function() {
		color = "orange";
})

var white = document.createElement("div");
	white.style.width = "3.0%";
	white.style.width = "3.0%";
	white.style.float = "left";
	white.style.paddingBottom = "3.0%";
	white.style.backgroundColor = 'white'
	white.style.border = 'thin solid black';
	document.body.appendChild(white);

	white.addEventListener('click', function() {
		color = "white";
})

var black = document.createElement("div");
	black.style.width = "3.0%";
	black.style.width = "3.0%";
	black.style.float = "left";
	black.style.paddingBottom = "3.0%";
	black.style.backgroundColor = 'black'
	black.style.border = 'thin solid black';
	document.body.appendChild(black);

	black.addEventListener('click', function() {
		color = "black";
})


var divarr = document.querySelectorAll('div');
for(var r = 0; r < 1000; r++){
	divarr[r].addEventListener('click', function() {
		this.style.backgroundColor = color;
	})
}
