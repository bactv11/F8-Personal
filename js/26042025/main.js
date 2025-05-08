// const arr = [1,2,3,4,25];
// //create new arr
// // fomular new e= 2 *old e
// const newArr = arr.map( (e )=> e*2 ) //
// console.log(newArr)
// //get element >15
// const result = arr.filter( (e) =>{
//     return e > 15
// })
// console.log(result)
// //
// const result2 = arr.filter(e => e > 15)
// console.log(result2)
// //
// const members= [
//     { id: 1, name: 'tiger', age: 10, color: 'yellow'},
//     { id: 2, name: 'tigers', age: 10, color: 'yellow'},
// ]
// const memberNames = members.map(e => e.name )
// console.log(memberNames)
// //forEach
// members.forEach(e => console.log(e))
// //
// const students = [
//     { name: "An", class: "12A1" },
//     { name: "Bình", class: "12A2" },
//     { name: "Cường", class: "12A1" },
//     { name: "Dung", class: "12A3" },
//     { name: "Em", class: "12A2" }
// ];

// Kết quả mong muốn:
// {
//   "12A1": ["An", "Cường"],
//   "12A2": ["Bình", "Em"],
//   "12A3": ["Dung"]
// }

const colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Blue' },
];

const flowers = [
    { id: 1, name: 'Rose', colorId: 1 },      // Red
    { id: 2, name: 'Tulip', colorId: 2 },     // Blue
    { id: 3, name: 'Carnation', colorId: 1 }, // Red
];
// [
//     { id: 1, name: 'Rose', colorId: 1, color: 'Red' },
//     { id: 2, name: 'Tulip', colorId: 2, color: 'Blue' },
//     { id: 3, name: 'Carnation', colorId: 1, color: 'Red' }
// ]]

/*
* b1: dùng forEach lấy ra mảng flowers
* b2: trong mảng flowers lấy ra color
* b3: lấy ra được thì dùng hàm find tififm kiếm phần tử có id trùng với màu tương ứng
* b4; nếu tìm ra được id là 1 thì color sẽ là blue
*
* */
// flowers.forEach(flower => {
//     flower.color = colors.find(color => color.id === flower.colorId).name
//     console.log(flower)
//     console.log('----------------------')
// })
// flowers.map(flower => {
//     flower.color = colors.find(color => color.id === flower.colorId).name
//     console.log(flower)
// })
// console.log('----------------------')
// flowers.filter(flower => {
//     flower.color = colors.find(color => color.id === flower.colorId).name
//     console.log(flower)
// })
// console.log('----------------------')
// flowers.find(flower => {
//     flower.color = colors.find(color => color.id === flower.colorId).name
//     console.log(flower)
// })

// mere join
//sắp xếp lại thứ tự theo id tăng dần
const sortedColors = [...colors].sort((a, b) => a.id - b.id);
const sortedFlowers = [...flowers].sort((a, b) => a.colorId - b.colorId);
console.log(sortedColors)
console.log(sortedFlowers)
//sử dụng for

//log ra kết quả