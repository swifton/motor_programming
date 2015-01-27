// both the bugs and the ladybird are instances of this class
function creature(coordinates, direction) {
   this.coordinates = coordinates.slice(0);
   this.oldCoordinates = coordinates.slice(0);
   this.drawPosition = coordinates.slice(0);
   this.direction = direction.slice(0);
   this.angle = directionToAngle(this.direction);
   this.oldAngle = directionToAngle(this.direction);
   this.drawAngle = directionToAngle(this.direction);
} 

function copyCreature(c) {
   var copy = new creature(c.coordinates, c.direction);
   return copy;
}

function directionToAngle(direction) {
   var angle = 0;
   if (direction[0] == -1) angle = -Math.PI/2;
   if (direction[0] == 1) angle = Math.PI/2;
   if (direction[1] == -1) angle = 0;
   if (direction[1] == 1) angle = Math.PI;
   return angle;
}
