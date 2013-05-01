function level(grains, width, height, character, n) {
   this.character = character;
   this.width = width;
   this.height = height;
   this.grains = grains;
   this.totalGrains = grains.length;
   this.walls = new Array;
   this.bugs = new Array;
   this.nOfSubs = n;
}

character = new creature([0, 2], [1, 0]);
grains = [[2, 0]];
var level1 = new level(grains, 3, 3, character, 1);
level1.walls = [[2, 2]];
level1.bugs = [];

grains = [[6, 0]];
character = new creature([4, 0], [-1, 0]);
var level2 = new level(grains, 7, 1, character, 0);
level2.walls = [];
bug = new creature([0, 0],[1, 0]);
level2.bugs = [bug];

character = new creature([0, 0], [1, 0]);
grains = [[1, 0], [2, 0], [2, 1]];
var level3 = new level(grains, 3, 2, character, 1);
level3.walls = [];
level3.bugs = [];

character = new creature([2, 0], [0, 1]);
grains = [[2, 4]];
var level4 = new level(grains, 6, 5, character, 0);
level4.walls = [[1, 1], [3, 1], [0, 3], [0, 4], [1, 4], [3, 4], [4, 4], [4, 3]];
bug = new creature([0, 2], [1, 0]);
level4.bugs = [bug];

character = new creature([3, 3], [0, -1]);
grains = [[1, 1]];
var level5 = new level(grains, 7, 4, character, 1);
level5.walls = [[0, 0], [0, 2], [2, 0], [2, 2], [4, 0], [4, 2]];
bug = new creature([6, 1], [-1, 0]);
level5.bugs = [bug];

character = new creature([2, 2], [0, 1]);
grains = [[2, 0]];
var level6 = new level(grains, 5, 5, character, 0);
level6.walls = [[0, 0], [0, 1], [1, 0], [0, 3], [1, 4], [0, 4], [3, 0], [4, 0], [4, 1], [3, 4], [4, 3], [4, 4]];
bug = new creature([4, 2], [-1, 0]);
level6.bugs = [bug];

character = new creature([0, 2], [1, 0]);
grains = [[2, 0]];
var level7 = new level(grains, 3, 3, character, 1);
level7.walls = [[2, 1]];
bug0 = new creature([0, 1], [-1, 0]);
level7.bugs = [bug0]

levels = [level1, level2, level3, level4, level5, level6, level7];
