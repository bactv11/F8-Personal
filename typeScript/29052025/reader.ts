import {Base, BaseInterface} from "./base";
interface ReadersInterface extends BaseInterface{
    getBorrowBooks:() => number[]
    setBorrowBooks:(borrowBooks: number[]) => void
}
class Reader extends Base implements ReadersInterface {
    private borrowBooks:number[]

    constructor(id:number, name:string, borrowBooks:number[]=[]) {
        super(id,name)
        this.borrowBooks = borrowBooks;
    }

    public getBorrowBooks():number[]{
        return this.borrowBooks
    }

    public setBorrowBooks(borrow_books:number[]):void{
        this.borrowBooks = borrow_books
    }

    toString = () => `Reader:{
         id ${this.getId()}, 
         name: ${this.getName()} 
         brrowBooks ${this.borrowBooks} 
         }`
}