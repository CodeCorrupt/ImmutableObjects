module.exports = {
  obj: [],
  index: 0,
  get g() {
    return this.obj[this.index - 1];
  },
  set s(x) {
    this.obj.push(x);
    this.index++;
  },
  rw: function(num) {
    this.index -= num;
  }
};
