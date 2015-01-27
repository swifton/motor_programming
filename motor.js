var gLoop;

// 
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
   for (i in level.grains) board[level.grains[i][0]][level.grains[i][1]] = 1;
   for (i in level.walls) board[level.walls[i][0]][level.walls[i][1]] = 2;
	bugs = [];
	for (i in level.bugs) {
		bugToCopy = level.bugs[i];
		bugCopied = copyCreature(bugToCopy);
		bugs.push(bugCopied);
	}
   shocked = 0;
   draw();
   cn = document.getElementById('levelNumber');
   cn.innerHTML = 'Level' + String(levelNumber + 1);
}

function startProgram() {
   if (!gamePaused) return;
   sp = document.getElementsByName("speed")
   for (var i = 0; i<3; i++) {
      if (sp[i].checked) break;
   } 
   speed = 1000/((2 + 1.5*i) * frames);
   frame = 0;
   var select;
   var option;
   for (var i = 0; i < 7; i++) {
      select = document.getElementById("programselect" + String(i));
      option = select.options[select.selectedIndex].value;
      program[i] = option;
   }

   for (var i = 0; i < 7; i++) {
      select = document.getElementById("sub1select" + String(i));
      option = select.options[select.selectedIndex].value;
      sub1[i] = option;
   }
   
   executing = 0;
   pauseGame();
   step = 0;
   substep = 0;
   grainsLeft = grainsTotal;

}

function stopProgram(time) {
   if (step>0) setTimeout(function() {backlight(step - 1, "white", 0); step = 0; if (executing == 1) backlight(substep-1, "white", 1); substep = 0;}, time);
   if (!gamePaused) pauseGame();

   setTimeout(function() {loadBoard(levels[levelNumber])},time);

   clear();
   draw();
}

function checkWin() {
   if (grainsLeft == 0) {
      nextLevel(1000);
   }
}

function nextLevel(time) {
   levelNumber += 1;
   if (levelNumber == levels.length) levelNumber = 0;
   stopProgram(time);
   setTimeout(function() {resetProgram()}, time);
}

function previousLevel() {
   levelNumber -= 1
   if (levelNumber == -1) levelNumber = levels.length - 1;
   stopProgram(0);
}

function resetProgram() {
   for (i = 0; i < 7; i++) {
      select = document.getElementById("program" + "select" + String(i));
      select.value = "Wait";
      select = document.getElementById("sub1" + "select" + String(i));
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
      if (executing == 0) {
         execute(program);
      }
      if (executing == 1) {
         execute(sub1);

      }
   }
   
	drawPositions();
	clear();
   draw();


   gLoop = setTimeout(GameLoop, speed);

   if (substep == 7) {
      setTimeout(function() {backlight(6, "white", 1)}, 1000/3);
      executing = 0;
      substep = 0;
   }
   if (step == 7 && executing == 0) {

      stopProgram(1000);
      checkWin();
   }
}

var program = new Array(7);
var sub1 = new Array(7);

function init(program) {
   var select;
   var option;
   var options = ["Wait", "Move", "Turn Left", "Turn Right", "Pick Up"];
   if (program == "program") options.push("Sub 1");

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


function removeSub() {
   select = document.getElementById('sub1select0')
   select.parentNode.removeChild(select);
}

var width, height;
var board = new Array();

var character;
var step;
var substep;
var executing;
var shocked = 0;

var bugs = [];

var levelNumber = 0;
var frame = 0;

init("program");
init("sub1");

loadBoard(levels[levelNumber]);

clear();
draw();
//drawimage(-100, -100, 'bug', 0)
setTimeout(draw, 500)
