"use strict";
// program 1
// class Vehicle {
//     // fields 
//     public color:string;
//     public type:string 
//     constructor(color:string,type:string){
//         this.color = color
//         this.type = type
//     }
// }
// let audi = new Vehicle('red', "sedane");
// console.log(audi);
// console.log(audi.color)
// console.log(audi.type)
// audi.color = "blue"
// audi.type = "SUV"
// console.log(audi)
// program 2
// class Vehicle {
//         // fields 
//         private color:string;
//         private type:string 
//         public country = "india";
//         constructor(color:string,type:string){
//             this.color = color
//             this.type = type
//         }
//         //option-1 get and set method
//         getColor(){
//             return this.color
//         }
//         updateColor(cl:string){
//             this.color = cl
//         }
//         //option-2 set and get method with keyword
//         // when you use get and set keyword it is like property
//         // in js object -- property and method
//         // method - action and return type 
//         get getColorB(){
//             return this.color
//         }
//         set updatColorB(cl:string){
//             this.color = cl
//         }
//     }
//     let audi = new Vehicle('red', "sedane");
//     console.log(audi);
//     // Not accessible because it is private 
//     // console.log(audi.color)
//     // console.log(audi.type)
//     // Accessible call getColor() and updateColor()
//     console.log(audi.getColor())
//     audi.updateColor('purple')
//     console.log(audi.getColor())
//     console.log(audi.country)
//     // option-2
//     console.log(audi.getColorB)
//     audi.updatColorB = 'purple'
//     console.log(audi['getColorB'])
// program 3
// // readonly
// class Vehicle {
//     readonly color:string
//     readonly type:string
//     constructor(color:string ,type:string){
//         this.color =color;
//         this.type = type
//     }
//     displayColor(){
//         console.log(this.color)
//     }
// }
// let audi = new Vehicle("red","sedane")
// console.log(audi.color)
// audi.color = "purple"
// protected
class Vehicle {
    constructor(color, type) {
        this.color = color;
        this.type = type;
    }
    displayColor() {
        console.log(this.color);
    }
}
// class Audi extends Vehicle {
//     displayColorAndType() {
//         console.log(this.type)
//         console.log(this.color)
//     }
// }
// let audi = new Vehicle("red", "sedane")
// // console.log(audi.type)
// // console.log(audi.color)
// let a222 = new Audi("red", "sedane")
// a222.displayColorAndType()
// program 5
// class Vehicle44 {
//     static country = "India"
//     static displayCountry(){
//         console.log(Vehicle44.country)
//     }
// }
// console.log(Vehicle44.country)
// Vehicle44.displayCountry()
