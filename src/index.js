import { startGame, loadInitScreen, playerAttack } from "./domControl";
import { Player } from "./gameFunctions";

let p1 = new Player("p1", 1);
let comp = new Player("comp", 2);
comp.gameBoard.populateBoard(2, 0, "h", 5);
comp.gameBoard.populateBoard(3, 5, "v", 3);

loadInitScreen();
let submitButton = document.querySelector("button");
let nameInput = document.querySelector("input");
submitButton.addEventListener("click", () => {
  startGame(nameInput.value, p1, comp);
});

export { p1, comp };
