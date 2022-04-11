import { subnets } from "./data/SubnetsData";
import { IPAdress } from "./models/IPAdress";
import { Subnet } from "./models/Subnet";
import { SubnetMask } from "./models/SubnetMask";

export function generateSubnets(
  ip: IPAdress,
  subnetsCount: number
): Array<Subnet> {
  const subnetsAddress = [];
  let subnet: SubnetMask = null;

  console.log(subnetsCount);
  subnet = getHost(subnet);
  console.log("near " + subnet.subnet);
  console.log(subnet);

  for (let i = 0; i < subnet.subnet; i++) {
    subnetsAddress.push({
      networkId: `192.168.0.${i * subnet.subnet}`,
      subnetMask: "",
      hostIdRangeStart: "192.168.0.0",
      hostIdRangeEnd: "192.168.0.0",
      ofUsableHost: 2,
      broadcastHost: "192.168.0.0",
    } as Subnet);
  }

  return subnetsAddress;
}

function getHost(subnet: number): SubnetMask {
  for (let i = 0; i < subnets.length; i++) {
    const element = subnets[i];
    if (subnet <= element.subnet) {
      return element;
    }
  }
}
