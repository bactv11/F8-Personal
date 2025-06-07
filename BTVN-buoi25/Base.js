export class Base{
    #id
    name
    constructor(id,name){
        this.#id=id;
        this.name = name;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.#id
    }
    setName(name){
        this.name = name;
    }
}