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
   oldPosition = character.slice(0);
   drawpos = character.slice(0);
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

function startProgram() {
   frame = 0;
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

function directionToAngle(direction) {
   var angle = 0;
   if (direction[0] == -1) angle = -Math.PI/2;
   if (direction[0] == 1) angle = Math.PI/2;
   if (direction[1] == -1) angle = 0;
   if (direction[1] == 1) angle = Math.PI;
   return angle;
}

function GameLoop() {
   frame += 1;
   if (frame == frames) {
      frame = 0;
      oldPosition = character.slice(0);
      execute();
   }
   
   drawpos[0] = (character[0] * frame + oldPosition[0] * (frames - frame))/frames;
   drawpos[1] = (character[1] * frame + oldPosition[1] * (frames - frame))/frames;
   clear();
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


var width, height;

var board = new Array();

var character = new Array;
var step;
var direction = new Array;

var shocked = 0;

var bugs = [];

var levelNumber = 0;

var frame = 0;

var oldPosition = new Array(2);

var drawpos = new Array(2);

loadBoard(level1);

clear();
draw();
init();
