import { Player } from "./gameFunctions";

let jap = new Player("Jap", 1);
// jap.gameBoard.populateBoard(0, 0, "h", 3);
// jap.gameBoard.populateBoard(8, 0, "v", 5);

let comp = new Player("computer", 2);
comp.gameBoard.populateBoard(2, 0, "h", 5);
comp.gameBoard.populateBoard(3, 5, "v", 3);

function playerAttack() {
  let squares = document.querySelectorAll(".board-2 div");
  squares.forEach((square) => {
    square.addEventListener("click", getAttack, { once: true });
  });
}

function getAttack() {
  let x = this.getAttribute("data-column");
  let y = this.getAttribute("data-row");

  jap.attack(x, y, comp);

  if (comp.gameBoard.isGameOver() || jap.gameBoard.isGameOver()) {
    console.log("YOU WIN");
    let squares = document.querySelectorAll(".board-2 div");
    squares.forEach((square) => {
      square.removeEventListener("click", getAttack);
    });
    return;
  }

  computerAttack();
}

function computerAttack() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  console.log(jap.gameBoard.missedShots.includes(`${x}${y}`));

  while (jap.gameBoard.missedShots.includes(`${x}${y}`)) {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  }

  console.log(comp.attack(x, y, jap));
}

playerAttack();
