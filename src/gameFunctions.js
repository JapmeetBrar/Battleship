import "./css/style.css";
import { prepareBoard, addShipToBoard, recordAttack } from "./domControl";

class Ship {
  constructor(length, startPos = []) {
    this.length = length;
    this.hitPlaces = [...Array(length)].fill(0);
    this.sunk = false;
    this.startPos = startPos;
  }

  hit(num) {
    this.hitPlaces[num] = 1;
    this.isSunk();
  }

  isSunk() {
    if (this.hitPlaces.reduce((prev, curr) => prev + curr, 0) == this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

class Gameboard {
  constructor(num) {
    this.board = Array(10)
      .fill(0)
      .map(() => Array(10).fill(0));

    this.missedShots = [];
    this.boardNum = num;
  }

  populateBoard(x, y, orient, length) {
    let newShip = new Ship(length, [x, y]);
    for (let i = 0; i < length; i++) {
      if (orient == "h") {
        if (x + length > 10) {
          ///DO SOMETHING TO PREVENT SHIPS PLACED OUTSIDE BOARD
        }
        this.board[y][x + i] = newShip;
      } else {
        this.board[y + i][x] = newShip;
      }
    }
    if (this.boardNum == 1) addShipToBoard(x, y, orient, length, this.boardNum);
  }

  receiveAttack(x, y) {
    if (this.missedShots.includes(`${x}${y}`)) {
      return "ALREADY HIT";
    } else if (this.board[y][x] == 0) {
      recordAttack(x, y, this.boardNum, "miss");
      this.missedShots.push(`${x}${y}`);
      return "MISSED";
    }
    this.missedShots.push(`${x}${y}`);
    let currShip = this.board[y][x];
    let posn =
      x == currShip.startPos[0]
        ? y - currShip.startPos[1]
        : x - currShip.startPos[0];
    currShip.hit(posn);
    recordAttack(x, y, this.boardNum, "hit");
    return "HIT";
  }

  isGameOver() {
    let gameOver = true;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.board[i][j] != 0 && this.board[i][j].sunk == false) {
          gameOver = false;
        }
      }
    }
    return gameOver;
  }
}

class Player {
  constructor(name, boardNum, computer = false) {
    this.name = name;
    this.computer = computer;
    this.gameBoard = new Gameboard(boardNum);
  }

  attack(x, y, targetPlayer) {
    return `${this.name}: ${targetPlayer.gameBoard.receiveAttack(x, y)}`;
  }
}
prepareBoard();

export { Ship, Gameboard, Player };
