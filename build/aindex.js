"use strict";
// let x11:number = 10;
// // program 1
// function additionN(x,y){
//     console.log(x+y)
// }
// additionN('2','3')
// // program2
// function additionM(x,y){
//     if(typeof x == "number" && typeof y == "number"){
//         console.log(x+y)
//     }
//     else {
//         console.log('please enter the correct input')
//     }
// }
// additionM('10',10)
// program3
// function additionO(x:number,y:number){
//     console.log(x+y)
// }
// additionO('10',10)
// basic data type 
// let s1 = 10
// s1 ='ch'
// program4
//function substraction(x:number,y:number,result:true,message:string){
//     if(result){
//         console.log(message)
//         console.log(x+y)
//     }
// }
// substraction(1,2,true,'hello i am learning')
// program 5
// function multiplication(x:number,y:number):void{
//     console.log(x*y)
// }
// multiplication(12,13)
// program 6
// function multiplicationB(x:number,y:number):number{
//     console.log(x*y)
//     return  x * y
// }
// let q1 = multiplicationB(12,13)
// console.log(q1)
// Program 7
// Array 
// let marksB:number[] = [11,22,33,2]
// let marksC:string[] = ["chinmay","sarika","ram","sham","ramesh"]
// Tuple (array of fixed length and specfic data type)
let role = [1, "admin"];
role.push(12);
// Object 
let infoZ = {
    firstName: "chinmay",
    lastName: "deshpande"
};
console.log(infoZ);
let infoP = {
    firstNumber: "chinmay",
    lastName: "deshpande",
};
let infoNM = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 12,
    skills: ["chinmay", "poorva"]
};
console.log(infoNM);
// program 10  (union)
let bn = 45;
function additonBNM(x, y) {
    if (typeof x == 'number' && typeof y == "number") {
        console.log(x + y);
    }
    else {
        console.log(Number(x) + Number(y));
    }
}
additonBNM(2, 3);
additonBNM('2', '3');
