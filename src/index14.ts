// program1
type Admin = {
    name:string
    privileges:string[]
}
type Employee = {
    name:string
    startDate:Date
}
type CalEmployee = Admin & Employee

let h1:CalEmployee = {
    name:"chinmay",
    privileges:["chinmay","shirish","ram"],
    startDate:new Date()
}

// program 2
type com = string | number
type com2 = boolean | number
type univeral = com & com2;
let b1:univeral = 2

// program 3
// type guard
// function overloading 
function add(a:number,b:number):number
function add(a:string,b:string):string
function add(a:string,b:number):string
function add(a:number, b :string):string
function add(a:com , b:com){
    if(typeof a === 'string' && typeof b === "string"){
        return a.toString() + b.toString()
    }
    else {
        if(typeof a === "number" && typeof b === "number"){
            return a + b
        }
    } 
}
let a23 = add("chinmay","deshpande")
let a24 = add(12,44)
let a25 = add(12,"chinmay")
let a26 = add("chinmay",2)

// program 4

// 4B
// type Admin1 = {
//     name:string
//     privileges:string[]
// }
// type Employee1 = {
//     name:string
//     startDate:Date
// }
// type CalEmployee1 = Admin1 & Employee1

// function printInfo(emp:CalEmployee1){
//     console.log(emp)
// }
// printInfo({name:"chinmay",privileges:["ram","sham"],startDate:new Date()})

// Program 4

// 4b


type Admin1 = {
    name:string
    privileges:string[]
}
type Employee1 = {
    name:string
    startDate:Date
}
type CalEmployee1 = Admin1 | Employee1

function printInfo(emp:CalEmployee1){
    // type guard ----> inbuilt 
    // if(typeof emp === "Employee1"){
    // }
    // if(typeof emp === "Admin1"){
    // }
    if('privileges' in emp){
        console.log(emp.privileges)
    }
    else if ('startDate' in emp){
        console.log(emp.startDate)
    }
}
printInfo({name:"ram",startDate:new Date()})
printInfo({name:"ram",privileges:["sam","chinmay"]})


// saving , current 
// genrics 
// decoratores
// 8 am









