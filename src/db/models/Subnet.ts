export type Subnet = {
  networkId: string;
  subnetMask: string;
  hostIdRangeStart: string;
  hostIdRangeEnd: string;
  ofUsableHost: number;
  broadcastHost: string;
};
