import { VehicleType } from "../type";
import Vehicle from "../vehicle";

describe("Vehicle", () => {
  test("if Vehicle is created with specified attributes", () => {
    const vehicle = new Vehicle("MH46 N8529", 8, VehicleType.Transport, true);

    expect(vehicle.COGD).toBeTruthy();
    expect(vehicle.vehicleType).toBe(VehicleType.Transport);
    expect(vehicle.wheels).toBe(8);
    expect(vehicle.registration).toBe("MH46 N8529");
  });
});
