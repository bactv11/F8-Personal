/*
*


      Tính tiền cước taxi
       s=0 số tiền
       x=0 số cước ban đầu
             │
             │
             │ <= 1km
             ├──────────────►  s= x * 15000
             │                                             for( let i = 0 , i <=120 i++)
             │                                                 i = 1
             │ <= 5km                                             1 * 15000 thỏa mãn bước nhảy i <=6
             ├─────────────►   s= (x*15000) + (x-1)*13500      i = 2
             │                                                   i * 15000 + i * 13500 thỏa mãn i <= 6
             │                                                 ...
             │ > 5km                                           i   120
             ├─────────────►  s = 15000 + 4 * 13500 + (x - 5) * 11000;
             │
             │
             │ >120 km
             └─────────────►  s=s*0.9 '0.9' được coi là 90% của 100% - 10%= 90%                                                                           */
let x = 12;  //số km thực
let s = 0; // số tiền ban đầu
// Tính tiền dựa trên số km
if (x <= 1) {
    s = x * 15000;
} else if (x <= 5) {
    s = 15000 + (x - 1) * 13500;
} else {
    s = 15000 + 4 * 13500 + (x - 5) * 11000;
}
// Giảm giá 10% nếu đi trên 120km
if (x > 120) {
    s = s * 0.9;
}

console.log("Số km:", x);
console.log("Tiền cước:", s.toLocaleString() + "đ");
