interface Personq {
    nameq:string;
    age:number;
    greet(word:string):void
}

type Personh = {
    nameq:string;
    age:number;
    greet(word:string):void
}

let user:Personq = {
    nameq:"chinmay",
    age:30,
    greet:(word:string)=>{
        console.log(word)
    }
};
user.greet('hello')


let user2:Personh = {
    nameq:"chinmay",
    age:30,
    greet:(word:string)=>{
        console.log(word)
    }
};

user2.greet('ram')

// type and interface 

type greet = string|boolean|number
type nameH = 'ram'|'sham'