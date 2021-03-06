// instances of this class are annotations of the levels
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

// every paragraph here creates annotation for one level

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

character = new creature([2, 2], [0, -1]);
grains = [[0, 0], [4, 0], [0, 4], [4, 4]];
var level7 = new level(grains, 5, 5, character, 1);
level7.walls = [];
level7.bugs = []

character = new creature([0, 2], [1, 0]);
grains = [[6, 0], [6, 4]];
var level8 = new level(grains, 7, 5, character, 1);
level8.walls = [[0, 0], [1, 0], [3, 2], [0, 4], [1, 4]];
level8.bugs = []

character = new creature([0, 3], [0, -1]);
grains = [[6, 0], [4, 1], [2, 2], [7, 2], [5, 3]];
var level9 = new level(grains, 8, 4, character, 1);
level9.walls = [[0, 0], [5, 1], [3, 2], [1, 3]];
level9.bugs = []

character = new creature([9, 6], [-1, 0]);
grains = [[9, 0]];
var level10 = new level(grains, 11, 7, character, 1);
level10.walls = [[0, 0], [3, 2], [5, 2], [7, 2], [9, 2], [0, 3], [4, 3], [6, 3], [8, 3], [3, 4], [5, 4], [7, 4], [9, 4], [0, 6]];
bug0 = new creature([10, 1], [1, 0]);
bug1 = new creature([10, 3], [0, -1]);
bug2 = new creature([6, 5], [-1, 0]);
level10.bugs = [bug0, bug1, bug2]

character = new creature([2, 2], [0, -1]);
grains = [[2, 0], [0, 2], [4, 2], [2, 4]];
var level11 = new level(grains, 5, 5, character, 1);
level11.walls = [[0, 0], [4, 0], [0, 4], [4, 4]];
level11.bugs = []

character = new creature([4, 0], [-1, 0]);
grains = [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1], [4, 2], [4, 3], [4, 4]];
var level12 = new level(grains, 5, 6, character, 1);
level12.walls = [[2, 3], [2, 4], [2, 5]];
level12.bugs = []

character = new creature([3, 1], [-1, 0]);
grains = [[5, 0], [2, 1], [4, 1], [5, 1], [7, 1]];
var level13 = new level(grains, 9, 3, character, 1);
level13.walls = [];
level13.bugs = []

character = new creature([6, 6], [0, 1]);
grains = [[0, 0], [1, 0], [3, 0], [3, 1], [3, 3], [4, 3], [6, 3], [6, 4]];
var level14 = new level(grains, 7, 7, character, 1);
level14.walls = [[4, 1], [2, 2], [4, 5], [5, 5], [4, 6]];
level14.bugs = []

character = new creature([0, 6], [1, 0]);
grains = [[6, 0], [3, 1], [7, 4], [3, 5], [4, 5]];
var level15 = new level(grains, 8, 7, character, 1);
level15.walls = [[5, 1], [1, 2], [3, 2], [1, 4], [3, 4]];
level15.bugs = []

character = new creature([8, 0], [-1, 0]);
grains = [[2, 0], [7, 0], [0, 1], [2, 1], [3, 1], [4, 1], [5, 1], [7, 1], [0, 2], [5, 2]];
var level16 = new level(grains, 9, 3, character, 1);
level16.walls = [[2, 2]];
level16.bugs = []

character = new creature([10, 3], [-1, 0]);
grains = [[2, 3], [4, 3], [6, 3], [8, 3]];
var level17 = new level(grains, 11, 6, character, 1);
level17.walls = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [0, 1], [2, 1], [4, 1], [6, 1], [8, 1], [10, 1], [0, 2], [2, 2], [4, 2], [6, 2], [8, 2], [10, 2], [0, 3], [0, 4], [2, 4], [4, 4], [6, 4], [8, 4], [10, 4], [0, 5], [2, 5], [4, 5], [6, 5], [8, 5], [10, 5]];
bug0 = new creature([3, 1], [0, 1]);
bug1 = new creature([7, 1], [0, 1]);
bug2 = new creature([1, 5], [0, -1]);
bug3 = new creature([5, 5], [0, -1]);
bug4 = new creature([9, 5], [0, -1]);
level17.bugs = [bug0, bug1, bug2, bug3, bug4]

character = new creature([2, 6], [0, -1]);
grains = [[4, 0], [2, 2], [6, 2], [0, 4], [4, 4]];
var level18 = new level(grains, 7, 7, character, 1);
level18.walls = [[0, 0]];
level18.bugs = []

character = new creature([2, 1], [0, 1]);
grains = [[0, 1], [1, 1], [3, 1], [4, 1], [2, 2], [2, 3]];
var level19 = new level(grains, 5, 5, character, 1);
level19.walls = [[1, 0], [3, 0], [1, 2], [3, 2]];
bug0 = new creature([2, 4], [1, 0]);
level19.bugs = [bug0]

character = new creature([0, 4], [0, -1]);
grains = [[0, 0], [2, 0], [4, 0], [6, 0], [8, 0], [0, 2], [4, 2], [8, 2], [4, 4], [6, 4], [8, 4], [0, 4]];
var level20 = new level(grains, 9, 5, character, 1);
level20.walls = [[1, 1], [3, 1], [5, 1], [7, 1], [2, 2], [6, 2], [1, 3], [3, 3], [5, 3], [7, 3], [2, 4]];
bug0 = new creature([2, 3], [0, -1]);
level20.bugs = [bug0]

character = new creature([8, 4], [-1, 0]);
grains = [[4, 0], [2, 2], [6, 2], [0, 4], [2, 6]];
var level21 = new level(grains, 9, 7, character, 1);
level21.walls = [[1, 0], [2, 0], [3, 0], [6, 0], [8, 0], [1, 1], [6, 1], [1, 2], [8, 2], [3, 3], [4, 3], [8, 3], [3, 4], [4, 4], [5, 4], [6, 4], [6, 5], [0, 6], [8, 6]];
level21.bugs = []


character = new creature([4, 0], [1, 0]);
grains = [[6, 1], [0, 3], [5, 3], [2, 4], [4, 5]];
var level22 = new level(grains, 10, 6, character, 1);
level22.walls = [[1, 0], [6, 3], [3, 5]];
bug0 = new creature([9, 0], [-1, 0]);
bug1 = new creature([4, 2], [1, 0]);
bug2 = new creature([9, 3], [-1, 0]);
level22.bugs = [bug0, bug1, bug2]

character = new creature([6, 0], [0, 1]);
grains = [[1, 0], [0, 1], [6, 1], [0, 2], [5, 2], [1, 3], [2, 3], [5, 3], [3, 4], [4, 4]];
var level23 = new level(grains, 7, 5, character, 1);
level23.walls = [[3, 0], [1, 1], [3, 1], [1, 2], [3, 3], [4, 3]];
level23.bugs = []

// all the levels are packed into an array
levels = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11, level12, level13, level14, level15, level16, level18, level19, level20, level21, level22, level23];
