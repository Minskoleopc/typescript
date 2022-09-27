// oops

// class 

// // program 1
// class Vehicle {
//     color:string ="blue";
//     model:number = 123;

//     display(){
//         console.log(this.color)
//     }
// }

// let audi = new Vehicle()
// console.log(audi.color)
// console.log(audi.model)
// audi.display()


// program 2 
// setting object property at the time of object creation

// class Vehicle {
//     model:number;
//     type:string;
//     color:string;
//     constructor(model:number,type:string,color:string){
//         this.model  = model
//         this.type = type
//         this.color = color
//     }
//     display(){
//         console.log(this.color)
//     }
// }
// let audi = new Vehicle(123,"sedane","red")
// let bmw = new Vehicle(123,"SUV","blue")
// console.log(audi)
// console.log(bmw)

// audi.display()
// bmw.display()

// program 3
// //static methods and  properties
// class Vehicle {

//     // static property 
//     static country:string = "India"

//     display(){
//         console.log('I am normal method')
//     }

//     // static method
//     static displayIndia():void{
//         console.log("I am static method")
//     }
// }

// creatinn the object to access normal method
// let q4  = new Vehicle()
// q4.display()

// console.log(Vehicle.country)
// Vehicle.displayIndia()

// program 4
// normal class with private fields

// class Student {
//     fullName:string;
//     age:number;
//     skills:string[]

//     constructor(fn:string , ag:number , sks:string[]){
//         this.fullName = fn
//         this.age = ag
//         this.skills = sks
//     }

// }

// let hemant = new Student("chinmaydeshapnde",32,['python','js'])
// console.log(hemant)


// program 5 
// class Student {
//     private fullName:string;
//     private age:number;
//     private skills:string[]

//     constructor(fn:string , ag:number , sks:string[]){
//         this.fullName = fn
//         this.age = ag
//         this.skills = sks
//     }

//     getFullName(){
//         console.log(this.fullName)
//     }
//     getAge(){
//         console.log(this.age)
//     }
//     getSkills(){
//         console.log(this.skills)
//     }

// }

// let hemant = new Student("chinmaydeshapnde",32,['python','js'])
// console.log(hemant)

// // cannot access outside the class

// // console.log(hemant.age)
// // console.log(hemant.fullName)
// // console.log(hemant.skills)

// // how can we use ?? using getter and setter method
// hemant.getAge()
// hemant.getFullName()
// hemant.getSkills()

// // program 6 (read only)

// class Student {
//     readonly fullName: string;
//     readonly age: number;
//     readonly skills: string[]

//     constructor(fn: string, ag: number, sks: string[]) {
//         this.fullName = fn
//         this.age = ag
//         this.skills = sks
//     }

// }

// let hemant = new Student("chinmaydeshapnde", 32, ['python', 'js'])
// console.log(hemant.fullName)
// we can access it oustide but cannot update it as its read only
//hemant.fullName = "ram"

// Inheritance 
// Protected 
// Abstract 

//Interface
//Extended interface
//Optional ? 




