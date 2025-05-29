 export class Person {
    #name;
    #age;

    eat(){
        console.log("Personal.")
    }
    //get
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    //set
    setName(name){
        this.#name = name;
    }
    setAge(age){
        this.#age = age;
    }
    //Constructor
    constructor(name ,age ) {
        this.#name = name;
        this.#age = age;
    }
}