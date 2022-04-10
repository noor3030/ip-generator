import { IPAdress } from "./IPAdress";

export type NetworkClass = {
  name: string;
  leadingBits: number;
  sizeOfNetworkNumberBitField?: number;
  sizeOfRestBitField?: number;
  numberOfNetworks?: number;
  addressesPerNetwork?: number;
  totalAddressesInClass?: number;
  startAddress: IPAdress;
  endAddress:  IPAdress;
  subnetMask?: string;
  cidr?: string;
};
