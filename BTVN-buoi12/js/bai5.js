/*
*
   ┌────────────────────────┐
   │  bảng cửu chương       │
   │   i số nhân            │
   │   j giá trị            │
   │                        │
   └─────────┬──────────────┘
             │
             │Dùng vòng lặp để in bảng cửu chương từ 1 đến 10
             │Vòng ngoài (i): chạy từ 1 → 10 → mỗi lần là 1 bảng cửu chương.
             ├────────────────────► for (let i = 2; i <= 10; i++)
             │
             │ Vòng trong (j): chạy từ 1 → 10 → nhân số i với từng số j
             │└────────────────────►
                                       for (let j = 1; j <= 10; j++)
                                                                             */

for (let i = 2; i <= 10; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('----------------------');
}