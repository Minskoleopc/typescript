// let marks:number[] = [11,22,33]
// let names:string[] = ["chinmay","sarika","poorva","ram"]

// let info4:{
//     firstName:string;
//     lastName:string;
//     skills:[number,string]
// } = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     skills:[12,"python"]
// }

// info4.skills[0]= 1
// info4.skills.push("javascript")
//let prop:[number,number] = [122,122,]


// program 3
// Union type

function additionN(x:number|string,y:number|string){
    //console.log(x+y)
    if(typeof x == 'number' && typeof y == 'number'){
        console.log(x+y)
    }
    else {
        console.log(Number(x)+Number(y))
    }
}
additionN(12,13)
additionN('12','13')

// Union
type Result = number|string|boolean
// let a:number|string = "10"
// let b:number|string|boolean = true
let a:Result = "10"
let b:Result = true

// literals 
type lastName = 'dani'|'deshmukh'
type firstName = 'chinmay'|'chiatanya'
let info5:{
    firstName:firstName;
    lastName:lastName;
} = {
    firstName:'chinmay',
    lastName:"dani"
}

// program 4
//type
type parent = {mother:string,father:string}
let info6:parent = {
    mother:"kanchan",
    father:"shirish"
} 

// program5

// let role = "read_only";
// let role2 = "read_and_write";
// let role3 = 'admin'

enum Roles {
    "read_only"=1,
    "read_and_write",
    'admin',
    'customer'
}

enum Account {
    'saving'=1,
    'current'
}

if(Roles.read_only){
    console.log('reading only')
}
if(Roles.read_and_write){
    console.log('read and write ')
}
if(Roles.admin){
    console.log('admin')
}
if(Roles.customer){ // role == "customer"

}
if(Account.saving){

}
if(Account.current){
    
}



