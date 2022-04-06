interface Ladder {
  foot: number;
  top: number;
}

interface Snake {
  head: number;
  tail: number;
}

const ladders: Ladder[] = [
  { foot: 7, top: 33 },
  { foot: 37, top: 85 },
  { foot: 51, top: 72 },
];

const snakes: Snake[] = [
  { head: 36, tail: 19 },
  { head: 65, tail: 35 },
  { head: 87, tail: 32 },
];

interface Board {
  startPoint?: number;
  endPoint?: number;
  ladders?: Ladder[];
  snakes?: Snake[];
}

class SnakeAndLadderBoard implements Board {
  readonly startPoint = 0;
  readonly endPoint = 100;
  readonly ladders = ladders;
  readonly snakes = snakes;

  private isValidDiceOutcome(diceNumber: number): boolean {
    return diceNumber > 0 && diceNumber <= 6;
  }

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

  constructor({ startPoint, endPoint, ladders, snakes }: Partial<Board>) {
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
    if (!this.isValidDiceOutcome(diceOutcome)) {
      return console.log("Dice outcome is not valid");
    }
    if (!this.isValidStartingPosition(currentPoistion)) {
      return console.log("Board Position is not valid");
    }
    let newPosition = currentPoistion + diceOutcome;
    if (!this.isValidBoardPosition(newPosition)) {
      return currentPoistion;
    }
    newPosition = this.checkIfLadderOrSnakeAndMove(newPosition);
    if (this.hasPlayerWon(newPosition)) {
      return console.log("Yay! you won!!");
    }
    return newPosition;
  }
}

const game = new SnakeAndLadderBoard({ startPoint: 0, endPoint: 100 });

console.log(game.move(4, 5));
console.log(game.move(34, 3));
console.log(game.move(83, 4));
console.log(game.move(96, 5));
console.log(game.move(99, 1));
