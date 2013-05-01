def array_to_file(arr, filee):
   filee.write('[')
   for i in arr:
      if (arr.index(i)>0):
         filee.write(', ')
      filee.write('[')
      for j in i:
         if (i.index(j)>0):
            filee.write(', ')
         filee.write(str(j))
      filee.write(']')
   filee.write(']')

def creature_to_file(arr, filee):
   for i in arr:
      if (arr.index(i)>0):
         filee.write(', ')
      filee.write('[')
      for j in i:
         if (i.index(j)>0):
            filee.write(', ')
         filee.write(str(j))
      filee.write(']')


f = open('level', 'r')
nOfLevel = raw_input('Input the number of the level\n')
g = open('shmevel' + str(nOfLevel), 'w')

line = 'a'
apples = []
walls = []
bugs = []
character = ['a']
tmp = 'o'

x = 0
y = 0

while (line != ''):
   line = f.readline();

   xmax = x
   x = 0
   for symbol in line:
      if (symbol == 'a'):
         apples.append([x,y])
      if (symbol == 'w'):
         walls.append([x,y])
      if (symbol == 'b'):
         tmp = 'b'
         x -= 1
      if (symbol == 'c'):
         tmp = 'c'
         x -=1

      if (symbol == 'l'):
         if (tmp == 'b'):
            bugs.append([[x,y], [-1,0]])
         if (tmp == 'c'):
            character = [[x,y], [-1,0]]

      if (symbol == 'r'):
         if (tmp == 'b'):
            bugs.append([[x,y], [1,0]])
         if (tmp == 'c'):
            character = [[x,y], [1,0]]

      if (symbol == 'u'):
         if (tmp == 'b'):
            bugs.append([[x,y], [0,-1]])
         if (tmp == 'c'):
            character = [[x,y], [0,-1]]
         tmp = 'b'

      if (symbol == 'd'):
         if (tmp == 'b'):
            bugs.append([[x,y], [0,1]])
         if (tmp == 'c'):
            character = [[x,y], [0,1]]

      x += 1
   y += 1

g.write('character = new creature(')
creature_to_file(character, g)
g.write(');\ngrains = ')
array_to_file(apples, g)
g.write(';\nvar level' + str(nOfLevel) + ' = new level(grains, %i, %i, character, 1);' % (xmax - 1, y - 1))
g.write('\nlevel'  + str(nOfLevel) + '.walls = ')
array_to_file(walls, g)
g.write(';\n')

i=0
for bug in bugs:
   g.write('bug%i = new creature(' %i)
   creature_to_file(bug, g)
   g.write(');\n')

g.write('level'  + str(nOfLevel) + '.bugs = [')

i = 0
for bug in bugs:
   g.write('bug%i' %i)

g.write(']\n')

f.close()
g.close()
