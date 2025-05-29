
interface LivaryInterface {
    getBooks:() => number[];
    getReaders:() => number[];
    setBooks:(books:number[]) => void
    setReaders:(readers:number[]) => void
}
class Libary implements LivaryInterface {
    private books: number[]
    private readers:number[]


    constructor(books:number[] =[], readers:number[]=[]) {
        this.books = books;
        this.readers = readers;
    }
    public getBooks():number[]{
        return this.books
    }
    public getReaders():number[]{
        return this.readers
    }
    public setBooks(books:number[]):void{
        this.books = books;
    }
    public setReaders(readers:number[]):void{
        this.readers = readers;
    }

}