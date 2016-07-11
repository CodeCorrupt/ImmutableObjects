var state = require('./app');

state.s = 1;
console.log(state.g);

state.s = 2;
console.log(state.g);
console.log(state.obj[0]);

state.rw(1);
console.log(state.g);
