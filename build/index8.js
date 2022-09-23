"use strict";
// program1
//class PersonQ{
// firstName:string = 'chinmay';
// lastName:string = 'deshpande';
// -------------2----------------------
// firstName:string;
// lastName:string;
// constructor(firstName:string , lastName:string){
//     this.firstName = firstName
//     this.lastName = lastName
// }
// ------------------ 3------------------------------
// public firstName:string;
// public lastName:string;
// constructor(firstName:string , lastName:string){
//     this.firstName = firstName
//     this.lastName = lastName
// }
//------------------ 4--------------------------------
// private firstName:string;
// private  lastName:string;
// constructor(firstName:string , lastName:string){
//     this.firstName = firstName
//     this.lastName = lastName
// }
// display(){
//     console.log(this.firstName+this.lastName)
// }
// protected firstName:string;
// protected  lastName:string;
// constructor(firstName:string , lastName:string){
//     this.firstName = firstName
//     this.lastName = lastName
// }
// display(){
//     console.log(this.firstName+this.lastName)
// }
// readonly firstName:string;
// lastName:string;
// constructor(firstName:string , lastName:string){
//     this.firstName = firstName
//     this.lastName = lastName
// }
// display(){
//     console.log(this.firstName+this.lastName)
// }
// }
// class PersonH extends PersonQ {
//     display(): void {
//         console.log(this.firstName)
//     }
// }
// let personq1 = new PersonQ('chinmay','deshpande')
// personq1.display()
// new PersonH('chinmay','deshpande')
//personq1.firstName If Protected can only be accessible inside class and its subclasses
//personq1.firstName  If private not accessible outside the class
//---------------- 1-------------
// let personq1 = new PersonQ()
// console.log(personq1.firstName)
// console.log(personq1.lastName)
// Program2
//class PersonI {
// firstName:string
// lastName:string
// constructor(public firstName:string , public lastName:string){
//     // this.firstName = firstName
//     // this.lastName = lastName
// }
// display(){
//     console.log(this.firstName,this.lastName)
// }
// constructor(private firstName:string , private lastName:string){
//     // this.firstName = firstName
//     // this.lastName = lastName
// }
// display(){
//     console.log(this.firstName,this.lastName)
// }
// setFirstName(firstName:string){
//     this.firstName = firstName
// }
// geTFirstName(){
//     return  this.firstName
// }
// set
// set  sFirstName(firstName:string){
//     this.firstName = firstName
// }
// // get
// get gFirstName(){
//     return this.firstName
// }
//}
// let q1 = new PersonI("chinmay","deshpande")
// console.log(q1.gFirstName)
// q1.sFirstName = "tanmay"
// console.log(q1.gFirstName)
// console.log(q1.geTFirstName())
// q1.setFirstName('tanmay')
// console.log(q1.geTFirstName())
// abstract 
// if you class is abstract or it contains any abstract method
// 1) you cannot create object of it 
// 2) if method is abstract and if extends the abstract the child class has to give 
// definition for abstract methods
// abstract class WorldBank {
//     abstract loan():void;
//     abstract save():void
//     displayCountry():void{
//         console.log('India')
//     }
// }
// class SBIN extends WorldBank {
//      loan():void{
//         console.log('SBIN loan')
//      };
//      save():void{
//         console.log('SBI save')
//      }
// }
// class PNBN extends WorldBank {
//     loan():void{
//        console.log('PNBN loan')
//     };
//     save():void{
//        console.log('PNBN save')
//     }
// }
// new SBIN().displayCountry()
// new PNBN().displayCountry(
//let qa = new WorldBank()
// class Fa {
//     constructor(public firstName:string,public lastName:string){
//     }
//     display(){
//         console.log(this.firstName , this.lastName)
//     }
// }
// class Sn extends Fa {
//     constructor(firstName:string,lastName:string,public sname:string){
//         super(firstName,lastName)
//         this.sname = sname
//     }
//     display(): void {
//         console.log(this.sname , this.lastName)
//         super.display()
//     }
// }
// new Sn("shirish","deshpande","chinmay").display()
