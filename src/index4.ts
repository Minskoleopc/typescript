function addM(x:number, y:number):void{
    console.log(x+y)
}

addM(12,2)
function addM1(x:number, y:number):undefined{
    console.log(x+y)
    return ;
}

addM1(12,2)

// program3
function displayFullName(firstName:string,lastName:string){
    return firstName + lastName
}
let q = displayFullName("chinmay","deshpande")


// program 4

function ad(x:number,y:number){
    return x + y
}

function displayResult(x:number,y:number,fn:Function){
    console.log(`Result of sum ${fn(x,y)}`)
}
displayResult(12,34,ad)

// program5

function displayResultA(x:number,y:number,fn:(x:number,y:number) => number){
    console.log(`Result of sum ${fn(x,y)}`)
}
displayResultA(12,34,ad)

// program 6


class Person {
    namea:string = "chinmay"
}

let person = new Person()
console.log(person.namea)


// program 6
// public , private , protected , default

class PersonB {
    private age:number = 10
    private firstName:string ;
    public constructor(name:string){
        this.firstName = name;
    }
    // getter method
    public getName():string{
        return this.firstName
    }
    // setter 
    public setName(j:string){
        this.firstName = j
    }

}

let a22 = new PersonB("chinmay");
// private
// console.log(a22.firstName)
// console.log(a22.age)
console.log(a22.getName())
a22.setName("ram")
console.log(a22.getName())

// protect A -----> B(protected ---> a)
//( python (Django) , excel , tableau/powerBI , sql)  ---> 