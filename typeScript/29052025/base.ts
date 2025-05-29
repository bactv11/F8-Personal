export interface BaseInterface {
    getId: () => number
    getName: () => string
    setName: (name: string) => void
    toString:()=>string
}
export abstract class Base implements BaseInterface{
    private readonly id: number //readonly mặc định chỉ xem
    private name: string
    protected constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    public getId():number{
        return this.id
    }
    public getName():string{
        return this.name
    }
    public setName(name:string):void{
        this.name = name
    }

    public abstract toString()
}
//base là 1 instance
//base là 1 class
// private chỉ class đó gọi được
//public cởi chuồng ai cũng gọi được
//protected class và các con kế thừa cũng gọi được