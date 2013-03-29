var gLoop;

function loadBoard(level) {
   width = level.width;
   height = level.height;
   board = new Array(width);
   board[0] = new Array(height);
   reset(board);
   c.width = width * diameter;
   c.height = height * diameter;
   character = level.character[0].slice(0);
   character[0] -= 1;
   character[1] -= 1;
   direction = level.character[1].slice(0);
   grainsTotal = level.totalGrains;
   for (i in level.grains) board[level.grains[i][0] - 1][level.grains[i][1] - 1] = 1;
   for (i in level.walls) board[level.walls[i][0] - 1][level.walls[i][1] - 1] = 2;
   bugs = copyBugs(level.bugs);
   shocked = 0;
}

function copyBugs(b) {
   var ans = new Array(b.length);
   var a = new Array(2);
   for (i in b) {
      a[0] = b[i][0].slice(0);
      a[1] = b[i][1].slice(0);
      ans.push(a);
   }
   return ans;
}

function draw() {
//   drawCircle(character[0] * diameter + diameter/2, character[1] * diameter + diameter/2, diameter/2);
   drawimage(character[0] * diameter, character[1] * diameter, "character");
	rad = diameter/2;
	for (i = 0; i < width; i++) {
		for (j = 0; j < height; j++) {
			if (board[i][j] == 1) drawimage(i*2*rad, j*2*rad, "apple");
//drawRectangle(i*2*rad + 1, j*2*rad + 1, 2*rad - 2, 2*rad - 2);
			if (board[i][j] == 2)  drawimage(i*2*rad, j*2*rad, "wall");

//drawRectangle(i*2*rad + 1, j*2*rad + 1, 1*rad - 2, 1*rad - 2);
		}
	}
   for (i in bugs) {
//      drawCircle(bugs[i][0][0] * diameter + diameter/2, bugs[i][0][1] * diameter + diameter/2, diameter/3);
      drawimage(bugs[i][0][0] * diameter, bugs[i][0][1] * diameter, "bug");
   }
}

function startProgram() {
   var select;
   var option;
   for (var i = 0; i < 7; i++) {
      select = document.getElementById(String(i));
      option = select.options[select.selectedIndex].value;
      program[i] = option;
   }
   
   if (gamePaused) pauseGame();
   step = 0;
   grainsLeft = grainsTotal;
}

function stopProgram() {
   gLoop = clearTimeout(gLoop);
   gamePaused = true;
   if (levelNumber == 6) levelNumber = 0;
   loadBoard(levels[levelNumber]);

   clear();
   draw();
}

function checkWalls(x, y) {
   if (x < 0 || y < 0) return true;
   if (x > width - 1 || y > height - 1) return true;
   if (board[x][y] == 2) return true;
}

function checkGrains(x, y) {
   if (board[x][y] == 1) return true;
}

function checkCharacter(x, y) {
   if (character[0] == x && character[1] == y) {
      bugShock(1);
      return true;
   }
}

function checkBugs(x, y) {
   for (i in bugs) {
      if (x == bugs[i][0][0] && y == bugs[i][0][1]) {
         bugShock(0);
         return true;
      }
   }
}

function checkWin() {
   if (grainsLeft == 0) levelNumber += 1;
}

function nextLevel() {
   levelNumber += 1;
   stopProgram();
}


function bugShock(depth) {
   shocked = depth;
}

function moveBugs() {
   var x;
   var y;
   for (i in bugs) {
      x = bugs[i][0][0] + bugs[i][1][0];
      y = bugs[i][0][1] + bugs[i][1][1];
      if (checkWalls(x, y) || checkGrains(x, y) || checkCharacter(x, y)) {
         bugs[i][1][0] *= -1;
         bugs[i][1][1] *= -1;
      }
      else {
         bugs[i][0][0] = x;
         bugs[i][0][1] = y;
      }
   }
}



function execute() {
   var command = program[step];
   step += 1;
   moveBugs();
   if (shocked > 0) {
      shocked -= 1;
      return;
   }

   switch (command) {
      case "Wait":
         break;
      case "Move":
         var x = character[0] + direction[0];
         var y = character[1] + direction[1];
         if (checkWalls(x, y)) break;
         if (checkBugs(x, y)) break;
         character[0] = x;
         character[1] = y;
         break;
      case "Turn Left":
         var tmp = direction[0];
         direction[0] = direction[1];
         direction[1] = -tmp;
         break;
      case "Turn Right":
         var tmp = direction[0];
         direction[0] = -direction[1];
         direction[1] = tmp;
         break;
      case "Pick Up":
         if (board[character[0]][character[1]] == 1) { 
            board[character[0]][character[1]] = 0; 
            grainsLeft -= 1;
            checkWin();
         }
         break;
   }
}


function GameLoop() {
   clear();
   execute();
   draw();

   gLoop = setTimeout(GameLoop, speed);
   if (step == 7) {stopProgram()}
}

var program = new Array(7);

function init() {
   var select;
   var option;
   var options = ["Wait", "Move", "Turn Left", "Turn Right", "Pick Up"];

   for (var i = 0; i < 7; i++) {
      select = document.createElement("select");
      select.setAttribute("id", String(i));
   
      for (j in options) {
         option = document.createElement("option");
         option.value = options[j];
         option.text = options[j];
         select.appendChild(option);
      }
      document.getElementById("program").appendChild(select);
   }
}

init();

var width, height;

var board = new Array();

var character = new Array;
var step;
var direction = new Array;

var shocked = 0;

var bugs = [];

var levelNumber = 0;

loadBoard(level1);

draw();
