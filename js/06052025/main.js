/*
reduce

const arr = [1,2,3,4,5]
let sum = 0
const result = arr.reduce((a ,b) =>{
    sum = a +b
    console.log(a,b)
    return sum
})
console.log('sum= ' +sum)
+: a
+: b tham so chuyen vao
*/


const arr =[
    ['id', 1],
    ['name', 'tiger'],
    ['age' , 20]
]

// const reduces= arr.reduce(( acc,val)=> {
//     const key = val[0]
//     const value = val[1]
//     acc[key]=value
//     return acc
// })
// console.log(reduces)

let result={}
for (let i=0; i<arr.length; i++){
    keys = arr[i][0]
    values = arr[i][1]
    result[keys]=values
}
// for( const e of arr){
//     key=e[0]
//     value=e[1]
//     result[key]=value
// }
console.log(result)