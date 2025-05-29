import {Male} from "./male.js"
class BoyStudent extends Male {}
const duc = new BoyStudent('duc',22,'quynh')
console.log(duc.getName());
console.log(duc.getAge());
//set
duc.setName('viet')
console.log(duc.getName());