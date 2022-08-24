import { Ship, Gameboard } from "./index";

describe("Ship", () => {
  const ship = new Ship(2);

  test("hit function", () => {
    ship.hit(1);
    expect(ship.hitPlaces[1]).toEqual(1);
  });

  test("isSunk function", () => {
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
  });
});

describe("Gameboard", () => {
  const board = new Gameboard();

  test("populate board", () => {
    board.populateBoard(0, 0, "v", 3);
    expect(typeof board.board[0][0]).toBe("object");
    expect(typeof board.board[1][0]).toBe("object");
    expect(typeof board.board[2][0]).toBe("object");
  });

  test("missed shot", () => {
    board.receiveAttack(1, 0);
    expect(board.missedShots).toContainEqual([1, 0]);
  });

  test("hit shot", () => {
    board.receiveAttack(0, 1);
    expect(board.board[1][0].hitPlaces[1]).toEqual(1);
  });

  test("all ships sunk", () => {
    board.receiveAttack(0, 0);
    expect(board.isGameOver()).toBe(false);

    board.receiveAttack(0, 2);
    expect(board.isGameOver()).toBe(true);
  });
});
