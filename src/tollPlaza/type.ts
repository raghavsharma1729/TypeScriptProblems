interface TollRule {
  wheels: number | string;
  vehicleType: VehicleType;
  tollTax: number;
}

enum VehicleType {
  Personal = "Personal",
  Transport = "Transport",
}


export { TollRule, VehicleType };
