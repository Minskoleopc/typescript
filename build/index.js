"use strict";
// program 1
// function addition(x,y){
//     console.log(x+y)
// }
// addition('2','3')
// program 2
// function addition2(x,y){
//     if(typeof x == 'number'  && typeof y == 'number'){
//         console.log(x+y)
//     }
//     else {
//         console.log('Incorrect input')
//     }
// }
// //addition2('10','13')
// addition2(10,13)
// program 3
function addition(x, y, result, message) {
    if (result) {
        console.log(x + y);
        console.log(message);
    }
}
addition(12, 23, true, "addition done");
// typescript 
let x = 10;
let y = "chinmay";
let z = true;
//  program 2
function addition2(x, y, result, message) {
    if (result) {
        console.log(x + y);
        console.log(message);
        return x + y;
    }
    else {
        return 0;
    }
}
let sum = addition2(12, 23, true, "addition done");
console.log(sum);
// Object 
// program 3
let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 32
};
console.log(info);
// program 4
let info2 = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 12
};
console.log(info2);
// let x = 10
// x = '10'
// x = true
