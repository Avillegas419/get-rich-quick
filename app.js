let num = 0
var score = 0;

let ballerCost = 50;
let baller = 0 
let loadedCost = 150;
let loaded = 0
let DineroCost = 500;
let Dinero = 0
let bigshotCost = 100000;
let bigshot = 0




window.onload = function(){
  let name = prompt("What is your name")

  let space = document.getElementById("box")

  space.innerHTML = name + "'s money";
}





function buyballer(){
  if (score >= ballerCost) {
    score = score - ballerCost;
    baller = baller + 1;
    ballerCost = Math.round(ballerCost * 2);

    document.getElementById("score").innerHTML = score;
    document.getElementById("ballerCost").innerHTML = ballerCost;
    document.getElementById("baller").innerHTML = cursors;
  }
}
function buyLoaded(){
  if (score >= loadedCost) {
    score = score - loadedCost;
    loaded = loaded + 1;
    loadedCost = Math.round(loadedCost * 150);

    document.getElementById("score").innerHTML = score;
    document.getElementById("loadedCost").innerHTML = loadedCost;
    document.getElementById("loaded").innerHTML = loaded;
  }
}

function buyDinero(){
  if (score >= DineroCost) {
    score = score - DineroCost;
    Dinero = Dinero + 1;
    DineroCost = Math.round(DineroCost * 500);

    document.getElementById("score").innerHTML = score;
    document.getElementById("DineroCost").innerHTML = DineroCost;
    document.getElementById("Dinero").innerHTML = $$$;
  }
}

function buyBigshot(){
  if (score >= bigshotCost) {
    score = score - bigshotCost;
    bigshot = bigshot + 1;
    bigshotCost = Math.round(bigshotCost * 100000);

    document.getElementById("score").innerHTML = score;
    document.getElementById("bigshotCost").innerHTML = bigshotCost;
    document.getElementById("bigshot").innerHTML = bigshot;
  }
}



function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

let money = document.getElementById("money")

function moneyClick() {
num += 1;

  let score=document.getElementById("score");
  //upgrade level for printing
  let upgradeLevel = document.getElementById("score");
  
  score.innerHTML = num;
  // baller upgrades to 2x
  } if(num>= 50){
  num *2;
  upgradeLevel.innerHTML="Baller"
  }
  // 
  if(num >= 150){
  num *5;
  upgradeLevel.innerHTML="loaded"
  }
  
  // 
  if(num >= 500) {
  num *20;
  upgradeLevel.innerHTML = "Dinero";
  }

  if(num >= 500) {
    num *1000;
    upgradeLevel.innerHTML = "bigshot";
    }
  

