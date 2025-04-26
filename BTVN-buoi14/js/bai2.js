/*
*

        ┌────────────────────────────────────┐
        │  mảng cho sẵn                      │
        │                                    │
        └───────────────┬────────────────────┘
                        │ tạo 1 mảng lưu trữ
                        ▼
          let bestStudents = {};

                        │
                        │ dùng vòng lặp for kiểm tra trong mảng
                        ▼
          let stu = students[i];
              let lop = stu.class;
                        │ lấy ra danh sách student và lưu vào mảng mới
                        │ sau khi có danh sách sẽ so sánh điểm và in ra danh sách mới
                        ▼
          !bestStudents[lop] || stu.score > bestStudents[lop].score

                        │
                        │
                        ▼
                  console.log()
                                                                                            */
const students = [
    { name: "An", class: "12A1", score: 8.5 },
    { name: "Bình", class: "12A1", score: 9.2 },
    { name: "Cường", class: "12A2", score: 7.5 },
    { name: "Dung", class: "12A2", score: 9.0 },
    { name: "Em", class: "12A3", score: 8.0 }
];

let bestStudents = {};

for (let i = 0; i < students.length; i++) {
    let stu = students[i];
    let lop = stu.class;

    if (!bestStudents[lop] || stu.score > bestStudents[lop].score) {
        bestStudents[lop] = stu;
    }

}
for (let lop in bestStudents) {
    console.log(`Class ${lop} topStudent: ${bestStudents[lop].name} (Điểm: ${bestStudents[lop].score})`);
}