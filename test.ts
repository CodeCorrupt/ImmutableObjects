import {ImmuteableObject} from "./app"

var iObj = new ImmuteableObject();

iObj.obj = 1;
console.log(iObj.obj);

iObj.obj = 2;
console.log(iObj.obj);

if (iObj.rewind(2))
    console.log(iObj.obj);
else
    console.log("Error rewinding");
