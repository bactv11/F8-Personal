const a:number=1
const string:string='van bac'
const boolean:boolean=true
const nul: null= null
const lx: any=12
const arr: number[]=[1,2,3,4]
const arr2: Array<number> =[1,2,3,4]
interface Master{
    id:number,
    name:string,
}

interface Persons extends Master{
    girl:Master
}
interface Product extends Master{}
//obj
const person:Persons={
    id:1,
    name:"string name",
    girl:{
        id:2,
        name:"string name girl",
    }
}
//arr
const persions:Persons[]=[
    {
        id: 1,
        name: "string name",
        girl: {
            id: 2,
            name: "string name girl",
        }
    }
]

const getMax = (number:number[]) : number=> {
    return Math.max(...number)
}
const getMaxNumber:number = getMax([1,2,3])
console.log(`so lon nhat la: ${getMaxNumber}`)
