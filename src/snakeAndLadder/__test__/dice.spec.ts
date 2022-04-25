import Dice from "../dice";

describe("Dice", () => {
  test("if outcome is in with in the default range when not given specific ranage for dice", () => {
    const dice = new Dice({});
    dice.roll();
    expect(dice.outcome).toBeGreaterThanOrEqual(1);
    expect(dice.outcome).toBeLessThanOrEqual(6);
  });

  test("if outcome is in with in the default range when given specific ranage for dice is not valid", () => {
    const dice = new Dice({ minOutcome: 8, maxOutcome: 6 });
    dice.roll();
    expect(dice.outcome).toBeGreaterThanOrEqual(1);
    expect(dice.outcome).toBeLessThanOrEqual(6);
  });

  test("if outcome is in with in the given range  for dice", () => {
    const dice = new Dice({ minOutcome: 1, maxOutcome: 10 });
    dice.roll();
    expect(dice.outcome).toBeGreaterThanOrEqual(1);
    expect(dice.outcome).toBeLessThanOrEqual(10);
  });
});
