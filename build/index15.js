"use strict";
// Generics
let names = ["hello", "bye", "hi"];
let qq = names[0].toUpperCase();
console.log(qq);
// Promise
// Program2
let pro = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello');
    }, 2000);
});
pro.then(function (e) {
    console.log(e.includes('h'));
});
// program3
function merge(objOne, objTwo) {
    return Object.assign(objOne, objTwo);
}
let a11 = merge({ fname: "ram" }, { age: 12 });
// let a12 = merge({roll:10},{isMarried:true})
let a12 = a11.fname;
let a13 = a11.age;
function countAndDescribe(element) {
    console.log(element.length);
}
countAndDescribe("hello");
countAndDescribe([11, 22, 33, 44, 55, 66]);
function countAndDescribeA(element) {
    console.log(element.size);
}
countAndDescribeA(new Set([33, 44, 55, 77]));
countAndDescribeA(new Map([[1, "admin"], [2, "customer"]]));
//countAndDescribeA([1,2,3,4])
//countAndDescribe(10)
// This is restricted for any array and string
// type Sa = any[]|string
// function countAndDescribe(element:Sa){
//     console.log(element.length)
// }
// countAndDescribe("hello")
// countAndDescribe([11,22,33,44,55,66])
//countAndDescribe(10)
// program 5
