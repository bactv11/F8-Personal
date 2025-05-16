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
];
/*
*

  dùng for lặp qua orders
           │
           ▼
  lấy ra với mỗi order, tìm product.price
 hotMoneyEmployee[order.employeeId] += revenue;
           │
           ▼
  quantity × price => cộng vào employeeId
   maxRevenue = hotMoneyEmployee[employeeId]
           │
           ▼
     nhân viên có tổng doanh thu cao nhất.
  employees.find(e => e.id === topRevenueEmployeeId)
                                                      */
const hotMoneyEmployee = {};

for (let order of orders) {
    const product = products.find(p => p.id === order.productId);
    const revenue = order.quantity * product.price;

    if (!hotMoneyEmployee[order.employeeId]) {
        hotMoneyEmployee[order.employeeId] = 0;
    }

    hotMoneyEmployee[order.employeeId] += revenue;
}

let topRevenueEmployeeId = null;
let maxRevenue = 0;

for (let employeeId in hotMoneyEmployee) {
    if (hotMoneyEmployee[employeeId] > maxRevenue) {
        maxRevenue = hotMoneyEmployee[employeeId];
        topRevenueEmployeeId = parseInt(employeeId);
    }
}

const topRevenueEmployee = employees.find(e => e.id === topRevenueEmployeeId);

console.log({
    ...topRevenueEmployee,
    totalRevenue: maxRevenue
});