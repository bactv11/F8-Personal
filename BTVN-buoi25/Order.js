export class Order{
    #id
    #customer
    #products
    #orderDate

    constructor(id, customer,orderDate=new Date()) {
        this.#id = id;
        this.#customer = customer;
        this.#products = [];
        this.#orderDate = orderDate;
    }
    getId(){
        return this.#id;
    }
    getCustomer(){
        return this.#customer;
    }
    getProducts(){
        return this.#products;
    }
    getOrderDate(){
        return this.#orderDate;
    }
    setCustomer(customer){
        this.#customer= customer;
    }
    setProducts(products){
        this.#products = products;
    }
    setOrderDate(orderDate){
        this.#orderDate = orderDate;
    }

    addProduct(product){
        this.#products.push(product);
    }
    onRemove(product){
        this.#products=this.#products.filter(product => product.id !== product.id);
    }
    getTotalPrice(){
            return this.#products.reduce((sum, product) => sum + product.price, 0);
    }

    toString() {
        return `Đơn hàng #${this.#id}, khách hàng: ${this.#customer.getName()}, ngày đặt: ${this.#orderDate.toLocaleDateString('vi-VN')}`;
    }

}