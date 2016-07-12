export class ImmuteableObject {
  private object: any[];
  private count: number;

  public constructor() {
    this.object = [];
    this.count = 0;
  }
  public get obj():any {
    if (this.count < 1)
      return {};
    return this.object[this.count - 1];
  }
  public set obj(o:any) {
    this.object.push(o);
    this.count++;
  }

  public rewind(dist:number):boolean {
    this.count-=dist;
    if (this.count < 0)
    {
      this.count = 0;
      return false;
    }
    return true;
  }
}