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
         oldPosition[0] = character[0];
         oldPosition[1] = character[1];
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

