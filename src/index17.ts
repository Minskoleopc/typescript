
function Logger(logString:string){
    return  function(constructor:Function){
        console.log(logString)
        console.log(constructor)
    } 
}
function withTemplate(template:string,idatt:string){
    return function(constructor:any){
        let r = document.querySelector(`#${idatt}`)
        let pq = new constructor();

        if(r){
            r.innerHTML = template
            document.write(pq.name)
        }
    }

}

@withTemplate('<h1>Hello i am new to js<h1>','one')
class PersonQQQ {
    name = "MAX"
    constructor(){
        console.log('create the person object')
    }
}