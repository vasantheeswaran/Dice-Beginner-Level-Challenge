
var RandomNum1 = Math.floor(Math.random()*6)+1;

var RandomImageResource1 = "images/dice"+ RandomNum1 +".png";

document.querySelectorAll("img")[0].setAttribute("src",RandomImageResource1);


var RandomNum2 = Math.floor(Math.random()*6)+1;

var RandomImageResource2 = "images/dice"+ RandomNum2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",RandomImageResource2);

if(RandomNum1>RandomNum2){
    document.getElementById("p1").innerHTML = "Player 1 wins!!!";
}
else if(RandomNum1<RandomNum2){
    document.getElementById("p1").innerHTML = "Player 2 wins!!!";
}
else{
    document.getElementById("p1").innerHTML = "Match Draw!!!";
}