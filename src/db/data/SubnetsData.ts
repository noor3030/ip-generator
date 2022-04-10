import { SubnetMask } from "..";
export const subnets: Array<SubnetMask> = [
  { subnet: 1, host: 256, subnetMask: "/24" },
  { subnet: 2, host: 128, subnetMask: "/25" },
  { subnet: 4, host: 64, subnetMask: "/26" },
  { subnet: 8, host: 32, subnetMask: "/27" },
  { subnet: 16, host: 16, subnetMask: "/28" },
  { subnet: 32, host: 8, subnetMask: "/29" },
  { subnet: 64, host: 4, subnetMask: "/30" },
  { subnet: 128, host: 2, subnetMask: "/31" },
  { subnet: 256, host: 1, subnetMask: "/32" },
];
