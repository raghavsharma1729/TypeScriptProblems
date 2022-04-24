import { Board, Ladder, Snake } from "./type";

class SnakeAndLadderBoard {
  private defaultLadders: Ladder[] = [
    { foot: 7, top: 33 },
    { foot: 37, top: 85 },
    { foot: 51, top: 72 },
  ];

  private defaultSnakes: Snake[] = [
    { head: 36, tail: 19 },
    { head: 65, tail: 35 },
    { head: 87, tail: 32 },
  ];
  readonly startPoint: number = 0;
  readonly endPoint: number = 100;
  readonly ladders: Ladder[] = this.defaultLadders;
  readonly snakes: Snake[] = this.defaultSnakes;

  private isValidBoardPosition(position: number): boolean {
    return position >= this.startPoint && position <= this.endPoint;
  }

  private isValidStartingPosition(position: number): boolean {
    return position >= this.startPoint && position <= this.endPoint;
  }

  private hasPlayerWon(position: number): boolean {
    return position == this.endPoint;
  }

  private checkIfLadderOrSnakeAndMove(position: number): number {
    const ladderFound = this.ladders.find((ladder) => {
      return ladder.foot === position;
    });
    if (ladderFound) {
      return ladderFound.top;
    }
    const snakeFound = this.snakes.find((ladder) => {
      return ladder.head === position;
    });
    if (snakeFound) {
      return snakeFound.tail;
    }
    return position;
  }

  constructor({ startPoint, endPoint, ladders, snakes }: Board) {
    if (startPoint !== undefined) {
      this.startPoint = startPoint;
    }
    if (endPoint !== undefined) {
      this.endPoint = endPoint;
    }
    if (ladders !== undefined) {
      this.ladders = ladders;
    }
    if (snakes !== undefined) {
      this.snakes = snakes;
    }
  }

  move(currentPoistion: number, diceOutcome: number): number | void {
    if (!this.isValidStartingPosition(currentPoistion)) {
      return console.log("Board Position is not valid");
    }
    let newPosition = currentPoistion + diceOutcome;
    if (!this.isValidBoardPosition(newPosition)) {
      return currentPoistion;
    }
    newPosition = this.checkIfLadderOrSnakeAndMove(newPosition);
    if (this.hasPlayerWon(newPosition)) {
      console.log("Yay! you won!!");
      return this, this.endPoint;
    }
    return newPosition;
  }
}

export default SnakeAndLadderBoard;
