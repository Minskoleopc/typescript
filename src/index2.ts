// // function addition(x:number,y:number){
// //     console.log(x+y)
// // }
// // addition(12,13)

import { StringifyOptions } from "querystring";


// // program2

// // function additon2(x,y){
// //     if(typeof x == "number" && typeof y == "number"){
// //         console.log(x+y)
// //     }
// //     else {
// //         console.log('please enter correct input')
// //     }
// // }
// // additon2(12,3)

// // Function 
// // program 2

// // void not returning anythin ====> donot use return key word

// // function add(x:number,y:number):void{
// //     console.log(x+y)
// // }
// // let s = add(12,13)
// // console.log(s)


// // function add(x:number,y:number):undefined{
// //     console.log(x+y)
// //     return ;
// // }
// // let s = add(12,13)
// // console.log(s)

// // program 3
// function additionC(x:number,y:number,result:boolean,greet:string):number{
//     if(result){
//         console.log(greet)
//         console.log(x+y)
//         return x+ y
//     }
//     else {
//         return 0
//     }
// }

// let q1 = additionC(12,14,true,"Good Morning !")

// program 4
// type - object 

// let info3:object = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23
// }
// console.log(info3)


// program 5


// let info4:{
//     firstName:string;
//     lastName:string;
//     age:number
// } = {
 
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:12

// }

//contact

type Contact = {
    firstName:string;
    lastName:string;
    mobileNumber:number;
    isMarried:boolean;
}






type a = {
    firstName:string;
    lastName:string;
    age:number
}
let info4:a = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12
}

let info5:Contact = {
    firstName:"chinmay",
    lastName:"deshpande",
    mobileNumber:7709192441,
    isMarried:true
}
console.log(info5)

// program 5

let marks:number[] = [13,44,5]
let names:string[] = ["chinmay","poorva","abhisha"]
console.log(marks)
console.log(names)

//program 6 tuple

let marksB:[x:number,y:number] = [12,12]
marksB.push(23)
console.log(marksB)









// any ??