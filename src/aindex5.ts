// Inheritance 

// multi-level 

// single inheritance 


// //program 1

// class Grandfather {
//     firstName:string = "manohar"
//     lastName:string = "deshpande"
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class FatherA extends Grandfather{
//     fFirstName:string = "shirish"
//     displayFatherName(){
//         console.log(this.fFirstName + this.lastName)
//     }

// }

// class SonSS extends FatherA {

//     ssName:string ="chinmay"
//     displaySonName(){
//         console.log(this.ssName + this.lastName)
//     }
// }
// let chinmayA = new SonSS()

// // accessing property
// chinmayA.fFirstName
// chinmayA.ssName
// chinmayA.firstName

// // methods
// chinmayA.displayFatherName()
// chinmayA.displayName()
// chinmayA.displaySonName()


// // let shirish = new FatherA()
// // console.log(shirish.firstName)
// // console.log(shirish.lastName)
// // console.log(shirish.fFirstName)

// program 2 (with constructor and use of super keyword)

class Grandfather {
    firstName: string;
    lastName: string;
    constructor(fn: string, ln: string) {
        this.firstName = fn
        this.lastName = ln
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}
class FatherB extends Grandfather {
    ffname: string;
    constructor(fn: string, ln: string, ffn: string) {
        super(fn, ln)
        this.ffname = ffn
    }

    displayName() {

        console.log(this.ffname + this.lastName)
    }

}

class SonB extends FatherB {
    sfname: string;
    constructor(fn: string, ln: string, ffn: string, ssn: string) {
        super(fn, ln, ffn)
        this.sfname = ssn
    }

    displayName() {
        console.log(this.sfname + this.lastName)
        super.displayName()

    }

}
let chinmayF = new SonB("manohar", "deshpande", "shirish", "chinmay")
chinmayF.displayName()
// //let shirish =new FatherB('manohar','deshpande') // child without constructor
// let shirish =new FatherB('manohar','deshpande','shirish')
// shirish.displayName()

// Program 3

class Mother {
    mName: string
    lname: string

    constructor(mfn: string, mln: string) {
        this.mName = mfn
        this.lname = mln
    }

    display(){
        console.log(this.mName , this.lname)
    }
}

class SonC extends Mother {
    sname: string
    constructor(mfn: string, mln: string, sn: string) {
        super(mfn, mln)
        this.sname = sn

    }

    display(){
        super.display()
        console.log(this.sname , this.lname)
    }


}

class DaughterC extends Mother {

    dname: string
    constructor(mfn: string, mln: string, dn: string) {
        super(mfn, mln)
        this.dname = dn

    }
    display(){
        console.log(this.dname , this.lname)
        super.display()
    }


}

let gauri = new DaughterC("kanchan","deshpande","gauri")
gauri.display()
let chinmayaaa = new SonC("kanchan","deshpande","chinmay")
gauri.display()









//let aa = new Grandfather("manohar","deshpande")



