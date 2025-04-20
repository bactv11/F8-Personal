/*
* -Conditional statement
* if / if-else / else
* if(conditional) {
*   code
*
* }*/

// const name = 'name';
// if (name === 'name') console.log("ok "+name)
// const a =100;
// console.log(1, a % 8)
// const r1 =Boolean(a % 8);
// console.log(2 , r1);
// console.log(3, Boolean(a % 8 === true));
// const r = Boolean(a % 8);
// console.log(4 , r);
//
/*
*





                                            ┌───────────────────────┐
                                            │                       │
                                            │       2               │
                                            │    a x  +  bx + c = 0 │
                                            │                       │
                                            └──────────┬────────────┘
                                                       │
                                                       ▼
                                            ┌────────────────────────┐
                                            │                        │
                                            │   delta                │
                                            │             2          │
                                            │    delta = b  - 4ac    │
                                            │                        │
                               ┌────────────┴───────────┬────────────┴─────────────┐
                               ▼                        │                 ┌────────▼─────────┐
                     ┌──────────────────┐      ┌────────▼─────────┐       │ nhỏ hơn 0        │
                     │   lớn hơn 0      │      │  bằng 0          │       │                  │
                     │                  │      │                  │       │                  │
                     │                  │      │                  │       │                  │
              ┌──────┴───────┬──────────┘      └───────┬──────────┘       └───────┬──────────┘
              │              │                         │                          │
              │              │                  ┌──────▼──────────┐       ┌───────▼───────────┐
      ┌───────▼────┐        ┌▼─────────┐        │                 │       │                   │
      │            │        │          │        │    1 nghiệm kép │       │      vô nghiệm    │
      │            │        │ nghiệm pb│        │                 │       │                   │
      │   nghiệm pb│        │          │        └─────────────────┘       └───────────────────┘
      │            │        │          │
      │            │        └──────────┘
      └────────────┘                                                                                   */ //


/*
* const a = 5;
switch (a % 3){
    case 1:
        console.log("dư 0");
        break;
    case 2:
        console.log('dư 1');
        break;
    case 3:
        console.log('dư 2');
        break;
    default:
        console.log('hahaahhahhaa')
}
*/

/*const a=2
const b=4
const c=0
delta = b**2 - 4*a*c
if (delta > 0) {
    x1= (-b -delta**(1/2)/(2*a))
    x2= (-b +delta**(1/2)/(2*a))
    console.log(x1,x2)
}else if (delta === 0){
    const x= -b / (2*a)
    console.log(x)
}else{
    console.log('vô nghiệm')
}*/

// const s = 51;
// if (0 < s <=50 ){
//     const num= s*1.678
//     console.log(num)
// }else if (50 < s <=100 ){
//     const num2 = num +(s *1.734)
//     console.log(num2)
// }else if (101 < s <=200 ){
//
// }

/*
* Loop : re-use code
* -for: 'for, for off,forEach , map ,fillter , reduce'
* white
* do white( do not use)
* */

/*
* syntax
*
* for(init; condition; next step.  let i =? ){
* bolck code
* }
* */

// for (let i = 0; i < 10; i++) {
//     console.log('hi');
// }
