export class Employee {
    #id
    #name
    #address
    constructor(id,name,address) {
        this.#id = id
        this.#name = name
        this.#address = address
    }

    getId(){
        return this.#id
    }
    getName() {
        return this.#name
    }
    getAddress() {
        return this.#address
    }
    setName(name) {
        this.#name = name
    }
    setAddress(address) {
        this.#address = address
    }
    toString() {
        return `Employee: ${this.#id}, name: ${this.#name}, address: ${this.#address}`
    }
}