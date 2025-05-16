const customers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Green" },
];

const products = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Phone", price: 800 },
    { id: 103, name: "Tablet", price: 500 },
    { id: 104, name: "Smartwatch", price: 300 },
    { id: 105, name: "Headphones", price: 150 },
];

const orders = [
    { id: 1001, customerId: 1, items: [{ productId: 101, quantity: 2 }, { productId: 102, quantity: 1 }] },
    { id: 1002, customerId: 2, items: [{ productId: 102, quantity: 1 }, { productId: 103, quantity: 3 }] },
    { id: 1003, customerId: 3, items: [{ productId: 104, quantity: 5 }, { productId: 105, quantity: 2 }] },
    { id: 1004, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 103, quantity: 2 }] },
    { id: 1005, customerId: 5, items: [{ productId: 105, quantity: 10 }] },
    { id: 1006, customerId: 1, items: [{ productId: 101, quantity: 1 }, { productId: 105, quantity: 3 }] },
    { id: 1007, customerId: 2, items: [{ productId: 104, quantity: 2 }, { productId: 103, quantity: 1 }] },
    { id: 1008, customerId: 3, items: [{ productId: 102, quantity: 2 }] },
    { id: 1009, customerId: 4, items: [{ productId: 101, quantity: 1 }, { productId: 102, quantity: 1 }] },
    { id: 1010, customerId: 5, items: [{ productId: 103, quantity: 4 }, { productId: 104, quantity: 3 }] },
];
// output
// [
//     {
//         id: 1,
//         name: "John Doe",
//         totalSpent: 3600,
//         products: [
//             { name: "Laptop", quantity: 3, totalSpent: 3600 },
//             { name: "Phone", quantity: 1, totalSpent: 800 },
//             { name: "Headphones", quantity: 3, totalSpent: 450 }
//         ]
//     },

/*
*




      dùng for check lấy ra id và tên
               của customer
                    ▼
      lồng for tìm trong dsach oder
                     │
                     │
                     ▼

           nếu id customer trùng
            với id oder
                     │
                     ▼
            p.name === product.name
            kiểm tra xem tên sp có tron oder chưa
                     │
                     │
             ┌───────┴───────┐
             ▼               ▼
      đã có trong oder     chưa có thì sẽ thêm vào
   cộng số lượng và tính     danh sách
            tổng tiền
                                                    */

const customerElement = [];
for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];

    // Tạo một đối tượng chứa thông tin khách hàng
    const customerData = {
        id: customer.id,
        name: customer.name,
        totalSpent: 0, // Tổng tiền khách hàng đã chi
        products: []   // Danh sách sản phẩm mà khách đã mua
    };

    // Duyệt qua tất cả các đơn hàng
    for (let j = 0; j < orders.length; j++) {
        const order = orders[j];

        // Kiểm tra đơn hàng này có thuộc về khách hàng hiện tại không
        if (order.customerId === customer.id) {
            // Duyệt qua từng sản phẩm trong đơn hàng
            for (let k = 0; k < order.items.length; k++) {
                const item = order.items[k];

                // Tìm thông tin sản phẩm từ danh sách sản phẩm chung
                const product = products.find(p => p.id === item.productId);

                if (product) {
                    const itemTotal = product.price * item.quantity;
                    customerData.totalSpent += itemTotal;

                    // Kiểm tra xem sản phẩm này đã có trong danh sách sản phẩm của khách chưa
                    const existingProduct = customerData.products.find(p => p.name === product.name);

                    if (existingProduct) {
                        // đã có => cộng thêm số lượng và tổng tiền
                        existingProduct.quantity += item.quantity;
                        existingProduct.totalSpent += itemTotal;
                    } else {
                        // chưa có => thêm sản phẩm mới vào danh sách
                        customerData.products.push({
                            name: product.name,
                            quantity: item.quantity,
                            totalSpent: itemTotal
                        });
                    }
                }
            }
        }
    }

    customerElement.push(customerData);
}
console.log(JSON.stringify(customerElement, null, 2));
