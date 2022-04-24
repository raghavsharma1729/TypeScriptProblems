import { TollRule } from "./type";
import Vehicle from "./vehicle";

class TollPlaza {
  private readonly tollRules: TollRule[];

  constructor(tollRules: TollRule[]) {
    this.tollRules = tollRules;
  }

  private largeVehiclesToll(wheels: number): number {
    return 500 + ((wheels - 6) / 2) * 100;
  }

  calculate(vehicle: Vehicle): number | undefined {
    if (vehicle.COGD) {
      return 0;
    }
    if (vehicle.wheels > 6) {
      return this.largeVehiclesToll(vehicle.wheels);
    }
    const rule: TollRule | undefined = this.tollRules.find((rule) => {
      return (
        rule.wheels == vehicle.wheels && rule.vehicleType == vehicle.vehicleType
      );
    });
    return rule!.tollTax;
  }
}

export default TollPlaza;
