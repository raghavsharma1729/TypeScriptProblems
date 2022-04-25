import Dice from "../dice";
import SnakeAndLadderBoard from "../snakeAndLadderBoard";

describe("Snake and ladder board", () => {
  test("if board returns correct board position", () => {
    const gameBoard = new SnakeAndLadderBoard({ startPoint: 0, endPoint: 100 });
    const dice = new Dice({});
    dice.outcome = 5;
    expect(gameBoard.move(4, dice)).toBe(9);
    dice.outcome = 3;
    expect(gameBoard.move(34, dice)).toBe(85);
    dice.outcome = 4;
    expect(gameBoard.move(83, dice)).toBe(32);
    dice.outcome = 5;
    expect(gameBoard.move(96, dice)).toBe(96);
    dice.outcome = 1;
    expect(gameBoard.move(99, dice)).toBe(100);
  });
});
