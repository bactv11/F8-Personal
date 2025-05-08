const arr=[1,7,3,2,5,8,2]
/*
* muốn lấy giá trị của mảng ta lặp từng mảng 1
* ta lặp mảng đầu tiên nhận được
*
* */
// let sum=0;
// for (let i=0; i<arr.length; i++){
//     for (let j=i+1; j<arr.length; j++){
//         if (arr[i]+arr[j] ===4) console.log(`${arr[i]} + ${arr[j]} = 4`)
//
//     }
// }
const sum=4
for (const e of arr){
    const a=e
    const b=sum-a
    if (a+b === sum) console.log(`${a} + ${b} = ${sum}`)
}
/*scraplan*/