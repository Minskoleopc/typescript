"use strict";
class PersonJ {
    constructor(name) {
        this.age = 30;
        this.name = name;
    }
    greet(word) {
        console.log(`${word}  ${this.name}`);
    }
    display() {
        console.log('hello');
    }
}
let amolJ = new PersonJ("chinmay");
amolJ.greet("hello");
amolJ.display();
