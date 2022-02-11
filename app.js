let num = 0; 

window.onload = function(){
  let name = prompt("What is your name")

  let space = document.getElementById("box")

  space.innerHTML = name + "'s money";
}

let money = document.getElementById("money");
function moneyClick(){
  num+=1;

  let numbers=document.getElementById("numbers");
  //upgrade level for printing
  let upgradeLevel = document.getElementById("upgradeLevel");

  numbers.innerHTML = num;
  // baller upgrades to 2x
} if(num>= 30){
  num +=2;
  upgradeLevel.innerHTML="Baller Level"
}

