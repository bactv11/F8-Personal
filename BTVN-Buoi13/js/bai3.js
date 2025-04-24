/*
*


           const number =[..]
                  │
                  │
                  │
                  ▼
       let checkNumber=[]      tạo 1 mảng rỗng mới để lưu phần từ
                 │
                 │
                 │
                 ▼
       for (let i=0;i<number.length;i++)      dùng vòng lặp để check phần tử trong mảng number
                 │
                 │
                 ▼
       let number =number[i]  từ vị trí i trong mảng number gán vào biến number
                 │
                 │
                 │
                 ▼
      if(checkNumber.indexOf(number) === -1  nếu nhe  indexOf() tìm vị trí của phần tử trong mảng.
            checkNumber.push(number)
                                                      Nếu không tìm thấy, nó trả về -1.

                                                      Vậy === -1 nghĩa là chưa có trong mảng → có thể thêm vào.

                                                      Nếu chưa có trong mảng, mình dùng push() để thêm số đó vào mảng
                                                                                                                       */
const numbers = [5, 1, 9, 1, 7, 5, 8, 10];
//khai báo 1 mảng mới để check các sô lặp lưu lại các số không trùng nhau
let checkNumber = [];

for (let i = 0; i < numbers.length; i++) {
    // lấy vị trí i trong mảng number gán vào biến number
    let number = numbers[i];
    // indexOf vị trí của giá trị, và kiểm tra number có nằm trong mảng checkNumber chưa
    if (checkNumber.indexOf(number) === -1) {
        //khi chưa có mảng dùng push để thêm vào trong mảng
        checkNumber.push(number);
    }
}
console.log('[5, 1, 9, 1, 7, 5, 8, 10]\n mảng sau khi đã check lặp ta có mảng mới\n'+checkNumber);
