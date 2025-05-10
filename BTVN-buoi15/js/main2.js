// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log("Tổng:", sum); // 15
// // tìm số lớn nhất
// const numbers = [4, 7, 1, 9, 2];
// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }
// console.log("Lớn nhất:", max); // 9
//
//
//
// //đảo ngược mảng reversed
// const arr = [1, 2, 3, 4];
// const reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
// }
// console.log("Đảo ngược:", reversed); // [4, 3, 2, 1]
//
//
// //tìm số chẵn trong mảng
// const numbers = [3, 6, 8, 1, 5, 2];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         count++;
//     }
// }
// console.log("Số chẵn:", count); // 3
//
//
// // tìm các số lớn hơn 0
// const arr = [-2, 4, 0, -1, 5];
// const positives = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         positives.push(arr[i]);
//     }
// }
// console.log("Số dương:", positives); // [4, 5]
//
//
// //ktra xem có trong mảng không
// const arr = [10, 20, 30];
// const target = 20;
// let found = false;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//         found = true;
//         break;
//     }
// }
// console.log("Tồn tại:", found); // true
//
//
// //trung bình cộng
// const arr = [10, 20, 30];
// const target = 20;
// let found = false;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//         found = true;
//         break;
//     }
// }
// console.log("Tồn tại:", found); // true
//
//
// // xóa phần tử trùng nhau
// const arr = [1, 2, 2, 3, 4, 4];
// const unique = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//         unique.push(arr[i]);
//     }
// }
// console.log("Mảng duy nhất:", unique); // [1, 2, 3, 4]
//
//
// // gộp mảng
// const a = [1, 2];
// const b = [3, 4];
// const merged = [];
//
// for (let i = 0; i < a.length; i++) {
//     merged.push(a[i]);
// }
// for (let i = 0; i < b.length; i++) {
//     merged.push(b[i]);
// }
// console.log("Gộp mảng:", merged); // [1, 2, 3, 4]
//
//
// // tìm phần tử lớn thứ 2
// const arr = [3, 7, 1, 9, 5];
// let max = -Infinity;
// let secondMax = -Infinity;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max;
//         max = arr[i];
//     } else if (arr[i] > secondMax && arr[i] !== max) {
//         secondMax = arr[i];
//     }
// }
// console.log("Lớn thứ 2:", secondMax); // 7

const numbers = [1, 2, 3, 4, 5,4, 7, 1, 9, 2];

let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        console.log(sum)
    }
let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const numberMax = numbers[i]
        if ( numbers[i] >numberMax) {
            max = numbers[i];
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        numbers.reverse()
        numbers.join('+')
        console.log(numbers)

    }
/*
* 🔢 1. Tính tổng các phần tử trong mảng
* 🔍 2. Tìm số lớn nhất trong mảng
* 🔄 3. Đảo ngược mảng
* 🔢 4. Đếm số chẵn trong mảng
* 🔁 5. Lọc ra các số dương
* 🟰 6. Kiểm tra phần tử có tồn tại không
* 🧮 7. Tính trung bình cộng
* 💥 8. Xóa phần tử trùng nhau (duy nhất)
* 🔁 9. Gộp 2 mảng lại
* 🧠 10. Tìm phần tử lớn thứ 2
* */

//sắp xếp mảng
// const sorts= numbers.sort((a,b)=>a-b)
// console.log(sorts)

// Tính tổng các phần tử trong mảng
// const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(  `tổng các phần tử trong mảng ${sum} = ${numbers.join('+')}`);
//
// // Tìm số lớn nhất trong mảng
// const max = Math.max(...numbers);
// console.log(max);
//
// // Đảo ngược mảng
// const reversed = numbers.reverse();
// console.log(reversed);
//
// // Đếm số chẵn trong mảng
// const count = numbers.filter(num => num % 2 === 0).length;
// console.log(count);
//
// //Lọc ra các số dương
// const positives = numbers.filter(num => num > 0);
// console.log(positives);
//
// //Kiểm tra phần tử có tồn tại không
// const found = numbers.includes(10);
// console.log(found);
//
// //Tính trung bình cộng
// const average = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
// console.log(average);
//
// //Xóa phần tử trùng nhau (duy nhất)
// const unique = [...new Set(numbers)];
// console.log(unique);
//
// //Gộp 2 mảng lại
// const merged = [...numbers, ...numbers];
// console.log(merged);
//
// //Tìm phần tử lớn thứ 2
// const secondMax = numbers.reduce((acc, cur) => {
//     if (acc > cur) {
//         return acc;
//     }
//     return cur;
// }, numbers[9]);
// console.log(secondMax);

/* số lớn nhất
const numbers = [4, 7, 1, 9, 2];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Lớn nhất:", max); // 9*/


/* đảo ngược mảng
* const arr = [1, 2, 3, 4];
const reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
console.log("Đảo ngược:", reversed); // [4, 3, 2, 1]*/

/* kieerm tra xem phần tử có tồn tại không
* const arr = [10, 20, 30];
const target = 20;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        found = true;
        break;
    }
}
console.log("Tồn tại:", found); // true
* */

/* TRUNG BÌNH CỘNG
* const scores = [8, 7, 9, 6];
let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}
const avg = sum / scores.length;
console.log("Trung bình:", avg); // 7.5
* */

