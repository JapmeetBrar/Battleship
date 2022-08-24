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
      return (this.sunk = true);
    }
    return false;
  }
}

class Gameboard {
  constructor() {
    this.board = Array(10)
      .fill(0)
      .map(() => Array(10).fill(0));

    this.missedShots = [];
  }

  populateBoard(x, y, orient, length) {
    let newShip = new Ship(length, [x, y]);
    for (let i = 0; i < length; i++) {
      if (orient == "h") {
        this.board[y][x + i] = newShip;
      } else {
        this.board[y + i][x] = newShip;
      }
    }
  }

  receiveAttack(x, y) {
    if (this.missedShots.includes([x, y])) {
      return "ALREADY HIT";
    } else if (this.board[y][x] == 0) {
      this.missedShots.push([x, y]);
      return "MISSED";
    }
    let currShip = this.board[y][x];
    let posn =
      x == currShip.startPos[0]
        ? y - currShip.startPos[1]
        : x - currShip.startPos[0];
    currShip.hit(posn);
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
  constructor(name, computer = false) {
    this.name = name;
    this.computer = computer;
  }
}

export { Ship, Gameboard };
