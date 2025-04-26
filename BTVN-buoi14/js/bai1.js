/*
*
  ┌────────────────────────┐
  │mảng array              │
  └─────────┬──────────────┘
            │  tạo 1 mảng để lưu trữ dữ liệu theo class
            ▼
  let newClass=[]
            │
            │dùng vòng lặp for để tìm class của mảng student
            ▼
  let classOld = students[i].class
            │ nếu tìm ra vòng lặp khác nhau sẽ lưu vào mảng newClass đã tạo
            ▼
  !newClass[classOld]
            │   in ra màn hình mảng mới
            ▼
    console.log[]
                                                                             */


const students = [
    { name: "An", class: "12A1" },
    { name: "Bình", class: "12A2" },
    { name: "Cường", class: "12A1" },
    { name: "Dung", class: "12A3" },
    { name: "Em", class: "12A2" }
];
let newClass=[]
for (let i = 0; i < students.length; i++) {
    let classOld = students[i].class
    if (!newClass[classOld]){
        newClass[classOld]=[]
    }
    newClass[classOld].push(students[i].name)
    console.log(newClass)
}