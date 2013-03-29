function reset(data){
	wid = data.length;
	hei = data[0].length;
	for (var i = 0; i < wid; i++){
		data[i] = new Array(hei);
		for (var j = 0; j < hei; j++){
			data[i][j] = 0; 
		}
	}
}

var gamePaused = true;
var speed = 1000/(3 * frames);
 
function pauseGame() {
  if (!gamePaused) {
    gLoop = clearTimeout(gLoop);
    gamePaused = true;
  } else if (gamePaused) {
    gLoop = setTimeout(GameLoop, speed);
    gamePaused = false;
  }
}


