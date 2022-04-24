import TollPlaza from "../tollPlaza";
import { tollRules } from "../tollRules";
import { VehicleType } from "../type";
import Vehicle from "../vehicle";

describe("TollPlaza", () => {
  test("if return right toll for 4 wheel personal vehicle", () => {
    const toll = new TollPlaza(tollRules);
    const vehicle = new Vehicle("MH46 N8529", 4, VehicleType.Personal, false);

    expect(toll.calculate(vehicle)).toBe(100);
  });

  test("if return right toll for 4 wheel personal vehicle with GOCD", () => {
    const toll = new TollPlaza(tollRules);
    const vehicle = new Vehicle("MH46 N8529", 4, VehicleType.Personal, true);

    expect(toll.calculate(vehicle)).toBe(0);
  });

  test("if return right toll for 16 wheel transport vehicle", () => {
    const toll = new TollPlaza(tollRules);
    const vehicle = new Vehicle("MH46 N8529", 16, VehicleType.Transport, false);

    expect(toll.calculate(vehicle)).toBe(1000);
  });

  test("if return right toll for 8 wheel transport vehicle", () => {
    const toll = new TollPlaza(tollRules);
    const vehicle = new Vehicle("MH46 N8529", 8, VehicleType.Transport, false);

    expect(toll.calculate(vehicle)).toBe(600);
  });
});
