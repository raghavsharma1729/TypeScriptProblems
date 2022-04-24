import TollPlaza from "./tollPlaza";
import { tollRules } from "./tollRules";
import { TollRule, VehicleType } from "./type";
import Vehicle from "./vehicle";

const toll = new TollPlaza(tollRules);
const v1 = new Vehicle("MH46 N8529", 4, VehicleType.Personal, false);
const v2 = new Vehicle("MH46 N8529", 4, VehicleType.Personal, true);
const v3 = new Vehicle("MH46 N8529", 16, VehicleType.Transport, false);
const v4 = new Vehicle("MH46 N8529", 8, VehicleType.Transport, false);

console.log({ v1 }, toll.calculate(v1));
console.log({ v2 }, toll.calculate(v2));
console.log({ v3 }, toll.calculate(v3));
console.log({ v4 }, toll.calculate(v4));
