var gLoop;

function draw() {
  drawCircle(character[0] * diameter + diameter/2, character[1] * diameter + diameter/2, diameter/2); 
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
}

function stopProgram() {
    if (!gamePaused) pauseGame();
}

function execute() {
   var command = program[step];
   step += 1;
   switch (command) {
      case "Wait":
         break;
      case "Move":
         character[0] += direction[0];
         character[1] += direction[1];
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
         break;
   }
}


function GameLoop() {
   clear();
   execute();
   draw();

   gLoop = setTimeout(GameLoop, speed);
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

var width = 11, height = 7;
c.width = width * diameter;
c.height = height * diameter;

var field = new Array(width);
field[0] = new Array(height);
reset(field);

var character = [0,0];
var step;
var direction = [1,0];

draw();
