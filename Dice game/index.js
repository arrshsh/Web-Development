// alert("Working");
var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
var randomDiceImage = "images/" + "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1]

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
var randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png";
image2.setAttribute("src", randomDiceImage2);

if (randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 Wins!!";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 Wins!!";
}else{
    document.querySelector("h1").innerHTML= "It's a tie!!";
}