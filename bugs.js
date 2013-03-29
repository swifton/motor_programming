function creature(coordinates, direction) {
   this.coordinates = coordinates.slice(0);
   this.oldCoordinates = coordinates.slice(0);
   this.drawPosition = coordinates.slice(0);
   this.direction = direction.slice(0);
   this.oldDirection = direction.slice(0);
   this.angle = directionToAngle(this.direction);
   this.oldAngle = directionToAngle(this.oldDirection);
   this.drawAngle = directionToAngle(this.direction);
} 

function copyCreature(c) {
   var copy = new creature(c.coordinates, c.position);
   return copy;
} 
