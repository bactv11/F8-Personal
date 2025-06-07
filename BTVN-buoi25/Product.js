export class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    toString() {
        return `Sản phẩm: ${this.name}, Giá: ${this.price.toLocaleString('vi-VN')} VNĐ`;
    }
}