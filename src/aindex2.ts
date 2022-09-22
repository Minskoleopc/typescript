// annotation 
let s1:number = 10
let s2:string = "chinmay"
let s3:boolean = true
let s4:number[] = [1,2,3]
let s5:object = {firstName:"chinmay"}
let s6:[number,string] = [1,'string']
let s7:number| string = 10

//-------------------------------------------->

type PersonN = {
    firstName:string,
    lastName:string
}


let userInfo:PersonN = {
    firstName:"chinmay",
    lastName:"deshpande"
}

type ar2 = [number,string,string]
let t33:ar2 = [1,"chinmay","amol"]

type loanForm = {
    fn:string;
    ln:string;
    city:string;
    mobile:number
}

let loanFormOne:loanForm = {
    fn:"chinmay",
    ln:"deshpande",
    city:"pune",
    mobile:7709192441
}

// literal type
type country = 'india'|'usa'|'mexico'
let student:{
    firstName:string,
    lastName:string,
    mobile:number,
    C:country
} = {
    firstName:"chinmay",
    lastName:"deshpande",
    mobile:7709192441,
    C:"mexico"
}



// let role1 = 'admin'
// let role2 = 'customer'
// let role3 = 'read_only_user'
// let role4 = 'read_write'

// if(role4 == 'read-write'){
//     console.log('hello')
// }


enum  roles{
    'admin'=1,
    'customer',
    'read_only_user',
    'read_write'
}

if(roles.customer){
}
if(roles.read_only_user){
}
if(roles.read_write){
}
if(roles.admin){
}




let additionAA:Function = function(x:number,y:number){
    console.log(x+y)
}
additionAA(30,45)

// additionAA = 5

let sub:Function = function (x:number,y:number){
    return x-y
}

let substraction = function(x:number,y:number,fn:Function){
    return fn(12) //not throwing error
}
let q333 = substraction(10,5,sub) // -22



type a = (x:number,y:number) => number
let subaa:a = function (x:number,y:number){
    return x-y
}
let substractionaa = function(x:number,y:number,fn:a){
    return fn(12,13)
}
let q33 = substractionaa(10,5,subaa) // -22

