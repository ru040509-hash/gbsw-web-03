let num = 10; // Number

let str = "문자열"; // String
let str2 = "문자열" + num; // String
let str3 = '문자열 ${num}'; // String

let bool = true; // Boolean
let bool2 = false; // Boolean

let n = null; // Null
let u = undefined; // Undefined

const a = {
    key: "Value",
    key2: "Value2",
}; //  오브젝트

// a = {}; // Error
a.key = "modifed value"
console.log(a);

let arr = [1, 2, 3]; // 배열
arr[0] = 3;
// arr = [] // Error
