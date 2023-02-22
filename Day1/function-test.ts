// destructured import
import addNumbers, {addString, printUnion} from "./functions";
import {formArray, higherFunctionType, printName} from './higherFunction'

console.log(formArray([1,2,3,4,5], (v) => v * 10))
console.log(addNumbers(1, 3));
console.log(addString("me", "you"));
console.log(higherFunctionType([3,4,5,6,7], (v)=> v * 5))
console.log(printName("Yusuf"))
