
var player1 = prompt("plz enter first player name");
var player2 = prompt("plz enter second player name");




var randonNumber1 = Math.random();
randonNumber1 = randonNumber1 * 6;
randonNumber1 = Math.floor(randonNumber1) + 1;
console.log(randonNumber1);

var randonDicegameimage = "images/dice" + randonNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randonDicegameimage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randonDicegameimage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randonDicegameimage2);

if (randonNumber1 > randomNumber2) {
  document.getElementById("win").innerHTML = "congratulation "+player1+" you win!";
} else if (randomNumber2 > randonNumber1) {
  document.getElementById("win").innerHTML =  "congratulation "+player2+" you win!";
} else{
  document.getElementById("win").innerHTML = "draw";
}
