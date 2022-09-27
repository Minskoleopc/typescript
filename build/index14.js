"use strict";
let h1 = {
    name: "chinmay",
    privileges: ["chinmay", "shirish", "ram"],
    startDate: new Date()
};
let b1 = 2;
function add(a, b) {
    if (typeof a === 'string' && typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
    }
}
let a23 = add("chinmay", "deshpande");
let a24 = add(12, 44);
let a25 = add(12, "chinmay");
let a26 = add("chinmay", 2);
function printInfo(emp) {
    // type guard ----> inbuilt 
    // if(typeof emp === "Employee1"){
    // }
    // if(typeof emp === "Admin1"){
    // }
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    else if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printInfo({ name: "ram", startDate: new Date() });
printInfo({ name: "ram", privileges: ["sam", "chinmay"] });
// saving , current 
// genrics 
// decoratores
// 8 am
