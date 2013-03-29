function level(grains, width, height, character) {
   this.character = character;
   this.width = width;
   this.height = height;
   this.grains = grains;
   this.totalGrains = grains.length;
   this.walls = new Array;
   this.bugs = new Array;
}

grains = [[3, 1]];
var level1 = new level(grains, 3, 3, [[1, 3], [1, 0]]);
level1.walls = [[3, 3]];
level1.bugs = [];

grains = [[7, 1]];
var level2 = new level(grains, 7, 1, [[5, 1], [-1, 0]]);
level2.walls = [];
level2.bugs = [[[0, 0],[1, 0]]];

grains = [[2, 1], [3, 1], [3, 2]];
var level3 = new level(grains, 3, 2, [[1, 1], [1, 0]]);
level3.walls = [];
level3.bugs = [];

grains = [[3, 5]];
var level4 = new level(grains, 6, 5, [[3, 1], [0, 1]]);
level4.walls = [[2, 2], [4, 2], [1, 4], [1, 5], [2, 5], [4, 5], [5, 5], [5, 4]];
level4.bugs = [[[0, 2], [1, 0]]];

grains = [[2, 2]];
var level5 = new level(grains, 7, 4, [[4, 4], [0, -1]]);
level5.walls = [[1, 1], [1, 3], [3, 1], [3, 3], [5, 1], [5, 3]];
level5.bugs = [[[6, 1], [-1, 0]]];

grains = [[3, 1]];
var level6 = new level(grains, 5, 5, [[3, 3], [0, 1]]);
level6.walls = [[1, 1], [1, 2], [2, 1], [1, 4], [1, 5], [2, 5], [4, 1], [5, 1], [5, 2], [4, 5], [5, 4], [5, 5]];
level6.bugs = [[[4, 2], [-1, 0]]];

levels = [level1, level2, level3, level4, level5, level6];
