import SnakeAndLadderBoard from "../snakeAndLadderBoard";

describe("Snake and ladder board", () => {
  test("if board returns correct board position", () => {
    const gameBoard = new SnakeAndLadderBoard({ startPoint: 0, endPoint: 100 });
    expect(gameBoard.move(4, 5)).toBe(9);
    expect(gameBoard.move(34, 3)).toBe(85);
    expect(gameBoard.move(83, 4)).toBe(32);
    expect(gameBoard.move(96, 5)).toBe(96);
    expect(gameBoard.move(99, 1)).toBe(100);
  });
});
