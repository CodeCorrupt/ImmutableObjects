export class ImmutableObject {
  private back: any[];
  private forward: any[];

  public constructor() {
    this.back = [];
    this.forward = [];
  }
  public get obj():any {
    if (this.back.length == 0)
      return {};
    return this.back[this.back.length - 1];
  }
  public set obj(o:any) {
    this.back.push(o);
    this.forward = [];
  }

  public rw(dist:number):boolean {
    for (var i = 0; i < dist; i++) {
      var o = this.back.pop()
      if (o != null){
        this.forward.push(o);
      }
      else
        return false;
    }
    return true;
  }

  public ff(dist:number):boolean {
    for (var i = 0; i < dist; i++) {
      var o = this.forward.pop()
      if (o != null){
        this.back.push(o);
      }
      else
        return false;
    }
    return true;
  }
}
