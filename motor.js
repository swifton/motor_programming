var gLoop;

function draw() {
   
}

function startProgram() {
   var select;
   var option;
   for (var i = 0; i < 7; i++) {
      select = document.getElementById(String(i));
      option = select.options[select.selectedIndex].value;
      program[i] = option;
   }
}

function stopProgram() {

}

function GameLoop() {
   clear();
   draw();

   gLoop = setTimeout(GameLoop, 1000 / 200);
}

var program = new Array(7);

function init() {
   var select;
   var option;
   var options = ["Wait", "Move", "Turn Left", "Turn Right", "Pick Up"];

   for (var i = 0; i < 7; i++) {
      select = document.createElement("select");
      select.setAttribute("id", String(i));
   
      for (o in options) {
         option = document.createElement("option");
         option.value = options[o];
         option.text = options[o];
         select.appendChild(option);
      }
      console.log(select);
      document.getElementById("program").appendChild(select);
   }
}

init();
//GameLoop();

//select.style.width = "300px";

//option.text = "Kiwi";console.log(option);

//x.add(option,null);console.log(x);

//document.getElementById("program").appendChild(select);
