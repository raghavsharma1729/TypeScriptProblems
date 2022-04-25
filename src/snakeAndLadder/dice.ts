interface DiceRange {
  minOutcome: number;
  maxOutcome: number;
}
class Dice {
  private _outcome: number = 0;
  readonly minOutcome: number = 1;
  readonly maxOutcome: number = 6;

  public get outcome() {
    return this._outcome;
  }

  public set outcome(outcome: number) {
    if (outcome <= this.maxOutcome && outcome >= this.minOutcome) {
      this._outcome = outcome;
    }
  }

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
    this._outcome = Math.floor(
      Math.random() * (this.maxOutcome - this.minOutcome + 1) + this.minOutcome
    );
  };
}

export default Dice;
