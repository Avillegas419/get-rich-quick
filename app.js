let score = 0;

// NOTE put each upgrade in a dictionary like the one below
let upgrades = {
  baller: {
    price: 50,
    multiplier: 2,
    quantity: 0
  },
  loaded: {
    price: 150,
    multiplier: 5,
    quantity: 0
  },
  dinero: {
    price: 500,
    multiplier: 20,
    quantity: 0
  },
  bigshot: {
    price: 1000000,
    multiplier: 1000,
    quantity: 0
  }
}

let ballerCost = 50;
let baller = 0 
let loadedCost = 150;
let loaded = 0
let dineroCost = 500;
let dinero = 0
let bigshotCost = 100000;
let bigshot = 0




window.onload = function(){
  let name = prompt("What is your name")

  let space = document.getElementById("box")

  space.innerHTML = name + "'s money";
}




function buyBaller(){
  console.log('buy baller');
  if (score >= upgrades['baller'].price) {
    score -= upgrades['baller'].price;
    upgrades['baller'].quantity++
    upgrades['baller'].price += 50
    // NOTE make sure that all of these id's exist on your HTML page
    document.getElementById("score").innerHTML = score;
    document.getElementById("ballerCost").innerText = upgrades['baller'].price;
    // NOTE change below to the quantity of the upgrade
    document.getElementById("ballerQuantity").innerText = upgrades['baller'].quantity;
    // document.getElementById("baller").innerHTML = baller;
  }
}
function buyLoaded(){
  console.log('buy loaded');
  if (score >= upgrades['loaded'].price) {
    score -= upgrades['loaded'].price;
    upgrades['loaded'].quantity++
    upgrades['loaded'].price += 150
    // NOTE make sure that all of these id's exist on your HTML page
    document.getElementById("score").innerHTML = score;
    document.getElementById("loadedCost").innerText = upgrades['loaded'].price;
    // NOTE change below to the quantity of the upgrade
    document.getElementById("loadedQuantity").innerText = upgrades['loaded'].quantity;
    // document.getElementById("loaded").innerHTML = loaded;
  }
}

function buyDinero(){
  console.log('buy dinero');
  if (score >= upgrades['dinero'].price) {
    score -= upgrades['dinero'].price;
    upgrades['dinero'].quantity++
    upgrades['dinero'].price += 500
    // NOTE make sure that all of these id's exist on your HTML page
    document.getElementById("score").innerHTML = score;
    document.getElementById("dineroCost").innerText = upgrades['dinero'].price;
    // NOTE change below to the quantity of the upgrade
    document.getElementById("dineroQuantity").innerText = upgrades['dinero'].quantity;
    // document.getElementById("dinero").innerHTML = dinero;
  }
}

function buyBigshot(){
  console.log('buy bigshot');
  if (score >= upgrades['bigshot'].price) {
    score -= upgrades['bigshot'].price;
    upgrades['bigshot'].quantity++
    upgrades['bigshot'].price += 25
    // NOTE make sure that all of these id's exist on your HTML page
    document.getElementById("score").innerHTML = score;
    document.getElementById("bigshotCost").innerText = upgrades['bigshot'].price;
    // NOTE change below to the quantity of the upgrade
    document.getElementById("bigshotQuantity").innerText = upgrades['bigshot'].quantity;
    // document.getElementById("bigshot").innerHTML = bigshot;
  }
}






function addToScore(amount) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      
    }
  }
  // NOTE iterate through the upgrades dictionary (for in loop), and make sure to check each upgrades quantity, then add the amount of quantity by the amount of multiplier ie - score += multiplier * quantity
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

let money = document.getElementById("money")

function moneyClick() {
score += 1;

  let scoreElem=document.getElementById("score");
  //upgrade level for 
  let upgradeLevel = document.getElementById("score");
  
  if(score>= 50){
  score *2;
  upgradeLevel.innerHTML="Baller"
  }
  // 
  if(score >= 150){
  score *5;
  upgradeLevel.innerHTML="loaded"
  }
  
  // 
  if(score >= 500) {
  score *20;
  upgradeLevel.innerHTML = "Dinero";
  }
  
  if(score >= 500) {
    score *1000;
    upgradeLevel.innerHTML = "bigshot";
    }
    scoreElem.innerHTML = score;
    // baller upgrades to 2x
    
} 
setInterval(function(){
score = score + baller * 2
score = score + loaded * 5
score = score + dinero * 20
score = score + bigshot * 1000
document.getElementById("score").innerHTML = score;
}, 3000);
