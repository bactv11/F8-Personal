/*
 ┌────────────────────┐
 │                    │
 │   TÍnh số nguyên   │
 │   n số nguyên      │
 │   s giá trị bthuc  │
 │                    │
 │                    │
 └────────┬───────────┘
          │
          │
          │ n <0
          ├───────────►  false
          │
          │
          │ n > 0
          └───────────►   S = S + i * (i + 1);
        ta dùng vòng lap for mỗi lần lặp, i * (i + 1) được cộng dồn vào tổng S

                                                  */
let n = 2;
let S = 0;
if (n < 1) {
    console.log(false)
}else {
for (let i = 1; i <= n; i++) {
    S = S + i * (i + 1);
}
}
console.log("n =", n);
console.log("Giá trị S =", S);