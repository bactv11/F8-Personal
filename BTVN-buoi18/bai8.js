
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
 dùng for lặp các phần tử trong order

             │
             │
             ▼
  với mỗi employeeId ta có được productId

             │
             ▼
   từ đó ta có sản phẩm có doanh thu cao nhất cho từng nhân viên

     employees.find(e => e.id === parseInt(employeeId))
     products.find(p => p.id === bestProductId)

                                                                   */
const employeeProductRevenue = {};

for (let order of orders) {
    const { employeeId, productId, quantity } = order;
    const product = products.find(p => p.id === productId);
    const revenue = quantity * product.price;

    if (!employeeProductRevenue[employeeId]) {
        employeeProductRevenue[employeeId] = {};
    }

    if (!employeeProductRevenue[employeeId][productId]) {
        employeeProductRevenue[employeeId][productId] = 0;
    }

    employeeProductRevenue[employeeId][productId] += revenue;
}

const bestProductPerEmployee = [];

for (let employeeId in employeeProductRevenue) {
    const productRevenues = employeeProductRevenue[employeeId];

    let bestProductId = null;
    let maxRevenue = 0;

    for (let productId in productRevenues) {
        if (productRevenues[productId] > maxRevenue) {
            maxRevenue = productRevenues[productId];
            bestProductId = parseInt(productId);
        }
    }

    const employee = employees.find(e => e.id === parseInt(employeeId));
    const product = products.find(p => p.id === bestProductId);

    bestProductPerEmployee.push({
        employeeName: employee.name,
        bestProduct: product.name,
        productRevenue: maxRevenue
    });
}

console.log(bestProductPerEmployee);
