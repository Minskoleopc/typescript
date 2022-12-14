// we cannot use static method and properties inside non-static things with this 
// if you want to call out you can callout with this keyword
// Interface cannot be assign a value , they all are abstract
// Interface is always related with object
// Interface can only have read only property
// Interface can be split

// What are static method and properties

// class Employee {
//     id:number;
//     country:string;
//     year:number
//     static currentYear = 2022

//     constructor(id:number,country:string){
//         this.id = id
//         this.country = country
//         this.year = Employee.currentYear
//     }


//     static CreateEmployee (name:string){
//         return {fullName:name}
//     }

// }


// console.log(Employee.currentYear)
// console.log(Employee.CreateEmployee("chinmay deshpande"))

// console.log(Math.PI)
// console.log(Math.floor(12.3))

// let amol = new Employee(11,'India')
// console.log(amol)
// console.log(amol.year)


// Singleton pattern

class Accounting {
    id:number;
    reports:string
    private static instance:Accounting


    private constructor(id:number,reports:string){
        this.id = id;
        this.reports = reports
    }

    static getInstance(){
        if(Accounting.instance){
            return  this.instance
        }
        this.instance = new Accounting(12,'20202')
        return this.instance
    }

}


// private constructor are not accessible outside the class
// let account = new Accounting(2,'2022')
// let account2 = new Accounting(3,'2023')
// console.log(account)
// console.log(account2)

let a1 = Accounting.getInstance()
let a2 = Accounting.getInstance()
console.log(a1)
console.log(a2)


// private constructor 
// instance variable which is of type class
// write a static method to check same instance value 
//(undefined)
// call the static method on class name










