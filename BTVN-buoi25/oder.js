import {Customer} from "./customer.js";
export class Oder{
    #id
    #customer
    #product
    #oderDate
    constructor(id,customer,oderDate= new Date()){
        // oderDate= new Date() nếu kh truyền dữ lieeju vào thì mặc định tgian mua hàng sẽ là tgian hiên tại
        this.#id = id;
        this.#customer = customer;
        this.#product = [] ;//mảng các đối tượng product
        this.#oderDate = oderDate;
    }
    getId(){
        return this.#id;
    }
    getCustomer(){
        return this.#customer;
    }
    getProduct(){
        return this.#product;
    }
    getOderDate(){
        return this.#oderDate;
    }
    setCustomer(customer){
        return this.#customer = customer;
    }
    setProduct(product){
        this.#product = product;
    }
    setOderDate(oderDate){
        this.#oderDate = oderDate;
    }

    toString() {
        return `Đơn hàng #${this.#id}, khách hàng: ${this.#customer.getName()}, ngày đặt: ${this.#oderDate.toLocaleDateString('vi-VN')}`;
    }

}