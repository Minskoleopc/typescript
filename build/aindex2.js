"use strict";
// annotation 
let s1 = 10;
let s2 = "chinmay";
let s3 = true;
let s4 = [1, 2, 3];
let s5 = { firstName: "chinmay" };
let s6 = [1, 'string'];
let s7 = 10;
let userInfo = {
    firstName: "chinmay",
    lastName: "deshpande"
};
let t33 = [1, "chinmay", "amol"];
let loanFormOne = {
    fn: "chinmay",
    ln: "deshpande",
    city: "pune",
    mobile: 7709192441
};
let student = {
    firstName: "chinmay",
    lastName: "deshpande",
    mobile: 7709192441,
    C: "mexico"
};
// let role1 = 'admin'
// let role2 = 'customer'
// let role3 = 'read_only_user'
// let role4 = 'read_write'
// if(role4 == 'read-write'){
//     console.log('hello')
// }
var roles;
(function (roles) {
    roles[roles["admin"] = 1] = "admin";
    roles[roles["customer"] = 2] = "customer";
    roles[roles["read_only_user"] = 3] = "read_only_user";
    roles[roles["read_write"] = 4] = "read_write";
})(roles || (roles = {}));
if (roles.customer) {
}
if (roles.read_only_user) {
}
if (roles.read_write) {
}
if (roles.admin) {
}
let additionAA = function (x, y) {
    console.log(x + y);
};
additionAA(30, 45);
// additionAA = 5
let sub = function (x, y) {
    return x - y;
};
let substraction = function (x, y, fn) {
    return fn(12); //not throwing error
};
let q333 = substraction(10, 5, sub); // -22
let subaa = function (x, y) {
    return x - y;
};
let substractionaa = function (x, y, fn) {
    return fn(12, 13);
};
let q33 = substractionaa(10, 5, subaa); // -22
