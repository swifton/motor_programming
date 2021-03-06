var c = document.getElementById('c'),
	ctx = c.getContext('2d');	
	
var diameter = 40;
var frames = 40;
	
function drawCircle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI, false);
	ctx.fillStyle = "black";
	ctx.fill();
}

function drawRectangle(x1, y1, dx, dy) {
	ctx.beginPath();
	ctx.fillStyle="#FF00ff";
	ctx.fillRect(x1, y1, dx, dy);
	ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}

function drawimage(x, y, source, angle) {
	ctx.save();
	ctx.translate(x + diameter/2, y + diameter/2); 
	ctx.rotate(angle);
	var img = new Image();
	img.src = "images/" + source + ".png";
	ctx.drawImage(img, -diameter/2, -diameter/2); 
	ctx.restore();
}
	
// fills the canvas with one color
function clear() {
	ctx.fillStyle = '#ffffff';
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.rect(0, 0, c.width, c.height);
	ctx.closePath();
	ctx.fill();
}

// draws the ladybird and the bugs
function drawPositions() {
   character.drawPosition[0] = (character.coordinates[0] * frame + character.oldCoordinates[0] * (frames - frame))/frames;
   character.drawPosition[1] = (character.coordinates[1] * frame + character.oldCoordinates[1] * (frames - frame))/frames;
	character.drawAngle = (character.angle * frame + character.oldAngle * (frames - frame))/frames;

	for (i in bugs) {
   	bugs[i].drawPosition[0] = (bugs[i].coordinates[0] * frame + bugs[i].oldCoordinates[0] * (frames - frame))/frames;
   	bugs[i].drawPosition[1] = (bugs[i].coordinates[1] * frame + bugs[i].oldCoordinates[1] * (frames - frame))/frames;
		bugs[i].drawAngle = (bugs[i].angle * frame + bugs[i].oldAngle * (frames - frame))/frames;
	}
}

// saves the positions and the orientations of the ladybird and the bugs on this step before proceeding to the next one
function oldState() {
   character.oldCoordinates = character.coordinates.slice(0);
   character.oldAngle = character.angle;
	for (i in bugs) {
   	bugs[i].oldCoordinates = bugs[i].coordinates.slice(0);
   	bugs[i].oldAngle = bugs[i].angle;
	}
}

function drawGrid() {
	p = width;
	s = height;
	for (i = 0; i <= width + s; i++) {
		drawLine(i*diameter, 0, i*diameter, (height + p)*diameter);
	}
	for (i = 0; i <= height + p; i++) {
		drawLine(0,i*diameter, (width + s)*diameter, i*diameter);
	}
}

// changes the backlight for the current command of the program
function backlight(step, color, execc) {
   if (execc == 0) prog = "program";
   if (execc == 1) prog = "sub1";
   select = document.getElementById(prog + "select" + String(step));
   select.setAttribute("class", color);
   if (step > 0) {
      select = document.getElementById(prog + "select" + String(step-1));
      select.setAttribute("class", "white");
   }
}

// the main drawing function; draws everything
function draw() {
   drawRectangle(0, 0, c.width, c.height);
   drawGrid();
   rad = diameter/2;
   for (i = 0; i < width; i++) {
      for (j = 0; j < height; j++) {
         if (board[i][j] == 1) drawimage(i*2*rad, j*2*rad, "apple", [0, 0]);
         if (board[i][j] == 2)  drawimage(i*2*rad, j*2*rad, "wall", [0, 0]);
      }
   }
   for (i in bugs) {
      drawimage(bugs[i].drawPosition[0] * diameter, bugs[i].drawPosition[1] * diameter, "bug", bugs[i].drawAngle);
   }
   drawimage(character.drawPosition[0] * diameter, character.drawPosition[1] * diameter, "character", character.drawAngle);
}
