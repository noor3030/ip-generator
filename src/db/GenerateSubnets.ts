import { subnets } from "./data/SubnetsData";
import { IPAdress } from "./models/IPAdress";
import { Subnet } from "./models/Subnet";
import { SubnetMask } from "./models/SubnetMask";

export function generateSubnets(
  ip: IPAdress,
  subnetsCount: number
): Array<Subnet> {
  const subnetsAddress: Array<Subnet> = [];

  const subnet: SubnetMask = getSubnetMask(subnetsCount)!;

  const totalNetworks: number = 256 / subnet.subnet - 1;

  for (let i = 0; i < totalNetworks; i++) {
    subnetsAddress.push({
      networkId: `192.168.0.${i * subnet.subnet}`,
      subnetMask: subnet.subnetMask,
      hostIdRangeStart: "192.168.0.0",
      hostIdRangeEnd: "192.168.0.0",
      ofUsableHost: 2,
      broadcastHost: "192.168.0.0",
    });
  }

  return subnetsAddress;
}

export function getSubnetMask(subnet: number): SubnetMask | null {
  let subnetMask: SubnetMask | null = null;
  for (let i = 0; i < subnets.length; i++) {
    const element = subnets[i];
    if (subnet <= element.subnet) {
      subnetMask = element;
      break;
    }
  }
  return subnetMask;
}
