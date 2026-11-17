//  Weird Uno

function getTurnOrder(totalPlayers, currentTurn, skipAmount) {
  // 3+1=4 % 3 = 1 ->
  currentTurn = (currentTurn + skipAmount) % totalPlayers;
  return currentTurn;
}

let currentTurn = getTurnOrder(3, 1, 4);
console.log(currentTurn);

// Program Book

function calculateBookCost(
  bookCost,
  pageCount,
  readPercent,
  comprehensionTime,
) {
  let totalHours = ((pageCount * readPercent) / 100) * comprehensionTime;
  bookCost.toFixed(2);

  console.log(number500 + " x 500 ");
}

// Cashier price change

function printChange(totalPrice) {
  let remainingChange = totalPrice;
  let number500 = Math.floor(remainingChange / 500);
  remainingChange -= number500 * 500;
  let number200 = Math.floor(remainingChange / 200);
  remainingChange -= number200 * 200;
  let number100 = Math.floor(remainingChange / 100);
  remainingChange -= number100 * 100;
  let number20 = Math.floor(remainingChange / 20);
  remainingChange -= number20 * 20;
  let number10 = Math.floor(remainingChange / 10);
  remainingChange -= number10 * 10;
  let number5 = Math.floor(remainingChange / 5);
  remainingChange -= number5 * 5;
  let number1 = remainingChange;

  console.log(number500 + " x 500 ");
  console.log(number200 + " x 200 ");
  console.log(number100 + " x 100 ");
  console.log(number20 + " x 20 ");
  console.log(number10 + " x 10 ");
  console.log(number5 + " x 5 ");
  console.log(number1 + " x 1 ");
}

console.log(printChange(947));
