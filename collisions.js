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

