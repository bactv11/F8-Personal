import { Product } from "./Product.js";
import { Customer } from "./Customer.js";
import { Order } from "./Order.js";
function listOrdersByCustomer(customers, orders) {
    customers.forEach(customer => {
        console.log(`\nKhách hàng: ${customer.getName()}`);

        // Lọc ra các đơn hàng của khách này
        const customerOrders = orders.filter(order => order.getCustomer().getId() === customer.getId());

        if (customerOrders.length === 0) {
            console.log("→ Không có đơn hàng nào.");
        } else {
            let totalAmount = 0;

            customerOrders.forEach((order, index) => {
                console.log(`  ${index + 1}. ${order.toString()}`);
                totalAmount += order.getTotalPrice();
            });

            console.log(`Tổng số đơn hàng: ${customerOrders.length}`);
            console.log(`Tổng tiền: ${totalAmount.toLocaleString('vi-VN')} VNĐ`);
        }

        console.log('-------------------------------');
    });
}


//bai3
function findHighestValueOrder(orders) {
    if (orders.length === 0) return null;

    let maxOrder = null;
    let maxTotal = 0;

    for (let order of orders) {
        const total = order.getTotalPrice();
        if (total > maxTotal) {
            maxTotal = total;
            maxOrder = order;
        }
    }

    return maxOrder;
}

function displayHighestOrder(order) {
    if (!order) {
        console.log("Không có đơn hàng nào.");
        return;
    }

    const customer = order.getCustomer();
    const products = order.getProducts();
    const total = order.getTotalPrice();

    console.log("=== THÔNG TIN ĐƠN HÀNG CÓ GIÁ TRỊ CAO NHẤT ===");
    console.log(`Mã đơn hàng: ${order.toString()}`);
    console.log(`Khách hàng: ${customer.toString()}`);
    console.log(`Tổng giá trị đơn hàng: ${total.toLocaleString('vi-VN')} VNĐ`);
    console.log("Danh sách sản phẩm trong đơn hàng:");

    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.toString()}`);
    });
}
// ======= TEST CASE =======

// Tạo khách hàng
const customer1 = new Customer(1, "Nguyễn Văn An", "nguyenan@example.com", "0912345678");
const customer2 = new Customer(2, "Trần Thị Bình", "tranbinh@example.com", "0987654321");
const customer3 = new Customer(3, "Lê Hoàng Cường", "lecuong@example.com", "0978123456");
const customers = [customer1, customer2, customer3];

// Tạo sản phẩm
const product1 = new Product(1, "Laptop Dell XPS", 25000000);
const product2 = new Product(2, "Điện thoại Samsung Galaxy", 12000000);
const product3 = new Product(3, "Tai nghe Sony", 3000000);
const product4 = new Product(4, "Chuột Logitech", 800000);
const product5 = new Product(5, "Bàn phím cơ", 1500000);
const products = [product1, product2, product3, product4, product5];

// Tạo đơn hàng
const order1 = new Order(1, customer1, new Date("2023-05-15"));
order1.addProduct(product1);
order1.addProduct(product3);

const order2 = new Order(2, customer2, new Date("2023-05-16"));
order2.addProduct(product2);
order2.addProduct(product4);
order2.addProduct(product5);

const order3 = new Order(3, customer1, new Date("2023-05-17"));
order3.addProduct(product2);
order3.addProduct(product5);

const order4 = new Order(4, customer3, new Date("2023-05-18"));
order4.addProduct(product1);
order4.addProduct(product2);
order4.addProduct(product3);
order4.addProduct(product4);

const orders = [order1, order2, order3, order4];

// ======= GỌI HÀM BÀI 2 =======
console.log("=== BÀI 2: THỐNG KÊ ĐƠN HÀNG THEO KHÁCH HÀNG ===");
listOrdersByCustomer(customers, orders);


// ======= GỌI HÀM BÀI 2 =======
console.log("=== BÀI 2: THỐNG KÊ ĐƠN HÀNG THEO KHÁCH HÀNG ===");
listOrdersByCustomer(customers, orders);

// ======= GỌI HÀM BÀI 3 =======
console.log("\n=== BÀI 3: ĐƠN HÀNG CÓ GIÁ TRỊ CAO NHẤT ===");
const maxOrder = findHighestValueOrder(orders);
displayHighestOrder(maxOrder);