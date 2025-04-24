/*
*


                               ┌─────────────────────┐
                               │                     │
                               │ const number = [...]│
                               │                     │
                               │                     │
                               └─────────┬───────────┘
                                         │
                        ┌────────────────┴───────────────┐
                        │                                │
                        ▼                                ▼
              khai báo biến lớn nhất và             khai báo biến nhỏ nhất và vị trí
                 vị trí của số cần tìm                    của số cần tìm
           ┌───────────────────────────┐         ┌─────────────────────────────┐
           │   let numberMax=[0]       │         │ let numberMin=[0]           │
           │   let numberLocationMax=0 │         │ let numberLocationMin=0     │
           └───────────┬───────────────┘         └────────────────┬────────────┘
                       │                                          │
                       │                                          │
                       ▼                                          ▼
  ┌─────────────────────────────────────────┐      ┌──────────────────────────────────────────┐
  │  for (let i = 0; i< number.length; i++) │      │ for(let=i;i<number.length;i++)           │
  │  if(number[i] > numberMax)              │      │   if(number[i]<numberMin)                │
  │      numberMax=number[i]                │      │     numberMin=number[i]                  │
  │      numberLocationMax =i               │      │     numberLocationMin=i;                 │
  └─────────────────────────────────────────┘      └──────────────────────────────────────────┘
    dùng vòng lặp để chạy mảng
       kiểm tra và so sánh số lớn nhất
          và lấy vị trí của nó . số bé nhất làm tương tự                                            */

const numbers = [5, 1, 9, 8, 10];
let numberMax = numbers[0];
let numberLocationMax= 0;
let numberMin=numbers[0];
let numberLocationMin=0;

for (let i=0; i<numbers.length; i++){
    if (numbers[i]>numberMax){
        numberMax=numbers[i];
        numberLocationMax=i;
    }
    if (numbers[i]<numberMin){
        numberMin=numbers[i];
        numberLocationMin=i;
    }
}
console.log(' trong mảng [5, 1, 9, 8, 10]; \n');
console.log("Phần tử lớn nhất là:", numberMax, "ở vị trí", numberLocationMax);
console.log("Phần tử nhỏ nhất là:", numberMin, "ở vị trí", numberLocationMin);