// Class A	0	8	24	128 (27)	16,777,216 (224)	2,147,483,648 (231)	0.0.0.0	127.255.255.255[a]	255.0.0.0	/8
// Class B	10	16	16	16,384 (214)	65,536 (216)	1,073,741,824 (230)	128.0.0.0	191.255.255.255	255.255.0.0	/16
// Class C	110	24	8	2,097,152 (221)	256 (28)	536,870,912 (229)	192.0.0.0	223.255.255.255	255.255.255.0	/24
// Class D (multicast)	1110	not defined	not defined	not defined	not defined	268,435,456 (228)	224.0.0.0	239.255.255.255	not defined	/4[7]
// Class E (reserved)	1111	not defined	not defined	not defined	not defined	268,435,456 (228)	240.0.0

import { IPAdress } from "../models/IPAdress";
import { NetworkClass } from "../models/NetworkClass";

export const classA: NetworkClass = {
  name: "Class A",
  leadingBits: 0,
  sizeOfNetworkNumberBitField: 8,
  sizeOfRestBitField: 24,
  numberOfNetworks: 128,
  addressesPerNetwork: 16777216,
  totalAddressesInClass: 2147483648,
  startAddress: new IPAdress("0.0.0.0"),
  endAddress: new IPAdress("127.255.255.255"),
  subnetMask: "255.0.0.0",
  cidr: "/8",
};

export const classB: NetworkClass = {
  name: "Class B",
  leadingBits: 10,
  sizeOfNetworkNumberBitField: 16,
  sizeOfRestBitField: 16,
  numberOfNetworks: 16384,
  addressesPerNetwork: 65536,
  totalAddressesInClass: 1073741824,
  startAddress: new IPAdress("128.0.0.0"),
  endAddress: new IPAdress("191.255.255.255"),
  subnetMask: "255.255.0.0",
  cidr: "/16",
};
export const classC: NetworkClass = {
  name: "Class C",
  leadingBits: 110,
  sizeOfNetworkNumberBitField: 24,
  sizeOfRestBitField: 8,
  numberOfNetworks: 2097152,
  addressesPerNetwork: 256,
  totalAddressesInClass: 536870912,
  startAddress: new IPAdress("192.0.0.0"),
  endAddress: new IPAdress("223.255.255.255"),
  subnetMask: "255.255.255.0",
  cidr: "/24",
};
export const classD: NetworkClass = {
  name: "Class D",
  leadingBits: 1110,
  sizeOfNetworkNumberBitField: undefined,
  sizeOfRestBitField: undefined,
  numberOfNetworks: undefined,
  addressesPerNetwork: undefined,
  totalAddressesInClass: 268435456,
  startAddress: new IPAdress("224.0.0.0"),
  endAddress: new IPAdress("239.255.255.255"),
  subnetMask: undefined,
  cidr: "/4",
};

export const classE: NetworkClass = {
  name: "Class E",
  leadingBits: 1111,
  sizeOfNetworkNumberBitField: undefined,
  sizeOfRestBitField: undefined,
  numberOfNetworks: undefined,
  addressesPerNetwork: undefined,
  totalAddressesInClass: 268435456,
  startAddress: new IPAdress("240.0.0.0"),
  endAddress: new IPAdress("255.255.255.255"),
  subnetMask: undefined,
  cidr: undefined,
};

export const classes: Array<NetworkClass> = [
  classA,
  classB,
  classC,
  classD,
  classE,
];
