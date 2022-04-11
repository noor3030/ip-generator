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

  const totalNetworks: number = subnet.subnet - 1;

  const usableHosts: number = subnet.host - 2;

  for (let i = 0; i <= totalNetworks; i++) {
    const currentHost: number = i * subnet.host;
    subnetsAddress.push({
      networkId: ip.changeLastByte(currentHost),
      subnetMask: subnet.subnetMask,
      hostIdRangeStart: ip.changeLastByte(currentHost + 1),
      hostIdRangeEnd: ip.changeLastByte(currentHost + usableHosts),
      ofUsableHost: usableHosts,
      broadcastHost: ip.changeLastByte(currentHost + subnet.host - 1),
    });
  }

  return subnetsAddress;
}

export function getSubnetMask(subnet: number): SubnetMask | null {
  if (subnet < 255) {
    let subnetMask: SubnetMask | null = null;
    for (let i = 0; i < subnets.length; i++) {
      const element = subnets[i];
      if (subnet <= element.subnet) {
        subnetMask = element;
        break;
      }
    }
    return subnetMask;
  } else {
    return subnets[subnets.length - 1];
  }
}
