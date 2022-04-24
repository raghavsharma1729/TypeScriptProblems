interface DiceRange {
  minOutcome: number;
  maxOutcome: number;
}
class Dice {
  readonly minOutcome: number = 0;
  readonly maxOutcome: number = 6;

  constructor({ minOutcome, maxOutcome }: Partial<DiceRange>) {
    if (minOutcome !== undefined && maxOutcome !== undefined) {
      if (minOutcome > 0 && maxOutcome > 0 && maxOutcome > minOutcome) {
        this.minOutcome = minOutcome;
        this.maxOutcome = maxOutcome;
      } else {
        console.log("invalid dice range using default");
      }
    }
  }

  roll = () => {
    return Math.floor(
      Math.random() * (this.maxOutcome - this.minOutcome + 1) + this.minOutcome
    );
  };
}

export default Dice;
