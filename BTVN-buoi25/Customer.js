import {Base} from "./Base.js";

export class Customer extends Base {
    #email
    #phoneNumber
    constructor(id,name, email, phoneNumber) {
        super(id,name);
        this.#email = email;
        this.#phoneNumber = phoneNumber;
    }
    getEmail() {
        return this.#email;
    }
    getPhoneNumber() {
        return this.#phoneNumber;
    }
    setEmail(email) {
        this.#email = email;
    }
    setPhoneNumber(number) {
        this.#phoneNumber = number;
    }
    toString() {
        return `Khách hàng: ${this.getName()}, email: ${this.#email}, SĐT: ${this.#phoneNumber}`;
    }
}