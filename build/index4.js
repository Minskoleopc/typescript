"use strict";
function addM(x, y) {
    console.log(x + y);
}
addM(12, 2);
function addM1(x, y) {
    console.log(x + y);
    return;
}
addM1(12, 2);
// program3
function displayFullName(firstName, lastName) {
    return firstName + lastName;
}
let q = displayFullName("chinmay", "deshpande");
// program 4
function ad(x, y) {
    return x + y;
}
function displayResult(x, y, fn) {
    console.log(`Result of sum ${fn(x, y)}`);
}
displayResult(12, 34, ad);
// program5
function displayResultA(x, y, fn) {
    console.log(`Result of sum ${fn(x, y)}`);
}
displayResultA(12, 34, ad);
// program 6
class Person {
    constructor() {
        this.namea = "chinmay";
    }
}
let person = new Person();
console.log(person.namea);
// program 6
// public , private , protected , default
class PersonB {
    constructor(name) {
        this.age = 10;
        this.firstName = name;
    }
    // getter method
    getName() {
        return this.firstName;
    }
    // setter 
    setName(j) {
        this.firstName = j;
    }
}
let a22 = new PersonB("chinmay");
// private
// console.log(a22.firstName)
// console.log(a22.age)
console.log(a22.getName());
a22.setName("ram");
console.log(a22.getName());
// protect A -----> B(protected ---> a)
