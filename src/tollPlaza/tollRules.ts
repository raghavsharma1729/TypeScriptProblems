import { TollRule, VehicleType } from "./type";

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

export { tollRules };
