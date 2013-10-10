Motor Programming
=================

## Origins
Motor programming is one of the mini puzzles included in [The Lost Mind of Dr. Brain](http://en.wikipedia.org/wiki/The_Lost_Mind_of_Dr._Brain) 
video game originally published by Sierra Entertainment. This game is an HTML5 canvas remake of that mini puzzle. 
Every mini puzzle in Dr. Brain has three levels of difficulty with 20 problems on each level. The playing field is 11x7. The remake contains 6 easy levels and 16 medium levels cropped to the most convenient size.

## How to play
The ladybird is controlled by the program that a player inputs by choosing elementary commands like move one step forward, turn left or right. The objective is to collect all the apples on the playing field. The green ladybirds are bugs that make the program work wrong when encountered. Medium difficulty levels require programming subroutine in a similar way and calling it in the main program.

## Structure
* Motor.js is the main file, it contains the code that runs the game.
* Execute.js executes the program given by a player.
* Bugs.js is the class whose instances are bugs and the player's character (the red ladybird).
* Collisions.js are the functions that check whether the ladybird is about to bump into one of the bugs or a wall.
* Levels.js contains code needed to load the levels.
* Click.js contains the functions that process mouse clicks.
* General.js are the canvas drawing functions.
