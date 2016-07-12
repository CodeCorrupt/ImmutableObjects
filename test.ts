import {ImmutableObject} from "./ImmutableObject"

var iObj = new ImmutableObject();

iObj.obj = 1;
console.log(iObj.obj);

iObj.obj = 2;
console.log(iObj.obj);

if (iObj.rw(2))
    console.log(iObj.obj);
else
    console.log("Error rewinding");


if (iObj.ff(1))
    console.log(iObj.obj);
else
    console.log("Error fast-forward");

iObj.obj = 3;
console.log(iObj.obj);

if (iObj.ff(1))
    console.log(iObj.obj);
else
    console.log("Error fast-forward");

