import { IPAdress } from "./IPAdress";

export type Subnet = {
  networkId: IPAdress;
  subnetMask: string;
  hostIdRangeStart: IPAdress;
  hostIdRangeEnd: IPAdress;
  ofUsableHost: number;
  broadcastHost: IPAdress;
};
