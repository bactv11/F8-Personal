const employees = [
    { id: 1, name: "Alice", age: 23, status: 'working' },
    { id: 2, name: "Bob", age: 25, status: 'working' },
    { id: 3, name: "John", age: 27, status: 'working' },
    { id: 4, name: "David", age: 23, status: 'quited' },
    { id: 5, name: "Eve", age: 20, status: 'working' },
];
const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000  },
    { id: 3, name: "Tab", price: 2000  },
    { id: 4, name: "PC", price: 800  },
    { id: 5, name: "Monitor", price: 1500  },
]
const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 2, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 1 },
    { id: 4, employeeId: 3, productId: 1, quantity: 2 },
    { id: 5, employeeId: 2, productId: 5, quantity: 3 },
    { id: 6, employeeId: 4, productId: 1, quantity: 1 },
    { id: 7, employeeId: 5, productId: 3, quantity: 2 },
];


/*
Bai: 1
Lay ra ds nhan vien dang lam viec


Bai 2:
Lay ra nhan vien lon tuoi nhat


Bai 3:
Lay ra san phan gia re nhat


Bai 4:
Tim ra san phan ban chay nhat ( ban nhieu nhat ve bat so luong )


Bai 5:
Tim ra san phan doanh thu cao nhat ( nhieu tien nhat )


Bai 6:
Tim ra nhan vien ban nhieu hang nhat


Bai 7:
Tim ra nhan vien co doanh thu cao nhat


Bai 8:
Tim ra san pham ban co doanh thu nhat cua moi nhan vien


Bai 9:
Gia su nhan vien se nhan duoc hoa hong la 3%
-> tim hoa hong cho moi nhan vien


Bai 10:
Sap xep nhan vien theo thu tu giam dan theo doanh thu
* */

/*Bai: 1
Lay ra ds nhan vien dang lam viec
*/
let peopleWorking = employees.filter( employees=> employees.status === "working");
console.log(peopleWorking);
/*Bài 2
* lấy ra age lớn nhất*/
let ageMax = employees[0].age
for (let i = 0; i < employees.length; i++) {
    if (employees[i].age > ageMax){
        ageMax = employees[i].age
        console.log(ageMax)
    }
}

 /*
* bài 3
* Lay ra san phan gia re nhat*/
let priceMin= products[0].price
for (let i = 0; i < products.length; i++) {
    if (products[i].price < priceMin){
        priceMin = products[i].price
        console.log(priceMin)
    }
}
/*
* bài 4
*Tim ra san phan ban chay nhat */
let orderMax = orders[0]
for (let i = 0; i < orders.length; i++) {
    if (orders[i].quantity > orderMax.quantity){
        orderMax = orders[i]
    }
    console.log(orderMax)
}
/* từ orderMax ta timd được producs*/
for (let i = 0; i < products.length; i++) {
    if (products[i].id === orderMax.productId){
        console.log(products[i])
    }
}

/* bài 5
* Tim ra san phan doanh thu cao nhat */

/*Bài 6
* */
let usenameMax= orders[0]
for (let i = 0; i < orders.length; i++) {
    if(orders[i].productId > usenameMax.productId){
        usenameMax = orders[i]
    }
    console.log(usenameMax)
}
for (let i = 0; i < products.length; i++) {
    if (products[i].id === usenameMax.productId){
        console.log(products[i])
    }
}







