export class IPAdress {
  ip: string;

  constructor(ip: string) {
    this.ip = ip;
  }

  public get isValid(): boolean {
    return /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/.test(
      this.ip
    );
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
