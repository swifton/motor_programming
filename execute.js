function execute(program) {
   var command;
   var localStep;
   if (executing == 0) localStep = step;
   if (executing == 1) localStep = substep;
   command = program[localStep];
   if (executing == 0) step += 1;
   if (executing == 1) substep += 1;
   moveBugs();
   
   // if the ladybird is shocked (encountered a bug) the current command's backlight is red
   if (shocked > 0) {
   backlight(localStep, "red", executing);
      shocked -= 1;
      return;
   }

   backlight(localStep, "green", executing);

   switch (command) {
      case "Wait":
         break;
      case "Move":
         var x = character.coordinates[0] + character.direction[0];
         var y = character.coordinates[1] + character.direction[1];
         if (checkWalls(x, y)) {backlight(localStep, "yellow", executing); break;}
         if (checkBugs(x, y)) {backlight(localStep, "red", executing); break;}
         character.coordinates[0] = x;
         character.coordinates[1] = y;
         break;
      case "Turn Left":
         var tmp = character.direction[0];
         character.direction[0] = character.direction[1];
         character.direction[1] = -tmp;
	 changeAngle();
         break;
      case "Turn Right":
         var tmp = character.direction[0];
         character.direction[0] = -character.direction[1];
         character.direction[1] = tmp;
	 changeAngle();
         break;
      case "Pick Up":
         if (board[character.coordinates[0]][character.coordinates[1]] == 1) { 
            board[character.coordinates[0]][character.coordinates[1]] = 0; 
            grainsLeft -= 1;
         }
         break;
      case "Sub 1":
         executing = 1;
         break;
   }
}

// a function that rotates the ladybird
function changeAngle() {
   character.angle = directionToAngle(character.direction);
   var an = character.oldAngle - character.angle;
   if (an > Math.PI) character.oldAngle -= 2 * Math.PI;
   if (an < -Math.PI) character.oldAngle += 2 * Math.PI;
}
