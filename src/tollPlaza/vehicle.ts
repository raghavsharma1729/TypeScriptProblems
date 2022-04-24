import { VehicleType } from "./type";

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

export default Vehicle;
