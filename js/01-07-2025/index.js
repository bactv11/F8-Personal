const arr =[
    ['id' ,1],
    ['name','test'],
    ['age' , 20]
]
    //id:1,name:'test',age:20
const ar2= arr.reduce((acc, curr) => {
    // const [key, value] = curr
    // acc[key] = value
    // return acc
    console.log(curr)
},{})
console.log(ar2)