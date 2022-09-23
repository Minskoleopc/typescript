"use strict";
class PersonJa {
    constructor(name, year) {
        this.age = 30;
        this.name = name;
        this.year = year;
    }
    greet(word) {
        console.log(`${word}  ${this.name}`);
    }
    display(year) {
        console.log(year);
    }
}
let amolJa = new PersonJa("chinmay", '2022');
amolJa.greet("hello");
amolJa.display('2022');
