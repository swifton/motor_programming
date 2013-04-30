var gLoop;

function loadBoard(level) {
   width = level.width;
   height = level.height;
   board = new Array(width);
   board[0] = new Array(height);
   reset(board);
   c.width = width * diameter;
   c.height = height * diameter;
   character = copyCreature(level.character);
   grainsTotal = level.totalGrains;
   for (i in level.grains) board[level.grains[i][0] - 1][level.grains[i][1] - 1] = 1;
   for (i in level.walls) board[level.walls[i][0] - 1][level.walls[i][1] - 1] = 2;
	bugs = [];
	for (i in level.bugs) {
		bugToCopy = level.bugs[i];
		bugCopied = copyCreature(bugToCopy);
		bugs.push(bugCopied);
	}
   shocked = 0;
   draw();
   resetProgram();
}

function startProgram() {
   frame = 0;
   var select;
   var option;
   for (var i = 0; i < 7; i++) {
      select = document.getElementById("programselect" + String(i));
      option = select.options[select.selectedIndex].value;
      program[i] = option;
   }
   
   if (gamePaused) pauseGame();
   step = 0;
   grainsLeft = grainsTotal;
}

function stopProgram() {
   if (step>0) backlight(step - 1, "white");
   step = 0;

   gamePaused = true;
   if (levelNumber == 6) levelNumber = 0;
   loadBoard(levels[levelNumber]);
   


   clear();
   draw();
}

function checkWin() {
   if (grainsLeft == 0) {
      levelNumber += 1;
   }
}

function nextLevel() {
   levelNumber += 1;
   stopProgram();
   resetProgram();
}

function resetProgram() {
   for (i = 0; i < 7; i++) {
      select = document.getElementById("program" + "select" + String(i));
      select.value = "Wait";
   }
}


function bugShock(depth) {
   shocked = depth;
}

function moveBugs() {
   var x;
   var y;
	var bug;
   for (i in bugs) {
      x = bugs[i].coordinates[0] + bugs[i].direction[0];
      y = bugs[i].coordinates[1] + bugs[i].direction[1];
      if (checkWalls(x, y) || checkGrains(x, y) || checkCharacter(x, y)) {
         bugs[i].direction[0] *= -1;
         bugs[i].direction[1] *= -1;
			bugs[i].angle = directionToAngle(bugs[i].direction);
      }
      else {
         bugs[i].coordinates[0] = x;
         bugs[i].coordinates[1] = y;
      }
   }
}


function GameLoop() {
   frame += 1;
   if (frame == frames) {
		oldState();
      frame = 0;
      execute();
   }
   
	drawPositions();
	clear();
   draw();


   gLoop = setTimeout(GameLoop, speed);

   if (step == 7) {
      setTimeout(function() {stopProgram()},1000);
      gLoop = clearTimeout(gLoop);
   }
}

var program = new Array(7);
var sub1 = new Array(7);

function init(program) {
   var select;
   var option;
   var options = ["Wait", "Move", "Turn Left", "Turn Right", "Pick Up"];

   for (var i = 0; i < 7; i++) {
      select = document.createElement("select");
      select.setAttribute("id", program + "select" + String(i));
   
      for (j in options) {
         option = document.createElement("option");
         option.value = options[j];
         option.text = options[j];
         select.appendChild(option);
      }
      document.getElementById(program).appendChild(select);
   }
}


var width, height;
var board = new Array();

var character;
var step;
var shocked = 0;

var bugs = [];

var levelNumber = 0;
var frame = 0;

init("program");
init("sub1");

loadBoard(level1);

clear();
draw();
setTimeout(draw, 500)
