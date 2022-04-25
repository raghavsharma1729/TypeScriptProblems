import SnakeAndLadderBoard from "./snakeAndLadderBoard";
import Dice from "./dice";

const dice = new Dice({});
const gameBoard = new SnakeAndLadderBoard({ startPoint: 0, endPoint: 100 });

dice.roll();
console.log(
  `current Positio: 4, Dice: ${dice.outcome}`,
  gameBoard.move(4, dice)
);
dice.roll();
console.log(
  `current Position: 34, Dice: ${dice.outcome}`,
  gameBoard.move(34, dice)
);
dice.roll();
console.log(
  `current Position: 83, Dice: ${dice.outcome}`,
  gameBoard.move(83, dice)
);
console.log(
  `current Position: 96, Dice: ${dice.outcome}`,
  gameBoard.move(96, dice)
);
console.log(
  `current Position: 99, Dice: ${dice.outcome}`,
  gameBoard.move(99, dice)
);
dice.roll();
console.log(
  `current Position: 45, Dice: ${dice.outcome}`,
  gameBoard.move(45, dice)
);
dice.roll();
console.log(
  `current Position: 68, Dice: ${dice.outcome}`,
  gameBoard.move(68, dice)
);
