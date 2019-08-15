

//generate random number for the first dice
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
document.querySelector(".img1").setAttribute("src", randomImageSource1);

//generate random number for the second dice
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelector(".img2").setAttribute("src", randomImageSource2);

//display the winner

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  document.querySelector("h2").innerHTML = "Hit refresh to Play agian!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  document.querySelector("h2").innerHTML = "Hit refresh to Play agian!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
  document.querySelector("h2").innerHTML = "Hit refresh to Play agian!";
}
