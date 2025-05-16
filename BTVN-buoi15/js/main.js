// const colors = [
//     { id: 1, name: 'Red' },
//     { id: 2, name: 'Blue' },
// ];
//
// const flowers = [
//     { id: 1, name: 'Rose', colorId: 1 },      // Red
//     { id: 2, name: 'Tulip', colorId: 2 },     // Blue
//     { id: 3, name: 'Carnation', colorId: 1 }, // Red
// ];
const colors = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `color ${i + 1}`
}));
const flowers = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `flower ${i + 1}`,
    colorId: Math.floor(Math.random() * 3) + 1 // random colorId between 1 and 2000
}));
//sắp xếp lại thứ tự theo id tăng dần
const sortedColors = [...colors].sort((a, b) => a.id - b.id);
const sortedFlowers = [...flowers].sort((a, b) => a.colorId - b.colorId);
// //

/*
*

     dùng for để lặp từng phần tử
        for i => flowers
        for j => colors
              │
              ▼
      check flowers[i].colorId
       trùng với colors[j].id
              │
              ▼
       lưu vào mảng mới và
         console ra dữ liệu
                                  */

const result = [];
for (let i = 0; i < flowers.length; i++) {
    for (let j = 0; j < colors.length; j++) {
        if (flowers[i].colorId === colors[j].id) {
            result.push({
                id: flowers[i].id,
                name: flowers[i].name,
                colorId: flowers[i].colorId,
                color: colors[j].name,
            });
        }
        console.log(result)
    }
}

// binary search

/*
*

 left = 0; right = arr.length-1
  lặp từ phần tử đầu đến cuối
       của mảng
            │
            ▼
 dùng vòng lặp kiểm tra và lấy về gtri
            │
            ▼
  nếu trùng id => trả về gtri đang cần tìm
            │
            ▼
  nhỏ hơn => tiếp tục lặp tìm bên phải
            │
            ▼
  lớn hơn => tìm bên trái
                                            */


const user = [
    { id: 1, name: 'Nguyen Van A', age: 10 },      // Red
    { id: 2, name: 'Le Van b', age: 20 },     // Blue
    { id: 3, name: 'Tran Van C', age: 12 }, // Red
];

function binarySearchColorById(user, userID) {
    let left = 0;
    let right = user.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midId = user[mid].id;

        if (midId === userID) {
            return user[mid]; // Tìm thấy
        } else if (midId < userID) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return null; // Không tìm thấy
}
const findUser = binarySearchColorById(user, 2);

console.log(findUser);





