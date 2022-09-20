class Father {
    public firstName:string;
    protected lastName:string
    private city:string = "wardha"

    constructor(firstName:string,lastName:string){
        this.firstName = firstName
        this.lastName= lastName
    }

    display(){
        console.log(this.firstName+this.lastName)
    }

}

class Son extends Father{

    SonName:string
    constructor(firstName:string,lastName:string ,sName:string){
        super(firstName,lastName)
        this.SonName = sName
    }

    display(){
        console.log(this.SonName+this.lastName)
        console.log(this.lastName)
        super.display()
    }


}

let chinmay = new Son("shirish","deshpande","chinmay")
chinmay.display()

// private ------> within class
// public ---- class , in extended class , outside class
// protected --- in class and in extended class

// interface , abstract  // oops

