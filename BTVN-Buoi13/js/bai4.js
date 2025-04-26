/*
*
     const number = [...]
             │
             ▼
     number.sort()    ta dùng sort để sắp xếp tăng dần
            │
            ▼

    let numberNew = 6;     khai báo biến số cần chèn
    let numberLocation = number.length      khai báo vị trí
             │
             ▼
    for(let i = 0; i,number.length;i++   dùng vòng lặp và check vị trí
        if numberNew < number[i]
            numberLocation = i
              │
              ▼
    number.splice( numberLocation, 0 , numberNew)   lưu vào vị trí đã tìm

                                                                                            */

const numbers = [5, 1, 9, 8, 10];
numbers.sort( function(a,b){
    return a-b;
} )
console.log(numbers)
let numberNew = 6;
let numberLocation = numbers.length; // Giả sử chèn vào cuối nếu không tìm thấy

for (let i = 0; i < numbers.length; i++) {
    if (numberNew <= numbers[i]) {
        numberLocation = i; // tìm thấy vị trí cần chèn
        break;         // dừng vòng lặp vì đã tìm được chỗ chèn
    }
}

// Chèn số vào đúng vị trí đã tìm được
numbers.splice(numberLocation, 0, numberNew);

console.log("Mảng sau khi chèn 6:", numbers);