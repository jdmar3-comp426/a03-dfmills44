import {sumToString} from "./src/mild/mild_1.js";
import {getIncreasingArray} from "./src/mild/mild_1.js";
import {maxAndMin} from "./src/mild/mild_1.js";
import {countArray} from "./src/mild/mild_1.js";
import {identifyVariable, removeKey} from "./src/mild/mild_2.js";
import {identifyArray} from "./src/mild/mild_2.js";

console.log(sumToString(75,63));
console.log(getIncreasingArray(1,50));
console.log(maxAndMin([2,9,1,-3,5]));
console.log(countArray([1, 5, 1, 2, 2, 'night', 'day', 'night', true, true, false, [1,2], [1,2], [3,4]]));
console.log(identifyVariable(4));
console.log(identifyArray(['some', 3, [3, 4], false]));
var obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
removeKey(obj, 'password')
console.log(obj);