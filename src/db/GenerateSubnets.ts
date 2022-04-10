import { subnets } from "./data/SubnetsData";
import { IPAdress } from "./models/IPAdress";
import { Subnet } from "./models/Subnet";

export function generateSubnets(
  ip: IPAdress,
  subnetsCount: number
): Array<Subnet> {
  for (let i = 0; i < subnets.length; i++) {
    const element = subnets[i];
    if (subnetsCount <= element.subnet) {
      console.log(element.subnet);
      break;
    }
  }

  return [];
}
