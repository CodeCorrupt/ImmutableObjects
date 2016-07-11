module.exports = {
  obj: [],
  get g() {
    return this.obj[this.obj.length - 1];
  },
  set s(x) {
    this.obj.push(x);
  }
};
