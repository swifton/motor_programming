function checkWalls(x, y) {
   if (x < 0 || y < 0) return true;
   if (x > width - 1 || y > height - 1) return true;
   if (board[x][y] == 2) return true;
}

function checkGrains(x, y) {
   if (board[x][y] == 1) return true;
}

function checkCharacter(x, y) {
   if (character.coordinates[0] == x && character.coordinates[1] == y) {
      bugShock(1);
      return true;
   }
}

function checkBugs(x, y) {
	var bug;
   for (i in bugs) {
      if (x == bugs[i].coordinates[0] && y == bugs[i].coordinates[1]) {
         bugShock(0);
         return true;
      }
   }
}

