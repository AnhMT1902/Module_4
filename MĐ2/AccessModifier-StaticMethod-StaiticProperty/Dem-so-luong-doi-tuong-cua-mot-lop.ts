class Application {
    private name: string;
    static count: number = 0;
    constructor(name: string) {
        this.name= name;
        Application.count++;
    }
}

console.log(Application.count);
let app1 = new Application("minh anh");
console.log(Application.count);
let app2 = new Application("minh anh");
console.log(Application.count);

