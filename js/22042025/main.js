/* Aray mảng /list
* */
/*
console.log(1);
const numbers = [1,2,3,4,5];
const boxes= ['a','b','c','d','e'];
// let i = 0;
let a=[3,4,5]
console.log(a)
const length = a.length;
console.log(a.toString());
console.log(String(a));
//lấy phần tử trong mảng
console.log(a[2])
// thêm phần tử vào mảng CUỐI CÙNG
a.push(99,88,77)
console.log(a)
// them phần tử vào mảng ĐẦU TIÊN
a.unshift(1,2,3)
console.log(a)
//change value edit[]
a[2]=100
console.log(a)
//delete at last cuối cùng
a.pop()
console.log(a)
// delete at firt đầu tiên
a.shift()
console.log(a)
//join vào mảng
console.log(a.join('_'))
// sắp xếp lại mảng
a.sort()
console.log(a)
//delete
delete a[2]
console.log(a)
// ghép mảng
 const b = [1,2,3,4,5]
const c = 'bay,tam'
console.log(b.concat(c))
*/
/*
* object
* group value into a variable
* array = [1,2,3,4] get value by
*          0 1 2 3
* object get value by key
*
* */
const obj = {
    name:'name',
    age:22,
    address :'Ha Noi',
    favorites:[99,88]
}
//edit object
obj.name='van'
//xóa
delete obj.favorites
//hiện key
console.log(Object.keys(obj))
console.log(obj)

