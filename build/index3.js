"use strict";
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
function additionN(x, y) {
    //console.log(x+y)
    if (typeof x == 'number' && typeof y == 'number') {
        console.log(x + y);
    }
    else {
        console.log(Number(x) + Number(y));
    }
}
additionN(12, 13);
additionN('12', '13');
// let a:number|string = "10"
// let b:number|string|boolean = true
let a = "10";
let b = true;
let info5 = {
    firstName: 'chinmay',
    lastName: "dani"
};
let info6 = {
    mother: "kanchan",
    father: "shirish"
};
// program5
// let role = "read_only";
// let role2 = "read_and_write";
// let role3 = 'admin'
var Roles;
(function (Roles) {
    Roles[Roles["read_only"] = 1] = "read_only";
    Roles[Roles["read_and_write"] = 2] = "read_and_write";
    Roles[Roles["admin"] = 3] = "admin";
    Roles[Roles["customer"] = 4] = "customer";
})(Roles || (Roles = {}));
var Account;
(function (Account) {
    Account[Account["saving"] = 1] = "saving";
    Account[Account["current"] = 2] = "current";
})(Account || (Account = {}));
if (Roles.read_only) {
    console.log('reading only');
}
if (Roles.read_and_write) {
    console.log('read and write ');
}
if (Roles.admin) {
    console.log('admin');
}
if (Roles.customer) { // role == "customer"
}
if (Account.saving) {
}
if (Account.current) {
}
