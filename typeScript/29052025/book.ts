import {Base, BaseInterface} from "./base";
interface BookInterface extends BaseInterface{
    getAuthor:() => string
    getAvailable:() => boolean
    /* ------------------------------------*/
    setAuthor: (author:string) => void
    setAvailable: (available: boolean) => void

}
class Book  extends Base implements BookInterface {
    private author: string;
    private available:boolean

    constructor(id:number, name: string, author: string, available:boolean) {
        super(id,name)
        this.author = author;
        this.available = available;
    }

    public getAuthor():string{
        return this.author;
    }
    public getAvailable():boolean{
        return this.available;
    }

    public setAuthor(author:string):void{
        this.author = author;
    }
    public setAvailable():void{
        this.available = true;
    }
    toString = () => `Book:{
        id= ${this.getId()} ,
        name:${this.getName()}  
        author: ${this.author} 
        available: ${this.available}
        }`;
}