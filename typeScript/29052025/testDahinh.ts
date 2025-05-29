class Animal {
    public eat(){
        console.log("Eat");
    }
    public go(){
        console.log("Go");
    }
    public doSomething(){
        this.go()
        this.eat()
    }
}
