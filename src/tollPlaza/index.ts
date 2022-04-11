import { TollRule, VehicleType } from "./type";

class Vehicle {
  readonly registration!: string;
  readonly wheels!: number;
  readonly vehicleType!: VehicleType;
  readonly COGD!: boolean;
  constructor(
    registration: string,
    wheels: number,
    vehicleType: VehicleType,
    COGD: boolean
  ) {
    this.registration = registration;
    this.wheels = wheels;
    this.vehicleType = vehicleType;
    this.COGD = COGD;
  }
}

const tollRules: TollRule[] = [
  {
    wheels: 2,
    vehicleType: VehicleType.Personal,
    tollTax: 20,
  },
  {
    wheels: 2,
    vehicleType: VehicleType.Transport,
    tollTax: 20,
  },
  {
    wheels: 3,
    vehicleType: VehicleType.Transport,
    tollTax: 50,
  },
  {
    wheels: 4,
    vehicleType: VehicleType.Personal,
    tollTax: 100,
  },
  {
    wheels: 4,
    vehicleType: VehicleType.Transport,
    tollTax: 200,
  },
  {
    wheels: 6,
    vehicleType: VehicleType.Transport,
    tollTax: 500,
  },
];

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
    return rule?.tollTax;
  }
}

const toll = new TollPlaza(tollRules);
const v1 = new Vehicle("MH46 N8529", 4, VehicleType.Personal, false);
const v2 = new Vehicle("MH46 N8529", 4, VehicleType.Personal, true);
const v3 = new Vehicle("MH46 N8529", 16, VehicleType.Transport, false);
const v4 = new Vehicle("MH46 N8529", 8, VehicleType.Transport, false);

console.log({ v1 }, toll.calculate(v1));
console.log({ v2 }, toll.calculate(v2));
console.log({ v3 }, toll.calculate(v3));
console.log({ v4 }, toll.calculate(v4));
