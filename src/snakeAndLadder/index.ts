import SnakeAndLadderBoard from "./snakeAndLadderBoard";
import Dice from "./dice";

const dice = new Dice({});
const gameBoard = new SnakeAndLadderBoard({ startPoint: 0, endPoint: 100 });

console.log(`current Positio: 4, Dice: 5`, gameBoard.move(4, 5));
console.log(`current Position: 34, Dice: 3`, gameBoard.move(34, 3));
console.log(`current Position: 83, Dice: 4`, gameBoard.move(83, 4));
console.log(`current Position: 96, Dice: 5`, gameBoard.move(96, 5));
console.log(`current Position: 99, Dice: 1`, gameBoard.move(99, 1));
let diceOutcome = dice.roll();
console.log(
  `current Position: 45, Dice: ${diceOutcome}`,
  gameBoard.move(45, diceOutcome)
);
diceOutcome = dice.roll();
console.log(
  `current Position: 68, Dice: ${diceOutcome}`,
  gameBoard.move(68, diceOutcome)
);

const dice2 = new Dice({ minOutcome: 1, maxOutcome: 6 });
console.log("Dice Rolling...->", dice2.roll());
console.log("Dice Rolling...->", dice2.roll());
console.log("Dice Rolling...->", dice2.roll());
