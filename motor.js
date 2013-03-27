var gLoop;

function draw() {
   
}

function GameLoop() {
   clear();
   draw();

   gLoop = setTimeout(GameLoop, 1000 / 200);
}

GameLoop();

//c.addEventListener('mousedown', clickReporter, false);
