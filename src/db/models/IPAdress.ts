export class IPAdress {
  ip: string;

  constructor(ip: string) {
    this.ip = ip;
  }

  public get bytes(): Array<string> {
    return this.ip.split(".");
  }

  public get byte1(): number {
    return Number(this.bytes[0]);
  }
  public get byte2(): number {
    return Number(this.bytes[1]);
  }
  public get byte3(): number {
    return Number(this.bytes[2]);
  }
  public get byte4(): number {
    return Number(this.bytes[3]);
  }
}
