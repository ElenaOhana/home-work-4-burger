let meatCount = 1;
let cheeseCount = 0;
let tomatoCount = 0;
let lettuceCount = 0;

const meatPrice = 18;
const cheesePrice = 9;
const tomatoPrice = 6;
const lettucePrice = 5;

let basicPrice = 42;

function updatePlusPrice(price) {
  basicPrice += price;
  document.getElementById(
    "price"
  ).innerHTML = `Total price is: ${basicPrice} ILS`;
  return basicPrice;
}

function updateMinusPrice(price) {
    basicPrice -= price
    document.getElementById(
        "price"
      ).innerHTML = `Total price is: ${basicPrice} ILS`;
      return basicPrice;
}

function plusMeat() {
  if (meatCount < 2) {
    let meatDiv = document.getElementById("meatContainer");
    let divToAdd = document.createElement("div"); //<div></div>
    divToAdd.id = "div" + "Meat"; // <div id = "divMeat"></div>
    /* divToAdd.id = "div" + (++count); // <div id = "div1"></div> */
    /* divToAdd.innerHTML = "additional meat";  // <div id="div1">additional meat</div> */
    divToAdd.className = "meat";
    //let myBr = document.createElement("br");
    meatDiv.appendChild(divToAdd);
    basicPrice = updatePlusPrice(meatPrice);
    console.log(meatCount + "check from plusMeat " + basicPrice + " after");
    meatCount++;
    //meatDiv.appendChild(myBr);
  } else {
    alert("You had chosen two meats already.");
  }
}

function plusCheese() {
  if (cheeseCount < 2) {
    let cheeseDiv = document.getElementById("cheeseContainer");
    let divToAdd = document.createElement("div"); 
    divToAdd.id = "div" + "Cheese"; 
    divToAdd.className = "cheese";
    cheeseDiv.appendChild(divToAdd);

    basicPrice = updatePlusPrice(cheesePrice);
    cheeseCount++;
    console.log(cheeseCount);
  } else {
    alert("You had chosen maximum cheese already.");
  }
}

function plusTomato() {
  if (tomatoCount < 2) {
    let tomatoDiv = document.getElementById("tomatoContainer");
    let divToAdd = document.createElement("div");
    divToAdd.id = "div" + "Tomato"; 
    divToAdd.className = "tomato";
    tomatoDiv.appendChild(divToAdd);
    basicPrice = updatePlusPrice(tomatoPrice);
    tomatoCount++;
  } else {
    alert("You had chosen maximum tomato already.");
  }
}

function plusLettuce() {
  if (lettuceCount < 2) {
    let lettuceDiv = document.getElementById("lettuceContainer");
    let divToAdd = document.createElement("div"); 
    divToAdd.id = "div" + "Lettuce"; 
    divToAdd.className = "lettuce";
    lettuceDiv.appendChild(divToAdd);
    basicPrice = updatePlusPrice(lettucePrice);
    lettuceCount++;
  } else {
    alert("You had chosen maximum lettuce already.");
  }
}

//MINUS
function minusMeat() {
  if (meatCount > 1) {
    let divToRemove = document.getElementById("divMeat");
    let meatDiv = document.getElementById("meatContainer");
    meatDiv.removeChild(divToRemove);
    console.log(meatPrice);
    basicPrice = updateMinusPrice(meatPrice);
    console.log(meatPrice);
    meatCount--;
} else {
    alert("Minimum meat is one!");
  }
}

function minusCheese() {
  if (cheeseCount > 0) {
    let divToRemove = document.getElementById("divCheese");
    let cheeseDiv = document.getElementById("cheeseContainer");
    cheeseDiv.removeChild(divToRemove);

    basicPrice = updateMinusPrice(cheesePrice);
    cheeseCount--;
  } else {
    alert("There is nothing cheese to remove!");
  }
}

function minusTomato() {
  if (tomatoCount > 0) {
    let divToRemove = document.getElementById("divTomato");
    let tomatoDiv = document.getElementById("tomatoContainer");
    tomatoDiv.removeChild(divToRemove);
    basicPrice = updateMinusPrice(tomatoPrice);
    tomatoCount--;
  } else {
    alert("There is nothing tomato to remove!");
  }
}

function minusLettuce() {
  if (lettuceCount > 0) {
    let divToRemove = document.getElementById("divLettuce");
    let lettuceDiv = document.getElementById("lettuceContainer");
    lettuceDiv.removeChild(divToRemove);
    basicPrice = updateMinusPrice(lettucePrice);
    lettuceCount--;
  } else {
    alert("There is nothing lettuce to remove!");
  }
}
