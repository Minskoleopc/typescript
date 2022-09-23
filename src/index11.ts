interface Greetable {
    name: string
    greet(word: string): void
}

class PersonJ implements Greetable {
    name: string
    age = 30;
    constructor(name: string) {
        this.name = name
    }
    greet(word: string): void {
        console.log(`${word}  ${this.name}`)
    }
    display(){
        console.log('hello')
    }
}

let amolJ:PersonJ = new PersonJ("chinmay")
amolJ.greet("hello")
amolJ.display()
