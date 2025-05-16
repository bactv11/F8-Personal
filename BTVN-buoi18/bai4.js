const employees = [
    {id: 1, name: "Alice", age: 23, status: 'working'},
    {id: 2, name: "Bob", age: 25, status: 'working'},
    {id: 3, name: "John", age: 27, status: 'working'},
    {id: 4, name: "David", age: 23, status: 'quited'},
    {id: 5, name: "Eve", age: 20, status: 'working'},
];
const products = [
    {id: 1, name: "Phone", price: 1200},
    {id: 2, name: "Laptop", price: 3000},
    {id: 3, name: "Tab", price: 2000},
    {id: 4, name: "PC", price: 800},
    {id: 5, name: "Monitor", price: 1500},
];
const orders = [
    {id: 1, employeeId: 1, productId: 4, quantity: 1},
    {id: 2, employeeId: 2, productId: 2, quantity: 4},
    {id: 3, employeeId: 1, productId: 5, quantity: 1},
    {id: 4, employeeId: 3, productId: 1, quantity: 2},
    {id: 5, employeeId: 2, productId: 5, quantity: 3},
    {id: 6, employeeId: 4, productId: 1, quantity: 1},
    {id: 7, employeeId: 5, productId: 3, quantity: 2},
]

/*


      dùng for lặp qua order
               │
               ▼
      lấy ra và cộng lại số lượng
         theo id
               │
               ▼
      dùng for lặp qua product
        lấy ra productId lớn nhất
               │
               ▼
      tìm và lấy ra thông tin sản
           phẩm trong product



                                    */

const hotProduct = {};

for (let order of orders) {
    if (!hotProduct[order.productId]) {
        hotProduct[order.productId] = 0;
    }
    hotProduct[order.productId] += order.quantity;
}
let bestProductId = null;
let maxQuantity = 0;

for (let productId in hotProduct) {
    if (hotProduct[productId] > maxQuantity) {
        maxQuantity = hotProduct[productId];
        bestProductId = parseInt(productId);
    }
}
const bestSellingProduct = products.find(p => p.id === bestProductId);


console.log({...bestSellingProduct, totalSold: maxQuantity
});