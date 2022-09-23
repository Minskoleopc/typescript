interface Greetablee {
    name: string
    greet(word: string): void
    display(year:string):void;
}
interface Year {
    year:string 
    display(year:string):void;
}

class PersonJa implements Greetablee, Year {
    name: string
    year:string
    age = 30;
    constructor(name: string,year:string) {
        this.name = name
        this.year = year
    }
    greet(word: string): void {
        console.log(`${word}  ${this.name}`)
    }
    display(year:string){
        console.log(year)
    }
}

let amolJa:PersonJa = new PersonJa("chinmay",'2022')
amolJa.greet("hello")
amolJa.display('2022')
