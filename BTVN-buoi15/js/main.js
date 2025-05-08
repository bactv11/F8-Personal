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
    colorId: Math.floor(Math.random() * 5) + 1 // random colorId between 1 and 2000
}));
//sắp xếp lại thứ tự theo id tăng dần
const sortedColors = [...colors].sort((a, b) => a.id - b.id);
const sortedFlowers = [...flowers].sort((a, b) => a.colorId - b.colorId);
//
let i = 0, j=0;
for (; i < flowers.length && j < colors.length;) {
    const fId = flowers[i].colorId;
    const cId = colors[j].id;

    if (fId === cId) {
        result.push({ ...flowers[i], color: colors[j].name });
        i++;
    } else if (fId < cId) {
        i++;
    } else {
        j++;
    }
}
console.log(flowers);
